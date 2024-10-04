import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { footermenu } from '@/app/Js/about';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='mt-[40px] mb-[10px]'>
            <div className='flex justify-between items-center w-[1200px] h-[88px] bg-[#46A358]/[10%] px-[20px]'>
                <div>
                <Image layout="responsive" width={100} height={100} src="/navbar.svg" alt="" />
                </div>
                <div className='flex items-center gap-[10px]'>
                    <FaLocationDot />
                    <p className='w-[176px] text-[14px] font-[400]'>
                        70 West Buckingham Ave.
                        Farmingdale, NY 11735
                    </p>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <MdEmail />
                    <p>contact@greenshop.com</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <FiPhoneCall />
                    <p>+88 01911 717 490</p>
                </div>
            </div>
            <div className='flex mt-[30px] px-[10px]'>
                <div className='flex'>
                    {
                        footermenu.map((item) => {
                            return (
                                <div key={item.id} className='w-[295px]'>
                                    <h1 className='font-[700] text-[18px] leading-[16px]'>{item.title}</h1>
                                    <p className='font-[400] text-[14px] leading-[30px]'>{item.pone}</p>
                                    <p className='font-[400] text-[14px] leading-[30px]'>{item.ptwo}</p>
                                    <p className='font-[400] text-[14px] leading-[30px]'>{item.pthree}</p>
                                    <p className='font-[400] text-[14px] leading-[30px]'>{item.pfour}</p>
                                    <p className='font-[400] text-[14px] leading-[30px]'>{item.pfive}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className='font-[700] text-[18px] leading-[16px]'>Social Media</h1>
                    <div className='flex mt-[10px] gap-[10px]'>
                        <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                            <Image width={30} height={30} className='w-[30px] h-[30px]' src="/Facebook.svg" alt="" />
                        </div>
                        <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                            <Image width={30} height={30}  src="/Instagram.svg" alt="" />
                        </div>
                        <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                            <Image  width={20} height={20}  src="/Twitter.svg" alt="" />
                        </div>
                        <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                            <Image  width={20} height={20}  src="/Linkedin.svg" alt="" />
                        </div>
                        <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                            <Image width={20} height={20} src="/Union.svg" alt="" />
                        </div>
                    </div>
                    <div className='mt-[20px]'>
                        <h1 className='font-[700] text-[18px] leading-[16px]'>We accept</h1>
                        <Image width={224} height={26} className='w-[224px] h-[26px] mt-[20px]' src="/image 16.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
