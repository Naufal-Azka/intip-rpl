import { useEffect, useState } from "react";

export default function TodayTimeHome() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const tick = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(tick);
	}, []);

	const hours = time.toLocaleTimeString("id-ID", {
		hour: "2-digit",
	});

    const rawMinutes = time.getMinutes();
    const minutes = rawMinutes < 10 ? `0${rawMinutes}` : `${rawMinutes}`;

	const rawSeconds = time.getSeconds();
	const seconds = rawSeconds < 10 ? `0${rawSeconds}` : `${rawSeconds}`;

	return (
		<section className='font-semibold text-xl lg:text-2xl justify-self-end content-center bg-[#e4e4e4] px-3 py-1 tracking-wide rounded-lg text-center '>
			{hours}:{minutes}:{seconds}
		</section>
	);
}
