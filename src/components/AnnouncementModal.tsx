import Modal from '@/components/Modal';

export default function AnnoucementModal() {
    return (
        <Modal>
            <div className='bg-white flex flex-col px-4 py-6 gap-2 w-[85%] rounded-lg'>
                <label htmlFor='annoucement' className='text-xl font-semibold'>
                    Add Announcement
                </label>
                <textarea
                    name='annoucement'
                    id='annoucement'
                    rows={4}
                    maxLength={4}
                    className='bg-[#E3E3E3] p-2'
                    placeholder='Add Announcement...'></textarea>
                <button className='bg-[#8FA9FF] text-white font-semibold py-1.5 px-4 rounded-lg max-w-fit place self-end'>
                    Add
                </button>
            </div>
        </Modal>
    );
}
