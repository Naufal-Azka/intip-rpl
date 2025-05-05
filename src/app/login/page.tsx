'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Login failed');
            }

            // Call login with the token
            login(data.token);
            router.push('/');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Login failed');
        }
    };

    return (
        <div className='grid grid-cols-1 justify-items-center min-w-full mt-10'>
            <Image src='/intiprpl-logo.png' alt='Intip-RPL-Logo' width={200} height={200} />
            <h1 className='text-3xl my-6'>Log In</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 min-w-full px-6'>
                <label className='font-bold mt-4'>
                    Username
                    <span className='text-red-500'>*</span>
                </label>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Masukkan Username...'
                    className='border-2 border-gray-500 p-2 rounded'
                    required
                />
                <label className='font-bold mt-4'>
                    Password
                    <span className='text-red-500'>*</span>
                </label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Masukkan Password...'
                    className='border-2 border-gray-500 p-2 rounded'
                    required
                />
                <button type='submit' className='text-white bg-sky-600 mt-4 p-2 rounded'>
                    Login
                </button>
            </form>
            <Link href='/forgot-password' className='min-w-full mt-2 px-6 underline italic'>
                Lupa Password?
            </Link>
        </div>
    );
}
