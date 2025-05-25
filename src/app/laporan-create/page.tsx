'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface SeatDamage {
    id: string;
    damageType: string; // Will store the color code
    details?: string;
}

interface FormData {
    deskripsi_kerusakan: string;
    foto_ruangan: File | null;
    foto_kerusakan: File | null;
    damages: SeatDamage[];
    id_jadwal: number;
    tanggal_laporan: Date;
    jadwal_info?: {
        waktuMulai: string;
        waktuSelesai: string;
        kelas: string;
        hari: string;
    };
}

interface ColorPickerPosition {
    x: number;
    y: number;
    seatId: string;
}

const DAMAGE_TYPES = {
    NONE: '#22c55e', // green-500
    MONITOR_PC: '#ff0000',
    ACCESSORIES: '#ffa500',
    MISSING: '#ffd700',
    ETHERNET: '#007bff',
    NO_PC: '#787878',
};

const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
};

const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
};

const validateAccessToken = (token: string, scheduleId: string) => {
    try {
        const decoded = Buffer.from(token, 'base64').toString();
        const [tokenScheduleId, timestamp] = decoded.split('-');
        
        // Check if the token matches the schedule ID
        if (tokenScheduleId !== scheduleId) return false;
        
        // Check if token is not older than 5 seconds
        const tokenTime = parseInt(timestamp);
        const now = Date.now();
        const fiveSecondsInMs = 60000;
        
        return now - tokenTime <= fiveSecondsInMs;
    } catch {
        return false;
    }
};

export default function LaporanCreate() {
    const router = useRouter();
    const [isValidAccess, setIsValidAccess] = useState(false);
    const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
    const [selectedDamageType, setSelectedDamageType] = useState<string>(DAMAGE_TYPES.NONE);
    const [currentDamageType, setCurrentDamageType] = useState<string>(DAMAGE_TYPES.NONE);
    const [formData, setFormData] = useState<FormData>({
        deskripsi_kerusakan: '',
        foto_ruangan: null,
        foto_kerusakan: null,
        damages: [],
        id_jadwal: 0, 
        tanggal_laporan: new Date(),
    });

    const [colorPicker, setColorPicker] = useState<ColorPickerPosition | null>(null);

    useEffect(() => {
        // Validate access on component mount
        const searchParams = new URLSearchParams(window.location.search);
        const id_jadwal = searchParams.get('id_jadwal');
        const access_token = searchParams.get('access_token');

        if (!id_jadwal || !access_token || !validateAccessToken(access_token, id_jadwal)) {
            router.replace('/'); // Redirect to home if invalid access
            return;
        }

        setIsValidAccess(true);
    }, [router]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (colorPicker && !(event.target as Element).closest('.color-picker')) {
                setColorPicker(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [colorPicker]);

    useEffect(() => {
        const fetchJadwal = async () => {
            const searchParams = new URLSearchParams(window.location.search);
            const id_jadwal = searchParams.get('id_jadwal');

            if (id_jadwal) {
                try {
                    const response = await fetch(`/api/jadwal/${id_jadwal}`);
                    if (response.ok) {
                        const jadwalData = await response.json();
                        setFormData(prev => ({
                            ...prev,
                            id_jadwal: parseInt(id_jadwal),
                            jadwal_info: {
                                waktuMulai: jadwalData.waktuMulai,
                                waktuSelesai: jadwalData.waktuSelesai,
                                kelas: jadwalData.kelas,
                                hari: jadwalData.hari
                            }
                        }));
                    }
                } catch (error) {
                    console.error('Failed to fetch jadwal:', error);
                }
            }
        };

        fetchJadwal();
    }, []);

    useEffect(() => {
        const updateDate = () => {
            const userDate = new Date();
            // Set to current date at midnight
            userDate.setHours(0, 0, 0, 0);
            userDate.setDate(userDate.getDate());
            
            setFormData(prev => ({
                ...prev,
                tanggal_laporan: userDate
            }));
        };

        updateDate(); 
        const interval = setInterval(updateDate, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    const generateSeatIds = () => {
        const rows = ['a', 'b', 'c', 'd'];
        const seats: string[] = [];
        rows.forEach((row) => {
            for (let i = 1; i <= 9; i++) {
                seats.push(`${row}${i}`);
            }
        });
        return seats;
    };

    const handleSeatClick = (seatId: string, event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setColorPicker({
            x: rect.left,
            y: rect.bottom + window.scrollY,
            seatId
        });
    };

    const handleDamageTypeSelect = (damageType: string) => {
        setSelectedDamageType(damageType);
        if (selectedSeat) {
            setFormData((prev) => ({
                ...prev,
                damages: [...prev.damages.filter((d) => d.id !== selectedSeat), { id: selectedSeat, damageType }],
            }));
        }
    };

    const handleColorSelect = (color: string) => {
        if (colorPicker) {
            setFormData(prev => ({
                ...prev,
                damages: [
                    ...prev.damages.filter(d => d.id !== colorPicker.seatId),
                    { id: colorPicker.seatId, damageType: color }
                ]
            }));
            setColorPicker(null);
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'foto_ruangan' | 'foto_kerusakan') => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                [type]: file,
            }));

            // Show preview
            const img = document.querySelector(`#${type}_preview`) as HTMLImageElement;
            if (img) {
                img.src = URL.createObjectURL(file);
                img.classList.remove('hidden');
            }
        }
    };

    const handleSubmit = async () => {
        try {
            if (!formData.deskripsi_kerusakan.trim()) {
                alert('Mohon isi detail kerusakan');
                return;
            }
            if (!formData.foto_ruangan) {
                alert('Mohon upload foto ruangan');
                return;
            }
            if (!formData.id_jadwal) {
                alert('ID Jadwal tidak valid');
                return;
            }

            const submitButton = document.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.setAttribute('disabled', 'true');
                submitButton.textContent = 'Mengirim...';
            }

            const formDataToSend = new FormData();
            formDataToSend.append('id_jadwal', formData.id_jadwal.toString());
            formDataToSend.append('deskripsi_kerusakan', formData.deskripsi_kerusakan);
            formDataToSend.append('damages', JSON.stringify(formData.damages));
            formDataToSend.append('tanggal_laporan', formData.tanggal_laporan.toISOString());

            // Add related_ids from URL parameters or empty string if not present
            const searchParams = new URLSearchParams(window.location.search);
            const related_ids = searchParams.get('related_ids') || '';
            formDataToSend.append('related_ids', related_ids);

            if (formData.foto_ruangan) {
                formDataToSend.append('foto_ruangan', formData.foto_ruangan);
            }
            if (formData.foto_kerusakan) {
                formDataToSend.append('foto_kerusakan', formData.foto_kerusakan);
            }

            const response = await fetch('/api/laporan', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.json();

            if (response.ok && result.success) {
                alert('Laporan berhasil dibuat!');
                window.location.href = '/';
            } else {
                throw new Error(result.error || 'Gagal mengirim laporan');
            }
        } catch (error) {
            console.error('Error submitting laporan:', error);
            alert(error instanceof Error ? error.message : 'Gagal mengirim laporan. Silakan coba lagi.');
        } finally {
            const submitButton = document.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.removeAttribute('disabled');
                submitButton.textContent = 'Selesai';
            }
        }
    };

    // Don't render anything until access is validated
    if (!isValidAccess) {
        return null;
    }

    return (
        <div>
            <nav>
                <Link
                    href='/'
                    className='flex place-items-center gap-0.5 p-4 border-b-1 border-b-[#C1C1C1] text-black bg-white'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='16'
                        viewBox='0 0 44 23'
                        style={{ fill: 'black' }}
                        className='transform rotate-90'>
                        <path d='M31.9366 4.69964L33.8799 6.73323L23.2887 17.8096C23.119 17.9882 22.9172 18.1299 22.6949 18.2266C22.4726 18.3233 22.2342 18.373 21.9935 18.373C21.7527 18.373 21.5143 18.3233 21.292 18.2266C21.0697 18.1299 20.8679 17.9882 20.6982 17.8096L10.1016 6.73323L12.0449 4.70156L21.9907 15.0976L31.9366 4.69964Z' />
                    </svg>
                    <p className='text-[16pt] font-medium'>Create Laporan</p>
                </Link>
            </nav>

            <section className='mx-[5%] mt-[5%]'>
                <p className='text-2xl font-semibold'>
                    {formData.jadwal_info ? formatDate(new Date()) : 'Loading...'}
                </p>
                {formData.jadwal_info && (
                    <p className='text-xl font-semibold'>
                        {formatTime(formData.jadwal_info.waktuMulai)}-
                        {formatTime(formData.jadwal_info.waktuSelesai)}{' '}
                        {formData.jadwal_info.kelas.replace(/_/g, ' ')}
                    </p>
                )}
            </section>

            {/* Seat Layout Section */}
            <section className='mx-[5%] mt-[5%]'>
                <div>
                    <p className='font-semibold text-2xl'>Kerusakan</p>
                    <p className='italic text-xs'>(Klik kursi untuk mengubah status)</p>
                </div>
                <div className='flex justify-between mt-5'>
                    {/* Left column */}
                    <div className='flex flex-col gap-1'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                            <div
                                key={`a${num}`}
                                onClick={(e) => handleSeatClick(`a${num}`, e)}
                                className='w-11 h-11 rounded cursor-pointer flex items-center justify-center text-white'
                                style={{
                                    backgroundColor:
                                        formData.damages.find((d) => d.id === `a${num}`)?.damageType ||
                                        DAMAGE_TYPES.NONE,
                                }}>
                            </div>
                        ))}
                    </div>

                    {/* Center columns */}
                    <div className='grid grid-cols-2 gap-x-1'>
                        {['b', 'c'].map((row) => (
                            <div key={row} className='flex flex-col gap-1'>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                    <div
                                        key={`${row}${num}`}
                                        onClick={(e) => handleSeatClick(`${row}${num}`, e)}
                                        className='w-11 h-11 rounded cursor-pointer flex items-center justify-center text-white'
                                        style={{
                                            backgroundColor:
                                                formData.damages.find((d) => d.id === `${row}${num}`)?.damageType ||
                                                DAMAGE_TYPES.NONE,
                                        }}>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Right column */}
                    <div className='flex flex-col gap-1'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                            <div
                                key={`d${num}`}
                                onClick={(e) => handleSeatClick(`d${num}`, e)}
                                className='w-11 h-11 rounded cursor-pointer flex items-center justify-center text-white'
                                style={{
                                    backgroundColor:
                                        formData.damages.find((d) => d.id === `d${num}`)?.damageType ||
                                        DAMAGE_TYPES.NONE,
                                }}>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Color Picker Popup */}
                {colorPicker && (
                    <div 
                        className="absolute z-50 bg-white shadow-lg rounded-lg p-2 grid grid-cols-3 gap-2 color-picker"
                        style={{ top: colorPicker.y, left: colorPicker.x }}
                    >
                        {Object.entries(DAMAGE_TYPES).map(([key, color]) => (
                            <div
                                key={key}
                                onClick={() => handleColorSelect(color)}
                                className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer rounded"
                            >
                                <div 
                                    className="w-6 h-6 rounded"
                                    style={{ backgroundColor: color }}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Teacher's seat */}
                <div 
                    onClick={(e) => handleSeatClick('teacher', e)}
                    className='w-25 h-5 mt-[10%] rounded cursor-pointer place-self-end flex items-center justify-center text-white'
                    style={{
                        backgroundColor:
                            formData.damages.find((d) => d.id === 'teacher')?.damageType || DAMAGE_TYPES.NONE,
                    }}>
                    <span className="text-xs">teacher</span>
                </div>
            </section>

            <section className='mx-[5%] mt-[5%] grid grid-cols-1'>
                <p className='italic'>Keterangan</p>
                <div className='flex flex-row gap-1.5 place-items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        style={{ fill: '#ff0000' }}
                        className='min-w-6 min-h-6'>
                        <path d='M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5z'></path>
                    </svg>
                    <p className='italic text-xs'>Jika Terdapat Kerusakan (Monitor & PC)</p>
                </div>
                <div className='flex flex-row gap-1.5 place-items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        style={{ fill: '#ffa500' }}
                        className='min-w-6 min-h-6'>
                        <path d='M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5z'></path>
                    </svg>
                    <p className='italic text-xs'>
                        Jika Terdapat Kerusakan Pada Aksesoris (Keyboard, Mouse, Kursi, & Meja)
                    </p>
                </div>
                <div className='flex flex-row gap-1.5 place-items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        style={{ fill: '#ffd700' }}
                        className='min-w-6 min-h-6'>
                        <path d='M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5z'></path>
                    </svg>
                    <p className='italic text-xs'>Jika Ada Ketidaklengkapan Barang</p>
                </div>
                <div className='flex flex-row gap-1.5 place-items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        style={{ fill: '#007bff' }}
                        className='min-w-6 min-h-6'>
                        <path d='M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5z'></path>
                    </svg>
                    <p className='italic text-xs'>Jika Terjadi Masalah Pada Ethernet</p>
                </div>
                <div className='flex flex-row gap-1.5 place-items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        style={{ fill: '#787878' }}
                        className='min-w-6 min-h-6'>
                        <path d='M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5z'></path>
                    </svg>
                    <p className='italic text-xs'>Tidak Adanya Monitor & PC</p>
                </div>
            </section>

            <section className='mx-[5%] mt-[5%] mb-[10%] grid grid-cols-1 gap-6'>
                <div className='grid grid-cols-1'>
                    <label htmlFor='' className='text-[28px] text-gray-600'>
                        Detail Kerusakan
                        <span className='text-red-500'>*</span>
                    </label>
                    <textarea
                        name='deskripsi_kerusakan'
                        id='deskripsi_kerusakan'
                        rows={4}
                        maxLength={255} // Changed from 4 to allow more characters
                        value={formData.deskripsi_kerusakan}
                        onChange={(e) => setFormData(prev => ({
                            ...prev,
                            deskripsi_kerusakan: e.target.value
                        }))}
                        className='p-2 w-full h-30 rounded-lg border-2 border-gray-500 text-sm'
                        placeholder='Masukan Detail Kerusakan ...'></textarea>
                </div>

                {/* Foto Ruangan section */}
                <div className='grid grid-cols-1'>
                    <label htmlFor='foto_ruangan' className='text-[28px] text-gray-600'>
                        Foto Ruangan
                        <span className='text-red-500'>*</span>
                    </label>
                    <div className='inline-block relative w-full h-[calc(16vh*16/9)] bg-gray-400 rounded-xl'>
                        <input
                            type='file'
                            name='foto_ruangan'
                            id='foto_ruangan'
                            accept='image/*'
                            onChange={(e) => handleImageUpload(e, 'foto_ruangan')}
                            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                        />
                        {!formData.foto_ruangan && (
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                                <p>Click to upload image</p>
                            </div>
                        )}
                        <img
                            id='foto_ruangan_preview'
                            src='#'
                            alt=''
                            className='absolute top-0 left-0 w-full h-full object-cover rounded-xl hidden'
                        />
                    </div>
                </div>

                {/* Foto Kerusakan section */}
                <div className='grid grid-cols-1'>
                    <label htmlFor='foto_kerusakan' className='mt-[5%] text-gray-600'>
                        Foto Kerusakan (Bila Ada)
                        <span className='text-red-500'>*</span>
                    </label>
                    <div className='inline-block relative w-full h-[calc(16vh*16/9)] bg-gray-400 rounded-xl'>
                        <input
                            type='file'
                            name='foto_kerusakan'
                            id='foto_kerusakan'
                            accept='image/*'
                            onChange={(e) => handleImageUpload(e, 'foto_kerusakan')}
                            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                        />
                        {!formData.foto_kerusakan && (
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                                <p>Click to upload image</p>
                            </div>
                        )}
                        <img
                            id='foto_kerusakan_preview'
                            src='#'
                            alt=''
                            className='absolute top-0 left-0 w-full h-full object-cover rounded-xl hidden'
                        />
                    </div>
                </div>

                <button 
                    type="submit"
                    onClick={handleSubmit}
                    className='bg-[#8FA9FF] text-white text-3xl font-semibold p-1.5 rounded-xl hover:bg-[#7B91E5] transition-colors disabled:bg-gray-400'>
                    Selesai
                </button>
            </section>
        </div>
    );
}
