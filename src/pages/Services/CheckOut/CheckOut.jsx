import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Banner from '../../DoctorProfile/Banner/Banner';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAppoint from '../../../hooks/useAppoint';

const CheckOut = () => {

    const navigate = useNavigate();
    const service = useLoaderData();
    const location = useLocation();
    const { price, name, image, _id } = service;

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const [, refetch] = useAppoint();

    const onSubmit = data => {
        const date = data.date;
        const service = data.name;
        if (user && user.email) {
            const bookingList = { price, name, date, service, image, listId: _id, email: user?.email }
            fetch("https://doc-house-server-shakilkhan80.vercel.app/bookings", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(bookingList)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.insertedId) {
                        refetch();
                        Swal.fire({
                            icon: 'success',
                            title: 'Your Bookings has been Added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        reset();

                    }
                    else (error => {
                        console.log(error)
                        navigate('/not')
                    })
                })
        }
        else {
            Swal.fire({
                title: 'Login Please!!!',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <Helmet>
                <title>CheckOut||DocHouse</title>
            </Helmet>
            <Banner title="CheckOut Page"></Banner>
            <div className='m-10 p-10 bg-[#07332F] rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold text-lg">Full Name*</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} defaultValue={user?.displayName} placeholder="Your Full Name" className="input text-white bg-[#054640] input-bordered" />
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-white">Service Name*</span>
                                </label>
                                <input type="text" {...register("profession", { required: true })} defaultValue={name} className="input text-white bg-[#054640]  input-bordered" />
                                {errors.service && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-white">Fees*</span>
                                </label>
                                <input type="number" {...register("fees", { required: true })} defaultValue={price} className="input text-white bg-[#054640] input-bordered" />
                                {errors.fees && <span className='text-red-500'>This field is required</span>}
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-white">Email*</span>
                                </label>
                                <input type="email"{...register("email", { required: true })} defaultValue={user?.email} name='email' placeholder="email" className="input text-white bg-[#054640] input-bordered" />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-white">ImageURL*</span>
                                </label>
                                <input type="text" {...register("image", { required: true })} defaultValue={image} className="input text-white bg-[#054640] input-bordered" />
                                {errors.image && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-white">Date and Time*</span>
                                </label>
                                <input type="datetime-local" {...register("date", { required: true })} placeholder="time and date" className="input text-white bg-[#054640] input-bordered" />
                                {errors.date && <span className='text-red-500'>This field is required</span>}
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn md:mx-80 mt-5 text-white btn-outline btn-error" type="submit" value="Book Now" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CheckOut;