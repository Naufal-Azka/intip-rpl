import { convertDBTimeToWIB } from '@/utils/timeUtils';
import type { JadwalStatus } from '@/utils/timeUtils';

interface ScheduleItemProps {
    waktuMulai: Date;
    waktuSelesai: Date;
    kelas: string;
    status: JadwalStatus;
}

const statusConfig = {
    current: { bg: 'bg-[#69AF4E]', text: 'text-white', fill: '#ffffff' },
    upcoming: { bg: 'bg-[#A3A3A3]', text: 'text-[#515151]', fill: '#515151' },
    finished: { bg: 'bg-[#D69595]', text: 'text-[#936363]', fill: '#936363' },
} as const;

export default function ScheduleItem({ waktuMulai, waktuSelesai, kelas, status }: ScheduleItemProps) {
    const { bg, text, fill } = statusConfig[status];

    return (
        <div className={`flex flex-row place-items-center justify-between ${bg} ${text} font-medium p-1 px-3.5`}>
            <p className='text-sm flex flex-row place-items-center'>
                {convertDBTimeToWIB(waktuMulai)}
                {' - '}
                {convertDBTimeToWIB(waktuSelesai)}
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' style={{ fill }}>
                    <path d='m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z' />
                </svg>
                {kelas.replaceAll('_', ' ')}
            </p>
            {status === 'finished' && <FinishedIcon />}
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
