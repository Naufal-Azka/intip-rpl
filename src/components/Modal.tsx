interface ModalProps {
    children: React.ReactNode;
    onClose?: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
    return (
        <section
            className='fixed inset-0 h-dvh w-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50'
            onClick={(e) => {
                if (e.target === e.currentTarget && onClose) {
                    onClose();
                }
            }}>
            {children}
        </section>
    );
}
