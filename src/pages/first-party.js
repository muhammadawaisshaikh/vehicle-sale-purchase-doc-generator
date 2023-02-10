import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import useFirstPartyStore from '@/store/first-party'

export default function FirstParty({ data }) {
  // State Management
  const firstParty = useFirstPartyStore((state) => state.data);
  const setFirstParty = useFirstPartyStore((state) => state.setFirstParty);

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
    setFirstParty(payload);
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
    setFirstParty(payload);

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
        <Link className='back-btn btn btn-info text-white' href='/'>Back</Link>
        <h1 className='pb-1'>
          <span>First Party Details</span>
        </h1>
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

        <Link className='btn btn-primary text-white' href="/second-party" onClick={() => onSubmit()}>
          Next Step - Second Party Details Form
        </Link>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user-details`).then((res) => res.json());

  return {
    props: {
      data: data,
    },
  };
}