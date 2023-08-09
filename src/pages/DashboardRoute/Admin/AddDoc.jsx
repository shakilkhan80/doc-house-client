import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_IMAGE_API;

const AddDoc = () => {

    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // making the img in to a url to save it in the database;

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        console.log(data)

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                console.log(imgRes)
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    const { address, details, email, name, service, profession, price } = data;
                    const newDoctor = { address, details, email, name, service, profession, price: parseFloat(price), image: imgURL }

                    axiosSecure.post('/doctor', newDoctor)
                        .then(data => {
                            console.log('after posting  a new doctor ', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }

    return (
        <div className='m-16'>
            <Helmet>
                <title>
                    Add-Doctor || Doc-House
                </title>
            </Helmet>
            <h1 className='text-3xl font-bold my-10'>Add A New Doctor:</h1>
            <div className='p-10 bg-[#07332F] rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold text-lg">Full Name*</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your Full Name" className="input text-white bg-[#054640] input-bordered" />
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-white">Service Name*</span>
                                </label>
                                <input type="text" {...register("profession", { required: true })} placeholder='Specialty' className="input text-white bg-[#054640]  input-bordered" />
                                {errors.profession && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-white">Price*</span>
                                </label>
                                <input type="number" {...register("price", { required: true })} placeholder='Amount' className="input text-white bg-[#054640] input-bordered" />
                                {errors.price && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold text-lg">Details*</span>
                                </label>
                                <input type="text" {...register("details", { required: true })} placeholder="About Himself" className="input text-white bg-[#054640] input-bordered" />
                                {errors.details && <span className='text-red-500'>This field is required</span>}
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-white">Email*</span>
                                </label>
                                <input type="email"{...register("email", { required: true })} name='email' placeholder="Email" className="input text-white bg-[#054640] input-bordered" />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className='from-control'>
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-white">Image*</span>
                                </label>
                                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered bg-[#054640] max-w-xl w-full" />
                                {errors.image && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-white">Address*</span>
                                </label>
                                <input type="text"{...register("address", { required: true })} name='address' placeholder="Put Address" className="input text-white bg-[#054640] input-bordered" />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold text-lg">Service Time*</span>
                                </label>
                                <input type="datetime-local" {...register("service", { required: true })} placeholder="Your Full Name" className="input text-white bg-[#054640] input-bordered" />
                                {errors.service && <span className='text-red-500'>This field is required</span>}
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn md:mx-80 mt-5 text-white btn-outline btn-error" type="submit" value="Add Doctor" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddDoc;