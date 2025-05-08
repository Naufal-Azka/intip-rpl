export default function laporanRead() {
    return (
        <div>
            <nav>
                <a
                    href='../home [waiting]/index.html'
                    className='flex place-items-center gap-1.5 p-4 border-b-1 border-b-[#C1C1C1] text-black'>
                    <img src='../../public/weui_arrow-outlined.svg' alt='back' className='w-4' />
                    <p className='text-[16pt] font-medium'>Laporan</p>
                </a>
            </nav>

            <section className='mx-[10%] my-4 grid grid-cols-1 gap-8'>
                <div className='flex flex-row place-items-center gap-3'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 30 30'
                        style={{fill: 'rgba(0, 0, 0, 1)'}}>
                        <path d='M18.7499 24.85C18.7999 25.225 18.6749 25.625 18.3874 25.8875C18.2718 26.0034 18.1344 26.0953 17.9832 26.158C17.832 26.2208 17.6699 26.2531 17.5062 26.2531C17.3425 26.2531 17.1804 26.2208 17.0291 26.158C16.8779 26.0953 16.7406 26.0034 16.6249 25.8875L11.6124 20.875C11.4762 20.7417 11.3726 20.5787 11.3097 20.3987C11.2468 20.2187 11.2263 20.0267 11.2499 19.8375V13.4375L5.26242 5.775C5.05943 5.51441 4.96784 5.18407 5.00765 4.85616C5.04747 4.52825 5.21546 4.22943 5.47492 4.025C5.71242 3.85 5.97492 3.75 6.24992 3.75H23.7499C24.0249 3.75 24.2874 3.85 24.5249 4.025C24.7844 4.22943 24.9524 4.52825 24.9922 4.85616C25.032 5.18407 24.9404 5.51441 24.7374 5.775L18.7499 13.4375V24.85ZM8.79992 6.25L13.7499 12.575V19.475L16.2499 21.975V12.5625L21.1999 6.25H8.79992Z' />
                    </svg>
                    <select className='w-[60%] h-7.5 bg-[#D9D9D9] text-[#666] border-none rounded-sm pl-1.5'>
                        <option>Hari Ini</option>
                        <option>Kemarin</option>
                        <option>7 Hari Terakhir</option>
                        <option>30 Hari Terakhir</option>
                    </select>
                </div>
                <p className='font-semibold'>Hari Ini</p>
            </section>
            <section className='grid grid-cols-1'>
                <div className=''>
                    <div className='px-[10%] flex flex-row place-items-center justify-between py-2.5 bg-[#9FDFFF] text-[#005B88]'>
                        <div className='flex flex-row place-items-center gap-2'>
                            <p className='font-semibold text-xl'>Lab 1</p>
                            <p className='p-1 bg-[#76d1ff] rounded'>07:30</p>
                        </div>
                        <p>XII PPLG 1</p>
                    </div>
                    <div className='px-[10%] py-4 grid grid-cols-1 gap-2 bg-[#C1F9FF] text-[#005B88] border-b-1 border-[#005B88]'>
                        <p className='font-semibold text-xl'>Kerusakan</p>
                        <div className='flex flex-row place-items-center gap-2'>
                            <p className='bg-red-600 text-[#C9EDFF] p-1.5 rounded '>A1</p>
                            <p className='bg-red-600 text-[#C9EDFF] p-1.5 rounded '>C2</p>
                            <p className='bg-red-600 text-[#C9EDFF] p-1.5 rounded '>C8</p>
                            <p className='bg-red-600 text-[#C9EDFF] p-1.5 rounded '>D1</p>
                        </div>
                        <p className='font-medium'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus enim officia
                            obcaecati.
                        </p>
                        <div className='w-full h-30 bg-gray-500'></div>
                    </div>
                </div>
                <div>
                    <div className='px-[10%] flex flex-row place-items-center justify-between py-2.5 bg-[#9FDFFF] text-[#005B88] border-b-1 border-[#005B88]'>
                        <div className='flex flex-row place-items-center gap-2'>
                            <p className='font-semibold text-xl'>Lab 1</p>
                            <p className='p-1 bg-[#76d1ff] rounded'>07:30</p>
                        </div>
                        <p>XII PPLG 1</p>
                    </div>
                </div>
                <div>
                    <div className='px-[10%] flex flex-row place-items-center justify-between py-2.5 bg-[#FADA7A] text-[#715501] border-b-1 border-[#005B88]'>
                        <div className='flex flex-row place-items-center gap-2'>
                            <p className='font-semibold text-xl'>Lab 2</p>
                            <p className='p-1 bg-[#EDBE33] rounded'>07:30</p>
                        </div>
                        <p>XII PPLG 1</p>
                    </div>
                </div>
                <div>
                    <div className='px-[10%] flex flex-row place-items-center justify-between py-2.5 bg-[#FADA7A] text-[#715501] border-b-1 border-[#005B88]'>
                        <div className='flex flex-row place-items-center gap-2'>
                            <p className='font-semibold text-xl'>Lab 2</p>
                            <p className='p-1 bg-[#EDBE33] rounded'>07:30</p>
                        </div>
                        <p>XII PPLG 1</p>
                    </div>
                </div>
                <div>
                    <div className='px-[10%] flex flex-row place-items-center justify-between py-2.5 bg-[#F5F0CD] text-[#837300] border-b-1 border-[#005B88]'>
                        <div className='flex flex-row place-items-center gap-2'>
                            <p className='font-semibold text-xl'>Lab 3</p>
                            <p className='p-1 bg-[#E7DC94] rounded'>07:30</p>
                        </div>
                        <p>XII PPLG 1</p>
                    </div>
                </div>
                <div>
                    <div className='px-[10%] flex flex-row place-items-center justify-between py-2.5 bg-[#F5F0CD] text-[#837300] border-b-1 border-[#005B88]'>
                        <div className='flex flex-row place-items-center gap-2'>
                            <p className='font-semibold text-xl'>Lab 3</p>
                            <p className='p-1 bg-[#E7DC94] rounded'>07:30</p>
                        </div>
                        <p>XII PPLG 1</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
