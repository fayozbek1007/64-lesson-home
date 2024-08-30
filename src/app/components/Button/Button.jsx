import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='w-[140px] h-[40px] text-center bg-[#46A358] rounded-[8px] text-white text-[16px] font-[700]'>
            {children}
        </button>
    );
}

export default Button;
