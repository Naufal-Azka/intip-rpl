import { Dispatch, SetStateAction } from 'react';
import { timeToMinutes, convertDBTimeToWIB, getJadwalStatus } from '@/utils/timeUtils';
import LoadingSkeleton from '@/components/shared/LoadingSkeleton';
import ScheduleItem from '@/components/schedule/ScheduleItem';
import { Hari } from '@prisma/client';

// Add new interface for laporan check
interface JadwalWithLaporan {
    id: number;
    hari: Hari;
    lab: string;
    kelas: string;
    waktuMulai: Date;
    waktuSelesai: Date;
    hasLaporan?: boolean;
}

interface ScheduleSectionProps {
    isLoading: boolean;
    jadwalByLab: Record<string, JadwalWithLaporan[]>;
    expandedLabs: Record<string, boolean>;
    setExpandedLabs: Dispatch<SetStateAction<Record<string, boolean>>>;
    isWeekend: boolean;
}

export default function ScheduleSection({
    isLoading,
    jadwalByLab,
    expandedLabs,
    setExpandedLabs,
    isWeekend,
}: ScheduleSectionProps) {
    if (isLoading) {
        return (
            <section className='mx-[10%] grid grid-cols-1 gap-8 mb-8'>
                {[1, 2, 3].map((i) => (
                    <LoadingSkeleton key={i} />
                ))}
            </section>
        );
    }

    const toggleLab = (lab: string) => {
        setExpandedLabs((prev) => ({ ...prev, [lab]: !prev[lab] }));
    };

    return (
        <section className='px-[10%] grid grid-cols-1 gap-8 pb-[10%]'>
            {Object.entries(jadwalByLab)
                .sort(([a], [b]) => parseInt(a.split('_')[1]) - parseInt(b.split('_')[1]))
                .map(([lab, schedules]) => {
                    const sortedSchedules = [...schedules].sort(
                        (a, b) =>
                            timeToMinutes(convertDBTimeToWIB(a.waktuMulai)) -
                            timeToMinutes(convertDBTimeToWIB(b.waktuMulai))
                    );

                    const firstSchedule =
                        sortedSchedules.find(
                            (s) => getJadwalStatus(s.waktuMulai, s.waktuSelesai, isWeekend) === 'current'
                        ) ||
                        sortedSchedules.find(
                            (s) => getJadwalStatus(s.waktuMulai, s.waktuSelesai, isWeekend) === 'upcoming'
                        ) ||
                        sortedSchedules[sortedSchedules.length - 1];

                    return (
                        <div key={lab}>
                            <LabHeader lab={lab} isExpanded={expandedLabs[lab]} onToggle={() => toggleLab(lab)} />
                            {firstSchedule && !expandedLabs[lab] && (
                                <ScheduleItem
                                    {...firstSchedule}
                                    status={getJadwalStatus(
                                        firstSchedule.waktuMulai,
                                        firstSchedule.waktuSelesai,
                                        isWeekend
                                    )}
                                    hasLaporan={firstSchedule.hasLaporan}
                                    isExpanded={false}
                                />
                            )}
                            {expandedLabs[lab] &&
                                sortedSchedules.map((schedule) => (
                                    <ScheduleItem
                                        key={schedule.id}
                                        {...schedule}
                                        status={getJadwalStatus(schedule.waktuMulai, schedule.waktuSelesai, isWeekend)}
                                        hasLaporan={schedule.hasLaporan}
                                        isExpanded={true}
                                    />
                                ))}{' '}
                        </div>
                    );
                })}
        </section>
    );
}

function LabHeader({ lab, isExpanded, onToggle }: { lab: string; isExpanded: boolean; onToggle: () => void }) {
    return (
        <div
            onClick={onToggle}
            className='schedulesection-bg flex flex-row px-7 py-3 rounded-t-3xl place-items-center justify-between cursor-pointer'>
            <p className='schedulesection-text font-semibold text-2xl'>Lab. {lab.replace('_', ' ')}</p>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='44'
                height='23'
                viewBox='0 0 44 23'
                className='schedulesection-fill'
                style={{
                    transform: `rotate(${isExpanded ? '0deg' : '180deg'})`,
                    transition: 'transform 0.3s ease',
                }}>
                <path d='M31.9366 4.69964L33.8799 6.73323L23.2887 17.8096C23.119 17.9882 22.9172 18.1299 22.6949 18.2266C22.4726 18.3233 22.2342 18.373 21.9935 18.373C21.7527 18.373 21.5143 18.3233 21.292 18.2266C21.0697 18.1299 20.8679 17.9882 20.6982 17.8096L10.1016 6.73323L12.0449 4.70156L21.9907 15.0976L31.9366 4.69964Z' />
            </svg>
        </div>
    );
}
