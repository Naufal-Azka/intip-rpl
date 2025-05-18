'use client';
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

    const today = new Date();
    const currentDay = today.toLocaleDateString('id-ID', { weekday: 'long' });
    const isWeekend = ['Sabtu', 'Minggu'].includes(currentDay);
    const effectiveDay = isWeekend ? 'Senin' : currentDay;

    useEffect(() => {
        fetchJadwalHome(effectiveDay)
            .then(setJadwal)
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, [effectiveDay]);

    const jadwalByLab = jadwal.reduce((acc, curr) => {
        if (!acc[curr.lab]) acc[curr.lab] = [];
        acc[curr.lab].push(curr);
        return acc;
    }, {} as Record<string, typeof jadwal>);

    const { user } = useAuth();

    return (
        <div>
            <NavigationBar />
            <Announcement />
            <LaporanCreationSection
                user={user}
                jadwal={jadwal}
                getJadwalStatus={(start, end) => getJadwalStatus(start, end, isWeekend)}
            />
            <TodayHome />
            <ScheduleSection
                isLoading={isLoading}
                jadwalByLab={jadwalByLab}
                expandedLabs={expandedLabs}
                setExpandedLabs={setExpandedLabs}
                isWeekend={isWeekend}
            />
            {user?.role === 'ADMIN' && <AnnouncementButton />}
        </div>
    );
}
