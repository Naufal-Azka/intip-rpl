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

interface TempSchedule {
    id: number;
    hari: Hari;
    lab: Lab;
    kelas: Kelas;
    waktuMulai: Date;
    waktuSelesai: Date;
}

interface ScheduleWithChanges extends Schedule {
    isWaktuMulaiChanged?: boolean;
    isWaktuSelesaiChanged?: boolean;
}

const formatTime = (date: Date) => {
    const wibDate = new Date(date.getTime() + 7 * 60 * 60 * 1000);
    return wibDate
        .toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })
        .replace('.', ':');
};
const convertToDisplayTime = (date: Date) => {
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const wibHours = (hours + 7) % 24;
    return `${wibHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

const convertToUTCTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const utcHours = (hours - 7 + 24) % 24;
    return `${utcHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

const timeToMinutes = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
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
                console.log('Raw data from server:', data);

                // First convert all times to Date objects and sort them
                const formattedData = data.map((item: Schedule) => {
                    const formattedItem = {
                        ...item,
                        waktuMulai: new Date(item.waktuMulai),
                        waktuSelesai: new Date(item.waktuSelesai),
                    };
                    console.log('Formatted item:', {
                        id: formattedItem.id,
                        originalStart: item.waktuMulai,
                        originalEnd: item.waktuSelesai,
                        formattedStart: formattedItem.waktuMulai,
                        formattedEnd: formattedItem.waktuSelesai,
                    });
                    return formattedItem;
                });

                const sortedData = formattedData.sort((a: TempSchedule, b: TempSchedule) => {
                    const comparison =
                        timeToMinutes(convertToDisplayTime(a.waktuMulai)) -
                        timeToMinutes(convertToDisplayTime(b.waktuMulai));
                    console.log('Sorting comparison:', {
                        aId: a.id,
                        bId: b.id,
                        aTime: convertToDisplayTime(a.waktuMulai),
                        bTime: convertToDisplayTime(b.waktuMulai),
                        result: comparison,
                    });
                    return comparison;
                });
                const emptySchedules: Record<Lab, ScheduleWithChanges[]> = {
                    RPL_1: [],
                    RPL_2: [],
                    RPL_3: [],
                };

                const groupedSchedules = sortedData.reduce(
                    (acc: Record<Lab, ScheduleWithChanges[]>, schedule: TempSchedule) => {
                        if (selectedLab === 'Semua' || schedule.lab === selectedLab) {
                            const labKey = schedule.lab as Lab;

                            if (!acc[labKey]) {
                                acc[labKey] = [];
                            }

                            acc[labKey].push({
                                ...schedule,
                                waktuMulai: formatTime(schedule.waktuMulai),
                                waktuSelesai: formatTime(schedule.waktuSelesai),
                            });
                        }
                        return acc;
                    },
                    emptySchedules
                );

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

    const sanitizeTimeFormat = (timeStr: string) => {
        return timeStr.replace('.', ':');
    };

    const handleScheduleUpdate = async (labId: Lab, scheduleId: number, field: keyof Schedule, value: string) => {
        const sanitizedValue = sanitizeTimeFormat(value);
        setSchedules((prev) => {
            const labSchedules = prev[labId];
            const currentSchedule = labSchedules.find((s) => s.id === scheduleId);

            if (!currentSchedule) return prev;

            const proposedStart = field === 'waktuMulai' ? sanitizedValue : currentSchedule.waktuMulai;
            const proposedEnd = field === 'waktuSelesai' ? sanitizedValue : currentSchedule.waktuSelesai;

            const proposedStartMinutes = timeToMinutes(proposedStart);
            const proposedEndMinutes = timeToMinutes(proposedEnd);

            const hasOverlap = labSchedules.some((schedule) => {
                if (schedule.id === scheduleId) return false;

                const otherStartMinutes = timeToMinutes(schedule.waktuMulai);
                const otherEndMinutes = timeToMinutes(schedule.waktuSelesai);

                return (
                    (proposedStartMinutes >= otherStartMinutes && proposedStartMinutes < otherEndMinutes) ||
                    (proposedEndMinutes > otherStartMinutes && proposedEndMinutes <= otherEndMinutes) ||
                    (proposedStartMinutes <= otherStartMinutes && proposedEndMinutes >= otherEndMinutes)
                );
            });

            if (hasOverlap || proposedEndMinutes <= proposedStartMinutes) {
                alert('Waktu yang dipilih bertabrakan dengan jadwal lain atau tidak valid!');
                return prev;
            }

            return {
                ...prev,
                [labId]: labSchedules.map((schedule) =>
                    schedule.id === scheduleId
                        ? {
                              ...schedule,
                              [field]: value,
                              ...(field === 'waktuMulai' && { isWaktuMulaiChanged: true }),
                              ...(field === 'waktuSelesai' && { isWaktuSelesaiChanged: true }),
                          }
                        : schedule
                ),
            };
        });
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
                    // Convert WIB to UTC only when submitting
                    waktuMulai: convertToUTCTime(schedule.waktuMulai),
                    waktuSelesai: convertToUTCTime(schedule.waktuSelesai),
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
                <Link href='/' className='flex place-items-center gap-0.5 p-4 border-b-1 home-bg border-primary'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='16'
                        viewBox='0 0 44 23'
                        className='transform rotate-90 schedulesection-fill'>
                        <path d='M31.9366 4.69964L33.8799 6.73323L23.2887 17.8096C23.119 17.9882 22.9172 18.1299 22.6949 18.2266C22.4726 18.3233 22.2342 18.373 21.9935 18.373C21.7527 18.373 21.5143 18.3233 21.292 18.2266C21.0697 18.1299 20.8679 17.9882 20.6982 17.8096L10.1016 6.73323L12.0449 4.70156L21.9907 15.0976L31.9366 4.69964Z' />
                    </svg>
                    <p className='text-[16pt] font-medium schedulesection-text'>Edit Jadwal</p>
                </Link>
            </nav>

            <div className='px-[5%] pt-[5%] home-bg '>
                {/* FILTER */}
                <div className='schedule-bg border-1 border-full rounded-lg grid grid-cols-2 gap-2.5 p-2.5 mb-5'>
                    <div>
                        <p className='font-medium mb-1.5 todayhome-text'>Hari</p>
                        <select
                            value={selectedDay}
                            onChange={(e) => setSelectedDay(e.target.value as Hari)}
                            className='w-full h-7.5 schedule-item-bg schedule-text border-none rounded-sm pl-1.5'>
                            {Object.values(Hari).map((day) => (
                                <option key={day} value={day}>
                                    {day}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p className='font-medium mb-1.5 todayhome-text'>Lab</p>
                        <select
                            value={selectedLab}
                            onChange={(e) => setSelectedLab(e.target.value)}
                            className='w-full h-7.5 schedule-item-bg schedule-text border-none rounded-sm pl-1.5'>
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
                            <div key={lab} className='schedule-bg border-1 border-full rounded-lg mb-8 p-2.5'>
                                <div className="text-center font-semibold mb-2.5 relative after:content-[''] after:block after:h-[1px] after:bg-[#666] after:mt-1.5">
                                    <p className='mb-2 schedule-text'>
                                        Lab.{lab.replace('_', ' ')}
                                        <span className='absolute right-0 top-0 text-xl bg-none border-none cursor-pointer schedule-text'>
                                            +
                                        </span>
                                    </p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    {labSchedules.map((schedule) => (
                                        <div key={schedule.id} className='mt-2 mb-2'>
                                            <div className='flex items-center gap-1 mb-2'>
                                                <input
                                                    type='time'
                                                    value={schedule.waktuMulai}
                                                    onChange={(e) =>
                                                        handleScheduleUpdate(
                                                            lab as Lab,
                                                            schedule.id,
                                                            'waktuMulai',
                                                            e.target.value
                                                        )
                                                    }
                                                    className='w-[25%] h-9 schedule-item-bg schedule-text border-1 border-full rounded p-0 px-1.5 text-sm'
                                                />
                                                <span className='text-lg font-bold'>-</span>
                                                <input
                                                    type='time'
                                                    value={schedule.waktuSelesai}
                                                    onChange={(e) =>
                                                        handleScheduleUpdate(
                                                            lab as Lab,
                                                            schedule.id,
                                                            'waktuSelesai',
                                                            e.target.value
                                                        )
                                                    }
                                                    className='w-[25%] h-9 schedule-item-bg schedule-text border-1 border-full rounded p-0 px-1.5 text-sm'
                                                />
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
                                                    className='w-[35%] h-9 schedule-item-bg schedule-text border-1 border-full rounded p-0 px-1.5 text-sm'>
                                                    {Object.values(Kelas).map((kelas) => (
                                                        <option key={kelas} value={kelas}>
                                                            {kelas.replace(/_/g, ' ')}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className='relative flex items-center mt-1'>
                                                <span className='absolute right-0 top-[50%] translate-y-[-50%] h-9 w-[30px] bg-none schedule-text text-xl pl-[4%] ml-[5px] border-none cursor-pointer'>
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
                className='fixed bottom-0 announcement-btn text-lg font-semibold p-2 mx-[5%] my-4 w-[90%] rounded-xl'>
                Simpan Perubahan
            </button>
        </div>
    );
}
