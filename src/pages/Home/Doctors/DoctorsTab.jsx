import React from 'react';
import DoctorCard from './DoctorCard';

const DoctorsTab = ({ items }) => {
    return (
        <div className='grid grid-cols-1 justify-items-center  md:grid-cols-3'>
            {
                items.map(doctor => <DoctorCard
                    key={doctor._id}
                    doctor={doctor}
                />)
            }
        </div>
    );
};

export default DoctorsTab;