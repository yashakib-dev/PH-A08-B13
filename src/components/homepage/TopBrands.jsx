import React from 'react';

const TopBrands = () => {
    return (
        <div className='my-20 container lg:w-full w-[90%] mx-auto space-y-6'>
            <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold ">Top <span className="text-[#FF7B24]">Brands</span></h2>
            <p  className="text-lg text-black/80">We partner with the best summer lifestyle brands in the world</p>

            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8 py-10' >
                <div className='shadow border mx-auto border-gray-300 rounded-2xl p-10'>
                    <div className='text-5xl mr-1 w-fit  '>🕶️</div>
                    <h4 className=" font-medium w-fit text-xl">Rayban</h4>
                    
                </div>
                <div className='shadow border mx-auto border-gray-300 rounded-2xl p-10'>
                    <div className='text-5xl w-fit pb-2 pl-2'>💄</div>
                    <h4 className=" font-medium w-fit text-xl">GrowLab</h4>
                    
                </div>
                <div className='shadow border mx-auto border-gray-300 rounded-2xl p-10'>
                    <div className='text-5xl w-fit pb-2 '>👗</div>
                    <h4 className=" font-medium w-fit text-xl">WaveCo</h4>
                    
                </div>
                <div className='shadow border mx-auto pr-5 border-gray-300 rounded-2xl p-10'>
                    <div className='text-5xl w-fit pb-2 pl-5 '>🪭</div>
                    <h4 className=" font-medium w-fit text-xl">CoolBreeze</h4>
                    
                </div>
                <div className='shadow border mx-auto border-gray-300 rounded-2xl p-10'>
                    <div className='text-5xl w-fit pb-2 pl-4 '>🩴</div>
                    <h4 className=" font-medium w-fit text-xl">OceanWalk</h4>
                    
                </div>
            </div>
        </div>
    );
};

export default TopBrands;