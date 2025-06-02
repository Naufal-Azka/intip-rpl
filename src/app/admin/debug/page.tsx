import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Debug() {
    const jadwal = await prisma.jadwal.findMany();
    const formattedJadwal = jadwal.map((j) => ({
        ...j,
        waktuMulai: j.waktuMulai.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
        }),
        waktuSelesai: j.waktuSelesai.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
        }),
    }));

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>Debug Jadwal</h1>
            <div className='grid gap-4'>
                {formattedJadwal.map((j) => (
                    <div key={j.id} className='border p-4 rounded'>
                        <p>ID: {j.id}</p>
                        <p>Hari: {j.hari}</p>
                        <p>Lab: {j.lab}</p>
                        <p>Kelas: {j.kelas}</p>
                        <p>Waktu Mulai: {j.waktuMulai}</p>
                        <p>Waktu Selesai: {j.waktuSelesai}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
