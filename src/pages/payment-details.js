import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import usePaymentDetailsStore from '@/store/payment-details';

export default function PaymentDetails() {
  // State Management
  const paymentDetails = usePaymentDetailsStore((state) => state.data);
  const setPaymentDetails = usePaymentDetailsStore((state) => state.setPaymentDetails);

  const [amount, setAmount] = useState('');
  const [amountInWords, setAmountInWords] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const onSubmit = () => {
    const payload = {
      amount: amount,
      amountInWords: amountInWords,
      paymentMethod: paymentMethod,
    }

    // adding data to zustand store 
    setPaymentDetails(payload);

    console.log(paymentDetails);
  }

  return (
    <>
      <main className='main'>
        <Link className='back-btn btn btn-info text-white' href='/vehicle-details'>Back</Link>
        <h1 className='pb-5'>
          <span>Payment Details</span>
        </h1>
        <div className='row'>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Amount eg. 2660000" onChange={(e) => setAmount(e.target.value)} />
          </div>
          <div className='col-md-6 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Amount in words" onChange={(e) => setAmountInWords(e.target.value)} />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Payment Method eg. Cash / Online / PayOrder" onChange={(e) => setPaymentMethod(e.target.value)} />
          </div>
        </div>

        <Link className='btn btn-primary text-white' href="/generate-docs" onClick={() => onSubmit()}>
          Generate Documents
        </Link>
      </main>
    </>
  )
}
