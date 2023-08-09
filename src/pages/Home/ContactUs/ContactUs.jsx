import React from 'react';
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import './ContactUs.css'
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ContactUs = () => {

    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        const { name, doctorName, date, time, mobile, email } = data;
        const message = { name, doctorName, date, time, mobile, email };
        console.log(message)
        axiosSecure.post('/contact-message', message)
            .then(data => {
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        icon: 'success',
                        title: 'Your Message Has Been Send',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div id='contact' className="hero rounded-lg p-10 my-16 bg-[#07332F]">
            <div className="hero-content  text-white grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="">
                    <h1 className="text-5xl font-bold">Contact With Us</h1>
                    <p className="py-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                    <div className='flex gap-3 items-center'>
                        <FaPhoneAlt />
                        <p>+01690143060</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaLocationArrow />
                        <p>Cumilla,Bangladesh</p>
                    </div>
                </div>
                <div className="card w-full shadow-neutral">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid md:grid-cols-2 md:gap-5 w-full'>
                                <div>
                                    <div className="form-control mb-2">
                                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="input bg-[#054640] text-white input-bordered" />
                                    </div>
                                    <div className="form-control mb-2">
                                        <input type="text" {...register("email", { required: true })} placeholder="Email" className="input bg-[#054640] text-white  input-bordered" />
                                    </div>
                                    <div className="form-control mb-2">
                                        <input type="number" {...register("mobile", { required: true })} placeholder="Mobile" className="input bg-[#054640] text-white input-bordered" />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control mb-2">
                                        <input type="text"{...register("doctorName", { required: true })} placeholder="Doctor Name" className="input bg-[#054640] text-white input-bordered" />
                                    </div>
                                    <div className="form-control mb-2">
                                        <input type="date" {...register("date", { required: true })} placeholder='date' className="input input-bordered bg-[#054640] text-white" />
                                    </div>
                                    <div className="form-control mb-2">
                                        <input type="time"{...register("time", { required: true })} placeholder='time' className="input input-bordered bg-[#054640] text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn contact bg-[#8b7c19] text-white   border-none shadow-xl" type="submit" value="Book Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;