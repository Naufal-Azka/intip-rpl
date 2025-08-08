import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const id = url.pathname.split('/').pop(); // ambil id dari path

        if (!id) {
            return NextResponse.json(
                { error: 'ID is required' },
                { status: 400 }
            );
        }

        const jadwal = await prisma.jadwal.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!jadwal) {
            return NextResponse.json(
                { error: 'Jadwal not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(jadwal);
    } catch (error) {
        console.error('Error fetching jadwal:', error);
        return NextResponse.json(
            { error: 'Failed to fetch jadwal' },
            { status: 500 }
        );
    }
}