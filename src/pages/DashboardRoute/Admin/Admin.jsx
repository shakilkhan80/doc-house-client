import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Admin = () => {


    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: status = {} } = useQuery({

        queryKey: ['admin-status'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-status')
            return res.data;
        }
    })

    return (
        <div className='m-20'>
            <h1 className='text-3xl font-bold my-5'>Hi, {user.displayName}</h1>
            <div className="stats gap-5 stats-vertical lg:stats-horizontal">

                <div className="stat text-center ml-2">
                    <div className="stat-title">Doctor</div>
                    <div className="stat-value">{status.doctors}</div>
                </div>

                <div className="stat text-center">
                    <div className="stat-title">Patients</div>
                    <div className="stat-value">{status.users}</div>
                </div>

                <div className="stat text-center">
                    <div className="stat-title">Appointment</div>
                    <div className="stat-value">{status.appointment}</div>
                </div>
                <div className="stat text-center mr-2">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">$ {status.revenue}</div>
                </div>

            </div>
        </div>
    );
};

export default Admin;