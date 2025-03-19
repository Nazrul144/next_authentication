import Link from 'next/link';
import React from 'react';

const Navbar = () => {
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
                    
                    <div className='flex justify-end gap-3 bg-red-500 mr-auto'>
                    {
                        navlinks?.map((navlink)=> <Link key={navlink.path} href={navlink.path}>{navlink.title}</Link>)
                    }
                    </div>
                    <div>Login</div>
            </div>
        </div>
    );
}

export default Navbar;
