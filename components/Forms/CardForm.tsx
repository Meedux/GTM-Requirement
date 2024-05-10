"use client";
import React, { useState } from 'react';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import { PaymentElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message as string);
      return;
    }

    // Replace with your server endpoint
    const res = await fetch('/create-intent', {
      method: 'POST',
    });

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (error) {
      setErrorMessage(error.message as string);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {/* <button type="submit" className={`${stripe ? "block" : "hidden"}`} disabled={!stripe || !elements}>
        Pay
      </button> */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe('pk_test_51HFHRmGp8SEXmoyKdP45F08zcZK6hl7RQ4NZ8uqpmMPMq59EENEfocEkh9QAabfyq6nSgQxNjDk2hf2DwCL1MFAo00Sl1bYsmx');

const options: StripeElementsOptions = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
};

const CardForm = () => (
  <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
);

export default CardForm;