import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import useVehicleDetailsStore from '@/store/vehicle-details';

export default function VehicleDetails() {
  // State Management
  const vehicleDetails = useVehicleDetailsStore((state) => state.data);
  const setVehicleDetails = useVehicleDetailsStore((state) => state.setVehicleDetails);

  const [registration, setRegistration] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [power, setPower] = useState('');
  const [engine, setEngine] = useState('');
  const [chassis, setChassis] = useState('');
  const [color, setColor] = useState('');

  const onSubmit = () => {
    const payload = {
      registration: registration,
      make: make,
      model: model,
      power: power,
      engine: engine,
      chassis: chassis,
      color: color
    }

    // adding data to zustand store 
    setVehicleDetails(payload);

    console.log(vehicleDetails);
  }

  return (
    <>
      <main className='main'>
        <Link className='back-btn btn btn-info text-white' href='/second-party'>Back</Link>
        <h1 className='pb-5'>
          <span>Vehicle Details</span>
        </h1>
        <div className='row'>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Registration No. BUG-338" onChange={(e) => setRegistration(e.target.value)} />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Make eg. Toyota Corolla" onChange={(e) => setMake(e.target.value)} />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Model eg. 2023" onChange={(e) => setModel(e.target.value)} />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Power" onChange={(e) => setPower(e.target.value)} />
          </div>
          <div className='col-md-4 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Engine No." onChange={(e) => setEngine(e.target.value)} />
          </div>
          <div className='col-md-4 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Chassis No." onChange={(e) => setChassis(e.target.value)} />
          </div>
          <div className='col-md-4 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Color" onChange={(e) => setColor(e.target.value)} />
          </div>
        </div>

        <Link className='btn btn-primary text-white' href="/payment-details" onClick={() => onSubmit()}>
          Next Step: Payment Details Form
        </Link>
      </main>
    </>
  )
}
