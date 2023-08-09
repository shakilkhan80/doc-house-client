import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const ServiceElement = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://doc-house-server-shakilkhan80.vercel.app/service")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5  my-20'>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default ServiceElement;