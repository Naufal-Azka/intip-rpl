"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

type DateRange = "today" | "yesterday" | "7days" | "30days" | "all";
type DamageColorKey =
	| "kerusakan_1"
	| "kerusakan_2"
	| "kerusakan_3"
	| "kerusakan_4"
	| "kerusakan_5";

// Add this color mapping
const DAMAGE_COLORS: Record<DamageColorKey, string> = {
	kerusakan_1: "#ff0000", // MONITOR_PC - Red
	kerusakan_2: "#ffa500", // ACCESSORIES - Orange
	kerusakan_3: "#ffd700", // MISSING - Gold
	kerusakan_4: "#007bff", // ETHERNET - Blue
	kerusakan_5: "#787878", // NO_PC - Gray
};

interface Laporan {
	id: number;
	jadwal: {
		lab: string;
		kelas: string;
		waktuMulai: string;
	};
	kerusakan_1: string;
	kerusakan_2: string;
	kerusakan_3: string;
	kerusakan_4: string;
	kerusakan_5: string;
	deskripsi_kerusakan: string;
	foto_ruangan: string;
	foto_kerusakan?: string;
	tanggal_laporan: string;
}

// Add this helper function near the top of the file
const formatDate = (date: string) => {
	return new Date(date).toLocaleDateString("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
};

export default function LaporanRead() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LaporanReadContent />
		</Suspense>
	);
}

// Move your current logic into a new component
function LaporanReadContent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [dateRange, setDateRange] = useState<DateRange>("today");
	const [laporanData, setLaporanData] = useState<Laporan[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	useEffect(() => {
		const range = (searchParams.get("range") as DateRange) || "today";
		setDateRange(range);
		fetchLaporanData(range);
	}, [searchParams]);

	const fetchLaporanData = async (range: DateRange) => {
		try {
			setIsLoading(true);
			const response = await fetch(`/api/laporan?range=${range}`);
			if (!response.ok) throw new Error("Failed to fetch data");
			const data = await response.json();
			setLaporanData(data);
		} catch (error) {
			console.error("Error fetching laporan:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		const range =
			value === "Hari Ini"
				? "today"
				: value === "Kemarin"
				? "yesterday"
				: value === "7 Hari Terakhir"
				? "7days"
				: value === "30 Hari Terakhir"
				? "30days"
				: "all";

		router.push(`/admin/laporan-read?range=${range}`);
	};

	// Group laporan by lab
	const groupedLaporan = laporanData.reduce((acc, laporan) => {
		const lab = laporan.jadwal.lab;
		if (!acc[lab]) acc[lab] = [];
		acc[lab].push(laporan);
		return acc;
	}, {} as Record<string, Laporan[]>);

	return (
		<div className="lg:w-[70%] lg:mx-auto lg:border lg:border-[#d1d5db]">
			<nav>
				<Link
					href='/'
					className='flex place-items-center gap-0.5 p-4 border-b-1 border-primary home-bg'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='32'
						viewBox='0 0 44 23'
						className='transform rotate-90 schedulesection-fill'>
						<path d='M31.9366 4.69964L33.8799 6.73323L23.2887 17.8096C23.119 17.9882 22.9172 18.1299 22.6949 18.2266C22.4726 18.3233 22.2342 18.373 21.9935 18.373C21.7527 18.373 21.5143 18.3233 21.292 18.2266C21.0697 18.1299 20.8679 17.9882 20.6982 17.8096L10.1016 6.73323L12.0449 4.70156L21.9907 15.0976L31.9366 4.69964Z' />
					</svg>
					<p className='text-[16pt] self-center font-medium schedulesection-text'>
						Read Laporan
					</p>
				</Link>
			</nav>

			<section className='px-[10%] py-4 grid grid-cols-1 gap-8 home-bg'>
				<div className='flex flex-row place-items-center gap-3'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='32'
						viewBox='0 0 30 30'
						className='schedulesection-fill'>
						<path d='M18.7499 24.85C18.7999 25.225 18.6749 25.625 18.3874 25.8875C18.2718 26.0034 18.1344 26.0953 17.9832 26.158C17.832 26.2208 17.6699 26.2531 17.5062 26.2531C17.3425 26.2531 17.1804 26.2208 17.0291 26.158C16.8779 26.0953 16.7406 26.0034 16.6249 25.8875L11.6124 20.875C11.4762 20.7417 11.3726 20.5787 11.3097 20.3987C11.2468 20.2187 11.2263 20.0267 11.2499 19.8375V13.4375L5.26242 5.775C5.05943 5.51441 4.96784 5.18407 5.00765 4.85616C5.04747 4.52825 5.21546 4.22943 5.47492 4.025C5.71242 3.85 5.97492 3.75 6.24992 3.75H23.7499C24.0249 3.75 24.2874 3.85 24.5249 4.025C24.7844 4.22943 24.9524 4.52825 24.9922 4.85616C25.032 5.18407 24.9404 5.51441 24.7374 5.775L18.7499 13.4375V24.85ZM8.79992 6.25L13.7499 12.575V19.475L16.2499 21.975V12.5625L21.1999 6.25H8.79992Z' />
					</svg>
					<select
						className='w-[60%] h-7.5 bg-[#D9D9D9] schedule-item-bg border-none rounded-sm pl-1.5'
						onChange={handleRangeChange}
						value={
							dateRange === "today"
								? "Hari Ini"
								: dateRange === "yesterday"
								? "Kemarin"
								: dateRange === "7days"
								? "7 Hari Terakhir"
								: dateRange === "30days"
								? "30 Hari Terakhir"
								: "Semua Waktu"
						}>
						<option value='Hari Ini'>Hari Ini</option>
						<option value='Kemarin'>Kemarin</option>
						<option value='7 Hari Terakhir'>7 Hari Terakhir</option>
						<option value='30 Hari Terakhir'>
							30 Hari Terakhir
						</option>
						<option value='Semua Waktu'>Semua Waktu</option>
					</select>
				</div>
				<p className='font-semibold text-lg todayhome-text'>
					{dateRange === "today"
						? "Hari Ini"
						: dateRange === "yesterday"
						? "Kemarin"
						: dateRange === "7days"
						? "7 Hari Terakhir"
						: dateRange === "30days"
						? "30 Hari Terakhir"
						: "Semua Waktu"}
				</p>
			</section>
			<section className='grid grid-cols-1 pb-[10%] home-bg'>
				{Object.entries(groupedLaporan).map(([lab, laporanList]) =>
					laporanList.map((laporan) => (
						<div key={laporan.id}>
							<div
								className={`px-[10%] flex flex-row place-items-center justify-between py-2.5 ${
									lab === "RPL_1"
										? "lab1-header lab1-text"
										: lab === "RPL_2"
										? "lab2-header lab2-text"
										: "lab3-header lab3-text"
								}`}>
								<div className='flex flex-row place-items-center gap-2'>
									<p className='font-semibold text-xl'>
										Lab {lab.split("_")[1]}
									</p>
									<p
										className={`py-1 px-2 rounded ${
											lab === "RPL_1"
												? "lab1-day"
												: lab === "RPL_2"
												? "lab2-day"
												: "lab3-day"
										}`}>
										{formatDate(laporan.tanggal_laporan)}
									</p>
								</div>
								<p>{laporan.jadwal.kelas.replace(/_/g, " ")}</p>
							</div>

							<div
								className={`px-[10%] py-4 grid grid-cols-1 gap-2 border-b-1 ${
									lab === "RPL_1"
										? "lab1-bg lab1-text lab1-border"
										: lab === "RPL_2"
										? "lab2-bg lab2-text lab2-border"
										: "lab3-bg lab3-text lab3-border"
								}`}>
								<p className={"font-semibold text-xl"}>
									Kerusakan
								</p>
								<div className='flex flex-row place-items-center gap-2 flex-wrap'>
									{[
										laporan.kerusakan_1,
										laporan.kerusakan_2,
										laporan.kerusakan_3,
										laporan.kerusakan_4,
										laporan.kerusakan_5,
									]
										.filter(Boolean)
										.map((kerusakan, index) => {
											// Split the comma-separated seat IDs
											const seatIds =
												kerusakan.split(", ");
											return seatIds.map(
												(seatId, seatIndex) => (
													<p
														key={`${index}-${seatIndex}`}
														className='text-white py-1.5 px-2.5 rounded'
														style={{
															backgroundColor:
																DAMAGE_COLORS[
																	`kerusakan_${
																		index +
																		1
																	}` as DamageColorKey
																],
														}}>
														{seatId}
													</p>
												)
											);
										})}
								</div>
								<p className='font-medium'>
									{laporan.deskripsi_kerusakan}
								</p>
								<div
									className='w-full aspect-video relative cursor-pointer'
									onClick={() =>
										setSelectedImage(laporan.foto_ruangan)
									}>
									<Image
										src={laporan.foto_ruangan}
										alt='Foto Ruangan'
										layout='fill'
										objectFit='cover'
										className='rounded'
									/>
								</div>
								{laporan.foto_kerusakan && (
									<div
										className='w-full aspect-video relative cursor-pointer'
										onClick={() =>
											setSelectedImage(
												laporan.foto_kerusakan!
											)
										}>
										<Image
											src={laporan.foto_kerusakan}
											alt='Foto Kerusakan'
											layout='fill'
											objectFit='cover'
											className='rounded'
										/>
									</div>
								)}
							</div>
						</div>
					))
				)}
			</section>

			{/* Add this modal at the bottom of your return statement, before the final closing div */}
			{selectedImage && (
				<div
					className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'
					onClick={() => setSelectedImage(null)}>
					<div className='relative max-w-4xl max-h-[90vh] w-full h-full'>
						<Image
							src={selectedImage}
							alt='Full size image'
							layout='fill'
							objectFit='contain'
							className='rounded'
						/>
						<button
							className='absolute top-4 right-4 bg-white rounded-full p-2'
							onClick={() => setSelectedImage(null)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'>
								<line
									x1='18'
									y1='6'
									x2='6'
									y2='18'></line>
								<line
									x1='6'
									y1='6'
									x2='18'
									y2='18'></line>
							</svg>
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
