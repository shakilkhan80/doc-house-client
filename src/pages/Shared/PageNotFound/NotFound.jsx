import React from 'react';
import img from '../../../assets/404.jpg'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div>
            <img src={img} alt="" />
            <Link to="/"><button className='absolute top-[460px] right-[220px] md:top-[800px] md:right-[200px] text-white btn bg-[#F7A582] md:text-3xl font-normal'><FaArrowLeft/> Go Back To Home Page</button></Link>
        </div>
    );
};

export default NotFound;