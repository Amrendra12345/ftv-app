import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Career() {
  return (
    <>
    <Head>
        <title> Career </title>
    </Head>
      <div className="checkout_banner">
          <Container>
            <h1>Career</h1>
           </Container>
       </div>
       <Container>
         <ol className="breadcrumb pl-0 bg-white">
            <li className="breadcrumb-item"><Link href={'/'}> Home </Link></li>
            <li className="breadcrumb-item active" aria-current="page">Career</li>
         </ol>
          <div className="desi-work-container">
             <h2 className=''>Coming Soon</h2>
         </div>
      </Container>
    </>
  )
}
