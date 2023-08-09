import React from 'react';
import useDoctors from '../../../hooks/useDoctors';
import DocTab from './DocTab';


const Doctor = () => {

    const [doctors] = useDoctors();


    return (
        <div>
            {
                doctors.map(doctor => <DocTab 
                    key={doctor._id}
                    doctor={doctor}
                ></DocTab>)
            }
        </div>
    );
};

export default Doctor;