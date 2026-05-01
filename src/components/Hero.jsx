import Image from 'next/image';
import React from 'react';
import HeroImg from '../../public/bannerBg.png'

import { FaArrowRightLong } from 'react-icons/fa6';

const Hero = () => {
    return (
       <div className="hero bg-[#FFF8F0] min-h-[500px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
    alt="HeroBg"
    width={500}
    height={500}
      src={HeroImg}
      className="w-full "
      
    />
    <div>
      <h1 className="lg:text-7xl md:text-5xl text-4xl animate__animated animate__tada animate__repeat-2 font-bold">Summer Sale <br /> 50% OFF</h1>
      <p className="py-6 lg:text-lg text-[black]/80">
        Discover curated summer essentials from beach-ready styles to skincare that glows. Enjoy upto 50% off on all sunglasses.
      </p>
      <button className='btn  rounded-3xl w-35 h-12 font-bold text-[white] bg-[#FF7B24]'>Buy Now <FaArrowRightLong /> </button>
    </div>
  </div>
</div>
    );
};

export default Hero;