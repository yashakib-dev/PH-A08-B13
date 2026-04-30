import Hero from '@/components/Hero';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default page;