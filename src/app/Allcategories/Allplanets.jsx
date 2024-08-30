import { about } from '@/app/Js/about';
import React from 'react';

const AllplabNets = () => {
    return (
        <div>
            <div className='w-[840px] h-[1190px] grid grid-cols-3 mt-[40px]'>
                {
                    about.map((item) => {
                        return (
                            <div key={item.id} className='items-center'>
                                <img className='w-[250px] h-[250px]' src={item.img} alt={item.name} />
                                <div>
                                    <p className='font-[400] text-[16px]'>{item.name}</p>
                                    <p className='font-[700] text-[18px] text-[#46A358]'>{item.cost}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default AllplabNets;
