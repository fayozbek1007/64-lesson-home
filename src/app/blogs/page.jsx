import React from 'react';
import Button from '@/app/components/Button/Button';
import OurBlog from '../OurBlog/OurBlog';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';

const Page = () => {
    return (
        <div className='mt-[60px]'>
            <div className='relative mt-[50px] w-[1200px] h-[450px] flex gap-[152px]'>
                <div className='w-[530px] flex flex-col justify-center'>
                    <p className='ml-[5px] text-[14px] leading-[16px] text-gray-400 font-[500]'>
                        Welcome to Our Blogs
                    </p>
                    <h1 className='mt-[20px] text-[70px] font-[900] leading-[70px] text-[#3D3D3D]'>
                        Let’s Make a
                        Better <span className='text-green-500'>Planet</span>
                    </h1>
                    <p className='mt-[20px] text-[14px] font-[400] leading-[24px] text-[#727272]'>
                        We are an online plant shop offering a wide range of cheap and trendy plants.
                    </p>
                    <div className='mt-[40px]'>
                        <Button>Our Blog Free</Button>
                    </div>
                </div>
                <div className='relative w-[518px] h-[518px] flex items-center justify-center'>
                    <Image className='absolute w-[135px] h-[135px] top-[345px] left-0 z-[2]' src="/NavMin.svg" alt="NavMin" />
                    <Image className='absolute w-[518px] h-[518px] top-0 left-0' src="/NavHeight.svg" alt="NavHeight" />
                </div>
            </div>
            <div className='mt-[50px]'>
                <OurBlog />
            </div>
            <div className='mt-[30px]'>
                <Footer />
            </div>
        </div>
    );
}

export default Page;
