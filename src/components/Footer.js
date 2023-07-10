import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-center'>
            {/* <span>
                {new Date().getFullYear()}&nbsp; &copy; All rights reserved.
            </span> */}
            <div className='flex items-center'>
                Build with <span className='text-primary text-2xl px-1'>&#9825;</span> <Link href="https://rohanprasadgupta.w3spaces.com/" className='underline underline-offset-2' target={'_blank'}>Rohan pd. Gupta</Link>
            </div>
            {/* <Link href="https://rohanprasadgupta.w3spaces.com/" className='underline underline-offset-2' target={'_blank'}>Another link</Link> */}
        </Layout>
    </footer>
  )
}

export default Footer