interface PopupBarProps {
    type: 'error' | 'success' | 'info';
    message: string;
    onClose: () => void;
}

export default function PopupBar({ type, message, onClose }: PopupBarProps) {
    const bgColor = {
        error: 'bg-red-500',
        success: 'bg-[#6CC24A]',
        info: 'bg-blue-500',
    }[type];

    return (
        <section
            className={`fixed flex flex-row place-items-center justify-between text-white text-sm ${bgColor} mx-[5%] px-6 py-2 gap-2 w-[90%] rounded bottom-5 z-50`}>
            <p>{message}</p>
            <button onClick={onClose} className='hover:opacity-80'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <line x1='18' y1='6' x2='6' y2='18'></line>
                    <line x1='6' y1='6' x2='18' y2='18'></line>
                </svg>
            </button>
        </section>
    );
}
