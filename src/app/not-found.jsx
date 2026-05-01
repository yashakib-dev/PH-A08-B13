import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const notFound = () => {
    return (
        <div >
           <div className='flex bg-[#FFF8F0] flex-col gap-6 text-6xl font-bold justify-center items-center h-screen'>
            <p className='text-black'>This page is not found!</p>
            <Link href={'/'}><button className='btn bg-[#000000] rounded-lg  text-white w-55 hover:bg-[#FF7B24]  h-13'>Back to Home<FaArrowRightLong></FaArrowRightLong></button> </Link>
           </div>
           
        </div>
    );
};

export default notFound;