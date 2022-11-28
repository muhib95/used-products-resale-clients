import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);


const Payment = () => {

    // console.log(stripePromise);
    const pro=useLoaderData();
    console.log(pro);
    return (
        <div>
            <div>
                <h1 className='text-3xl'>payment for {pro.name}</h1>
                <h1 className='text-3xl'>Please pay taka: {pro.resalePrice}</h1>
            </div>
            <div>
            <Elements stripe={stripePromise}>
      <CheckOutForm Payment={pro}/>
    </Elements>
            </div>
        </div>
    );
};

export default Payment;