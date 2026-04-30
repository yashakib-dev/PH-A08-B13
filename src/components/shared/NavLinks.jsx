"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({href, children}) => {
    const pathname = usePathname();
    
    return (
        <Link href={href}
        className={`${pathname === href ? "bg-[#FF7B24] rounded-md text-white font-bold" : " "}text-black`}
        >{children}</Link>
    );
};

export default NavLinks;