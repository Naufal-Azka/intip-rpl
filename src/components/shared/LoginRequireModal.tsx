import Modal from '@/components/shared/Modal';

export default function LoginRequireModal() {
    return (
        <Modal>
            <div className='bg-white flex flex-col px-4 py-6 gap-4 w-[85%] rounded-lg'>
                <p className='text-center text-2xl font-semibold'>Login Untuk Melanjutkan</p>
                <button className='bg-[#8FA9FF] text-white text-lg font-semibold py-1.5 px-4 rounded-lg'>Login</button>
            </div>
        </Modal>
    );
}
