import React from 'react';

const SummerCareTips = () => {
    return (
        <div className='bg-[#FFF8F0] py-20'>
            <div className="my-20 container  lg:w-full w-[90%] mx-auto space-y-6">
    <div className='space-y-4'>
      <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold">Summer Care <span className="text-[#FF7B24]">Tips</span></h2>
      <p className="text-lg text-black/80">Essential advice to keep you safe and glowing all summer long</p>
    </div>
    <div className="grid lg:grid-cols-3 space-y-4 gap-8  md:grid-cols-2 grid-cols-1">
      <div className="text-center shadow border border-gray-200 hover:border-orange-300 p-15 rounded-xl space-y-4">
        <div className='text-5xl'>🧴</div>
        <div className="text-2xl font-bold">Sunscreen Daily</div>
        <div className="text-black/80 ">Apply SPF 50+ every 2 hours when outdoors. Reapply after swimming or sweating for maximum protection.</div>
      </div>
      <div className="text-center shadow border border-gray-200 hover:border-orange-300 p-15 rounded-xl space-y-4">
        <div className='text-5xl'>🕶️</div>
        <div className="text-2xl font-bold">UV Protection</div>
        <div className="text-black/80 ">Wear UV-blocking sunglasses to protect your eyes from harmful rays. Look for 100% UVA and UVB coverage.</div>
      </div>
      <div className="text-center h-76 shadow border border-gray-200 hover:border-orange-300 p-15 rounded-xl space-y-4">
        <div className='text-5xl'>🌊</div>
        <div className="text-2xl font-bold">Beach Smart</div>
        <div className="text-black/80 ">Seek shade between 10 AM - 4 PM, the peak UV hours. Use a beach umbrella and wear a wide-brimmed hat.</div>
      </div>
    </div>
  </div>
        </div>
  
    );
};

export default SummerCareTips;