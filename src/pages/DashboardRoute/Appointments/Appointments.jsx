import React from 'react';
import useAppoint from '../../../hooks/useAppoint';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const Appointments = () => {

    const [bookings, refetch] = useAppoint();
    const total = bookings.reduce((sum, itemTotal) => itemTotal.price + sum, 0);

    const handleDelete = booking => {
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
                fetch(`https://doc-house-server-shakilkhan80.vercel.app/bookings/${booking._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Appointment has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='m-10'>
            <div className='flex justify-between my-10'>
                <div>
                    <h1 className='text-2xl font-bold'>My Appointments: {bookings.length} </h1>
                </div>
                <div className='flex gap-7'>
                    <h1 className='text-2xl font-bold'>Total Payments: {total}</h1>
                    <Link to="/dashboard/payment"><button className='btn btn-sm bg-[#102a11ed] text-white hover:bg-green-500'>pay</button></Link>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date and Time</th>
                            <th>Fees</th>
                            <th className='text-end mr-5'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <tr key={booking._id}>
                                <td>#</td>
                                <td>{booking.name}</td>
                                <td>{booking.service}</td>
                                <td>{booking.date}</td>
                                <td>$ {booking.price}</td>
                                <td className='text-end mr-3'>
                                    <button onClick={() => handleDelete(booking)} className='btn btn-sm bg-[#d03c3ced] text-white hover:bg-red-300'><FaTrash></FaTrash></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Appointments;