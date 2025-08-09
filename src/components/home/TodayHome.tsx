import { useState, useEffect } from "react";
import TodayTimeHome from "./TodayTimeHome";

export default function TodayHome() {
	const [today, setToday] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setToday(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const formattedDate = today.toLocaleDateString("id-ID", {
		weekday: "long",
		day: "2-digit",
		month: "long",
		year: "numeric",
	});

	// const formattedTime = today.toLocaleTimeString('id-ID', {
	//     hour: '2-digit',
	//     minute: '2-digit',
	//     second: '2-digit',
	// });

	return (
		<div className="grid grid-cols-2 mx-[12%] lg:mx-[10%] mt-8 mb-4 lg:mb-8 justify-evenly">
			<section className='todayhome-text content-center'>
				<p className='font-semibold lg:text-xl'>{formattedDate}</p>
			</section>
            <TodayTimeHome />
		</div>
	);
}
