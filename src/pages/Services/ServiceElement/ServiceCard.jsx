import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { name, image, _id, price } = service;

    return (
        <div>
            <Link to={`/checkout/${_id}`}>
                <div className='flex items-center justify-center rounded-xl text-white gap-5 h-[150px] w-[340px] bg-green-300'>
                    <div>
                        <img className='h-[100px] w-[100px]' src={image} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold'>{name}</h1>
                        <p>${price}</p>
                    </div>
                    <p><FaArrowRight></FaArrowRight></p>
                </div>
            </Link>
        </div>
    );
};

export default ServiceCard;