import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    })

    const handleDelete = user => {
        fetch(`https://doc-house-server-shakilkhan80.vercel.app/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'A User Has been Deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    const handleUpdate = user => {
        fetch(`https://doc-house-server-shakilkhan80.vercel.app/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name}'is now Admin!'`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='m-10'>
            <Helmet>
                <title>
                    AllUsers || Doc-House
                </title>
            </Helmet>
            <h1 className="text-3xl font-semibold my-10">All Users: {users.length}</h1>
            <div className="overflow-x-auto bg-[#07332F] p-10 rounded-xl text-white">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-white'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className='text-xl font-semibold'>{user.name}</h1>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td className='text-2xl'>
                                    {
                                        user.role === 'admin' ? <span className='text-xs'>Admin</span> : <button onClick={() => handleUpdate(user)} className='btn bg-[#1e5634ed] text-white hover:bg-green-500 btn-sm'><FaUserShield></FaUserShield></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className='btn btn-sm border-none bg-[#d03c3ced] text-white hover:bg-red-300'><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUsers;