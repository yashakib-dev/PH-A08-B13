import Hero from '@/components/Hero';
import PopularProducts from '@/components/homepage/PopularProducts';
import Stats from '@/components/homepage/Stats';
import SummerCareTips from '@/components/homepage/SummerCareTips';
import TopBrands from '@/components/homepage/TopBrands';


const page = () => {
  return (
    <div>  
      <Hero></Hero>
      <Stats></Stats>
      <PopularProducts></PopularProducts>
      <SummerCareTips></SummerCareTips>
      <TopBrands></TopBrands>
      
    </div>
  );
};

export default page;