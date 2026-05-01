import Image from 'next/image';
import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa6';
import { FcRating } from 'react-icons/fc';

const productsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const products = await res.json();
  return products;
};

const ProductsDetailsPage = async({params}) => {
      const products = await productsPromise();
  const { id } = await params;
  

  const product = products.find((product) => String(product.id) === id);

  if (!product) return <h1 className='text-5xl'> No Product found!</h1>;

  const {category,image,description,stock,rating,price,brand,name} = product;

    return (
        <div className="my-20 container lg:w-full min-h-screen w-[90%] mx-auto space-y-6">
            <div className='lg:flex justify-between items-center gap-6'>
                <div>
                <Image src={image} width={900} height={900} alt={name}
                className='rounded-xl mb-4'></Image>
                </div>

                <div className='space-y-6 '>
                        <h3 className='text-[#FF7B24] text-xl font-medium'>{category}</h3>
                        <h2 className='lg:text-6xl md:text-5xl text-4xl font-bold'>{name}</h2>
                        <p className='text-gray-400 lg:text-lg'>by {brand}</p>
                        <div className="w-fit flex items-center gap-2 ">
                        <p className='font-bold'>{rating}</p>
                        <FaRegStar className="h-5 w-5 font-bold" />
                        </div>
                        <p className='text-6xl font-bold text-[#FF7B24]'>${price}</p>
                        <p className='text-gray-500 lg:text-lg'>{description}</p>
                        <p className='font-bold text-[green]'>In Stock ({stock} left)</p>

                    
                       <div className='flex gap-4'>
                            <button className='btn  rounded-3xl  w-35 h-12 bg-[#000000] hover:bg-[#FF7B24] text-white' ><BsCart3 />Add to Cart</button>
                            <button className='btn  rounded-3xl w-35 h-12 bg-[#FF7B24] text-white'>Buy Now</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetailsPage;