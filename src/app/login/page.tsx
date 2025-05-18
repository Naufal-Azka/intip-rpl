'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                if (res.status === 401) {
                    throw new Error('Username atau password salah');
                }
                throw new Error(data.error || 'Login gagal');
            }

            login(data.token);
            router.push('/');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Login gagal');
            // Clear password field on error
            setPassword('');
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
                    className={`border-2 p-2 rounded transition-colors ${error ? 'border-red-500' : 'border-gray-500'}`}
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
                    className={`border-2 p-2 rounded transition-colors ${error ? 'border-red-500' : 'border-gray-500'}`}
                    required
                />
                {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
                <button
                    type='submit'
                    className='text-white bg-sky-600 hover:bg-sky-700 mt-4 p-2 rounded transition-colors'>
                    Login
                </button>
            </form>
            <Link href='/forgot-password' className='min-w-full mt-2 px-6 underline italic'>
                Lupa Password?
            </Link>
        </div>
    );
}
