import React from 'react';
import useDoctors from '../../../hooks/useDoctors';
import DoctorsTab from './DoctorsTab';

const Doctors = () => {

    const [doctors] = useDoctors();
    return (
        <div className='my-16'>
            <div>
                <h1 className="text-2xl text-center font-bold">Our Expert Doctors</h1>
                <p className='w-1/2 text-[#9b9393] mx-auto text-center my-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <DoctorsTab items={doctors}></DoctorsTab>
            </div>


        </div>
    );
}

export default Doctors;