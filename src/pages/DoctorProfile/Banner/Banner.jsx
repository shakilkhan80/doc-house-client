import React from 'react';
import './Banner.css'

const Banner = ({title}) => {
    return (
        <div className='banner mb-3 w-full h-[500px]'>
            <div className='flex justify-around place-items-center h-5/6 my-auto'>
                <h1 className='text-3xl  font-bold text-white '>{title}</h1>
            </div>
        </div>
    );
};

export default Banner;