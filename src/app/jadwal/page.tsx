'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface JadwalType {
    id: number;
    hari: string;
    lab: string;
    kelas: string;
    waktuMulai: Date;
    waktuSelesai: Date;
}

const formatTime = (date: Date) => {
    const wibDate = new Date(date.getTime() + 7 * 60 * 60 * 1000);
    return wibDate.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
};

export default function Jadwal() {
    const [jadwal, setJadwal] = useState<JadwalType[]>([]);
    const [hari, setHari] = useState('Senin');
    const [lab, setLab] = useState('semua');
    const [kelas, setKelas] = useState('semua');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchJadwal = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/jadwal?hari=${hari}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch jadwal');
                }

                const data = await response.json();

                const formattedData = data.map((item: JadwalType) => {
                    const waktuMulai = new Date(item.waktuMulai);
                    const waktuSelesai = new Date(item.waktuSelesai);
                    console.log('Original time:', waktuMulai);
                    console.log('WIB time:', formatTime(waktuMulai));

                    return {
                        ...item,
                        waktuMulai,
                        waktuSelesai,
                    };
                });

                const sortedData = formattedData.sort((a: JadwalType, b: JadwalType) => {
                    const aHours = a.waktuMulai.getUTCHours();
                    const aMinutes = a.waktuMulai.getUTCMinutes();
                    const bHours = b.waktuMulai.getUTCHours();
                    const bMinutes = b.waktuMulai.getUTCMinutes();

                    const aWibHours = (aHours + 7) % 24;
                    const bWibHours = (bHours + 7) % 24;

                    const aTime = aWibHours * 60 + aMinutes;
                    const bTime = bWibHours * 60 + bMinutes;
                    return aTime - bTime;
                });

                setJadwal(sortedData);
            } catch (error) {
                console.error('Error fetching jadwal:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJadwal();
    }, [hari]);

    const filteredJadwal = jadwal.filter((item) => {
        const labMatch = lab === 'semua' || item.lab === lab;
        const kelasMatch = kelas === 'semua' || item.kelas === kelas;
        return labMatch && kelasMatch;
    });

    const jadwalByLab = filteredJadwal.reduce((acc, curr) => {
        if (!acc[curr.lab]) {
            acc[curr.lab] = [];
        }
        acc[curr.lab].push(curr);
        return acc;
    }, {} as Record<string, JadwalType[]>);

    Object.keys(jadwalByLab).forEach((lab) => {
        jadwalByLab[lab].sort((a, b) => {
            const aHours = a.waktuMulai.getUTCHours();
            const aMinutes = a.waktuMulai.getUTCMinutes();
            const bHours = b.waktuMulai.getUTCHours();
            const bMinutes = b.waktuMulai.getUTCMinutes();

            const aWibHours = (aHours + 7) % 24;
            const bWibHours = (bHours + 7) % 24;

            const aTime = aWibHours * 60 + aMinutes;
            const bTime = bWibHours * 60 + bMinutes;
            return aTime - bTime;
        });
    });
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
                    <p className='text-[16pt] font-medium'>Jadwal</p>
                </Link>
            </nav>

            <section className='mt-[5%] mx-[5%] grid grid-cols-2 gap-[11px] bg-[#EBEBEB] max-h-[168px] border-1 rounded-[10px] place-items-center justify-self-center py-2.5 px-5'>
                <div className='max-w-[150px]'>
                    <p className='text-[16px] font-medium mb-2.5 text-black'>Hari</p>
                    <select
                        value={hari}
                        onChange={(e) => setHari(e.target.value)}
                        className='w-37.5 h-7.5 font-medium rounded-[5px] border-none bg-[#D9D9D9] text-[#666] pl-1.5'>
                        <option value='Senin'>Senin</option>
                        <option value='Selasa'>Selasa</option>
                        <option value='Rabu'>Rabu</option>
                        <option value='Kamis'>Kamis</option>
                        <option value='Jumat'>Jum'at</option>
                    </select>
                </div>
                <div className='max-w-[150px]'>
                    <p className='text-[16px] font-medium mb-2.5 text-black'>Lab</p>
                    <select
                        value={lab}
                        onChange={(e) => setLab(e.target.value)}
                        className='w-37.5 h-7.5 font-medium rounded-[5px] border-none bg-[#D9D9D9] text-[#666] pl-1.5'>
                        <option value='semua'>Semua</option>
                        <option value='RPL_1'>Lab 1</option>
                        <option value='RPL_2'>Lab 2</option>
                        <option value='RPL_3'>Lab 3</option>
                    </select>
                </div>
                <div className='max-w-[150px]'>
                    <p className='text-[16px] font-medium mb-2.5 text-black'>Kelas</p>
                    <select
                        value={kelas}
                        onChange={(e) => setKelas(e.target.value)}
                        className='w-37.5 h-7.5 font-medium rounded-[5px] border-none bg-[#D9D9D9] text-[#666] pl-1.5'>
                        <option value='semua'>Semua</option>
                        <option value='X_PPLG_1'>X PPLG 2</option>
                        <option value='X_PPLG_2'>X PPLG 1</option>
                        <option value='X_PPLG_3'>X PPLG 1</option>
                        <option value='XI_PPLG_1'>XI PPLG 1</option>
                        <option value='XI_PPLG_2'>XI PPLG 1</option>
                        <option value='XI_PPLG_3'>XI PPLG 1</option>
                        <option value='XII_PPLG_1'>XI PPLG 1</option>
                        <option value='XII_PPLG_2'>XI PPLG 1</option>
                        <option value='XII_PPLG_3'>XI PPLG 1</option>
                    </select>
                </div>
            </section>
            <section className='mb-[10%] mt-[5%] mx-[5%] grid grid-cols-1 gap-[2%] text-black'>
                {isLoading ? (
                    <div className='text-center py-4'>
                        <p>Loading jadwal...</p>
                    </div>
                ) : (
                    Object.entries(jadwalByLab)
                        .sort(([labA], [labB]) => {
                            const numA = parseInt(labA.split('_')[1]);
                            const numB = parseInt(labB.split('_')[1]);
                            return numA - numB;
                        })
                        .map(([lab, schedules]) => (
                            <div key={lab} className='bg-[#EBEBEB] border-1 rounded-[10px] justify-center gap-[5%]'>
                                <div className='p-2.5 justify-items-center border-b-1 border-b-[#B6B6B6]'>
                                    <p>Lab {lab.split('_')[1]}</p>
                                </div>
                                <div className='mx-[6%] border-1 rounded-[10px] my-[5%]'>
                                    {schedules.map((schedule) => (
                                        <div key={schedule.id}>
                                            <div className='text-[16px] font-medium flex justify-between py-[5px] px-[10px]'>
                                                <p>
                                                    {formatTime(schedule.waktuMulai)} -{' '}
                                                    {formatTime(schedule.waktuSelesai)}
                                                </p>
                                                <p>{schedule.kelas.replace(/_/g, ' ')}</p>
                                            </div>
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                )}
            </section>
        </div>
    );
}
