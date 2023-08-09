import React from 'react';
import img from '../../../assets/doctor.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer justify-center justify-items-center  md:justify-normal justify-self-center p-10 bg-base-200">
                <div className='justify-items-center my-5'>
                    <div className='flex justify-center items-center gap-5'>
                        <img className='h-[60px] w-[60px] text-center' src={img} alt="" />
                        <p className='text-3xl  font-bold'><span className='text-[#F7A582]'>Doc</span> House</p>
                    </div>
                    <p className='text-[#6C6B6B] w-1/2 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
                    <Link to="/appointment"><button className="btn btn-outline btn-error mt-5 text-white font-semibold">Appointment</button></Link>
                </div>
                <div className='justify-items-center md:justify-items-start'>
                    <span className=" text-black text-xl font-bold">Quick Links</span>
                    <a className="link link-hover text-[#6C6B6B]">About Us</a>
                    <a className="link link-hover text-[#6C6B6B]">Service</a>
                    <a className="link link-hover text-[#6C6B6B]">Doctors</a>
                    <a className="link link-hover text-[#6C6B6B]">Departments</a>
                    <a className="link link-hover text-[#6C6B6B]">Online Payment</a>
                    <a className="link link-hover text-[#6C6B6B]">Contact Us</a>
                    <a className="link link-hover text-[#6C6B6B]">My Account</a>
                </div>
                <div className='justify-items-center md:justify-items-start'>
                    <span className=" text-xl font-bold">Doc House Services</span>
                    <a className="link link-hover text-[#6C6B6B]">Pediatric Clinic</a>
                    <a className="link link-hover text-[#6C6B6B]">Diagnosis Clinic</a>
                    <a className="link link-hover text-[#6C6B6B]">Cardiac Clinic</a>
                    <a className="link link-hover text-[#6C6B6B]">Laboratory Analysis</a>
                    <a className="link link-hover text-[#6C6B6B]">Gynecological Clinic</a>
                    <a className="link link-hover text-[#6C6B6B]">Personal Counseling</a>
                    <a className="link link-hover text-[#6C6B6B]">Dental Clinic</a>
                </div>
                <div className='justify-items-center md:justify-items-start'>
                    <span className=" text-xl font-bold">Working Hours</span>
                    <a className="link link-hover text-[#6C6B6B] ">Monday - 10 am to 7 pm</a>
                    <a className="link link-hover text-[#6C6B6B]">Tuesday - 10 am to 5 pm</a>
                    <a className="link link-hover text-[#6C6B6B]">Wednesday - 10 am to 3 pm</a>
                    <a className="link link-hover text-[#6C6B6B]">Thursday- 10 am to 7 pm</a>
                    <a className="link link-hover text-[#6C6B6B]">Friday - 10 am to 3 pm</a>
                    <a className="link link-hover text-[#6C6B6B]">Saturday - 10 am to 7 pm</a>
                    <a className="link link-hover text-[#6C6B6B]">Sunday - 10 am to 5 pm</a>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;