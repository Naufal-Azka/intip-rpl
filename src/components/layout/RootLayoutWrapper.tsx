'use client';

import type { ReactNode } from 'react';
import { AuthProvider } from '@/lib/AuthContext';
import { ThemeProvider } from '@/lib/ThemeContext';

interface RootLayoutWrapperProps {
    children: ReactNode;
    beVietnamProVariable: string;
}

export default function RootLayoutWrapper({ children, beVietnamProVariable }: RootLayoutWrapperProps) {
    return (
        <html lang='en'>
            <body className={`${beVietnamProVariable} antialiased`}>
                <ThemeProvider>
                    <AuthProvider>{children}</AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
