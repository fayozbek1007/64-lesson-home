import { categores, size } from '@/app/Js/House';
import React from 'react';
import Button from '../Button/Button';

const Categoris = () => {
    return (
        <div className='h-[900px] mt-[30px]'>
            <div className='w-[310px] p-[20px]'>
                <h1 className='font-[700] text-[18px] text-[#3D3D3D]'>
                    Categories
                </h1>
                <ul>
                    {
                        categores.map((item) => {
                            return (
                                <li key={item.id} className='flex w-[270px] justify-between mt-[15px]  transition-all duration-300  
                                hover:bg-green-400 p-2 rounded hover:text-[white]'>
                                    <p className='font-[400] text-[14px] text-[#3D3D3D] hover:text-[white] hover:font-[500]'>
                                        {item.name}
                                    </p>
                                    <p className='font-[500] text-[15px] text-[#3D3D3D] hover:text-[white]'>
                                        {item.number}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <h1 className='font-[700] text-[18px] text-[#3D3D3D] mt-[30px]'>
                    Price Range
                </h1>
                <div className='flex items-center gap-[2px] mt-[20px]'>
                    <p className='w-[20px] h-[20px] bg-green-600 rounded-full'></p>
                    <p className='w-[161px] border-[3px] border-green-600'></p>
                    <p className='w-[18px] h-[18px] bg-green-500 rounded-full'></p>
                    <p className='w-[60px] border-[2px] border-green-300'></p>
                </div>
                <div>
                    <div className='flex mt-[10px] ml-[20px] gap-[5px]'>
                        <p>Price:</p>
                        <p className='text-green-500'> $39 - $1230</p>
                    </div>
                    <div className='mt-[20px] ml-[20px]'>
                        <Button>Filter</Button>
                    </div>
                </div>
                <div>
                    <h1 className='font-[700] text-[18px] text-[#3D3D3D] mt-[30px]'>Size</h1>
                    <ul>
                        {
                            size.map((sizeone) => {
                                return (
                                    <li key={sizeone.id} className='flex w-[270px] justify-between mt-[15px]  transition-all duration-300  
                                    hover:bg-green-400 p-2 rounded hover:text-[white]'>
                                        <p className='font-[400] text-[14px] text-[#3D3D3D] hover:text-[white] hover:font-[500]'>{sizeone.name}</p>
                                        <p className='font-[500] text-[15px] text-[#3D3D3D] hover:text-[white]'>{sizeone.number}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Categoris;
