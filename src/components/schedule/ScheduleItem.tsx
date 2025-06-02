import { convertDBTimeToWIB } from '@/utils/timeUtils';
import type { JadwalStatus } from '@/utils/timeUtils';

interface ScheduleItemProps {
    waktuMulai: Date;
    waktuSelesai: Date;
    kelas: string;
    status: JadwalStatus;
    hasLaporan?: boolean; // Add new prop
    isExpanded?: boolean;
}

const statusConfig = {
    current: { 
        bg: 'schedulecurrent-bg', 
        text: 'schedulecurrent-text', 
        fill: 'schedulecurrent-fill' 
    },
    upcoming: { 
        bg: 'scheduleupcoming-bg', 
        text: 'scheduleupcoming-text', 
        fill: '#a88fac' 
    },
    finished: { 
        bg: 'bg-[#D69595]', 
        text: 'text-[#936363]', 
        fill: '#936363' 
    },
    completedReport: { 
        bg: 'schedulecompleted-bg', 
        text: 'schedulecompleted-text', 
        fill: 'schedulecompleted-fill' 
    },
} as const;

export default function ScheduleItem({
    waktuMulai,
    waktuSelesai,
    kelas,
    status,
    hasLaporan,
    isExpanded,
}: ScheduleItemProps) {
    // First check if kelas is 'KOSONG', otherwise use normal status logic
    const effectiveStatus =
        kelas === 'Kosong' ? 'upcoming' : status === 'finished' && hasLaporan ? 'completedReport' : status;
    const { bg, text, fill } = statusConfig[effectiveStatus];

    return (
        <div className={`flex flex-row place-items-center justify-between theme-transition ${bg} ${text} font-medium p-1 ${
            isExpanded ? 'py-2' : 'py-1'
        } px-3.5`}>
            <p className='text-sm flex flex-row place-items-center'>
                {convertDBTimeToWIB(waktuMulai)}
                {' - '}
                {convertDBTimeToWIB(waktuSelesai)}
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' style={{ fill }}>
                    <path d='m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z' />
                </svg>
                {kelas.replaceAll('_', ' ')}
            </p>
            {kelas !== 'KOSONG' &&
                kelas !== 'Kosong' &&
                (status === 'finished' ? (
                    hasLaporan ? (
                        <CompletedIcon />
                    ) : (
                        <FinishedIcon />
                    )
                ) : status === 'current' ? (
                    <CurrentIcon />
                ) : null)}
        </div>
    );
}

function CurrentIcon() {
    return (
        <div className='flex flex-row place-items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 15 15' className='schedulecurrent-fill'>
                <path d='M5 1.25C4.3125 1.25 3.75 1.8125 3.75 2.5L3.75625 4.4875C3.75625 4.81875 3.8875 5.13125 4.11875 5.36875L6.25 7.5L4.11875 9.64375C3.8875 9.875 3.75625 10.1938 3.75625 10.525L3.75 12.5C3.75 13.1875 4.3125 13.75 5 13.75H10C10.6875 13.75 11.25 13.1875 11.25 12.5V10.525C11.25 10.1938 11.1188 9.875 10.8875 9.64375L8.75 7.5L10.8812 5.375C11.1188 5.1375 11.25 4.81875 11.25 4.4875V2.5C11.25 1.8125 10.6875 1.25 10 1.25H5ZM10 10.5688V11.875C10 12.2188 9.71875 12.5 9.375 12.5H5.625C5.28125 12.5 5 12.2188 5 11.875V10.5688C5 10.4 5.06875 10.2438 5.18125 10.125L7.5 7.8125L9.81875 10.1312C9.93125 10.2437 10 10.4062 10 10.5688Z' />
            </svg>
            <p className='text-sm schedulecurrent-text'>Dipakai</p>
        </div>
    );
}

function FinishedIcon() {
    return (
        <div className='flex flex-row place-items-center'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 15 15'
                style={{ fill: '#936363' }}>
                <path d='M1.70313 13.125C1.58854 13.125 1.48438 13.0965 1.39063 13.0394C1.29688 12.9823 1.22396 12.9067 1.17188 12.8125C1.11979 12.7183 1.09125 12.6167 1.08625 12.5075C1.08125 12.3983 1.10979 12.2917 1.17188 12.1875L6.95313 2.1875C7.01563 2.08333 7.09646 2.00521 7.19563 1.95312C7.29479 1.90104 7.39625 1.875 7.5 1.875C7.60375 1.875 7.70542 1.90104 7.805 1.95312C7.90459 2.00521 7.98521 2.08333 8.04688 2.1875L13.8281 12.1875C13.8906 12.2917 13.9194 12.3985 13.9144 12.5081C13.9094 12.6177 13.8806 12.7192 13.8281 12.8125C13.7756 12.9058 13.7027 12.9815 13.6094 13.0394C13.516 13.0973 13.4119 13.1258 13.2969 13.125H1.70313Z' />
            </svg>
            <p className='text-sm'>Selesai</p>
        </div>
    );
}

function CompletedIcon() {
    return (
        <div className='flex flex-row place-items-center'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 15 15'
                style={{ fill: '#ffffff' }}>
                <path d='M5.96886 9.46875L11.2657 4.17188C11.3907 4.04688 11.5366 3.98438 11.7032 3.98438C11.8699 3.98438 12.0157 4.04688 12.1407 4.17188C12.2657 4.29688 12.3282 4.44542 12.3282 4.6175C12.3282 4.78958 12.2657 4.93792 12.1407 5.0625L6.40636 10.8125C6.28136 10.9375 6.13553 11 5.96886 11C5.8022 11 5.65636 10.9375 5.53136 10.8125L2.84386 8.125C2.71886 8 2.65886 7.85167 2.66386 7.68C2.66886 7.50833 2.73407 7.35979 2.85949 7.23438C2.9849 7.10896 3.13345 7.04646 3.30511 7.04687C3.47678 7.04729 3.62511 7.10979 3.75011 7.23438L5.96886 9.46875Z' />
            </svg>
            <p className='text-sm'>Selesai</p>
        </div>
    );
}
