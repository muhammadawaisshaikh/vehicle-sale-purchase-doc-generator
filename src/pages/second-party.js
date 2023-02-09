import Head from 'next/head'
import Link from 'next/link'

export default function SecondParty() {
  return (
    <>
      <main className='main'>
        <Link className='back-btn btn btn-info text-white' href='/first-party'>Back</Link>
        <h1 className='pb-5'>
          <span>Second Party Details</span>
        </h1>
        <div className='row'>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="CNIC #" />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Name as per CNIC" />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Fathers Name as per CNIC" />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Contact" />
          </div>
          <div className='col-md-12 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Address as per CNIC" />
          </div>
          <div className='col-md-12 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Residential Address" />
          </div>
        </div>

        <Link className='btn btn-primary text-white' href="/vehicle-details">Next Step: Vehicle Details Form</Link>
      </main>
    </>
  )
}
