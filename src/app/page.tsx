'use client'; // Menandai file ini sebagai komponen klien
import { useState, useEffect } from 'react';
import { fetchJadwalHome } from '@/lib/fetchJadwal';
import { Hari } from '@prisma/client';
import { useAuth } from '@/lib/AuthContext';
import { getJadwalStatus } from '@/utils/timeUtils';
import {
    NavigationBar,
    AnnouncementButton,
    Announcement,
    LaporanCreationSection,
    TodayHome,
    ScheduleSection,
} from '@/components';

// Variabel untuk data jadwal
type Lab = string;
type Kelas = string;

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [expandedLabs, setExpandedLabs] = useState<Record<string, boolean>>({});
    const [jadwal, setJadwal] = useState<
        Array<{
            id: number;
            hari: Hari;
            lab: Lab;
            kelas: Kelas;
            waktuMulai: Date;
            waktuSelesai: Date;
        }>
    >([]);
    
    // Mengambil tanggal hari ini dan menangani logika weekend
    const today = new Date();
    const currentDay = today.toLocaleDateString('id-ID', { weekday: 'long' });
    const isWeekend = ['Sabtu', 'Minggu'].includes(currentDay);
    // Jika hari ini adalah Weekend, tampilkan jadwal hari senin
    const effectiveDay = isWeekend ? 'Senin' : currentDay;

    // Mengambil data jadwal dari database dengan memperhatikan apakah weekend atau tidak
    useEffect(() => {
        fetchJadwalHome(effectiveDay)
            .then(setJadwal)
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, [effectiveDay]);

    // Mengelompokkan jadwal berdasarkan lab
    const jadwalByLab = jadwal.reduce((acc, curr) => {
        if (!acc[curr.lab]) acc[curr.lab] = [];
        acc[curr.lab].push(curr);
        return acc;
    }, {} as Record<string, typeof jadwal>);

    // Mendapatkan informasi autentikasi pengguna
    const { user } = useAuth();

    return (
        <div className='home-bg min-h-screen'>
            {/* Navigation Bar */}
            <NavigationBar />

            {/* Bagian Pengumuman */}
            <Announcement />

            {/* Bagian untuk membuat Laporan */}
            <LaporanCreationSection
                user={user}
                jadwal={jadwal}
                getJadwalStatus={(start, end) => getJadwalStatus(start, end, isWeekend)}
            />

            {/* Menampilkan Tanggal Hari ini */}
            <TodayHome />

            {/* Menampilkan Jadwal dari setiap lab */}
            <ScheduleSection
                isLoading={isLoading}
                jadwalByLab={jadwalByLab}
                expandedLabs={expandedLabs}
                setExpandedLabs={setExpandedLabs}
                isWeekend={isWeekend}
            />

            {/* Menampilkan AnnouncementButton hanya untuk admin */}
            {user?.role === 'ADMIN' && <AnnouncementButton />}
        </div>
    );
}