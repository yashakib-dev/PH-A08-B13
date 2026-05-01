"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({href, children}) => {
    const pathname = usePathname();
    
    return (
        <Link href={href}
        className={`${pathname === href ? "bg-[#D4924A] rounded-md text-black font-bold" : " "}text-white`}
        >{children}</Link>
    );
};

export default NavLinks;