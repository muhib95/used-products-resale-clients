import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../AuthContext/AuthContext';

const CheckOutForm = ({Payment}) => {
    const {user}=useContext(UserContext);
    const name=user?.displayName;
    const email=user?.email;

console.log(Payment);
    const [cardError,setCartError]=useState("");
    const [processing,setProcessing]=useState(false);
    const stripe=useStripe();
    const elements = useElements();
    const {resalePrice}=Payment;
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://b612-used-products-resale-server-side-muhib95.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json" ,
            authorization:`bearer ${localStorage.getItem('user-token')}`
        },
          body: JSON.stringify({ resalePrice }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [resalePrice]);

const handleSubmit=async(event)=>{
    event.preventDefault();

    if (!stripe || !elements) {
   
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
    });
    if (error) {
        setCartError(error.message);
        console.log('[error]', error);
    }
       else {
        setCartError("");
      }
      setProcessing(true);
      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: name,
              email:email
            },
          },
        },
      );
      if(confirmError){
        setCartError(confirmError.message);
        return;

      }
    //   console.log(paymentIntent);
      if(paymentIntent.status==="succeeded"){
        
       const paymentInfo={
        name,
        email,
        resalePrice,
        transection:paymentIntent.id

       }

fetch('https://b612-used-products-resale-server-side-muhib95.vercel.app/paymentstore', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    authorization:`bearer ${localStorage.getItem('user-token')}`
  },
  body: JSON.stringify(paymentInfo),
})
  .then((response) => response.json())
  .then((data) => {
    // alert('Your payment successfull');
    // console.log('Success:', data);
    alert('Your payment successfull');
  })
  .catch((error) => {
    console.error('Error:', error);
  });


      }
      setProcessing(false);
}






    return (
    <>
                <form className='mt-6 w-1/2' onSubmit={handleSubmit} >
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
      <button className='btn btn-primary' type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
  <p>{cardError}</p>
    </>  
    
    );
};

export default CheckOutForm;