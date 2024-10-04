'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';

const Page = () => {
    const [selectedImg, setSelectedImg] = useState('/Shop1.svg');

    const handleImgClick = (imgSrc) => {
        setSelectedImg(imgSrc);
    };

    return (
        <div className='mt-[60px] '>
            <div className='flex mt-[20px] items-center'>
                <h1 className='font-[600] text-[18px]'>Home /</h1>
                <p className='font-[400] text-[14px]'> Shop</p>
            </div>
            <div className='flex gap-[100px]'>
                <div className='flex w-[550px]'>
                    <div className='w-[110px]'>
                        <div
                            className={`cursor-pointer mt-[30px] ${selectedImg === '/Shop1.svg' ? 'border-2 border-green-500' : ''}`}
                            onClick={() => handleImgClick('/Shop1.svg')}
                        >
                            <Image src="/Shop1.svg" alt="Shop 1" width={110} height={110} />
                        </div>
                        <div
                            className={`cursor-pointer mt-[30px] ${selectedImg === '/Shop4.svg' ? 'border-2 border-green-500' : ''}`}
                            onClick={() => handleImgClick('/Shop4.svg')}
                        >
                            <Image src="/Shop4.svg" alt="Shop 4" width={110} height={110} />
                        </div>
                        <div
                            className={`cursor-pointer mt-[30px] ${selectedImg === '/Shop3.svg' ? 'border-2 border-green-500' : ''}`}
                            onClick={() => handleImgClick('/Shop3.svg')}
                        >
                            <Image src="/Shop3.svg" alt="Shop 3" width={110} height={110} />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <Image src={selectedImg} alt="Selected" width={402} height={404} className='w-[402px] h-[404px]' />
                    </div>
                </div>
                <div className='w-[550px]'>
                    <h1 className='font-[700] text-[28px] text-[#3D3D3D]'>Barberton Daisy</h1>
                    <div className='flex items-center justify-between'>
                        <p className='text-[#46A358] font-[500] text-[16px]'>$119.00</p>
                        <div className='flex items-center gap-[15px]'>
                            <Image className='w-[15px] h-[15px]' src="/star.svg" alt="Star" width={15} height={15} />
                            <Image className='w-[15px] h-[15px]' src="/star.svg" alt="Star" width={15} height={15} />
                            <Image className='w-[15px] h-[15px]' src="/star.svg" alt="Star" width={15} height={15} />
                            <Image className='w-[15px] h-[15px]' src="/star.svg" alt="Star" width={15} height={15} />
                            <Image className='w-[15px] h-[15px]' src="/star2.svg" alt="Star 2" width={15} height={15} />
                            <p>19 Customer Review</p>
                        </div>
                    </div>
                    <div className='mt-[20px]'>
                        <h2 className='font-[600] text-[18px] text-[#3D3D3D]'>Short Description:</h2>
                        <p className='mt-[10px] text-[#727272] text-[15px] font-[400]'>
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
                        </p>
                    </div>
                    <div className='mt-[20px]'>
                        <h1 className='font-[500] text-[16px] text-[#3D3D3D]'>Share this products:</h1>
                        <div className='flex mt-[10px] gap-[10px]'>
                            <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                                <Image src="/Facebook.svg" alt="Facebook" width={20} height={20} />
                            </div>
                            <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                                <Image src="/Instagram.svg" alt="Instagram" width={20} height={20} />
                            </div>
                            <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                                <Image src="/Twitter.svg" alt="Twitter" width={20} height={20} />
                            </div>
                            <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                                <Image src="/Linkedin.svg" alt="Linkedin" width={20} height={20} />
                            </div>
                            <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                                <Image src="/Union.svg" alt="Union" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-[161px]'>
                    <h1 className='border-b-green-500 border-b-[2px]'>Product Description</h1>
                </div>
                <p className='font-[500] text-[15px] text-[#727272] mt-[15px]'>
                    The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h2 className='font-[600] text-[16px] text-[#3D3D3D]'>Living Room:</h2>
                <p className='font-[500] text-[15px] text-[#727272]'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.</p>
                <h2 className='font-[600] text-[16px] text-[#3D3D3D]'>Dining Room:</h2>
                <p className='font-[500] text-[15px] text-[#727272]'>The benefits of houseplants are endless.</p>
                <h2 className='font-[600] text-[16px] text-[#3D3D3D]'>Office:</h2>
                <p className='font-[500] text-[15px] text-[#727272]'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.</p>
            </div>
        </div>
    );
}

export default Page;
