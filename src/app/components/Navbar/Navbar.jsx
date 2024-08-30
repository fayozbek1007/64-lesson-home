'use client';
import React from 'react';
import { IoExit } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='h-[53px] w-[1200px] flex items-center justify-between border-b-[1px] border-b-green-300 fixed bg-white top-0 left-0 right-0 mx-auto my-0 z-[10]'>
            <div>
                <img className='w-[150px] h-[34.3px]' src='/navbar.svg' alt="Navbar" />
            </div>
            <div>
                <ul className='flex w-[351px] h-[px] justify-between'>
                    <li className={`relative text-[#3D3D3D] font-[400] text-[16px] leading-[20.11px] ${pathname === '/home' ? 'before:content-[""] before:absolute before:w-full before:h-[2px] before:bg-green-500 before:bottom-[-16px] before:left-0 font-[700]' : ''}`}>
                        <Link href={'/home'}>Home</Link>
                    </li>
                    <li className={`relative text-[#3D3D3D] font-[400] text-[16px] leading-[20.11px] ${pathname === '/shop' ? 'before:content-[""] before:absolute before:w-full before:h-[2px] before:bg-green-500 before:bottom-[-16px] before:left-0 font-[700]' : ''}`}>
                        <Link href={'/shop'}>Shop</Link>
                    </li>
                    <li className={`relative text-[#3D3D3D] font-[400] text-[16px] leading-[20.11px] ${pathname === '/plantcare' ? 'before:content-[""] before:absolute before:w-full before:h-[2px] before:bg-green-500 before:bottom-[-16px] before:left-0 font-[700]' : ''}`}>
                        <Link href={'/plantcare'}>PlantCare</Link>
                    </li>
                    <li className={`relative text-[#3D3D3D] font-[400] text-[16px] leading-[20.11px] ${pathname === '/blogs' ? 'before:content-[""] before:absolute before:w-full before:h-[2px] before:bg-green-500 before:bottom-[-16px] before:left-0 font-[700]' : ''}`}>
                        <Link href={'/blogs'}>Blogs</Link>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-[30px]'>
                <img className='w-[20px] h-[20px]' src='/search.svg' alt="search" />
                <img className='w-[29px] h-[24px]' src='/shop.svg' alt="shop" />
                <div className='flex w-[100px] h-[35px] rounded-[10px] bg-[#46A358] items-center gap-[10px]'>
                    <IoExit className='w-[20px] h-[20px] ml-[15px]' />
                    <p className='text-[16px] font-[500] leading-[20.11px] text-[#FFFFFF]'>Kirish</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
