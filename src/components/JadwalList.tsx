'use client';

import { useState } from 'react';

type JadwalProps = {
    id: number;
    hari: string; // Day of the week
    lab: string; // Laboratory name/number
    kelas: string; // Class name
    waktuMulai: Date; // Start time
    waktuSelesai: Date; // End time
};

type JadwalListProps = {
    initialJadwal: JadwalProps[]; // Array of schedules passed as prop
};

export default function JadwalList({ initialJadwal }: JadwalListProps) {
    const [hari, setHari] = useState('Senin');
    const [lab, setLab] = useState('semua');
    const [kelas, setKelas] = useState('semua');

    const filteredJadwal = initialJadwal.filter((schedule) => {
        const hariMatch = schedule.hari === hari; // Matches selected day
        const labMatch = lab === 'semua' || schedule.lab === lab; // Matches all labs or selected lab
        const kelasMatch = kelas === 'semua' || schedule.kelas === kelas; // Matches all classes or selected class
        return hariMatch && labMatch && kelasMatch;
    });

    const jadwalByLab = filteredJadwal.reduce((acc, curr) => {
        if (!acc[curr.lab]) {
            acc[curr.lab] = [];
        }
        acc[curr.lab].push(curr);
        return acc;
    }, {} as Record<string, typeof filteredJadwal>);

    const formatTime = (date: Date) => {
        return new Date(date).toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
    };
    return (
        <div>
            {/* SORT */}
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
            {/* SHOW */}
            <section className='mb-[10%] mt-[5%] mx-[5%] grid grid-cols-1 gap-[2%] text-black'>
                {Object.entries(jadwalByLab)
                    .sort(([labA], [labB]) => {
                        // Extract numbers from lab names (e.g., "RPL_1" -> 1)
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
                                                {formatTime(schedule.waktuMulai)}-{formatTime(schedule.waktuSelesai)}
                                            </p>
                                            <p>{schedule.kelas.replace(/_/g, ' ')}</p>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
            </section>
        </div>
    );
}
