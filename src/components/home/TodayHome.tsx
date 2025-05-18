export default function TodayHome() {
    const today = new Date();

    return (
        <section className='mx-[12%] mt-8 mb-4'>
            <p className='font-semibold'>
                {today.toLocaleDateString('id-ID', {
                    weekday: 'long',
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                })}
            </p>
        </section>
    );
}
