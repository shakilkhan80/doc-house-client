import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import { FaLocationArrow } from 'react-icons/fa';

const DocProfile = () => {

    const doctor = useLoaderData();
    const { name, profession, image, rating, price, address } = doctor;

    return (
        <div >
            <Helmet>
                <title>Doctors Profile||DocHouse</title>
            </Helmet>
            <Banner title="Doctor Profile"></Banner>
            <div className='my-10 '>
                <div className='md:flex gap-5  mx-16 grid justify-center md:justify-normal'>
                    <div>
                        <img className='w-[330px] h-[300px]' src={image} alt="" />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold mt-5'>{name}</h1>
                        <p className='text-[#6C6B6B]'>{profession}</p>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            className='my-3'
                            readOnly
                        />
                        <div className='flex items-center gap-2 text-[#6C6B6B] mb-2'>
                            <FaLocationArrow />
                            <p>{address}</p>
                        </div>
                        <p className='text-[#6C6B6B] font-semibold'> Fees: ${price}</p>
                        <div className='flex flex-col md:flex-row gap-3 mt-3'>
                            <button className="btn btn-outline btn-error">Dental Filling</button>
                            <button className="btn btn-outline btn-error">Dental Washing</button>
                        </div>
                    </div>
                </div>
                <div className='mx-16 mt-10'>
                    <div>
                        <h1 className='text-xl font-bold'>About Me :</h1>
                        <p className='text-[#6C6B6B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='md:flex grid justify-center md:justify-normal gap-4'>
                        <div className='w-1/2'>
                            <h1 className='text-xl font-bold my-5'>Education :</h1>
                            <ul className='list-disc ml-9'>
                                <li className='font-semibold'>American Dental Medical University</li>
                                <p className='text-[#6C6B6B]'>BDS</p>
                                <p className='text-[#6C6B6B]'>1998-2003</p>
                                <li className='font-semibold'>American Dental Medical University</li>
                                <p className='text-[#6C6B6B]'>BDS</p>
                                <p className='text-[#6C6B6B]'>1998-2003</p>
                            </ul>
                            <h1 className='text-xl font-bold my-5'>Work Experience :</h1>
                            <ul className='list-disc ml-9'>
                                <li className='font-semibold'>Glowing Smile Dental Family and Clinic</li>
                                <p className='text-[#6C6B6B]'>1998-2003</p>
                                <li className='font-semibold'>Comport Care Dental Clinic</li>
                                <p className='text-[#6C6B6B]'>1998-2003</p>
                                <li className='font-semibold'>Dream Smile Dental Smile</li>
                                <p className='text-[#6C6B6B]'>1998-2003</p>
                            </ul>
                            <h1 className='text-xl font-bold my-5'>Service :</h1>
                            <ul className='list-disc ml-9'>
                                <li className='text-[#6C6B6B]'>Tooth Cleaning</li>
                                <li className='text-[#6C6B6B]'>Oral Canal Therapy</li>
                                <li className='text-[#6C6B6B]'>Implants</li>
                                <li className='text-[#6C6B6B]'>Composing Bonding</li>
                                <li className='text-[#6C6B6B]'>Surgical Extactions</li>
                            </ul>
                        </div>
                        <div className='w-1/2'>
                            <h1 className='text-xl font-bold my-5'>Awards :</h1>
                            <ul className='list-disc ml-9'>
                                <p>July 2019</p>
                                <li className='text-xl font-bold my-2'>Humanitarian Award :</li>
                                <p className='text-[#6C6B6B]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p className='mt-10'>March 2011</p>
                                <li className='text-xl font-bold my-2'>Certificate For International Volunteer Service :</li>
                                <p className='text-[#6C6B6B]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p className='mt-10'>May 2008</p>
                                <li className='text-xl font-bold my-2'>The Dental Professional Year Award :</li>
                                <p className='text-[#6C6B6B]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </ul>
                            <h1 className='text-xl font-bold my-5'>Specializations :</h1>
                            <ul className='list-disc ml-9 text-[#6C6B6B]'>
                                <li>Children Care</li>
                                <li>Dental Care</li>
                                <li>Oral and Maxillofacial Surgery</li>
                                <li>Orthodontist</li>
                                <li>Periodontist</li>
                                <li>Prosthodontics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocProfile;