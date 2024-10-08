'use client';
import React from 'react';
import { IoExit } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='cons- h-[53px] w-[1200px] flex items-center justify-between border-b-[1px] border-b-green-300 fixed bg-white top-0 left-0 right-0 mx-auto my-0 z-[10]'>
            <Link href={'/home'}>
                <div className='cons_hegitimg'>
                    <Image width={150} height={34.3} className='w-[150px] h-[34.3px]' src='/navbar.svg' alt="Navbar" />
                </div>
            </Link>
            <div className='cons_menu'>
                <ul className='cons_menu_ul flex w-[351px] h-[px] justify-between'>
                    <li className={`relative text-[#3D3D3D] font-[400] text-[16px] leading-[20.11px] cons_menu_ul_li ${pathname === '/home' ? 'before:content-[""] before:absolute before:w-full before:h-[2px] before:bg-green-500 before:bottom-[-16px] before:left-0 font-[700]' : ''}`}>
                        <Link href={'/home'}>Home</Link>
                    </li>
                    <li className={`relative text-[#3D3D3D] font-[400] text-[16px] leading-[20.11px] cons_menu_ul_li ${pathname === '/shop' ? 'before:content-[""] before:absolute before:w-full before:h-[2px] before:bg-green-500 before:bottom-[-16px] before:left-0 font-[700]' : ''}`}>
                        <Link href={'/shop'}>Shop</Link>
                    </li>
                    <li className={`relative text-[#3D3D3D] font-[400] text-[16px] leading-[20.11px] cons_menu_ul_li ${pathname === '/plantcare' ? 'before:content-[""] before:absolute before:w-full before:h-[2px] before:bg-green-500 before:bottom-[-16px] before:left-0 font-[700]' : ''}`}>
                        <Link href={'/plantcare'}>PlantCare</Link>
                    </li>
                    <li className={`relative text-[#3D3D3D] font-[400] text-[16px] leading-[20.11px] cons_menu_ul_li ${pathname === '/blogs' ? 'before:content-[""] before:absolute before:w-full before:h-[2px] before:bg-green-500 before:bottom-[-16px] before:left-0 font-[700]' : ''}`}>
                        <Link href={'/blogs'}>Blogs</Link>
                    </li>
                </ul>
            </div>
            <div className='cons_left flex items-center gap-[30px] cons_left'>
                <Image width={20} height={20} className='w-[20px] h-[20px]' src='/search.svg' alt="search" />
                <Image  width={29} height={24} className='w-[29px] h-[24px]' src='/shop.svg' alt="shop" />
                <div className='flex w-[100px] h-[35px] rounded-[10px] bg-[#46A358] items-center gap-[10px]'>
                    <IoExit className='w-[20px] h-[20px] ml-[15px]' />
                    <p className='text-[16px] font-[500] leading-[20.11px] text-[#FFFFFF]'>Kirish</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
