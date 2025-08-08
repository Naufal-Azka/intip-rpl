'use client';

import { useAuth } from '@/lib/AuthContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SettingsModal from './shared/SettingsModal';
import { useTheme } from '@/lib/ThemeContext';

export default function NavigationBar() {
    const { user, logout } = useAuth();
    const { theme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Add this state

    // Add console log to debug
    useEffect(() => {
        console.log('Current user:', user);
    }, [user]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsNavOpen(!isNavOpen);
        if (isSettingsOpen) {
            setIsSettingsOpen(false);
        }
    };

    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
        setIsNavOpen(false);
    };

    // Add this handler
    const handleSettingsClick = () => {
        setIsSettingsOpen(true);
        setIsNavOpen(false);
    };

    const getThemeBasedLogo = () => {
        return theme === 'default' ? (
            <Image src='/icon-intiprpl-default.svg' alt='Intip RPL Icon' width={35} height={35} />
        ) : (
            <Image src='/icon-intiprpl-lavender.svg' alt='Intip RPL Icon' width={35} height={35} />
        );
    };
    const getThemeBasedIcon = () => {
        return theme === 'default' ? (
            <Image src='/profilicon-default.svg' alt='Intip RPL Icon' width={27} height={27} />
        ) : (
            <Image src='/profilicon-lavender.svg' alt='Intip RPL Icon' width={27} height={27} />
        );
    };

    return (
        <div className='grid grid-cols-1 place-items-center min-w-full'>
            <div className='home-bg grid grid-cols-4 min-w-full p-2 border-b-2 border-primary'>
                <Link href='/' className='col-span-1'>
                    {getThemeBasedLogo()}
                </Link>
                {user ? (
                    <button
                        onClick={toggleMenu}
                        className='flex flex-row place-items-center gap-1 col-span-2 justify-center'>
                        {getThemeBasedIcon()}
                        <p className='username-navbar-text text-[15px]'>{user.username}</p>
                        <div
                            className={`transform transition-transform duration-300 ${
                                isMenuOpen || isSettingsOpen ? 'rotate-180' : '-rotate-0'
                            }`}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                viewBox='0 0 15 30'
                                className='transform -rotate-90 fill-primary'>
                                <path d='M11.935 8.22505L10.6088 6.90005L3.38502 14.1213C3.26857 14.237 3.17616 14.3746 3.1131 14.5262C3.05004 14.6777 3.01758 14.8403 3.01758 15.0044C3.01758 15.1686 3.05004 15.3311 3.1131 15.4827C3.17616 15.6342 3.26857 15.7718 3.38502 15.8875L10.6088 23.1125L11.9338 21.7875L5.15377 15.0063L11.935 8.22505Z' />
                            </svg>
                        </div>
                    </button>
                ) : (
                    <Link
                        href='/login'
                        className='login-bg laporancreation-text text-center font-semibold rounded-[2rem] py-[6px] px-4 text-[15px] col-start-4 transition-colors'>
                        Login
                    </Link>
                )}
            </div>

            {/* Navigation Items with Slide Down Animation */}
            <div
                className={`fixed top-[53px] left-0 right-0 z-1 home-bg transition-all duration-300 ease-in-out overflow-hidden ${
                    isNavOpen ? 'max-h-screen visible' : 'max-h-0 opacity-0 invisible'
                }`}>
                <div className='w-full home-bg username-navbar-text lg:max-w-[80%] lg:mx-auto'>
                    {isNavOpen && (
                        <>
                            {!user && (
                                <Link
                                    href='/jadwal'
                                    className='block w-full p-3 border-b-2 lg:border-x-2 lg:border-[#d1d5db] home-bg border-primary text-center transition-colors'>
                                    Jadwal
                                </Link>
                            )}

                            {user && user.role === 'USER' && (
                                <>
                                    <Link
                                        href='/jadwal'
                                        className='block w-full p-3 border-b-2 lg:border-x-2 lg:border-[#d1d5db] home-bg border-primary text-center transition-colors'>
                                        Jadwal
                                    </Link>
                                    <button
                                        onClick={handleSettingsClick}
                                        className='block w-full p-3 border-b-2 lg:border-x-2 lg:border-[#d1d5db] home-bg border-primary text-center transition-colors'>
                                        Settings
                                    </button>
                                </>
                            )}

                            {user && user.role === 'ADMIN' && (
                                <>
                                    <Link
                                        href='/jadwal'
                                        className='block w-full p-3 border-b-2 lg:border-x-2 lg:border-[#d1d5db] home-bg border-primary text-center transition-colors'>
                                        Jadwal
                                    </Link>
                                    <Link
                                        href='/admin/laporan-read'
                                        className='block w-full p-3 border-b-2 lg:border-x-2 lg:border-[#d1d5db] home-bg border-primary text-center transition-colors'>
                                        Laporan
                                    </Link>
                                    <Link
                                        href='/admin/jadwal-update'
                                        className='block w-full p-3 border-b-2 lg:border-x-2 lg:border-[#d1d5db] home-bg border-primary text-center transition-colors'>
                                        Edit Jadwal
                                    </Link>
                                    <button
                                        onClick={handleSettingsClick}
                                        className='block w-full p-3 border-b-2 lg:border-x-2 lg:border-[#d1d5db] home-bg border-primary text-center transition-colors'>
                                        Settings
                                    </button>
                                </>
                            )}

                            {user && (
                                <button
                                    onClick={handleLogout}
                                    className='block w-full p-3 border-b-2 lg:border-x-2 lg:border-[#d1d5db] home-bg border-primary font-semibold text-center text-red-500 transition-colors'>
                                    Logout
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
            {/* Add the modal at the bottom of the component */}
            {isSettingsOpen && <SettingsModal onClose={() => setIsSettingsOpen(false)} />}
        </div>
    );
}
