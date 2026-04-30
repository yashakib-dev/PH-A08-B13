import Image from 'next/image';
import React from 'react';
import HeroImg from '../../public/bannerBg.png'

const Hero = () => {
    return (
       <div className="hero bg-base-300 min-h-[500px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
    alt="HeroBg"
    width={500}
    height={500}
      src={HeroImg}
      className="w-full "
      
    />
    <div>
      <h1 className="text-7xl  font-bold">Summer Sale <br /> 50% OFF</h1>
      <p className="py-6 text-lg text-[black]/80">
        Discover curated summer essentials from beach-ready styles to skincare that glows. Enjoy upto 50% off on all sunglasses.
      </p>
      <button className="btn btn-primary">Shop Now</button>
    </div>
  </div>
</div>
    );
};

export default Hero;