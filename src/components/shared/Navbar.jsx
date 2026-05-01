import Link from 'next/link';
import React from 'react';
import { RiHome2Line } from 'react-icons/ri';
import NavLinks from './NavLinks';
import { AiOutlineProduct } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <div className='bg-[#351E11] shadow-sm'>
            <div className="navbar container mx-auto py-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content font-semibold bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><Link href="/">Home</Link></li>
         <li>
             <Link href="/products">Products</Link>
         </li>
        <li><Link href="/my-profile" >My Profile</Link></li>
      </ul>
    </div>
    <h2 className="font-bold text-4xl text-white ">Sun<span className='text-[#D4924A]'>Cart</span></h2>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu font-semibold gap-2  text-white rounded-md menu-horizontal px-1">
      <li><NavLinks href="/"><RiHome2Line />Home</NavLinks></li>
      <li>
        <NavLinks href="/products"><AiOutlineProduct className='w-4 h-4' />Products</NavLinks>
      </li>
      <li ><NavLinks href="/my-profile" ><CgProfile />My Profile</NavLinks></li>
    </ul>
  </div>


  <div className="navbar-end lg:flex">
    <div className='flex lg:gap-3 gap-1'>
        <Link href={'/login'} className='btn rounded-3xl  lg:w-25 lg:h-10 font-bold bg-transparent hover:border hover:border-[#D4924A] hover:text-[#D4924A] text-white '>Login</Link>
        <Link href={'/register'} className='btn border-0 text-lg rounded-3xl bg-linear-to-r from-[#D4924A] to-[#B07232] hover:bg-linear-to-r hover:from-[#d4914abe] hover:to-[#b071326e]'>Register</Link>
    </div>
  </div>

</div>
        </div>
    );
};

export default Navbar;