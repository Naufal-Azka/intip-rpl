'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { User } from '@/types/user';
import Cookies from 'js-cookie';

interface AuthContextType {
    user: User | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Check for token in cookies instead of localStorage
        const token = Cookies.get('token');
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                setUser({
                    id: payload.id,
                    username: payload.username,
                    role: payload.role,
                    association_kelas: payload.association_kelas,
                });
            } catch (error) {
                console.error('Invalid token:', error);
                Cookies.remove('token');
            }
        }
    }, []);

    const login = (token: string) => {
        // Store token in cookies instead of localStorage
        Cookies.set('token', token, {
            expires: 7, // expires in 7 days
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        });

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            setUser({
                id: payload.id,
                username: payload.username,
                role: payload.role,
                association_kelas: payload.association_kelas,
            });
        } catch (error) {
            console.error('Invalid token:', error);
        }
    };

    const logout = () => {
        Cookies.remove('token');
        setUser(null);
        router.push('/');
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
