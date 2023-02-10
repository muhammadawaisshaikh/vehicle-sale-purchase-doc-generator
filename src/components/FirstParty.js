import React, { useEffect, useState } from 'react';
import useFirstPartyStore from '@/store/first-party'
import useSecondPartyStore from '@/store/second-party';
import useVehicleDetailsStore from '@/store/vehicle-details';
import usePaymentDetailsStore from '@/store/payment-details';
import Link from 'next/link';

export default function FirstParty() {
    // State Management
    const firstParty = useFirstPartyStore((state) => state.data);
    const secondParty = useSecondPartyStore((state) => state.data);
    const vehicleDetails = useVehicleDetailsStore((state) => state.data);
    const paymentDetails = usePaymentDetailsStore((state) => state.data);

    const [date, setDate] = useState('');

    useEffect(() => {
        onToday()
    })

    const onToday = () => {
        const today = new Date();
        const formattedDate = today.getDate() + '/' + today.getMonth() + '/' + today.getYear();
        setDate(formattedDate);
    }

    return (
        <div className='position-relative'>

            {/* Sale Receipt */}
            <div className='row border p-5'>
                <div className='col-md-12 col-12'>
                    <h2 className='mb-4'>Sale Receipt</h2>
                </div>
                <div className='col-md-12 col-12'>
                    <p className='text-end'>
                        <u>Date: <strong>{date}</strong></u>
                    </p>
                </div>
                <div className='col-md-12 col-12'>
                    <p className='text-start'>
                        Received with thanks the sum of Rs. 
                        <span className='w-100 px-2'>
                            <u><strong>{paymentDetails?.amount || 'NA'}.</strong></u>
                        </span>

                        <span>
                            (Rupees)
                            <span className='w-100 px-2'>
                                <u><strong>{paymentDetails?.amountInWords || 'NA'}</strong></u>
                            </span>
                            From
                        </span>
                    </p>
                </div>
                <div className='col-md-12 col-12'>
                    <p className='text-start'>
                        Mr./Mrs./M/s.
                        <span className='px-2'>
                            <u><strong>{firstParty?.name || 'NA'}</strong></u>
                        </span>

                        <span>
                            S/o. D/o. Mr.
                            <span className='px-2'>
                                <u><strong>{firstParty?.fathersName || 'NA'}</strong></u>
                            </span>
                        </span>
                    </p>
                </div>
                <div className='col-md-12 col-12'>
                    <p className='text-start'>
                        Resident of
                        <span className='px-2'>
                            <u><strong>{firstParty?.address || 'NA'}</strong></u>
                        </span>

                        <span>
                            NIC.
                            <span className='px-2'>
                                <u><strong>{firstParty?.cnic || 'NA'}</strong></u>
                            </span>
                            against the sale of my Motor Cycle/Scooter/Car/Bus/Truck
                        </span>
                    </p>
                </div>
                <div className='col-md-12 col-12'>
                <p className='text-start'>
                        Registration No
                        <span className='px-2'>
                            <u><strong>{vehicleDetails?.registration || 'NA'}</strong></u>
                        </span>

                        <span>
                            Make
                            <span className='px-2'>
                                <u><strong>{vehicleDetails?.make || 'NA'}</strong></u>
                            </span>
                        </span>

                        <span>
                            Model
                            <span className='px-2'>
                                <u><strong>{vehicleDetails?.model || 'NA'}</strong></u>
                            </span>
                        </span>

                        <span>
                            Horse Power
                            <span className='px-2'>
                                <u><strong>{vehicleDetails?.power || 'NA'}</strong></u>
                            </span>
                        </span>

                        <span>
                            Engine No.
                            <span className='px-2'>
                                <u><strong>{vehicleDetails?.engine || 'NA'}</strong></u>
                            </span>
                        </span>

                        <span>
                            Chassis No
                            <span className='px-2'>
                                <u><strong>{vehicleDetails?.chassis || 'NA'}</strong></u>
                            </span>
                        </span>
                    </p>
                </div>
                <div className='col-md-12 col-12'>
                    <p className='text-start'>
                        The full and final payment has been received by Cash/Cheque No./Online
                        <span className='px-2'>
                            <u><strong>{paymentDetails?.paymentMethod || 'NA'}</strong></u>
                        </span>
                    </p>
                </div>
                <div className='col-md-6 col-12 text-start mt-5 w-50'>
                    <h4>Witness</h4>
                    
                    <ol>
                        <li>
                            <p>_________________________________</p>
                            <p>_________________________________</p>
                        </li>
                        <li>
                            <p>_________________________________</p>
                            <p>_________________________________</p>
                        </li>
                    </ol>
                </div>
                <div className='col-md-6 col-12 text-start mt-5 w-50'>
                    <h4>Vehicle Owner Details:</h4>
                    <p>
                        <span>Stamp & Signature</span>
                        <p className='mt-4'>_________________________________</p>
                    </p>
                    <p>
                        <span className='pe-2'>Name:</span>
                        <u><strong>{secondParty?.name}</strong></u>
                    </p>
                    <p>
                        <span className='pe-2'>CNIC No.</span>
                        <u><strong>{secondParty?.cnic}</strong></u>
                    </p>
                    <p>
                        <span className='pe-2'>Address:</span>
                        <u><strong>{secondParty?.address}</strong></u>
                    </p>
                    <p>
                        <span className='pe-2'>Residential Address:</span>
                        <u><strong>{secondParty?.residentialAddress}</strong></u>
                    </p>
                </div>
            </div>
        </div>
    )
}