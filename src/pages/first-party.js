import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import useFirstPartyStore from '@/store/first-party'

export default function FirstParty() {
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

    console.log(firstParty);
  }

  return (
    <>
      <main className='main'>
        <Link className='back-btn btn btn-info text-white' href='/'>Back</Link>
        <h1 className='pb-5'>
          <span>First Party Details</span>
        </h1>
        <div className='row'>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="CNIC #" onChange={(e) => setCnic(e.target.value)} />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Name as per CNIC" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Fathers Name as per CNIC" onChange={(e) => setFathersName(e.target.value)} />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Contact" onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className='col-md-12 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Address as per CNIC" onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className='col-md-12 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Residential Address" onChange={(e) => setResidentialAddress(e.target.value)} />
          </div>
        </div>

        <Link className='btn btn-primary text-white' href="/second-party" onClick={() => onSubmit()}>
          Next Step - Second Party Details Form
        </Link>
      </main>
    </>
  )
}