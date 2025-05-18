'use client';

import { useState, useEffect } from 'react';
import { Hari, Lab, Kelas } from '@prisma/client';
import Link from 'next/link';

interface Schedule {
    id: number;
    hari: Hari;
    lab: Lab;
    kelas: Kelas;
    waktuMulai: string;
    waktuSelesai: string;
}

interface ScheduleWithChanges extends Schedule {
    isWaktuMulaiChanged?: boolean;
    isWaktuSelesaiChanged?: boolean;
}

const formatTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return date
        .toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })
        .slice(0, 5);
};

export default function JadwalUpdate() {
    const [selectedDay, setSelectedDay] = useState<Hari>(Hari.Senin);
    const [selectedLab, setSelectedLab] = useState<string>('Semua');
    const [schedules, setSchedules] = useState<Record<Lab, ScheduleWithChanges[]>>({
        RPL_1: [],
        RPL_2: [],
        RPL_3: [],
    });
    const [isLoading, setIsLoading] = useState(true);

    const timeOptions = [
        '06:00',
        '07:00',
        '07:30',
        '08:00',
        '08:30',
        '09:00',
        '09:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
    ];

    useEffect(() => {
        const fetchSchedules = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`/api/jadwal?hari=${selectedDay}&lab=${selectedLab}`);
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch schedules');
                }
                const data = await response.json();

                const emptySchedules: Record<Lab, ScheduleWithChanges[]> = {
                    RPL_1: [],
                    RPL_2: [],
                    RPL_3: [],
                };

                const groupedSchedules = data.reduce((acc: Record<Lab, Schedule[]>, schedule: Schedule) => {
                    if (selectedLab === 'Semua' || schedule.lab === selectedLab) {
                        if (!acc[schedule.lab]) {
                            acc[schedule.lab] = [];
                        }
                        acc[schedule.lab].push({
                            ...schedule,
                            waktuMulai: formatTime(schedule.waktuMulai),
                            waktuSelesai: formatTime(schedule.waktuSelesai),
                        });
                    }
                    return acc;
                }, emptySchedules);

                setSchedules(groupedSchedules);
            } catch (error) {
                console.error('Error fetching schedules:', error);
                alert('Gagal mengambil data jadwal');
            } finally {
                setIsLoading(false);
            }
        };

        fetchSchedules();
    }, [selectedDay, selectedLab]);

    const handleScheduleUpdate = async (labId: Lab, scheduleId: number, field: keyof Schedule, value: string) => {
        setSchedules((prev) => ({
            ...prev,
            [labId]: prev[labId].map((schedule) =>
                schedule.id === scheduleId
                    ? {
                          ...schedule,
                          [field]: value,
                          ...(field === 'waktuMulai' && { isWaktuMulaiChanged: true }),
                          ...(field === 'waktuSelesai' && { isWaktuSelesaiChanged: true }),
                      }
                    : schedule
            ),
        }));
    };

    const handleSaveChanges = async () => {
        try {
            const allSchedules = Object.values(schedules)
                .flat()
                .map((schedule) => ({
                    id: schedule.id,
                    hari: schedule.hari,
                    lab: schedule.lab,
                    kelas: schedule.kelas,
                    waktuMulai: schedule.waktuMulai,
                    waktuSelesai: schedule.waktuSelesai,
                    isWaktuMulaiChanged: schedule.isWaktuMulaiChanged,
                    isWaktuSelesaiChanged: schedule.isWaktuSelesaiChanged,
                }));

            const response = await fetch('/api/jadwal/update', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ schedules: allSchedules }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.details || data.error || 'Failed to update schedules');
            }

            alert('Jadwal berhasil diperbarui');
            window.location.reload();
        } catch (error) {
            console.error('Error updating schedules:', error);
            alert('Gagal memperbarui jadwal: ' + (error instanceof Error ? error.message : 'Unknown error'));
        }
    };
    return (
        <div>
            <nav>
                <Link href='/' className='flex place-items-center gap-0.5 p-4 border-b-1 border-b-[#C1C1C1] text-black'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='16'
                        viewBox='0 0 44 23'
                        style={{ fill: 'black' }}
                        className='transform rotate-90'>
                        <path d='M31.9366 4.69964L33.8799 6.73323L23.2887 17.8096C23.119 17.9882 22.9172 18.1299 22.6949 18.2266C22.4726 18.3233 22.2342 18.373 21.9935 18.373C21.7527 18.373 21.5143 18.3233 21.292 18.2266C21.0697 18.1299 20.8679 17.9882 20.6982 17.8096L10.1016 6.73323L12.0449 4.70156L21.9907 15.0976L31.9366 4.69964Z' />
                    </svg>
                    <p className='text-[16pt] font-medium'>Edit Jadwal</p>
                </Link>
            </nav>

            <div className='mx-[5%] mt-[5%]'>
                {/* FILTER */}
                <div className='bg-[#EBEBEB] border-1 border-black rounded-lg grid grid-cols-2 gap-2.5 p-2.5 mb-5'>
                    <div>
                        <p className='font-medium mb-1.5'>Hari</p>
                        <select
                            value={selectedDay}
                            onChange={(e) => setSelectedDay(e.target.value as Hari)}
                            className='w-full h-7.5 bg-[#D9D9D9] text-[#666] border-none rounded-sm pl-1.5'>
                            {Object.values(Hari).map((day) => (
                                <option key={day} value={day}>
                                    {day}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p className='font-medium mb-1.5'>Lab</p>
                        <select
                            value={selectedLab}
                            onChange={(e) => setSelectedLab(e.target.value)}
                            className='w-full h-7.5 bg-[#D9D9D9] text-[#666] border-none rounded-sm pl-1.5'>
                            <option value='Semua'>Semua</option>
                            {Object.values(Lab).map((lab) => (
                                <option key={lab} value={lab}>
                                    Lab {lab.split('_')[1]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Loading state */}
                {isLoading ? (
                    <div className='flex justify-center items-center py-10'>
                        <p className='text-gray-500'>Memuat jadwal...</p>
                    </div>
                ) : (
                    /* Labs and Schedules section */
                    Object.entries(schedules)
                        .filter(([lab]) => selectedLab === 'Semua' || lab === selectedLab)
                        .map(([lab, labSchedules]) => (
                            <div key={lab} className='bg-[#EBEBEB] border-1 border-black rounded-lg mb-8 p-2.5'>
                                <div className="text-center font-semibold mb-2.5 relative after:content-[''] after:block after:h-[1px] after:bg-[#666] after:mt-1.5">
                                    <p className='mb-2'>
                                        Lab.{lab.replace('_', ' ')}
                                        <span className='absolute right-0 top-0 text-xl bg-none border-none cursor-pointer'>
                                            +
                                        </span>
                                    </p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    {labSchedules.map((schedule) => (
                                        <div key={schedule.id} className='mt-2 mb-2'>
                                            <div className='flex items-center gap-1 mb-2'>
                                                <select
                                                    value={schedule.waktuMulai}
                                                    onChange={(e) =>
                                                        handleScheduleUpdate(
                                                            lab as Lab,
                                                            schedule.id,
                                                            'waktuMulai',
                                                            e.target.value
                                                        )
                                                    }
                                                    className='w-[25%] h-9 bg-[#F0F0F0] border-1 border-black rounded p-0 px-1.5 text-sm'>
                                                    <option value={schedule.waktuMulai}>{schedule.waktuMulai}</option>
                                                    {timeOptions
                                                        .filter((time) => time !== schedule.waktuMulai)
                                                        .map((time) => (
                                                            <option key={time} value={time}>
                                                                {time}
                                                            </option>
                                                        ))}
                                                </select>
                                                <span className='text-lg font-bold'>-</span>
                                                <select
                                                    value={schedule.waktuSelesai}
                                                    onChange={(e) =>
                                                        handleScheduleUpdate(
                                                            lab as Lab,
                                                            schedule.id,
                                                            'waktuSelesai',
                                                            e.target.value
                                                        )
                                                    }
                                                    className='w-[25%] h-9 bg-[#F0F0F0] border-1 border-black rounded p-0 px-1.5 text-sm'>
                                                    <option value={schedule.waktuSelesai}>
                                                        {schedule.waktuSelesai}
                                                    </option>
                                                    {timeOptions
                                                        .filter((time) => time !== schedule.waktuSelesai)
                                                        .map((time) => (
                                                            <option key={time} value={time}>
                                                                {time}
                                                            </option>
                                                        ))}
                                                </select>
                                                <select
                                                    value={schedule.kelas}
                                                    onChange={(e) =>
                                                        handleScheduleUpdate(
                                                            lab as Lab,
                                                            schedule.id,
                                                            'kelas',
                                                            e.target.value as Kelas
                                                        )
                                                    }
                                                    className='w-[35%] h-9 bg-[#F0F0F0] border-1 border-black rounded p-0 px-1.5 text-sm'>
                                                    {Object.values(Kelas).map((kelas) => (
                                                        <option key={kelas} value={kelas}>
                                                            {kelas.replace(/_/g, ' ')}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className='relative flex items-center mt-1'>
                                                <span className='absolute right-0 top-[50%] translate-y-[-50%] h-9 w-[30px] bg-none text-xl pl-[4%] ml-[5px] border-none cursor-pointer'>
                                                    –
                                                </span>
                                                <select className='teacher'>
                                                    <option>Hanif Saeful</option>
                                                </select>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                )}
            </div>

            <button
                onClick={handleSaveChanges}
                className='fixed bottom-0 bg-[#8FA9FF] text-lg text-white font-semibold p-2 mx-[5%] my-4 w-[90%] rounded-xl'>
                Simpan Perubahan
            </button>
        </div>
    );
}
