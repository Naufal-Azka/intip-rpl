import Link from 'next/link';
import { Hari } from '@prisma/client';

type Lab = string;
type Kelas = string;

interface LaporanCreationProps {
    user: {
        association_kelas: string;
    } | null;
    jadwal: {
        id: number;
        hari: Hari;
        lab: Lab;
        kelas: Kelas;
        waktuMulai: Date;
        waktuSelesai: Date;
        relatedJadwalIds?: number[];
        hasLaporan?: boolean; // Add this field
    }[];
    getJadwalStatus: (waktuMulai: Date, waktuSelesai: Date) => 'current' | 'upcoming' | 'finished';
}

// Add this helper function at the top of the file
function formatWIBTime(date: Date) {
    return new Date(date).toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta',
    });
}

// Add this helper function at the top
const generateAccessToken = (scheduleId: number) => {
    const timestamp = Date.now();
    // Create a simple token combining schedule id and timestamp
    return Buffer.from(`${scheduleId}-${timestamp}`).toString('base64');
};

const getMergedJadwalForLaporan = (
    jadwalList: {
        id: number;
        hari: Hari;
        lab: Lab;
        kelas: Kelas;
        waktuMulai: Date;
        waktuSelesai: Date;
        relatedJadwalIds?: number[];
        hasLaporan?: boolean;
    }[]
) => {
    const grouped = jadwalList.reduce((acc, curr) => {
        const key = `${curr.kelas}-${curr.lab}`;
        if (!acc[key]) {
            acc[key] = {
                ...curr,
                relatedJadwalIds: [curr.id],
                hasLaporan: curr.hasLaporan,
            };
        } else {
            if (new Date(curr.waktuSelesai) > new Date(acc[key].waktuSelesai)) {
                acc[key].waktuSelesai = curr.waktuSelesai;
            }
            acc[key].relatedJadwalIds.push(curr.id);
            // If any related schedule has a laporan, mark the group as having a laporan
            if (curr.hasLaporan) {
                acc[key].hasLaporan = true;
            }
        }
        return acc;
    }, {} as Record<string, any>);

    return Object.values(grouped);
};

const isWithinGracePeriod = (waktuSelesai: Date) => {
    const now = new Date();
    const endTime = new Date(waktuSelesai);
    const oneHourInMs = 60 * 60 * 1000; // 1 hour in milliseconds

    return now.getTime() - endTime.getTime() <= oneHourInMs;
};

export default function LaporanCreationSection({ user, jadwal, getJadwalStatus }: LaporanCreationProps) {
    if (!user) return null;

    return (
        <section className='mx-[10%] my-6 grid grid-cols-1 gap-[5%]'>
            {getMergedJadwalForLaporan(jadwal).map((schedule) => {
                const status = getJadwalStatus(schedule.waktuMulai, schedule.waktuSelesai);
                const canCreateReport =
                    user.association_kelas === schedule.kelas &&
                    (status === 'current' || (status === 'finished' && isWithinGracePeriod(schedule.waktuSelesai))) &&
                    !schedule.hasLaporan; // Add this condition

                // DEBUGGING ONLY CONSOLE LOG
                // console.log('Debug - Schedule:', {
                //     kelas: schedule.kelas,
                //     status,
                //     canCreate: canCreateReport,
                //     isInGracePeriod: status === 'finished' && isWithinGracePeriod(schedule.waktuSelesai),
                //     time: {
                //         start: new Date(schedule.waktuMulai).toLocaleTimeString(),
                //         end: new Date(schedule.waktuSelesai).toLocaleTimeString(),
                //     },
                // });

                if (canCreateReport) {
                    const accessToken = generateAccessToken(schedule.id);
                    return (
                        <Link
                            key={schedule.id}
                            href={`/laporan-create?id_jadwal=${
                                schedule.id
                            }&related_ids=${schedule.relatedJadwalIds.join(',')}&access_token=${accessToken}`}
                            className='grid grid-cols-[70%_30%] rounded-lg py-4 laporancreation-bg shadow-[0_5px_15px_rgba(0,0,0,0.35)] transition-colors'>
                            <div className='ml-[10%] laporancreation-text'>
                                <p className='font-bold text-2xl text-left'>Lab.{schedule.lab.replace('_', ' ')}</p>
                                <p className='text-sm '>
                                    {formatWIBTime(schedule.waktuMulai)}
                                    {' - '}
                                    {formatWIBTime(schedule.waktuSelesai)}
                                </p>
                            </div>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='56'
                                height='56'
                                viewBox='0 0 47 46'
                                className='place-self-center laporancreation-fill'>
                                <path d='M17.75 5.75008V1.91675H29.25V5.75008H17.75ZM21.5833 26.8334H25.4167V15.3334H21.5833V26.8334ZM23.5 42.1667C21.1361 42.1667 18.9077 41.7119 16.8147 40.8021C14.7217 39.8923 12.8932 38.6541 11.3292 37.0876C9.76517 35.521 8.52764 33.6919 7.61658 31.6002C6.70553 29.5084 6.25 27.2806 6.25 24.9167C6.25 22.5529 6.70553 20.3244 7.61658 18.2314C8.52764 16.1384 9.76517 14.3099 11.3292 12.7459C12.8932 11.1819 14.7223 9.94439 16.8166 9.03333C18.9109 8.12228 21.1387 7.66675 23.5 7.66675C25.4806 7.66675 27.3813 7.98619 29.2021 8.62508C31.0229 9.26397 32.7319 10.1904 34.3292 11.4042L37.0125 8.72092L39.6958 11.4042L37.0125 14.0876C38.2264 15.6848 39.1528 17.3938 39.7917 19.2147C40.4306 21.0355 40.75 22.9362 40.75 24.9167C40.75 27.2806 40.2945 29.5091 39.3834 31.6021C38.4724 33.6951 37.2348 35.5236 35.6708 37.0876C34.1068 38.6516 32.2777 39.8898 30.1834 40.8021C28.0891 41.7144 25.8613 42.1693 23.5 42.1667Z' />
                            </svg>
                        </Link>
                    );
                }
                return null;
            })}
        </section>
    );
}
