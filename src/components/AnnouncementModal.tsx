'use client';
import Modal from '@/components/Modal';
import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';

export default function AnnouncementModal({ onClose }: { onClose: () => void }) {
    const [content, setContent] = useState('');
    const { user } = useAuth();

    const handleSubmit = async () => {
        if (!user?.username) return;

        try {
            const response = await fetch('/api/announcements', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content,
                    authorName: user.username,
                }),
            });

            if (response.ok) {
                onClose();
            }
        } catch (error) {
            console.error('Failed to post announcement:', error);
        }
    };

    return (
        <Modal onClose={onClose}>
            <div className='bg-white flex flex-col px-4 py-6 gap-2 w-[85%] rounded-lg'>
                <div className='flex justify-between items-center'>
                    <label htmlFor='announcement' className='text-xl font-semibold'>
                        Add Announcement
                    </label>
                    <button onClick={onClose} className='text-gray-500 hover:text-gray-700'>
                        ✕
                    </button>
                </div>
                <textarea
                    name='announcement'
                    id='announcement'
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='bg-[#E3E3E3] p-2 rounded'
                    placeholder='Add Announcement...'
                />
                <button
                    onClick={handleSubmit}
                    className='bg-[#8FA9FF] text-white font-semibold py-1.5 px-4 rounded-lg max-w-fit self-end'>
                    Add
                </button>
            </div>
        </Modal>
    );
}
