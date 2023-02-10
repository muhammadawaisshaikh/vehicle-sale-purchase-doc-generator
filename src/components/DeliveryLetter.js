import React, { useEffect, useState } from 'react';
import useFirstPartyStore from '@/store/first-party'
import useSecondPartyStore from '@/store/second-party';
import useVehicleDetailsStore from '@/store/vehicle-details';
import usePaymentDetailsStore from '@/store/payment-details';

export default function DeliveryLetter() {
    // State Management
    const firstParty = useFirstPartyStore((state) => state.data);
    const secondParty = useSecondPartyStore((state) => state.data);
    const vehicleDetails = useVehicleDetailsStore((state) => state.data);
    const paymentDetails = usePaymentDetailsStore((state) => state.data);

    const [date, setDate] = useState('');
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        onToday()
    })

    const onToday = () => {
        const today = new Date();
        const formattedDate = today.getDate() + '/' + today.getMonth() + '/' + today.getYear();
        setDate(formattedDate);
        setDateTime(today.toString());
    }

    return (
        <div className='position-relative mb-5'>

            {/* Delivery Letter */}
            <div className='row border p-5'>
                <div className='col-md-12 col-12'>
                    <h2 className='mb-4'>Delivery Letter</h2>
                </div>
                <div className='col-md-12 col-12'>
                    <p className='text-end'>
                        <u>Date: <strong>{date}</strong></u>
                    </p>
                </div>
                <div className='col-md-12 col-12 mb-5'>
                    <h4>I have taken the Delivery of Scooter / Car /Motorcycle / Truck</h4>
                </div>
                <div className='col-md-12 col-12'>
                    <p className='text-start'>
                        Registration No
                        <span className='px-2'>
                            <u><strong className='text-uppercase'>{vehicleDetails?.registration || 'NA'}</strong></u>
                        </span>

                        <span>
                            Make
                            <span className='px-2'>
                                <u><strong className='text-uppercase'>{vehicleDetails?.make || 'NA'}</strong></u>
                            </span>
                        </span>

                        <span>
                            Model
                            <span className='px-2'>
                                <u><strong className='text-uppercase'>{vehicleDetails?.model || 'NA'}</strong></u>
                            </span>
                        </span>

                        <span>
                            Horse Power
                            <span className='px-2'>
                                <u><strong className='text-uppercase'>{vehicleDetails?.power || 'NA'}</strong></u>
                            </span>
                        </span>

                        <span>
                            Engine No.
                            <span className='px-2'>
                                <u><strong className='text-uppercase'>{vehicleDetails?.engine || 'NA'}</strong></u>
                            </span>
                        </span>

                        <span>
                            Chassis No
                            <span className='px-2'>
                                <u><strong className='text-uppercase'>{vehicleDetails?.chassis || 'NA'}</strong></u>
                            </span>
                            In Perfect running condition from Mr./Mrs./M/s.
                            <span className='px-2'>
                                <u><strong className='text-uppercase'>{secondParty?.name || 'NA'}</strong></u>
                            </span>

                            <span>
                                S/o. D/o. Mr.
                                <span className='px-2'>
                                    <u><strong className='text-uppercase'>{secondParty?.fathersName || 'NA'}</strong></u>
                                </span>
                            </span>

                            Resident of
                            <span className='px-2'>
                                <u><strong className='text-uppercase'>{secondParty?.address || 'NA'}</strong></u>
                            </span>

                            <span>
                                NIC.
                                <span className='px-2'>
                                    <u><strong>{secondParty?.cnic || 'NA'}</strong></u>
                                </span>
                            </span>

                            <span>
                                on this day and time
                                <span className='px-2'>
                                    <u><strong>{dateTime || 'NA'}</strong></u>
                                </span>
                            </span>
                            And now I am responsible or all traffic liabilities.
                        </span>
                    </p>
                </div>
                <div className='col-md-6 col-12 text-start mt-5 w-50'>
                    <h4>Purchasing Party:</h4>
                    <p>
                        <span>Stamp & Signature</span>
                        <p className='mt-4'>_________________________________</p>
                    </p>
                    <p>
                        <span className='pe-2'>Name:</span>
                        <u><strong className='text-uppercase'>{firstParty?.name}</strong></u>
                    </p>
                    <p>
                        <span className='pe-2'>CNIC No.</span>
                        <u><strong className='text-uppercase'>{firstParty?.cnic}</strong></u>
                    </p>
                    <p>
                        <span className='pe-2'>Address:</span>
                        <u><strong className='text-uppercase'>{firstParty?.address}</strong></u>
                    </p>
                    <p>
                        <span className='pe-2'>Residential Address:</span>
                        <u><strong className='text-uppercase'>{firstParty?.residentialAddress}</strong></u>
                    </p>
                </div>
            </div>
        </div>
    )
}