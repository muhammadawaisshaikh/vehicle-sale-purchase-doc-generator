import React, { useEffect, useState } from 'react';
import useFirstPartyStore from '@/store/first-party'
import useSecondPartyStore from '@/store/second-party';
import useVehicleDetailsStore from '@/store/vehicle-details';
import usePaymentDetailsStore from '@/store/payment-details';
import Link from 'next/link';

export default function TransferLetter() {
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
        <div className='position-relative mb-5'>

            {/* Transfer Letter */}
            <div className='row border p-5'>
                <div className='col-md-12 col-12'>
                    <h2 className='mb-4'>Transfer Letter</h2>
                </div>
                <div className='col-md-12 col-12'>
                    <p className='text-end'>
                        <u>Date: <strong>{date}</strong></u>
                    </p>
                </div>
                <div className='col-md-12 col-12 mb-5 text-start'>
                    <h4>Excise & Taxation Officer,</h4>
                    <p>(Moter Registration)</p>
                    <p>KARACHI.</p>
                </div>
                <div className='col-md-12 col-12 mb-5 text-start'>
                    <p>Dear Sir,</p>
                    <p className='ps-5'>I Have sold Moter Cycle / Scooter /Car / Bus /Truck</p>
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
                        </span>
                        to
                    </p>
                </div>
                <div className='col-md-12 col-12'>
                    <p className='text-start'>
                        Mr./Mrs./M/s.
                        <span className='px-2'>
                            <u><strong className='text-uppercase'>{secondParty?.name || 'NA'}</strong></u>
                        </span>

                        <span>
                            S/o. D/o. Mr.
                            <span className='px-2'>
                                <u><strong className='text-uppercase'>{secondParty?.fathersName || 'NA'}</strong></u>
                            </span>
                        </span>
                    </p>
                </div>
                <div className='col-md-12 col-12'>
                    <p className='text-start'>
                        Resident of
                        <span className='px-2'>
                            <u><strong className='text-uppercase'>{secondParty?.address || 'NA'}</strong></u>
                        </span>

                        <span>
                            NIC.
                            <span className='px-2'>
                                <u><strong>{secondParty?.cnic || 'NA'}</strong></u>
                            </span>
                            therefore the ownership of the above mentioned vehicle may kindly be transferred to his name.
                        </span>
                    </p>
                </div>
                <div className='col-md-6 col-12 pt-4'>
                    <p className='text-start'>Thanks</p>
                </div>
                <div className='col-md-6 col-12 pt-4'>
                    <div className='text-start'>
                        <p>Yours faithfully</p>
                        <p className='px-2'>
                            <u><strong className='text-uppercase'>({firstParty?.name || 'NA'})</strong></u>
                        </p>

                        <p>
                            <span>Stamp & Signature</span>
                            <p className='mt-4'>_________________________________</p>
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
        </div>
    )
}