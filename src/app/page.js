import Hero from '@/components/Hero';
import PopularProducts from '@/components/homepage/PopularProducts';
import SummerCareTips from '@/components/homepage/SummerCareTips';

import Navbar from '@/components/shared/Navbar';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <PopularProducts></PopularProducts>
      <SummerCareTips></SummerCareTips>
    </div>
  );
};

export default page;