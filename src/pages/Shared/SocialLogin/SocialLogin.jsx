import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
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
                                title: 'Login Success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className='text-center mt-5'>
                <button onClick={handleGoogle} className="btn  btn-circle btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;