import React from 'react';
import CheckForm from './CheckForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useAppoint from '../../../hooks/useAppoint';

// todo publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {

    const [bookings] = useAppoint();
    const total = bookings.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='m-20'>
            <h1 className='text-3xl font-bold my-10'>Payment Section : </h1>
            <Elements stripe={stripePromise}>
                <CheckForm bookings={bookings} price={price}></CheckForm>
            </Elements>
        </div>
    );
};

export default Payment;