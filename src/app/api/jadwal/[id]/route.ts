import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const jadwal = await prisma.jadwal.findUnique({
            where: {
                id: parseInt(params.id)
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