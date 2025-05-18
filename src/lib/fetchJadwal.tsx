'use server';

import { PrismaClient, Hari } from '@prisma/client';

const prisma = new PrismaClient();

function convertToWIB(time: Date) {
    const utcHours = time.getUTCHours();
    const wibHours = (utcHours + 7) % 24; // Convert UTC to WIB (UTC+7)

    return new Date(
        Date.UTC(
            time.getUTCFullYear(),
            time.getUTCMonth(),
            time.getUTCDate(),
            wibHours,
            time.getUTCMinutes(),
            time.getUTCSeconds()
        )
    );
}

function timeToMinutes(time: Date): number {
    const wibTime = convertToWIB(time);
    return wibTime.getUTCHours() * 60 + wibTime.getUTCMinutes();
}

export async function fetchJadwalHome(effectiveDay: string) {
    try {
        const dayToHari: { [key: string]: Hari } = {
            Senin: Hari.Senin,
            Selasa: Hari.Selasa,
            Rabu: Hari.Rabu,
            Kamis: Hari.Kamis,
            Jumat: Hari.Jumat,
        };

        const jadwal = await prisma.jadwal.findMany({
            where: {
                hari: dayToHari[effectiveDay],
            }
        });

        // Convert and sort by WIB time
        return jadwal
            .map((schedule) => ({
                ...schedule,
                waktuMulai: convertToWIB(schedule.waktuMulai),
                waktuSelesai: convertToWIB(schedule.waktuSelesai),
            }))
            .sort((a, b) => timeToMinutes(a.waktuMulai) - timeToMinutes(b.waktuMulai));
    } catch (error) {
        console.error('Database connection error:', error);
        return [];
    }
}
