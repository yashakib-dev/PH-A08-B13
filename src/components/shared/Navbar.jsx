import Link from 'next/link';
import React from 'react';
import { RiHome2Line } from 'react-icons/ri';
import NavLinks from './NavLinks';
import { AiOutlineProduct } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto py-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content font-semibold bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><Link href="/">Home</Link></li>
         <li>
             <Link href="/timeline">Products</Link>
         </li>
        <li><Link href="/stats">My Profile</Link></li>
      </ul>
    </div>
    <h2 className="font-bold text-4xl ">Sun<span className='text-[#FF7B24]'>Cart</span></h2>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu font-semibold gap-2  text-white rounded-md menu-horizontal px-1">
      <li><NavLinks href="/"><RiHome2Line />Home</NavLinks></li>
      <li>
        <NavLinks href="/timeline"><AiOutlineProduct className='w-4 h-4' />Products</NavLinks>
      </li>
      <li><NavLinks href="/stats"><CgProfile />My Profile</NavLinks></li>
    </ul>
  </div>


  <div className="navbar-end lg:flex">
    <div className='flex lg:gap-3 gap-1'>
        <button className='btn rounded-3xl  lg:w-25 lg:h-12 font-bold bg-transparent hover:border hover:border-orange-500 hover:text-[#FF7B24] '>Login</button>
        <button className='btn rounded-3xl  lg:w-28 lg:h-12 font-bold text-[white] bg-[#FF7B24]'>Register</button>
    </div>
  </div>

</div>
        </div>
    );
};

export default Navbar;