import { Hari } from '@prisma/client';

export function convertDBTimeToWIB(date: Date): string {
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const wibHours = hours >= 18 
        ? (hours - 18 + 7) % 24 
        : (hours + 7) % 24;
    
    return `${wibHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

export function timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

export type JadwalStatus = 'current' | 'upcoming' | 'finished';

export function getJadwalStatus(waktuMulai: Date, waktuSelesai: Date, isWeekend: boolean = false): JadwalStatus {
    if (isWeekend) return 'upcoming';

    const now = new Date();
    const wibOffset = 7;
    const currentHours = (now.getUTCHours() + wibOffset) % 24;
    const currentMinutes = now.getUTCMinutes();
    const currentTime = `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`;

    const startTime = convertDBTimeToWIB(waktuMulai);
    const endTime = convertDBTimeToWIB(waktuSelesai);

    const currentTimeMinutes = timeToMinutes(currentTime);
    const startTimeMinutes = timeToMinutes(startTime);
    const endTimeMinutes = timeToMinutes(endTime);

    if (currentTimeMinutes >= startTimeMinutes && currentTimeMinutes <= endTimeMinutes) {
        return 'current';
    }
    return currentTimeMinutes < startTimeMinutes ? 'upcoming' : 'finished';
}