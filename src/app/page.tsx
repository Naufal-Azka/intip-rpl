'use client';
import { useState, useEffect } from 'react';
import { fetchJadwalHome } from '@/lib/fetchJadwalHome';
import { Hari } from '@prisma/client';
import { useAuth } from '@/lib/AuthContext';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import NavigationBar from '@/components/NavigationBar';
import AnnoucementButton from '@/components/AnnouncemntButton';
import Annoucement from '@/components/Annoucement';

type Lab = string;
type Kelas = string;

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [expandedLabs, setExpandedLabs] = useState<{ [key: string]: boolean }>({});
    const [jadwal, setJadwal] = useState<
        { id: number; hari: Hari; lab: Lab; kelas: Kelas; waktuMulai: Date; waktuSelesai: Date }[]
    >([]);

    // Get current date
    const today = new Date();
    const currentTime = today.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    // Get current day and handle weekend cases
    const currentDay = today.toLocaleDateString('id-ID', { weekday: 'long' });
    const isWeekend = ['Sabtu', 'Minggu'].includes(currentDay);
    const effectiveDay = isWeekend ? 'Senin' : currentDay;

    useEffect(() => {
        const fetchSchedule = async () => {
            setIsLoading(true);
            try {
                const data = await fetchJadwalHome(effectiveDay);
                setJadwal(data);
            } catch (error) {
                console.error('Failed to fetch schedule:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSchedule();
    }, [effectiveDay]);

    // Group jadwal by lab
    const jadwalByLab = jadwal.reduce((acc, curr) => {
        if (!acc[curr.lab]) {
            acc[curr.lab] = [];
        }
        acc[curr.lab].push(curr);
        return acc;
    }, {} as Record<string, typeof jadwal>);

    // Function to determine jadwal status
    const getJadwalStatus = (waktuMulai: Date, waktuSelesai: Date) => {
        // If it's weekend, all Monday schedules are upcoming
        if (isWeekend) {
            return 'upcoming';
        }

        const startTime = waktuMulai.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
        const endTime = waktuSelesai.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });

        if (currentTime >= startTime && currentTime <= endTime) {
            return 'current';
        } else if (currentTime < startTime) {
            return 'upcoming';
        } else {
            return 'finished';
        }
    };

    // Add toggle function
    const toggleLab = (lab: string) => {
        setExpandedLabs((prev) => ({
            ...prev,
            [lab]: !prev[lab],
        }));
    };

    const { user, logout } = useAuth();

    return (
        <div>
            <NavigationBar/>
            {/* ANNOUNCEMENT */}
            {/* WILL GONE AFTER 3 DAY OR WHEN ADMIN CREATE A NEW ANNOUNCEMENT  */}
            <Annoucement/>
            {/* CHANGE THE LAB USAGE DEPENDING ON CURRENT DATE */}
            <section className='mx-[12%] mt-8 mb-4'>
                <p className='font-semibold'>
                    {today.toLocaleDateString('id-ID', {
                        weekday: 'long',
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                    })}
                </p>
            </section>

            <section className='mx-[10%] grid grid-cols-1 gap-8 mb-8'>
                {isLoading ? (
                    <>
                        {[1, 2, 3].map((i) => (
                            <LoadingSkeleton key={i} />
                        ))}
                    </>
                ) : (
                    // Actual schedule content
                    Object.entries(jadwalByLab)
                        .sort(([labA], [labB]) => {
                            // Extract numbers from lab names (e.g., "RPL_1" -> 1)
                            const numA = parseInt(labA.split('_')[1]);
                            const numB = parseInt(labB.split('_')[1]);
                            return numA - numB;
                        })
                        .map(([lab, schedules]) => {
                            // Get first active/upcoming schedule
                            const currentSchedule = schedules.find(
                                (s) => getJadwalStatus(s.waktuMulai, s.waktuSelesai) === 'current'
                            );
                            const upcomingSchedule = schedules.find(
                                (s) => getJadwalStatus(s.waktuMulai, s.waktuSelesai) === 'upcoming'
                            );
                            const finishedSchedules = schedules.filter(
                                (s) => getJadwalStatus(s.waktuMulai, s.waktuSelesai) === 'finished'
                            );
                            const lastFinishedSchedule = finishedSchedules[finishedSchedules.length - 1];

                            // If there are no current or upcoming schedules, use the last finished schedule
                            const firstSchedule = currentSchedule || upcomingSchedule || lastFinishedSchedule;
                            
                            return (
                                <div key={lab}>
                                    <div
                                        onClick={() => toggleLab(lab)}
                                        className='flex flex-row bg-gray-200 px-7 py-3 rounded-t-3xl place-items-center justify-between cursor-pointer'>
                                        <div>
                                            <p className='font-semibold text-2xl'>Lab. {lab.replace('_', ' ')}</p>
                                        </div>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='44'
                                            height='23'
                                            viewBox='0 0 44 23'
                                            style={{
                                                fill: 'rgba(0, 0, 0, 1)',
                                                transform: `rotate(${expandedLabs[lab] ? '0deg' : '180deg'})`,
                                                transition: 'transform 0.3s ease',
                                            }}>
                                            <path d='M31.9366 4.69964L33.8799 6.73323L23.2887 17.8096C23.119 17.9882 22.9172 18.1299 22.6949 18.2266C22.4726 18.3233 22.2342 18.373 21.9935 18.373C21.7527 18.373 21.5143 18.3233 21.292 18.2266C21.0697 18.1299 20.8679 17.9882 20.6982 17.8096L10.1016 6.73323L12.0449 4.70156L21.9907 15.0976L31.9366 4.69964Z' />
                                        </svg>
                                    </div>
                                    {firstSchedule && !expandedLabs[lab] && (
                                        <div
                                            className={`flex flex-row place-items-center justify-between ${
                                                {
                                                    current: 'bg-[#69AF4E] text-white',
                                                    upcoming: 'bg-[#A3A3A3] text-[#515151]',
                                                    finished: 'bg-[#D69595] text-[#936363]',
                                                }[getJadwalStatus(firstSchedule.waktuMulai, firstSchedule.waktuSelesai)]
                                            } font-medium p-1 px-3.5`}>
                                            <p className='text-sm flex flex-row place-items-center'>
                                                {firstSchedule.waktuMulai.toLocaleTimeString('id-ID', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    hour12: false,
                                                })}
                                                {' - '}
                                                {firstSchedule.waktuSelesai.toLocaleTimeString('id-ID', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    hour12: false,
                                                })}
                                                {
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='16'
                                                        height='16'
                                                        viewBox='0 0 24 24'
                                                        style={{
                                                            fill:
                                                                status === 'current'
                                                                    ? '#ffffff'
                                                                    : status === 'upcoming'
                                                                    ? '#515151'
                                                                    : '#936363',
                                                        }}>
                                                        <path d='m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z'></path>
                                                    </svg>
                                                }

                                                {firstSchedule.kelas.replaceAll('_', ' ')}
                                            </p>
                                        </div>
                                    )}

                                    {expandedLabs[lab] &&
                                        schedules.map((schedule) => {
                                            const status = getJadwalStatus(schedule.waktuMulai, schedule.waktuSelesai);
                                            const statusClasses = {
                                                current: 'bg-[#69AF4E] text-white',
                                                upcoming: 'bg-[#A3A3A3] text-[#515151]',
                                                finished: 'bg-[#D69595] text-[#936363]',
                                            }[status];
                                            const statusIcons = {
                                                current: '',
                                                upcoming: '',
                                                finished: (
                                                    <div className='flex flex-row place-items-center'>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='15'
                                                            height='15'
                                                            viewBox='0 0 15 15'
                                                            style={{ fill: '#936363' }}>
                                                            <path d='M1.70313 13.125C1.58854 13.125 1.48438 13.0965 1.39063 13.0394C1.29688 12.9823 1.22396 12.9067 1.17188 12.8125C1.11979 12.7183 1.09125 12.6167 1.08625 12.5075C1.08125 12.3983 1.10979 12.2917 1.17188 12.1875L6.95313 2.1875C7.01563 2.08333 7.09646 2.00521 7.19563 1.95312C7.29479 1.90104 7.39625 1.875 7.5 1.875C7.60375 1.875 7.70542 1.90104 7.805 1.95312C7.90459 2.00521 7.98521 2.08333 8.04688 2.1875L13.8281 12.1875C13.8906 12.2917 13.9194 12.3985 13.9144 12.5081C13.9094 12.6177 13.8806 12.7192 13.8281 12.8125C13.7756 12.9058 13.7027 12.9815 13.6094 13.0394C13.516 13.0973 13.4119 13.1258 13.2969 13.125H1.70313ZM2.78125 11.875H12.2188L7.5 3.75L2.78125 11.875ZM7.5 11.25C7.67709 11.25 7.82563 11.19 7.94563 11.07C8.06563 10.95 8.12542 10.8017 8.125 10.625C8.12459 10.4483 8.06459 10.3 7.945 10.18C7.82542 10.06 7.67709 10 7.5 10C7.32292 10 7.17459 10.06 7.055 10.18C6.93542 10.3 6.87542 10.4483 6.875 10.625C6.87459 10.8017 6.93459 10.9502 7.055 11.0706C7.17542 11.191 7.32375 11.2508 7.5 11.25ZM7.5 9.375C7.67709 9.375 7.82563 9.315 7.94563 9.195C8.06563 9.075 8.12542 8.92667 8.125 8.75V6.875C8.125 6.69792 8.065 6.54958 7.945 6.43C7.825 6.31042 7.67667 6.25042 7.5 6.25C7.32334 6.24958 7.175 6.30958 7.055 6.43C6.935 6.55042 6.875 6.69875 6.875 6.875V8.75C6.875 8.92708 6.935 9.07563 7.055 9.19563C7.175 9.31563 7.32334 9.37542 7.5 9.375Z' />
                                                        </svg>
                                                        <p className='text-sm'>Selesai</p>
                                                    </div>
                                                ),
                                            }[status];

                                            return (
                                                <div
                                                    key={schedule.id}
                                                    className={`flex flex-row place-items-center justify-between ${statusClasses} font-medium p-1 px-3.5`}>
                                                    <p className='text-sm flex flex-row place-items-center'>
                                                        {schedule.waktuMulai.toLocaleTimeString('id-ID', {
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                            hour12: false,
                                                        })}
                                                        {' - '}
                                                        {schedule.waktuSelesai.toLocaleTimeString('id-ID', {
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                            hour12: false,
                                                        })}
                                                        {
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='16'
                                                                height='16'
                                                                viewBox='0 0 24 24'
                                                                style={{
                                                                    fill:
                                                                        status === 'current'
                                                                            ? '#ffffff'
                                                                            : status === 'upcoming'
                                                                            ? '#515151'
                                                                            : '#936363',
                                                                }}>
                                                                <path d='m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z'></path>
                                                            </svg>
                                                        }
                                                        {schedule.kelas.replaceAll('_', ' ')}
                                                    </p>
                                                    {statusIcons}
                                                </div>
                                            );
                                        })}
                                </div>
                            );
                        })
                )}
            </section>
            {user && user.role === 'ADMIN' && (
                <AnnoucementButton/>
            )}
        </div>
    );
}
