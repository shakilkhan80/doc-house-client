import React from 'react';
import img from '../../../assets/doctor.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAppoint from '../../../hooks/useAppoint';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {

    const { user, logOut } = useAuth();
    const [bookings] = useAppoint();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        <li><Link className='hover:text-teal-500' to="/">Home</Link></li>
        <li>
            <Link className='hover:text-teal-500'
                to={isAdmin ? "/dashboard/admin-home" : "/dashboard/user-home"}>
                DashBoard</Link>
        </li>
        <li><Link className='hover:text-teal-500' to="/appointment">Appointment</Link></li>
        <li><Link className='hover:text-teal-500' to="dashboard/appointment">My Appointment-{bookings?.length || 0}</Link></li>
        <li><a className='hover:text-teal-500' href="/#contact">Contact Us</a></li>

        {
            user ?
                <>
                    <li><span className='hover:text-teal-500'>{user?.displayName}</span></li>
                    <li><button onClick={handleLogOut} className="btn hover:text-teal-500 btn-sm text-xs btn-ghost">LogOut</button></li>

                </>
                : <><li><Link to="/login">Login</Link></li></>
        }

    </>
    return (
        <div className="navbar bg-white  md:bg-[#07332F] bg-opacity-50 max-w-screen-xl">
            <div className="navbar-start gap-5 md:ml-16">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu text-white font-bold menu-sm dropdown-content bg-slate-500 mt-3 z-[1] p-2 mr-3 shadow rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <img className='h-[60px] w-[60px] bg-white rounded-xl p-2 text-center' src={img} alt="" />
                    <p className='text-3xl text-white font-bold'><span className='text-[#F7A582]'>Doc</span> House</p>
                </div>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu text-white  font-bold menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;