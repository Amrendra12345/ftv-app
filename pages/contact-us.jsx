import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Contactus() {
  return (
    <>
    <Head>
        <title> Contact Us</title>
    </Head>
       <div className="checkout_banner">
           <Container>
              <h1>Contact Us</h1>
           </Container>
        </div>
        <Container>
            <ol className="breadcrumb pl-0 bg-white">
               <li className="breadcrumb-item"><Link href={'/'}> Home </Link></li>
                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
             </ol>
             <div className="desi-work-container">
             <h2 className='title'>Let's keep in touch.</h2>
             <p>We provide many tools you can use to guide yourself through the entire visa process. To save your time, please use our tools before contacting us:</p>
            <ul>
                <li>Start New ApplicationStart new application</li>
                <li>Check Order StatusCheck application status</li>
                <li>Login to My AccountLogin to my accountChat with our agent.</li>
            </ul>
            <p>The best way to contact us is to use the chat feature in the lower right hand corner (we offer 24/7 service). This is the preferred method to get quick answers to all your questions.</p>
            </div>
       </Container>
    </>
  )
}
