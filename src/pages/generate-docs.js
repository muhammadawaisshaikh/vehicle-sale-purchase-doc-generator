import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import FirstParty from '@/components/FirstParty';

export default function GenerateDocs() {

    const onPrint = () => {
        window.print();
    }

  return (
    <>
      <main className='main'>
        <Link className='back-btn btn btn-info text-white no-print' href='/vehicle-details'>Back</Link>

        <a className='print-btn btn btn-primary text-white no-print' onClick={() => onPrint()}>
            Print
        </a>

        <h1 className='pb-5 no-print'>
          <span>Generated Documents</span>
        </h1>

        {/* Sale Receipt */}
        <FirstParty />
      </main>
    </>
  )
}
