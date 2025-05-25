import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import RootLayoutWrapper from '@/components/layout/RootLayoutWrapper';
import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
    variable: '--font-be-vietnam-pro',
    subsets: ['latin'],
    weight: ['600'],
});

export const metadata: Metadata = {
    title: 'Intip RPL',
    description: 'An inventory and lab monitoring application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <RootLayoutWrapper beVietnamProVariable={beVietnamPro.variable}>{children}</RootLayoutWrapper>;
}
