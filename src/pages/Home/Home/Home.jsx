import React from 'react';
import Banar from '../Banar/Banar';
import OurServices from '../OurServices/OurServices';
import Contacts from '../Contacts/Contacts';
import Comment from '../Comment/Comment';
import { Helmet } from 'react-helmet-async';
import Doctors from '../Doctors/Doctors';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home||DocHouse</title>
            </Helmet>
            <Banar />
            <OurServices />
            <Contacts />
            <Comment />
            <Doctors />
            <ContactUs />
        </div>
    );
};

export default Home;