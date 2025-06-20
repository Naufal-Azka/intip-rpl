'use client';
import { useEffect, useState } from 'react';
import type { Announcement } from '@/types/announcement';

export default function Announcement() {
    const [announcement, setAnnouncement] = useState<Announcement | null>(null);

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                const response = await fetch('/api/announcements');
                if (response.ok) {
                    const data = await response.json();
                    setAnnouncement(data);
                }
            } catch (error) {
                console.error('Failed to fetch announcement:', error);
            }
        };

        fetchAnnouncement();
    }, []);

    if (!announcement) return null;

    // Check if announcement is older than 3 days
    const isExpired = new Date().getTime() - new Date(announcement.createdAt).getTime() > 3 * 24 * 60 * 60 * 1000;
    if (isExpired) return null;

    return (
        <section className='announcement-bg todayhome-text grid grid-cols-1 pb-4 pt-4'>
            <div className='flex flex-row place-items-center gap-2 mx-[10%] my-[1%]'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    className='announcement-fill'>
                    <path d='M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z'></path>
                </svg>
                <p className='font-semibold text-2xl'>Announcement</p>
            </div>
            <div className='home-bg py-4 pl-4 m-4 rounded-lg'>
                <div className='flex flex-row place-items-center gap-3'>
                    <div className='rounded-full bg-gray-200 w-7 h-7'></div>
                    <p className='font-semibold'>{announcement.authorName}</p>
                </div>
                <p className='text-sm mx-[10%] mb-2 text-justify'>{announcement.content}</p>
            </div>
        </section>
    );
}
