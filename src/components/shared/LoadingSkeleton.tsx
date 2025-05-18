export default function LoadingSkeleton() {
    return (
        <div className="animate-pulse">
            <div className='bg-gray-200 px-7 py-3 rounded-t-3xl'>
                <div className='h-8 bg-gray-300 rounded w-1/3'></div>
            </div>
            <div className='h-12 bg-gray-100'></div>
        </div>
    );
}