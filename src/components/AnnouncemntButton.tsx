'use client';
import { useState } from 'react';
import AnnouncementModal from './AnnouncementModal';

export default function AnnoucementButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section
                className='fixed rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] bottom-8 right-5 p-1 cursor-pointer'
                onClick={() => setIsModalOpen(true)}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='48'
                    height='48'
                    viewBox='0 0 50 50'
                    style={{ fill: 'black' }}
                    className='rounded-full'>
                    <path d='M22.9168 27.0837H12.5001C11.9098 27.0837 11.4154 26.8837 11.0168 26.4837C10.6181 26.0837 10.4181 25.5892 10.4168 25.0003C10.4154 24.4114 10.6154 23.917 11.0168 23.517C11.4181 23.117 11.9126 22.917 12.5001 22.917H22.9168V12.5003C22.9168 11.9101 23.1168 11.4156 23.5168 11.017C23.9168 10.6184 24.4112 10.4184 25.0001 10.417C25.589 10.4156 26.0841 10.6156 26.4855 11.017C26.8869 11.4184 27.0862 11.9128 27.0834 12.5003V22.917H37.5001C38.0904 22.917 38.5855 23.117 38.9855 23.517C39.3855 23.917 39.5848 24.4114 39.5834 25.0003C39.582 25.5892 39.382 26.0844 38.9834 26.4858C38.5848 26.8871 38.0904 27.0864 37.5001 27.0837H27.0834V37.5003C27.0834 38.0906 26.8834 38.5858 26.4834 38.9858C26.0834 39.3858 25.589 39.5851 25.0001 39.5837C24.4112 39.5823 23.9168 39.3823 23.5168 38.9837C23.1168 38.5851 22.9168 38.0906 22.9168 37.5003V27.0837Z' />
                </svg>
            </section>

            {isModalOpen && <AnnouncementModal onClose={() => setIsModalOpen(false)} />}
        </>
    );
}
