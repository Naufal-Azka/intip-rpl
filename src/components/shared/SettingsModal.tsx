import { useTheme } from '@/lib/ThemeContext';
import { useAuth } from '@/lib/AuthContext';
import Image from 'next/image';

interface SettingsModalProps {
    onClose: () => void;
}

export default function SettingsModal({ onClose }: SettingsModalProps) {
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();

    const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const getThemeBasedIcon = () => {
        return theme === 'default' ? (
            <Image src='/profilicon-default.svg' alt='Intip RPL Icon' width={40} height={40} />
        ) : (
            <Image src='/profilicon-lavender.svg' alt='Intip RPL Icon' width={40} height={40} />
        );
    };

    return (
        <section
            className='fixed inset-0 h-dvh w-full  bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50'
            onClick={handleBackdropClick}>
            <div className='home-bg grid grid-cols-1 px-6 py-6 gap-4 w-[85%] lg:w-[30%] rounded-lg'>
                <div className='text-lg font-bold flex flex-row gap-2'>
                    {getThemeBasedIcon()} 
                    <p className='todayhome-text text-xl self-center'>{user?.username}</p>
                </div>
                <div className='w-full text-[#919191] font-semibold flex flex-row gap-3'>
                    <svg
                        width='27'
                        height='27'
                        viewBox='0 0 25 25'
                        style={{ fill: '#919191' }}
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12.5 22.9167C6.76043 22.9167 2.08334 18.2396 2.08334 12.5C2.08334 6.76046 6.76043 2.08337 12.5 2.08337C18.2396 2.08337 22.9167 6.29171 22.9167 11.4584C22.9167 14.9063 20.1146 17.7084 16.6667 17.7084H14.8229C14.5313 17.7084 14.3021 17.9375 14.3021 18.2292C14.3021 18.3542 14.3542 18.4688 14.4375 18.573C14.8646 19.0625 15.1042 19.6771 15.1042 20.3125C15.1042 21.0032 14.8298 21.6656 14.3414 22.154C13.8531 22.6423 13.1907 22.9167 12.5 22.9167ZM12.5 4.16671C7.90626 4.16671 4.16668 7.90629 4.16668 12.5C4.16668 17.0938 7.90626 20.8334 12.5 20.8334C12.7917 20.8334 13.0208 20.6042 13.0208 20.3125C13.0176 20.1774 12.9658 20.048 12.875 19.948C12.4479 19.4688 12.2188 18.8542 12.2188 18.2292C12.2188 17.5385 12.4931 16.8762 12.9815 16.3878C13.4699 15.8994 14.1323 15.625 14.8229 15.625H16.6667C18.9688 15.625 20.8333 13.7605 20.8333 11.4584C20.8333 7.43754 17.0938 4.16671 12.5 4.16671Z' />
                        <path d='M6.77084 13.5416C7.63379 13.5416 8.33334 12.8421 8.33334 11.9791C8.33334 11.1162 7.63379 10.4166 6.77084 10.4166C5.9079 10.4166 5.20834 11.1162 5.20834 11.9791C5.20834 12.8421 5.9079 13.5416 6.77084 13.5416Z' />
                        <path d='M9.89584 9.375C10.7588 9.375 11.4583 8.67544 11.4583 7.8125C11.4583 6.94956 10.7588 6.25 9.89584 6.25C9.0329 6.25 8.33334 6.94956 8.33334 7.8125C8.33334 8.67544 9.0329 9.375 9.89584 9.375Z' />
                        <path d='M15.1042 9.375C15.9671 9.375 16.6667 8.67544 16.6667 7.8125C16.6667 6.94956 15.9671 6.25 15.1042 6.25C14.2412 6.25 13.5417 6.94956 13.5417 7.8125C13.5417 8.67544 14.2412 9.375 15.1042 9.375Z' />
                        <path d='M18.2292 13.5416C19.0921 13.5416 19.7917 12.8421 19.7917 11.9791C19.7917 11.1162 19.0921 10.4166 18.2292 10.4166C17.3662 10.4166 16.6667 11.1162 16.6667 11.9791C16.6667 12.8421 17.3662 13.5416 18.2292 13.5416Z' />
                    </svg>
                    <p className='self-center'>Change Theme</p>
                    {/* SWITCH FOR CHANGING THEME */}
                    <button
                        onClick={toggleTheme}
                        className='relative flex items-center h-full w-[25%] rounded-full settings-switch-bg p-2 lg:p-4 transition-colors'>
                        <span
                            className={`absolute h-[75%] w-[30%] rounded-full home-bg transition-transform ${
                                theme === 'lavender' ? 'translate-x-8' : 'translate-x-0 lg:-translate-x-2'
                            }`}
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
