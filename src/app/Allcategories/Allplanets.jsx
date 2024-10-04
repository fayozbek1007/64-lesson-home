import Link from 'next/link';
import { about } from "../Js/about";
import Image from 'next/image';

const AllplabNets = () => {
    return (
        <div>
            <div className='w-[840px] h-[1190px] grid grid-cols-3 mt-[40px]'>
                {about.map((item) => (
                    <Link key={item.id} href={`/from-link/${item.id}`} passHref>
                        <div className='items-center cursor-pointer'>
                            <Image width={250} height={250} className='w-[250px] h-[250px]' src={item.img} alt={item.name} />
                            <div>
                                <p className='font-[400] text-[16px]'>{item.name}</p>
                                <p className='font-[700] text-[18px] text-[#46A358]'>{item.cost}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllplabNets;
