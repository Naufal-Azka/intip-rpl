import AnnoucementButton from "@/components/AnnouncemntButton";
import AnnoucementModal from "@/components/AnnouncementModal";

export default function Home() {
    return (
        <div>
            {/* ANNOUNCEMENT */}
            {/* WILL GONE AFTER 3 DAY OR WHEN ADMIN CREATE A NEW ANNOUNCEMENT  */}
            <section className='bg-[#D9D9D9] grid grid-cols-1 pb-4 pt-8'>
                <div className='flex flex-row place-items-center gap-2 mx-[10%] my-[1%]'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 24 24'
                        style={{ fill: 'rgba(0, 0, 0, 1)' }}>
                        <path d='M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z'></path>
                    </svg>
                    <p className='font-semibold text-2xl'>Annoucement</p>
                </div>
                <div className='bg-white py-4 pl-4  m-4 rounded-lg'>
                    <div className='flex flex-row place-items-center gap-4'>
                        <div className='rounded-full bg-gray-200 w-7 h-7'></div>
                        <p className='font-semibold'>Naufal Azka Putra Difa</p>
                    </div>
                    <p className='text-sm mx-[10%] my-2 text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis totam harum ea
                        officiis incidunt hic atque neque corrupti voluptas.
                    </p>
                </div>
            </section>
            {/* CHANGE THE LAB USAGE DEPENDING ON CURRENT DATE */}
            <section className='mx-[12%] mt-8 mb-4'>
                <p className='font-semibold'>Selasa, 03 September 2024</p>
            </section>
            <section className='mx-[10%] grid grid-cols-1 gap-8'>
                <div>
					{/* HEADER OF THE LAB USAGE */}
                    <div className='flex flex-row bg-gray-200 px-7 py-3 rounded-t-3xl place-items-center justify-between'>
                        <p className='font-semibold text-2xl'>Lab.RPL 3</p>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='44'
                            height='23'
                            viewBox='0 0 44 23'
                            style={{ fill: 'rgba(0, 0, 0, 1);', transform: 'rotate(180deg);' }}>
                            <path d='M31.9366 4.69964L33.8799 6.73323L23.2887 17.8096C23.119 17.9882 22.9172 18.1299 22.6949 18.2266C22.4726 18.3233 22.2342 18.373 21.9935 18.373C21.7527 18.373 21.5143 18.3233 21.292 18.2266C21.0697 18.1299 20.8679 17.9882 20.6982 17.8096L10.1016 6.73323L12.0449 4.70156L21.9907 15.0976L31.9366 4.69964Z' />
                        </svg>
                    </div>
                    {/* SHOW */}
                    {/* CURRENT LAB USAGE BY THE CURRENT TIME */}
                    <div className='flex flex-row place-items-center justify-between bg-[#69AF4E] text-white font-medium p-1 px-3.5'>
                        <p className='text-sm'>07:00-09:00 &gt; XII PPLG 2</p>
                        <div className='flex flex-row place-items-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                viewBox='0 0 15 15'
                                style={{ fill: 'rgb(255, 255, 255)' }}>
                                <path d='M5 1.25C4.3125 1.25 3.75 1.8125 3.75 2.5L3.75625 4.4875C3.75625 4.81875 3.8875 5.13125 4.11875 5.36875L6.25 7.5L4.11875 9.64375C3.8875 9.875 3.75625 10.1938 3.75625 10.525L3.75 12.5C3.75 13.1875 4.3125 13.75 5 13.75H10C10.6875 13.75 11.25 13.1875 11.25 12.5V10.525C11.25 10.1938 11.1188 9.875 10.8875 9.64375L8.75 7.5L10.8812 5.375C11.1188 5.1375 11.25 4.81875 11.25 4.4875V2.5C11.25 1.8125 10.6875 1.25 10 1.25H5ZM10 10.5688V11.875C10 12.2188 9.71875 12.5 9.375 12.5H5.625C5.28125 12.5 5 12.2188 5 11.875V10.5688C5 10.4 5.06875 10.2438 5.18125 10.125L7.5 7.8125L9.81875 10.1312C9.93125 10.2437 10 10.4062 10 10.5688Z' />
                            </svg>
                            <p className='text-sm'>Dipakai</p>
                        </div>
                    </div>
					{/* DROPDOWN ITEM OF UNCOMING OR PASSED USAGE */}
                    <div className='flex flex-row place-items-center justify-between bg-[#D69595] text-[#936363] font-medium p-1 px-3.5'>
                        <p className='text-sm'>07:00-09:00 &gt; XII PPLG 2</p>
                        <div className='flex flex-row place-items-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='15'
                                height='15'
                                viewBox='0 0 15 15'
                                style={{ fill: '#936363' }}>
                                <path d='M1.70313 13.125C1.58854 13.125 1.48438 13.0965 1.39063 13.0394C1.29688 12.9823 1.22396 12.9067 1.17188 12.8125C1.11979 12.7183 1.09125 12.6167 1.08625 12.5075C1.08125 12.3983 1.10979 12.2917 1.17188 12.1875L6.95313 2.1875C7.01563 2.08333 7.09646 2.00521 7.19563 1.95312C7.29479 1.90104 7.39625 1.875 7.5 1.875C7.60375 1.875 7.70542 1.90104 7.805 1.95312C7.90459 2.00521 7.98521 2.08333 8.04688 2.1875L13.8281 12.1875C13.8906 12.2917 13.9194 12.3985 13.9144 12.5081C13.9094 12.6177 13.8806 12.7192 13.8281 12.8125C13.7756 12.9058 13.7027 12.9815 13.6094 13.0394C13.516 13.0973 13.4119 13.1258 13.2969 13.125H1.70313ZM2.78125 11.875H12.2188L7.5 3.75L2.78125 11.875ZM7.5 11.25C7.67709 11.25 7.82563 11.19 7.94563 11.07C8.06563 10.95 8.12542 10.8017 8.125 10.625C8.12459 10.4483 8.06459 10.3 7.945 10.18C7.82542 10.06 7.67709 10 7.5 10C7.32292 10 7.17459 10.06 7.055 10.18C6.93542 10.3 6.87542 10.4483 6.875 10.625C6.87459 10.8017 6.93459 10.9502 7.055 11.0706C7.17542 11.191 7.32375 11.2508 7.5 11.25ZM7.5 9.375C7.67709 9.375 7.82563 9.315 7.94563 9.195C8.06563 9.075 8.12542 8.92667 8.125 8.75V6.875C8.125 6.69792 8.065 6.54958 7.945 6.43C7.825 6.31042 7.67667 6.25042 7.5 6.25C7.32334 6.24958 7.175 6.30958 7.055 6.43C6.935 6.55042 6.875 6.69875 6.875 6.875V8.75C6.875 8.92708 6.935 9.07563 7.055 9.19563C7.175 9.31563 7.32334 9.37542 7.5 9.375Z' />
                            </svg>
                            <p className='text-sm'>Selesai</p>
                        </div>
                    </div>
                    <div className='flex flex-row place-items-center justify-between bg-[#D69595] text-[#936363] font-medium p-1 px-3.5'>
                        <p className='text-sm'>07:00-09:00 &gt; XII PPLG 2</p>
                        <div className='flex flex-row place-items-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='15'
                                height='15'
                                viewBox='0 0 15 15'
                                style={{ fill: '#936363' }}>
                                <path d='M1.70313 13.125C1.58854 13.125 1.48438 13.0965 1.39063 13.0394C1.29688 12.9823 1.22396 12.9067 1.17188 12.8125C1.11979 12.7183 1.09125 12.6167 1.08625 12.5075C1.08125 12.3983 1.10979 12.2917 1.17188 12.1875L6.95313 2.1875C7.01563 2.08333 7.09646 2.00521 7.19563 1.95312C7.29479 1.90104 7.39625 1.875 7.5 1.875C7.60375 1.875 7.70542 1.90104 7.805 1.95312C7.90459 2.00521 7.98521 2.08333 8.04688 2.1875L13.8281 12.1875C13.8906 12.2917 13.9194 12.3985 13.9144 12.5081C13.9094 12.6177 13.8806 12.7192 13.8281 12.8125C13.7756 12.9058 13.7027 12.9815 13.6094 13.0394C13.516 13.0973 13.4119 13.1258 13.2969 13.125H1.70313ZM2.78125 11.875H12.2188L7.5 3.75L2.78125 11.875ZM7.5 11.25C7.67709 11.25 7.82563 11.19 7.94563 11.07C8.06563 10.95 8.12542 10.8017 8.125 10.625C8.12459 10.4483 8.06459 10.3 7.945 10.18C7.82542 10.06 7.67709 10 7.5 10C7.32292 10 7.17459 10.06 7.055 10.18C6.93542 10.3 6.87542 10.4483 6.875 10.625C6.87459 10.8017 6.93459 10.9502 7.055 11.0706C7.17542 11.191 7.32375 11.2508 7.5 11.25ZM7.5 9.375C7.67709 9.375 7.82563 9.315 7.94563 9.195C8.06563 9.075 8.12542 8.92667 8.125 8.75V6.875C8.125 6.69792 8.065 6.54958 7.945 6.43C7.825 6.31042 7.67667 6.25042 7.5 6.25C7.32334 6.24958 7.175 6.30958 7.055 6.43C6.935 6.55042 6.875 6.69875 6.875 6.875V8.75C6.875 8.92708 6.935 9.07563 7.055 9.19563C7.175 9.31563 7.32334 9.37542 7.5 9.375Z' />
                            </svg>
                            <p className='text-sm'>Selesai</p>
                        </div>
                    </div>
                    <div className='flex flex-row place-items-center justify-between bg-[#BAD1B2] text-[#78946d] font-medium p-1 px-3.5'>
                        <p className='text-sm'>07:00-09:00 &gt; XII PPLG 2</p>
                        <div className='flex flex-row place-items-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='15'
                                height='15'
                                viewBox='0 0 15 15'
                                style={{ fill: '#78946d' }}>
                                <path d='M5.96886 9.46875L11.2657 4.17188C11.3907 4.04688 11.5366 3.98438 11.7032 3.98438C11.8699 3.98438 12.0157 4.04688 12.1407 4.17188C12.2657 4.29688 12.3282 4.44542 12.3282 4.6175C12.3282 4.78958 12.2657 4.93792 12.1407 5.0625L6.40636 10.8125C6.28136 10.9375 6.13553 11 5.96886 11C5.8022 11 5.65636 10.9375 5.53136 10.8125L2.84386 8.125C2.71886 8 2.65886 7.85167 2.66386 7.68C2.66886 7.50833 2.73407 7.35979 2.85949 7.23438C2.9849 7.10896 3.13345 7.04646 3.30511 7.04687C3.47678 7.04729 3.62511 7.10979 3.75011 7.23438L5.96886 9.46875Z' />
                            </svg>
                            <p className='text-sm'>Selesai</p>
                        </div>
                    </div>
                    <div className='flex flex-row place-items-center bg-[#A3A3A3] text-[#515151] font-medium p-1 px-3.5'>
                        <p className='text-sm'>07:00-09:00 &gt; XII PPLG 2</p>
                    </div>
                </div>
            </section>
			{/* CAN ONLY BE SEE BY ADMIN */}
			{/* BUT FOR NOW JUST DISPLAY IT */}
			{/* BECAUSE I HAVEN'T MADE AUTHENCATION FOR THE USER AND ADMIN */}
			<AnnoucementButton/>
			<AnnoucementModal/>
        </div>
    );
}
