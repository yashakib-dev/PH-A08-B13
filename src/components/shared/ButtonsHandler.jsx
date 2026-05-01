"use client";

import toast from "react-hot-toast";
import { BsCart3 } from "react-icons/bs";

const ButtonsHandler = ({product}) => {
  return (
    <div className="flex gap-4">
      <button 
      onClick={()=>toast.success(`Added to cart`)}
      className="btn  rounded-3xl  w-35 h-12 bg-[#351E11] hover:bg-[#D4924A] text-white">
        <BsCart3 />
        Add to Cart
      </button>

      <button
      onClick={()=>toast.success(`Order successful!`)}
      className=" w-35 h-12 btn bg-[#D4924A] rounded-3xl text-white hover:bg-[#351E11]">
        Buy Now
      </button>
    </div>
  );
};

export default ButtonsHandler;
