import Image from 'next/image';
import React from 'react';
import HeroImg from '../../public/bannerBg.png'

import { FaArrowRightLong } from 'react-icons/fa6';

const Hero = () => {
    return (
       <div className="hero bg-linear-to-r from-[#D4924A] to-[#b0713298] min-h-[500px]">
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
      <button className='btn border-0 text-lg rounded-3xl  bg-linear-to-r from-[#D4924A] to-[#B07232] hover:bg-linear-to-r hover:from-[#d4914abe] hover:to-[#b071326e] h-12 hover:shadow-xl w-35'>Buy Now <FaArrowRightLong /> </button>
    </div>
  </div>
</div>
    );
};

export default Hero;