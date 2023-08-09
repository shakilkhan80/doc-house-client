import React from 'react';
import useDoctors from '../../../hooks/useDoctors';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa';

const ManageDoc = () => {

    const [doctors, , refetch] = useDoctors();
    const [axiosSecure] = useAxiosSecure()

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/doctor/${item._id}`)
                    .then(res => {
                        // console.log('delete item ', res.data)
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Food Item Has been deleted',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full md:m-20 '>
            <h1 className='text-3xl font-bold my-10'>Manage Doctor</h1>
            <div className="overflow-x-auto p-10 rounded-xl text-white bg-[#07332F]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-white'>
                            <th>#</th>
                            <th>Doc Image</th>
                            <th>Specialty</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <tr key={doctor._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{doctor.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {doctor.profession}
                                </td>
                                <td>${doctor.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(doctor)} className="btn bg-red-700 border-none text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoc;