import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <img className={styles.imageMain} src='https://i.ibb.co/fVRspK9/car-sell.png' />
          <h1 className='pt-5'>Vehicle Sale Purchase Doc Generator</h1>
          <p className='mb-3'>sale receipt, transfer letter and delivery letter generator application built with ❤️ using nextjs</p>
          <Link className="btn btn-primary" href="/first-party">Get Started</Link>
        </div>
      </main>
    </>
  )
}
