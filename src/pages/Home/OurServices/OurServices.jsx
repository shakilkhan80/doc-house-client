import React from 'react';
import img from '../../../assets/doc-girl-smile.png'
import img2 from '../../../assets/services.png'
import './OurServices.css'

const OurServices = () => {
    return (
        <div className='grid mt-20 grid-cols-1 md:grid-cols-2 px-5 md:px-0 justify-items-center md:justify-items-start gap-5'>
            <div className='w-[500px] h-[900px]'>
                <img className='w-full h-full' src={img} alt="" />
            </div>
            <div className='my-5'>
                <h2 className='text-3xl text-center md:text-start font-bold mb-3'>Our Services</h2>
                <p className='mb-3 text-[#969696]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className='mb-3 text-center md:text-start'>
                    <button className="btn mr-2 btn-outline btn-error">Cavity Protection</button>
                    <button className="btn mr-2 btn-outline btn-error">Cosmetic Dentisty</button>
                    <button className="btn mr-2 btn-outline btn-error">Oral Surgery</button>
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <h2 className='text-2xl text-center md:text-start font-bold my-4'>Electro  Gastrology Therapy</h2>
                <p className='text-[#969696]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                <p className='text-[#969696]'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className='text-center md:text-start'>
                    <button className="btn  mt-5 text-sm font-medium btn-outline btn-error">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default OurServices;