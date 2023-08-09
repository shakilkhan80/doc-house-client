import React, { useState } from 'react';
import img from '../../assets/doc-login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {

    const [show, setShow] = useState(false);
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <>
            <Helmet>
                <title>Login||DocHouse</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content gap-10 flex-col lg:flex-row">
                    <div className="text-center">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-xl font-bold">Login now to Doc-House</h1>
                            <form onSubmit={handleLogin} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" />
                                    <p className='absolute right-12 bottom-[250px]' onClick={() => setShow(!show)}>
                                        {
                                            show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }
                                    </p>
                                    <p className="text-red-500">{error}</p>
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn mr-2 text-white btn-outline btn-error" type="submit" value="Login" />
                                </div>

                            </form>
                            <div>
                                <p className='text-center my-3 text-[#696161]'>New in Doc-House? <span className='text-green-600 font-semibold'><Link to="/sign">Sign-Up</Link></span></p>
                            </div>
                            <div className='text-center'>
                                <SocialLogin></SocialLogin>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Login;