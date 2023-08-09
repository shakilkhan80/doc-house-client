import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaArrowAltCircleLeft, FaCalendarPlus, FaHome, FaUserCog, FaUserGraduate, FaUserMd, FaUserTie, FaUsers, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAppoint from '../hooks/useAppoint';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {

    const [bookings] = useAppoint();
    // Todo 
    // const isAdmin = true;
    // for development purpose using Admin is true,when the work is done use the below call and comment the isAdmin;
    const [isAdmin] = useAdmin();

    return (
        <div>
            <Helmet>
                <title>
                    DashBoard || Doc-House
                </title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-4">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="menu drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg> <span className='text-sm font-bold'>DashBoard</span>
                    </label>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#07332F] text-white ">
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink className="text-xl hover:text-teal-500 font-semibold" to="admin-home"> <FaUserGraduate></FaUserGraduate>Admin Home</NavLink>
                                    </li>
                                    <li className='flex gap-3 flex-col'>
                                        <NavLink className="text-xl hover:text-teal-500 font-semibold" to="users">
                                            <FaUsers></FaUsers>All Users
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink className="text-xl hover:text-teal-500 font-semibold" to="add-doc">   <FaUserMd></FaUserMd>Add a Doctor</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="text-xl hover:text-teal-500 font-semibold" to="manage-doc">   <FaUserCog></FaUserCog>Manage Doctor</NavLink>
                                    </li>
                                    <li className='flex gap-3 flex-col'>
                                        <NavLink className="text-xl hover:text-teal-500 font-semibold" to="appointment">
                                            <FaCalendarPlus></FaCalendarPlus>My Appointments
                                            <span className='text-white bg-slate-400 px-1 rounded-xl'> {bookings?.length || 0}</span>
                                        </NavLink>

                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink className="text-xl hover:text-teal-500 font-semibold" to="user"> <FaUserTie></FaUserTie>User Home</NavLink>
                                    </li>
                                    <li className='flex gap-3 flex-col'>
                                        <NavLink className="text-xl hover:text-teal-500 font-semibold" to="appointment">
                                            <FaCalendarPlus></FaCalendarPlus>My Appointments
                                            <span className='text-white bg-slate-400 px-1 rounded-xl'> {bookings?.length || 0}</span>
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink className="text-xl hover:text-teal-500 font-semibold" to="history">   <FaWallet></FaWallet>Payments</NavLink>
                                    </li>
                                </>
                        }

                        <div className="divider text-zinc-100"></div>
                        <li>
                            <NavLink className="text-xl hover:text-teal-500 font-semibold" to="/">
                                <FaHome></FaHome> Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-xl hover:text-teal-500 font-semibold" to="/appointment"><FaArrowAltCircleLeft></FaArrowAltCircleLeft> Appointment</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;