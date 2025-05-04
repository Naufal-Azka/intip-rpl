'use server';

import { PrismaClient, Hari } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchJadwalHome(effectiveDay: string) {
    const dayToHari: { [key: string]: Hari } = {
        Senin: Hari.Senin,
        Selasa: Hari.Selasa,
        Rabu: Hari.Rabu,
        Kamis: Hari.Kamis,
        Jumat: Hari.Jumat,
    };

    return await prisma.jadwal.findMany({
        where: {
            hari: dayToHari[effectiveDay],
        },
        orderBy: {
            waktuMulai: 'asc',
        },
    });
}
