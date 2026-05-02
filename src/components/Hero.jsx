import Image from 'next/image';
import React from 'react';
import HeroImg from '../../public/bannerBg.png'

import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';

const Hero = () => {
    return (
       <div className="hero bg-linear-to-r from-[#D4924A] to-[#b0713298] min-h-[400px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
    alt="HeroBg"
    width={300}
    height={300}
      src={HeroImg}
      className="w-full "
      
    />
    <div>
      <span className='badge mb-4 badge-soft bg-[#D4924A] shadow-xl border-white/30 font-medium '>Hot Deals🔥</span>
      <h1 className="lg:text-7xl text-5xl animate__animated animate__tada animate__repeat-2 font-bold">Summer Sale <br /> 50% OFF</h1>
      <p className="py-6 lg:text-lg text-[black]/80">
        Discover curated summer essentials from beach-ready styles to skincare that glows. Enjoy upto 50% off on all sunglasses.
      </p>
      <Link href={'/products'} className='btn border-0 text-lg rounded-3xl  bg-linear-to-r from-[#D4924A] to-[#b07132] hover:bg-linear-to-r hover:from-[#d4914abe] hover:to-[#b071326e] h-12 hover:shadow-xl w-35'>Buy Now <FaArrowRightLong /> </Link>
    </div>
  </div>
</div>
    );
};

export default Hero;