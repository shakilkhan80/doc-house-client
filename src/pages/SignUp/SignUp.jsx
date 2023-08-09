import React, { useState } from 'react';
import img from '../../assets/doc-login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';



const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);


    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser)

                updateUserProfile(data.name, data.photoURL)

                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photo: data.photoURL }
                        fetch('https://doc-house-server-shakilkhan80.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())

                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Your Account Has Been Created',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                            })

                    })

                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message)
            })
        reset();
    }



    return (
        <>
            <Helmet>
                <title>Sign-Up||DocHouse</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content gap-10 flex-col lg:flex-row">
                    <div className="text-center">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm h-[700px] shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-xl font-bold">Sign Up now to Doc-House</h1>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                                    {errors.photoURL && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"{...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"}{...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} name='password' placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 character</p>}
                                    {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have 1 lowercase 1 uppercase 1 special character</p>}
                                    <p className='absolute right-12 bottom-[312px]' onClick={() => setShow(!show)}>
                                        {
                                            show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }
                                    </p>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn mr-2 text-white btn-outline btn-error" type="submit" value="Create Account" />
                                </div>
                            </form>
                            <div>
                                <p className='text-center my-3 text-[#696161]'>Already Have a Account <span className='text-green-600 font-semibold'><Link to="/login">Sign-In</Link></span></p>

                            </div>
                            <div>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SignUp;