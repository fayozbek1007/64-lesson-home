"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { about } from '@/app/Js/about';

const Page = () => {
    const params = useParams();
    const { id } = params;
    const selectedItem = about.find((item) => item.id.toString() === id);

    const [currentSelectedItem, setCurrentSelectedItem] = useState(null);

    useEffect(() => {
        if (selectedItem) {
            setCurrentSelectedItem(selectedItem);
        }
    }, [selectedItem]);

    if (!currentSelectedItem) {
        return <div>Item not found</div>;
    }

    const otherItems = about.filter((item) => item.id.toString() !== id);

    const handleCardClick = (item) => {
        setCurrentSelectedItem(item);
    };

    return (
        <div className='flex items-center mt-[80px] gap-[30px]'>
            <div className='w-[440px] h-[450px] flex flex-col items-center border-green-500 border-[2px]'>
                <Image
                    className='w-[380px] h-[350px] object-cover mb-4'
                    src={currentSelectedItem.img}
                    alt={currentSelectedItem.name}
                    width={380}
                    height={350}
                />
                <div className='text-center'>
                    <p className='font-[400] text-[16px]'>{currentSelectedItem.name}</p>
                    <p className='font-[700] text-[18px] text-[#46A358]'>{currentSelectedItem.cost}</p>
                </div>
            </div>
            <div>
                <p className='font-[600] text-[20px] mt-[0px] text-center text-green-600'>
                    Lost Gerbaries
                </p>
                <div className='w-[840px] grid grid-cols-3 gap-4 mt-[20px]'>
                    {otherItems.map((item) => (
                        <div
                            key={item.id}
                            className='flex flex-col items-center cursor-pointer'
                            onClick={() => handleCardClick(item)}
                        >
                            <Image className='w-[200px] h-[200px] object-cover' src={item.img} alt={item.name} width={200} height={200} />
                            <div className='text-center'>
                                <p className='font-[400] text-[16px]'>{item.name}</p>
                                <p className='font-[700] text-[18px] text-[#46A358]'>{item.cost}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
