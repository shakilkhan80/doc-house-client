import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaFileInvoiceDollar, FaLocationArrow, FaLeanpub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const DoctorCard = ({ doctor }) => {
   
    
    const { name, price, rating, profession, service, address, _id, image } = doctor;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title m-0">{name}</h2>
                <p className='text-[#7c7a7a] m-0'>{profession}</p>
                <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    className='m-0'
                    readOnly
                />
                <div className='flex gap-2 text-[#7c7a7a] justify-center items-center'>
                    <FaLocationArrow /><p> {address}</p>
                </div>
                <div className='flex gap-2 text-[#7c7a7a] justify-center items-center'>
                    <FaLeanpub /><p>{service}</p>
                </div>
                <div className='flex gap-2  text-[#7c7a7a] justify-center items-center'>
                    <FaFileInvoiceDollar /> <p> ${price}</p>
                </div>
                <div className='text-center mt-5'>
                    <Link to={`/docprofile/${_id}`}> <button className="btn mr-2 btn-outline btn-error">View Profile</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;