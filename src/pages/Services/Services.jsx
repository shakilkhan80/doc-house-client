import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../DoctorProfile/Banner/Banner';
import ServiceTitle from './ServiceTitle/ServiceTitle';
import ServiceElement from './ServiceElement/ServiceElement';

const Services = () => {
    return (
        <div>
            <Helmet>
                <title>Appointment||DocHouse</title>
            </Helmet>
            <Banner title="Appointment Page"></Banner>
            <ServiceTitle></ServiceTitle>
            <ServiceElement></ServiceElement>
        </div>
    );
};

export default Services;