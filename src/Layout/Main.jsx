import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('sign') || location.pathname.includes('not')
    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;