import Link from "next/link";

export default function laporanCreate() {
    // THIS IS THE PREFIX COLOR FOR TYPE OF DAMAGE
    // #ff0000
    // #ffa500
    // #ffd700
    // #007bff
    // #787878 

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
                    <p className='text-[16pt] font-medium'>Create Laporan</p>
                </Link>
            </nav>

            <section className='mx-[5%] mt-[5%]'>
                <p className='text-2xl font-semibold'>Senin, 03 September 2024</p>
                <p className='text-xl font-semibold'>07:11-00:22 XII PPLG 1</p>
            </section>

            <section className='mx-[5%] mt-[5%]'>
                <div>
                    <p className='font-semibold text-2xl'>Kerusakan</p>
                    <p className='italic text-xs'>(Jika Ada)</p>
                </div>
                {/* USER CHOISE WHAT THE TYPE OF DAMAGE */}
                <div className='flex justify-between mt-5'>
                    <div className='flex flex-col gap-1'>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                    </div>
                    <div className='grid grid-cols-2 gap-x-1'>
                        <div className='flex flex-col gap-1'>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                            <div className='w-11 h-11 bg-green-500 rounded'></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                        <div className='w-11 h-11 bg-green-500 rounded'></div>
                    </div>
                </div>
                <div className='w-25 h-5 mt-[10%] bg-green-500 rounded place place-self-end'></div>
            </section>

            <section className='mx-[5%] mt-[5%] grid grid-cols-1'>
                <p className='italic'>Keterangan</p>
                <div className='flex flex-row gap-1.5 place-items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        style={{ fill: '#ff0000' }}
                        className='min-w-6 min-h-6'>
                        <path d='M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5z'></path>
                    </svg>
                    <p className='italic text-xs'>Jika Terdapat Kerusakan (Monitor & PC)</p>
                </div>
                <div className='flex flex-row gap-1.5 place-items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        style={{ fill: '#ffa500' }}
                        className='min-w-6 min-h-6'>
                        <path d='M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5z'></path>
                    </svg>
                    <p className='italic text-xs'>
                        Jika Terdapat Kerusakan Pada Aksesoris (Keyboard, Mouse, Kursi, & Meja)
                    </p>
                </div>
                <div className='flex flex-row gap-1.5 place-items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        style={{ fill: '#ffd700' }}
                        className='min-w-6 min-h-6'>
                        <path d='M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5z'></path>
                    </svg>
                    <p className='italic text-xs'>Jika Ada Ketidaklengkapan Barang</p>
                </div>
                <div className='flex flex-row gap-1.5 place-items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        style={{fill: '#007bff'}}
                        className='min-w-6 min-h-6'>
                        <path d='M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5z'></path>
                    </svg>
                    <p className='italic text-xs'>Jika Terjadi Masalah Pada Ethernet</p>
                </div>
                <div className='flex flex-row gap-1.5 place-items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        style={{ fill: '#787878' }}
                        className='min-w-6 min-h-6'>
                        <path d='M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5z'></path>
                    </svg>
                    <p className='italic text-xs'>Tidak Adanya Monitor & PC</p>
                </div>
            </section>

            <section className='mx-[5%] mt-[5%] mb-[10%] grid grid-cols-1 gap-6'>
                <div className='grid grid-cols-1'>
                    <label htmlFor='' className='text-[28px] text-gray-600'>
                        Detail Kerusakan
                        <span className='text-red-500'>*</span>
                    </label>
                    <textarea
                        name=''
                        id=''
                        rows={4}
                        maxLength={4}
                        className='p-2 w-full h-30 rounded-lg border-2 border-gray-500 text-sm'
                        placeholder='Masukan Detail Kerusakan ...'></textarea>
                </div>
                <div className='grid grid-cols-1'>
                    <label htmlFor='' className='text-[28px] text-gray-600'>
                        Foto Ruangan
                        <span className='text-red-500'>*</span>
                    </label>
                    <div className='inline-block relative w-full h-[calc(16vh*16/9)] bg-gray-400 rounded-xl'>
                        <input
                            type='file'
                            name=''
                            id=''
                            accept='image/*'
                            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                        />
                        <img
                            src='#'
                            alt=''
                            className='absolute top-0 left-0 w-full h-full object-cover cursor-pointer hidden'
                        />
                    </div>
                    <label htmlFor='' className='mt-[5%] text-gray-600'>
                        Foto Kerusakan (Bila Ada)
                        <span className='text-red-500'>*</span>
                    </label>
                    <div className='inline-block relative w-full h-[calc(16vh*16/9)] bg-gray-400 rounded-xl'>
                        <input
                            type='file'
                            name=''
                            id=''
                            accept='image/*'
                            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                        />
                        <img
                            src='#'
                            alt=''
                            className='absolute top-0 left-0 w-full h-full object-cover cursor-pointer hidden'
                        />
                    </div>
                </div>

                <button className='bg-[#8FA9FF] text-white text-3xl font-semibold p-1.5 rounded-xl'>Selesai</button>
            </section>
        </div>
    );
}
