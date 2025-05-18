import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: Request) {
    try {
        const { schedules } = await request.json();

        const updates = await Promise.all(
            schedules.map(async (schedule: any) => {
                try {
                    // Prepare update data
                    const updateData: any = {
                        hari: schedule.hari,
                        lab: schedule.lab,
                        kelas: schedule.kelas,
                    };

                    // Only update waktuMulai if it was changed
                    if (schedule.isWaktuMulaiChanged) {
                        const [startHours, startMinutes] = schedule.waktuMulai.split(':');
                        updateData.waktuMulai = new Date(`1970-01-01T${startHours}:${startMinutes}:00.000Z`);
                    }

                    // Only update waktuSelesai if it was changed
                    if (schedule.isWaktuSelesaiChanged) {
                        const [endHours, endMinutes] = schedule.waktuSelesai.split(':');
                        updateData.waktuSelesai = new Date(`1970-01-01T${endHours}:${endMinutes}:00.000Z`);
                    }

                    return await prisma.jadwal.update({
                        where: {
                            id: schedule.id,
                        },
                        data: updateData,
                    });
                } catch (error) {
                    console.error(`Error updating schedule ${schedule.id}:`, error);
                    throw error;
                }
            })
        );

        return NextResponse.json({ success: true, data: updates });
    } catch (error) {
        console.error('Error updating schedules:', error);
        return NextResponse.json(
            {
                error: 'Failed to update schedules',
                details: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
