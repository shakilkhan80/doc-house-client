import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const CheckForm = ({ bookings, price }) => {


    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        // console.log(price)
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
        }
        else {
            setError('');
            // console.log("payment details", paymentMethod)
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || "anonymous"
                    },
                },
            },
        );

        if (confirmError) {
            // console.log(confirmError)
            setError(confirmError)
        }
        // console.log(paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // console.log(bookings)
            // save the payment information to the database
            const payment = {
                email: user?.email,
                price,
                date: new Date(),
                transactionId: paymentIntent.id,
                quantity: bookings.length,
                status: 'service pending',
                bookingId: bookings.map(item => item._id),
                listId: bookings.map(item => item.listId),
                bookingName: bookings.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    // console.log(res.data)
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Your Payment has been done',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='text-center my-10'>
                    <button className='btn bg-[#07332F] text-white hover:bg-green-700 btn-sm ' type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            {error && <p className='text-red-600 ml-5'>{error}</p>}
            {transactionId && <p className='text-green-500'>Your Payment TransactionId: {transactionId}</p>}
        </div>
    );
};

export default CheckForm;