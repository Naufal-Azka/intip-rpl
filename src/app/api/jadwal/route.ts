import { NextResponse } from 'next/server';
import { PrismaClient, Hari, Lab } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const hari = searchParams.get('hari') as Hari;
        const lab = searchParams.get('lab');

        const where: any = {
            hari: hari,
        };

        // Add lab filter if a specific lab is selected
        if (lab && lab !== 'Semua') {
            where.lab = lab as Lab;
        }

        const schedules = await prisma.jadwal.findMany({
            where,
            orderBy: {
                waktuMulai: 'asc',
            },
        });

        return NextResponse.json(schedules);
    } catch (error) {
        console.error('Error fetching schedules:', error);
        return NextResponse.json({ error: 'Failed to fetch schedules' }, { status: 500 });
    }
}
