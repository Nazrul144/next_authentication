'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const navlinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
    ]
    return (
        <div>
            <div className='flex bg-orange-500 justify-between text-xl text-white lg:px-20 px-2'>
                    
                    <div className='flex justify-end gap-3  '>
                    {
                        navlinks?.map((navlink)=> <Link className={`${pathName === navlink.path ? "font-bold text-purple-700" : ""}`} key={navlink.path} href={navlink.path}>{navlink.title}</Link>)
                    }
                    </div>
                    <div>Login</div>
            </div>
        </div>
    );
}

export default Navbar;
