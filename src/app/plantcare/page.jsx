import React from 'react';
import { grbaries } from '../Js/about';
import Categoris from '../components/Categiries/categoris';
import AllplabNets from '../Allcategories/Allplanets';
import Footer from '../components/Footer/Footer';

const Page = () => {
    return (
        <div className='mt-[60px]'>
            <div>
                <h1 className='font-[700] text-[20px] text-[#3D3D3D]'>All Gerbaries</h1>
                <div className='grid grid-cols-5'>
                    {
                        grbaries.map((item) => {
                            return (
                                <div>
                                    <img className='w-[219px] h-[255px]' src={item.img} alt="" />
                                    <div>
                                        <h3 className='font-[400] text-[14px] text-[#3D3D3D]'>{item.name}</h3>
                                        <p className='font-[500] text-[15px] text-[#3D3D3D]'>{item.cost}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between'>
                <Categoris />
                <AllplabNets />
            </div>
            <Footer />
        </div>
    );
}

export default Page;
