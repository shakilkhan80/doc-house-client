import React from 'react';
import { FaClock, FaLocationArrow,FaPhone } from 'react-icons/fa';

const Contacts = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-20'>
            <div className='bg-[#07332F] text-white text-center  rounded-full p-16'>
                <p className='flex justify-center text-2xl mb-2'><FaClock /></p>
                <h1 className='text-2xl font-semibold mb-3'><span></span>Opening Hours</h1>
                <p>Open 9.00 am to 5.00pm Everyday</p>
            </div>
            <div className='bg-[#07332F] text-white text-center  rounded-full p-16'>
                <p className='flex justify-center text-2xl mb-2'><FaLocationArrow /></p>
                <h1 className='text-2xl font-semibold mb-3'>Our Locations</h1>
                <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
            </div>
            <div className='bg-[#07332F] text-white  rounded-full text-center p-16'>
            <p className='flex justify-center text-2xl mb-2'><FaPhone /></p>
                <h1 className='text-2xl font-semibold mb-3'>Contact Us</h1>
                <p>+88 01690143060 <br />
                    +88 01866948193</p>
            </div>
        </div>
    );
};

export default Contacts;