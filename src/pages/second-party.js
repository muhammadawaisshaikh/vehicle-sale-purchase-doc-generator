import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import useSecondPartyStore from '@/store/second-party';
import { server } from '../config';

export default function SecondParty({ data }) {
  // State Management
  const secondParty = useSecondPartyStore((state) => state.data);
  const setSecondParty = useSecondPartyStore((state) => state.setSecondParty);

  const [cnic, setCnic] = useState('');
  const [name, setName] = useState('');
  const [fathersName, setFathersName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [residentialAddress, setResidentialAddress] = useState('');

  const onSubmit = () => {
    const payload = {
      cnic: cnic,
      name: name,
      fathersName: fathersName,
      contact: contact,
      address: address,
      residentialAddress: residentialAddress
    }

    // adding data to zustand store 
    setSecondParty(payload);
  }

  const onLoadUserDetails = () => {
    const payload = {
      cnic: data.cnic,
      name: data.name,
      fathersName: data.fathersName,
      contact: data.contact,
      address: data.address,
      residentialAddress: data.residentialAddress
    }

    // adding data to zustand store 
    setSecondParty(payload);

    // populate form
    setCnic(payload.cnic);
    setName(payload.name);
    setFathersName(payload.fathersName);
    setContact(payload.contact);
    setAddress(payload.address);
    setResidentialAddress(payload.residentialAddress);
  }

  return (
    <>
      <main className='main'>
        <Link className='back-btn btn btn-info text-white' href='/first-party'>Back</Link>
        <h1>
          <span>Second Party Details</span>
        </h1>
        <p className='pb-3'>(A person who is selling a vehicle)</p>
        <a className='btn btn-success mb-5' onClick={() => onLoadUserDetails()}>Fill Form: Muhammad Iqbal as (First Party)</a>

        <div className='row'>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="CNIC #" value={cnic} onChange={(e) => setCnic(e.target.value)} />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Name as per CNIC" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Fathers Name as per CNIC" value={fathersName} onChange={(e) => setFathersName(e.target.value)} />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className='col-md-12 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Address as per CNIC" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className='col-md-12 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Residential Address" value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)} />
          </div>
        </div>

        <Link className='btn btn-primary text-white' href="/vehicle-details" onClick={() => onSubmit()}>
          Next Step: Vehicle Details Form
        </Link>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetch(`${server}/api/user-details`).then((res) => res.json());

  return {
    props: {
      data: data,
    },
  };
}