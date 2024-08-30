'use client';
import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';

const Page = () => {
    const [selectedImg, setSelectedImg] = useState('/Shop1.svg');

    const handleImgClick = (imgSrc) => {
        setSelectedImg(imgSrc);
    };

    return (
        <div className='mt-[60px] '>
            <div className='flex mt-[20px] items-center'>
                <h1 className='font-[600] text-[18px]'>
                    Home /
                </h1>
                <p className='font-[400] text-[14px]'> Shop</p>
            </div>
            <div className='flex gap-[100px]'>
                <div className='flex w-[550px]'>
                    <div className='w-[110px]'>
                        <div
                            className={`cursor-pointer mt-[30px] ${selectedImg === '/Shop1.svg' ? 'border-2 border-green-500' : ''}`}
                            onClick={() => handleImgClick('/Shop1.svg')}
                        >
                            <img src="/Shop1.svg" alt="Shop 1" />
                        </div>
                        <div
                            className={`cursor-pointer mt-[30px] ${selectedImg === '/Shop4.svg' ? 'border-2 border-green-500' : ''}`}
                            onClick={() => handleImgClick('/Shop4.svg')}
                        >
                            <img src="/Shop4.svg" alt="Shop 4" />
                        </div>
                        <div
                            className={`cursor-pointer mt-[30px] ${selectedImg === '/Shop3.svg' ? 'border-2 border-green-500' : ''}`}
                            onClick={() => handleImgClick('/Shop3.svg')}
                        >
                            <img src="/Shop3.svg" alt="Shop 3" />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <img src={selectedImg} alt="Selected" className='w-[402px] h-[404px]' />
                    </div>
                </div>
                <div className='w-[550px]'>
                    <h1 className='font-[700] text-[28px] text-[#3D3D3D]'>
                        Barberton Daisy
                    </h1>
                    <div className='flex items-center justify-between'>
                        <p className='text-[#46A358] font-[500] text-[16px]'>
                            $119.00
                        </p>
                        <div className='flex items-center gap-[15px]'>
                            <img className='w-[15px] h-[15px]' src="/star.svg" alt="" />
                            <img className='w-[15px] h-[15px]' src="/star.svg" alt="" />
                            <img className='w-[15px] h-[15px]' src="/star.svg" alt="" />
                            <img className='w-[15px] h-[15px]' src="/star.svg" alt="" />
                            <img className='w-[15px] h-[15px]' src="/star2.svg" alt="" />
                            <p>19 Customer Review</p>
                        </div>
                    </div>
                    <div className='mt-[20px]'>
                        <h2 className='font-[600] text-[18px] text-[#3D3D3D]'>Short Description:</h2>
                        <p className='mt-[10px] text-[#727272] tect-[15px] font-[400]'>
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
                        </p>
                    </div>
                    <div className='mt-[20px]'>
                        <h1 className='font-[500] text-[16px] text-[#3D3D3D]'>
                            Share this products:
                        </h1>
                        <div className='flex mt-[10px] gap-[10px]'>
                            <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                                <img src="/Facebook.svg" alt="" />
                            </div>
                            <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                                <img src="/Instagram.svg" alt="" />
                            </div>
                            <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                                <img src="/Twitter.svg" alt="" />
                            </div>
                            <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                                <img src="/Linkedin.svg" alt="" />
                            </div>
                            <div className='py-[10px] px-[14px] border-[1px] border-green-400 rounded-[8px]'>
                                <img src="/Union.svg" alt="" />
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
                    The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                </p>
                <p className='font-[500] text-[15px] text-[#727272] mt-[20px]'>
                    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
                </p>
                <h2 className='font-[600] text-[16px] text-[#3D3D3D]'>Living Room:</h2>
                <p className='font-[500] text-[15px] text-[#727272]'>
                    The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h2 className='font-[600] text-[16px] text-[#3D3D3D]'>
                    Dining Room:
                </h2>
                <p className='font-[500] text-[15px] text-[#727272]'>
                    The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.
                </p>
                <h2 className='font-[600] text-[16px] text-[#3D3D3D]'>Office:</h2>
                <p className='font-[500] text-[15px] text-[#727272]'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='mt-[30px]'>
                <Footer />
            </div>
        </div>
    );
}

export default Page;
