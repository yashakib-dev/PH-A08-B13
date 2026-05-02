import React from 'react';

const Stats = () => {
    return (
        <>
         <div className='md:flex  justify-center py-8 space-y-4 bg-[#351E11]'>
            
            <div className=' text-center lg:mr-30'>
                <p className='md:text-6xl text-5xl font-bold text-[#FFFFFF]'>1200+</p> <br />
                <p className='md:text-xl text-sm font-medium text-[#ffffff96]'>Products</p>
            </div>
            <div className=' text-center md:mr-2 md:ml-2 md:border-r-2 md:border-l-2 text-[white]/50 md:px-40'>
                <p className='md:text-6xl text-5xl font-bold text-[#FFFFFF]'>50+</p> <br />
                <p className='md:text-xl text-sm mr-4 font-medium text-[#ffffff96]'>Top Brands</p>
            </div>
            <div className=' text-center lg:ml-30 '>
                <p className='md:text-6xl text-5xl font-bold text-[#FFFFFF]'>98%</p> <br />
                <p className='md:text-xl text-sm font-medium text-[#ffffff96]'>Happy Customers</p>
            </div>
        
        
        </div>   
        </>
    );
};

export default Stats;