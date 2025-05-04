interface ModalProps {
    children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
    return (
        <section className='h-dvh w-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center hidden'>
            {/* MODAL ITEM */}
        </section>
    );
}
