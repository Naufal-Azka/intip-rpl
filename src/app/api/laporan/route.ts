import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import fs from 'fs/promises';

const prisma = new PrismaClient();

const DAMAGE_TYPES = {
    '#ff0000': 'MONITOR_PC',
    '#ffa500': 'ACCESSORIES',
    '#ffd700': 'MISSING',
    '#007bff': 'ETHERNET',
    '#787878': 'NO_PC'
};

function groupDamagesByType(damages: any[]) {
    const grouped: { [key: string]: string[] } = {};
    
    // Sort damages by type
    damages.forEach(damage => {
        const damageType = DAMAGE_TYPES[damage.damageType as keyof typeof DAMAGE_TYPES];
        if (damageType) {
            if (!grouped[damageType]) {
                grouped[damageType] = [];
            }
            grouped[damageType].push(damage.id);
        }
    });

    // Return only the seat IDs for each damage type
    return Object.values(grouped)
        .map(seats => seats.join(', '))
        .slice(0, 5); // Take only first 5 damage groups
}

export async function POST(request: Request) {
    try {
        // Ensure uploads directory exists
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        try {
            await fs.access(uploadDir);
        } catch {
            await mkdir(uploadDir, { recursive: true });
        }

        const formData = await request.formData();
        
        // Validate required fields
        const id_jadwal = parseInt(formData.get('id_jadwal') as string);
        if (!id_jadwal) {
            return NextResponse.json({ error: 'Invalid jadwal ID' }, { status: 400 });
        }

        const deskripsi_kerusakan = formData.get('deskripsi_kerusakan') as string;
        if (!deskripsi_kerusakan) {
            return NextResponse.json({ error: 'Description is required' }, { status: 400 });
        }

        const damages = JSON.parse(formData.get('damages') as string);
        const groupedDamages = groupDamagesByType(damages);
        const tanggal_laporan = new Date(formData.get('tanggal_laporan') as string);
        
        // Handle file uploads
        const foto_ruangan = formData.get('foto_ruangan') as File;
        if (!foto_ruangan) {
            return NextResponse.json({ error: 'Room photo is required' }, { status: 400 });
        }

        const foto_kerusakan = formData.get('foto_kerusakan') as File;
        
        // Save files
        const foto_ruangan_path = await saveFile(foto_ruangan, 'ruangan');
        const foto_kerusakan_path = foto_kerusakan ? await saveFile(foto_kerusakan, 'kerusakan') : '';
        
        // Create laporan
        const laporan = await prisma.laporan.create({
            data: {
                id_jadwal,
                foto_ruangan: foto_ruangan_path,
                foto_kerusakan: foto_kerusakan_path,
                deskripsi_kerusakan,
                kerusakan_1: groupedDamages[0] || '',
                kerusakan_2: groupedDamages[1] || '',
                kerusakan_3: groupedDamages[2] || '',
                kerusakan_4: groupedDamages[3] || '',
                kerusakan_5: groupedDamages[4] || '',
                tanggal_laporan
            }
        });

        return NextResponse.json({ success: true, data: laporan });
    } catch (error) {
        console.error('Error creating laporan:', error);
        return NextResponse.json({ 
            success: false, 
            error: error instanceof Error ? error.message : 'Failed to create laporan' 
        }, { status: 500 });
    }
}

async function saveFile(file: File, prefix: string): Promise<string> {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const filename = `${prefix}-${Date.now()}${path.extname(file.name)}`;
    const filepath = path.join(process.cwd(), 'public', 'uploads', filename);
    
    await writeFile(filepath, buffer);
    return `/uploads/${filename}`;
}