import React from 'react';
import './Banar.css'
import img1 from '../../../assets/doc-girl-banar.png'
import img2 from '../../../assets/doc-boy-banar.png'
import img3 from '../../../assets/doc-girl-banaer-thum.png'

const Banar = () => {
    return (
        <div className='grid banner mb-5 h-full md:h-[700px] text-white pl-[100px] grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col justify-center gap-5'>
                <h1 className='text-6xl font-semibold'>Your Best Medical <br /> Help Center</h1>
                <p className='w-1/2'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                <button className="btn w-1/3 shadow-xl text-white btn-error">All Services</button>
            </div>
            <div className='md:flex md:relative'>
                <div className=' md:absolute top-[200px] right-[340px]'>
                    <img className='w-[250px] h-[260px] border-[15px] border-white' src={img3} alt="" />
                </div>
                <div className='md:absolute top-[300px] right-[180px]'>
                    <img className='w-[250px] h-[260px] border-[15px] border-white' src={img2} alt="" />
                </div>
                <div className='md:absolute top-[200px] right-[10px]'>
                    <img className='w-[250px] h-[260px] border-[15px] border-white' src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banar;