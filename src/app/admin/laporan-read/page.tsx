import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import Image from 'next/image';

const prisma = new PrismaClient();

async function getLaporanByDateRange(range: 'today' | 'yesterday' | '7days' | '30days') {
    const now = new Date();
    const startDate = new Date();

    switch (range) {
        case 'yesterday':
            startDate.setDate(now.getDate() - 1);
            break;
        case '7days':
            startDate.setDate(now.getDate() - 7);
            break;
        case '30days':
            startDate.setDate(now.getDate() - 30);
            break;
        default: // today
            startDate.setHours(0, 0, 0, 0);
            now.setHours(23, 59, 59, 999);
    }

    return await prisma.laporan.findMany({
        where: {
            jadwal: {
                waktuMulai: {
                    gte: startDate,
                    lte: now,
                },
            },
        },
        include: {
            jadwal: true,
        },
        orderBy: {
            id: 'desc',
        },
    });
}

type DamageColorKey = 'kerusakan_1' | 'kerusakan_2' | 'kerusakan_3' | 'kerusakan_4' | 'kerusakan_5';

const DAMAGE_COLORS: Record<DamageColorKey, string> = {
    kerusakan_1: '#ff0000',
    kerusakan_2: '#ffa500',
    kerusakan_3: '#ffd700',
    kerusakan_4: '#007bff',
    kerusakan_5: '#787878',
};

export default async function laporanRead() {
    const laporanData = await prisma.laporan.findMany({
        include: {
            jadwal: true,
        },
        orderBy: {
            id: 'desc',
        },
    });

    const groupedLaporan = laporanData.reduce((acc, laporan) => {
        const lab = laporan.jadwal.lab;
        if (!acc[lab]) {
            acc[lab] = [];
        }
        acc[lab].push(laporan);
        return acc;
    }, {} as Record<string, typeof laporanData>);

    return (
        <div>
            <nav>
                <Link
                    href='/'
                    className='flex place-items-center gap-0.5 p-4 border-b-1 border-b-[#C1C1C1] text-black bg-white'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='16'
                        viewBox='0 0 44 23'
                        style={{ fill: 'black' }}
                        className='transform rotate-90'>
                        <path d='M31.9366 4.69964L33.8799 6.73323L23.2887 17.8096C23.119 17.9882 22.9172 18.1299 22.6949 18.2266C22.4726 18.3233 22.2342 18.373 21.9935 18.373C21.7527 18.373 21.5143 18.3233 21.292 18.2266C21.0697 18.1299 20.8679 17.9882 20.6982 17.8096L10.1016 6.73323L12.0449 4.70156L21.9907 15.0976L31.9366 4.69964Z' />
                    </svg>
                    <p className='text-[16pt] font-medium'>Read Laporan</p>
                </Link>
            </nav>

            <section className='mx-[10%] my-4 grid grid-cols-1 gap-8'>
                <div className='flex flex-row place-items-center gap-3'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 30 30'
                        style={{ fill: 'rgba(0, 0, 0, 1)' }}>
                        <path d='M18.7499 24.85C18.7999 25.225 18.6749 25.625 18.3874 25.8875C18.2718 26.0034 18.1344 26.0953 17.9832 26.158C17.832 26.2208 17.6699 26.2531 17.5062 26.2531C17.3425 26.2531 17.1804 26.2208 17.0291 26.158C16.8779 26.0953 16.7406 26.0034 16.6249 25.8875L11.6124 20.875C11.4762 20.7417 11.3726 20.5787 11.3097 20.3987C11.2468 20.2187 11.2263 20.0267 11.2499 19.8375V13.4375L5.26242 5.775C5.05943 5.51441 4.96784 5.18407 5.00765 4.85616C5.04747 4.52825 5.21546 4.22943 5.47492 4.025C5.71242 3.85 5.97492 3.75 6.24992 3.75H23.7499C24.0249 3.75 24.2874 3.85 24.5249 4.025C24.7844 4.22943 24.9524 4.52825 24.9922 4.85616C25.032 5.18407 24.9404 5.51441 24.7374 5.775L18.7499 13.4375V24.85ZM8.79992 6.25L13.7499 12.575V19.475L16.2499 21.975V12.5625L21.1999 6.25H8.79992Z' />
                    </svg>
                    <select className='w-[60%] h-7.5 bg-[#D9D9D9] text-[#666] border-none rounded-sm pl-1.5'>
                        <option>Hari Ini</option>
                        <option>Kemarin</option>
                        <option>7 Hari Terakhir</option>
                        <option>30 Hari Terakhir</option>
                    </select>
                </div>
                <p className='font-semibold'>Hari Ini</p>
            </section>

            <section className='grid grid-cols-1'>
                {Object.entries(groupedLaporan).map(([lab, laporanList]) =>
                    laporanList.map((laporan) => (
                        <div key={laporan.id}>
                            <div
                                className={`px-[10%] flex flex-row place-items-center justify-between py-2.5 ${
                                    lab === 'RPL_1'
                                        ? 'bg-[#9FDFFF] text-[#005B88]'
                                        : lab === 'RPL_2'
                                        ? 'bg-[#FADA7A] text-[#715501]'
                                        : 'bg-[#F5F0CD] text-[#837300]'
                                }`}>
                                <div className='flex flex-row place-items-center gap-2'>
                                    <p className='font-semibold text-xl'>Lab {lab.split('_')[1]}</p>
                                    <p
                                        className={`p-1 rounded ${
                                            lab === 'RPL_1'
                                                ? 'bg-[#76d1ff]'
                                                : lab === 'RPL_2'
                                                ? 'bg-[#EDBE33]'
                                                : 'bg-[#E7DC94]'
                                        }`}>
                                        {new Date(laporan.jadwal.waktuMulai).toLocaleTimeString('id-ID', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: false,
                                        })}
                                    </p>
                                </div>
                                <p>{laporan.jadwal.kelas.replace(/_/g, ' ')}</p>
                            </div>

                            <div className='px-[10%] py-4 grid grid-cols-1 gap-2 bg-[#C1F9FF] text-[#005B88] border-b-1 border-[#005B88]'>
                                <p className='font-semibold text-xl'>Kerusakan</p>
                                <div className='flex flex-row place-items-center gap-2 flex-wrap'>
                                    {[
                                        laporan.kerusakan_1,
                                        laporan.kerusakan_2,
                                        laporan.kerusakan_3,
                                        laporan.kerusakan_4,
                                        laporan.kerusakan_5,
                                    ]
                                        .filter(Boolean)
                                        .map((kerusakan, index) => {
                                            // Split the comma-separated seat IDs
                                            const seatIds = kerusakan.split(', ');
                                            return seatIds.map((seatId, seatIndex) => (
                                                <p
                                                    key={`${index}-${seatIndex}`}
                                                    className='text-white p-1.5 rounded'
                                                    style={{
                                                        backgroundColor:
                                                            DAMAGE_COLORS[`kerusakan_${index + 1}` as DamageColorKey],
                                                    }}>
                                                    {seatId}
                                                </p>
                                            ));
                                        })}
                                </div>
                                <p className='font-medium'>{laporan.deskripsi_kerusakan}</p>
                                <div className='w-full h-30 relative'>
                                    <Image
                                        src={laporan.foto_ruangan}
                                        alt='Foto Ruangan'
                                        layout='fill'
                                        objectFit='cover'
                                        className='rounded'
                                    />
                                </div>
                                {laporan.foto_kerusakan && (
                                    <div className='w-full h-30 relative'>
                                        <Image
                                            src={laporan.foto_kerusakan}
                                            alt='Foto Kerusakan'
                                            layout='fill'
                                            objectFit='cover'
                                            className='rounded'
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </section>
        </div>
    );
}
