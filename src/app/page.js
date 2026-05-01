import Hero from '@/components/Hero';
import PopularProducts from '@/components/homepage/PopularProducts';
import SummerCareTips from '@/components/homepage/SummerCareTips';
import TopBrands from '@/components/homepage/TopBrands';
import Footer from '@/components/shared/Footer';

import Navbar from '@/components/shared/Navbar';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <PopularProducts></PopularProducts>
      <SummerCareTips></SummerCareTips>
      <TopBrands></TopBrands>
      <Footer></Footer>
    </div>
  );
};

export default page;