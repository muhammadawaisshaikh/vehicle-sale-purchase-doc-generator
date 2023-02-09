import Head from 'next/head'
import Link from 'next/link'

export default function VehicleDetails() {
  return (
    <>
      <main className='main'>
        <Link className='back-btn btn btn-info text-white' href='/second-party'>Back</Link>
        <h1 className='pb-5'>
          <span>Vehicle Details</span>
        </h1>
        <div className='row'>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Registration No. BUG-338" />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Make eg. Toyota Corolla" />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Model eg. 2023" />
          </div>
          <div className='col-md-3 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Power" />
          </div>
          <div className='col-md-4 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Engine No." />
          </div>
          <div className='col-md-4 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Chassis No." />
          </div>
          <div className='col-md-4 col-12 mb-4'>
            <input type="text" className="form-control" placeholder="Color" />
          </div>
        </div>

        <Link className='btn btn-primary text-white' href="/payment-details">Next Step: Payment Details Form</Link>
      </main>
    </>
  )
}
