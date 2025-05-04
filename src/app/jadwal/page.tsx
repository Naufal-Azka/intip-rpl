import { PrismaClient } from '@prisma/client';
import JadwalList from '@/components/JadwalList';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function Jadwal() {
    // Fetch jadwal data
    const jadwal = await prisma.jadwal.findMany({
        orderBy: {
            waktuMulai: 'asc',
        },
    });

    return (
        <div>
            {/* NAV */}
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

            <JadwalList initialJadwal={jadwal} />
        </div>
    );
}
