'use client';

import { useAuth } from '@/lib/AuthContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function NavigationBar() {
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Add console log to debug
    useEffect(() => {
        console.log('Current user:', user);
    }, [user]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsNavOpen(!isNavOpen);
    };

    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
        setIsNavOpen(false);
    };

    return (
        <nav className='grid grid-cols-1 place-items-center min-w-full'>
            <div className='grid grid-cols-4 min-w-full p-2 border-b-2 border-b-gray-300'>
                <Link href='/' className='col-span-1'>
                    <Image src='/icon-intiprpl.svg' alt='Icon-Intip-RPL' width={35} height={35} priority />
                </Link>
                {user ? (
                    <div className='flex flex-row place-items-center gap-1 col-span-2 justify-center'>
                        <Image src='/profilincon.svg' alt='Profil-Icon' width={27} height={27} priority />
                        <p className='text-[15px]'>{user.username}</p>
                        <button
                            onClick={toggleMenu}
                            className={`transform transition-transform duration-300 ${
                                isMenuOpen ? 'rotate-90' : '-rotate-90'
                            }`}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='18'
                                height='18'
                                viewBox='0 0 15 30'
                                style={{ fill: 'black' }}
                                className='transform -rotate-90'>
                                <path d='M11.935 8.22505L10.6088 6.90005L3.38502 14.1213C3.26857 14.237 3.17616 14.3746 3.1131 14.5262C3.05004 14.6777 3.01758 14.8403 3.01758 15.0044C3.01758 15.1686 3.05004 15.3311 3.1131 15.4827C3.17616 15.6342 3.26857 15.7718 3.38502 15.8875L10.6088 23.1125L11.9338 21.7875L5.15377 15.0063L11.935 8.22505Z' />
                            </svg>
                        </button>
                    </div>
                ) : (
                    <Link
                        href='/login'
                        className='bg-green-500 text-white text-center rounded-[2rem] py-[6px] px-4 text-[13px] col-start-4 hover:bg-green-600 transition-colors'>
                        Log in
                    </Link>
                )}
            </div>

            {/* Navigation Items with Slide Down Animation */}
            <div
                className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
                    isNavOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className='w-full'>
                    {!user && (
                        <Link
                            href='/jadwal'
                            className='block w-full p-2 border-b-2 border-b-gray-300 text-center hover:bg-gray-100 transition-colors'>
                            Jadwal
                        </Link>
                    )}

                    {user && user.role === 'USER' && (
                        <>
                            <Link
                                href='/jadwal'
                                className='block w-full p-2 border-b-2 border-b-gray-300 text-center hover:bg-gray-100 transition-colors'>
                                Jadwal
                            </Link>
                            <Link
                                href='/settings'
                                className='block w-full p-2 border-b-2 border-b-gray-300 text-center hover:bg-gray-100 transition-colors'>
                                Settings
                            </Link>
                        </>
                    )}

                    {user && user.role === 'ADMIN' && (
                        <>
                            <Link
                                href='/jadwal'
                                className='block w-full p-2 border-b-2 border-b-gray-300 text-center hover:bg-gray-100 transition-colors'>
                                Jadwal
                            </Link>
                            <Link
                                href='/laporan'
                                className='block w-full p-2 border-b-2 border-b-gray-300 text-center hover:bg-gray-100 transition-colors'>
                                Laporan
                            </Link>
                            <Link
                                href='/edit-jadwal'
                                className='block w-full p-2 border-b-2 border-b-gray-300 text-center hover:bg-gray-100 transition-colors'>
                                Edit Jadwal
                            </Link>
                            <Link
                                href='/settings'
                                className='block w-full p-2 border-b-2 border-b-gray-300 text-center hover:bg-gray-100 transition-colors'>
                                Settings
                            </Link>
                        </>
                    )}

                    {user && (
                        <button
                            onClick={handleLogout}
                            className='block w-full p-2 border-b-2 border-b-gray-300 text-center text-red-500 hover:bg-red-50 transition-colors'>
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
