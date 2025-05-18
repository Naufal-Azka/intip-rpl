import { NextResponse } from 'next/server';
import { PrismaClient, Hari, Lab } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const hari = searchParams.get('hari') as Hari;

        const schedules = await prisma.jadwal.findMany({
            where: {
                hari: hari,
            },
            orderBy: {
                waktuMulai: 'asc',
            },
        });

        // Transform dates to ISO strings before sending
        const formattedSchedules = schedules.map((schedule) => ({
            ...schedule,
            waktuMulai: schedule.waktuMulai.toISOString(),
            waktuSelesai: schedule.waktuSelesai.toISOString(),
        }));

        return NextResponse.json(formattedSchedules);
    } catch (error) {
        console.error('Error fetching schedules:', error);
        return NextResponse.json({ error: 'Failed to fetch schedules' }, { status: 500 });
    }
}
