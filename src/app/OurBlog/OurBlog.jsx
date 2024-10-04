import React from 'react';
import { ourblog } from '../Js/about';
import Link from 'next/link';
import Image from 'next/image';

const OurBlog = () => {
    return (
        <div className='w-[1202px]'>
            <div>
                <h1 className='font-[700] text-[30px] leading-[16px] text-[#3D3D3D] text-center'>
                    Our Blog Posts
                </h1>
                <p className='font-[400] text-[14px] leading-[24px] text-gray-400 text-center mt-[10px]'>
                    We are an online plant shop offering a wide range of cheap and trendy plants.
                </p>
            </div>
            <div className='flex justify-between mt-[20px]'>
                {ourblog.map((our) => (
                    <Link key={our.id} href={`/blog/${our.id}`} passHref>
                        <div>
                            <Image width={268} height={195.17} className='w-[268px] h-[195.17px]' src={our.img} alt={our.title} />
                            <div className='w-[242px] h-[146px] p-[10px]'>
                                <p className='font-[500] text-[14px] text-[#46A358]'>{our.data}</p>
                                <p className='font-[700] text-[20px] leading-[26px] text-[#3D3D3D] my-[5px]'>{our.title}</p>
                                <p className='font-[400] text-[14px] text-[#727272] leading-[22px]'>{our.description}</p>
                                <p className='font-[400] text-[14px] leading-[16px] text-[#3D3D3D] mt-[3px]'>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default OurBlog;
