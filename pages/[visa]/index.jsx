import React from 'react'
import Banner from '../components/home-page/Banner'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

export default function Visa(props) {
   // console.log(props.visalisting.country_site)
   // const page_url = props.pageUrl.replace(/-/g, ' ')
  return (
    <>
      <Head>
          <title>{`Apply for  Visa Online | Fast Track Visa `}</title>
          <meta name="description" content={`Apply for  hassle free online. We offer quick processing and expert assistance. Start your  visa application today!`} />
      </Head>
      <Banner pageTitle={`Your  Is Just A Few Clicks Away...`}/>
      <Container>
          <ol className="breadcrumb pl-0 bg-white">
			  <li className="breadcrumb-item"><Link href={'/'}>Home</Link></li>
			  <li className="breadcrumb-item active" aria-current="page">{'page_url'} </li>
		  </ol>
          <div className="desi-work-container pt-3" id="visalist">
                <Row className="justify-content-center">
                    {
                    props.visalisting.allproduct.map((allproduct, z) =>
                        <Col sm={6} md={6} lg={4} key={z}>
                             <div className="plan_box mb-2">
                             <figure>
                                <Image alt={allproduct.title}
                                    sizes="(max-width: 500px) 30vw"
                                    src={'https://ik.imagekit.io/vs4gypuhi/' + allproduct.imageurl}
                                    height={260} width={371}
                                />
                                </figure>
                                <ul className="product-plan">
                                  <li className='planname'>{allproduct.title}
                                     <b className={`flag flag-${allproduct.country_code}`}></b>
                                 </li>
                                 <li className='mb-2'>
                                    <select className='form-control'>
                                        <option> {allproduct.validity} {allproduct.category} </option>
                                    </select>
                              </li>
                               <li className='d-flex mb-1'>
                                  <span>
                                    <strong>{allproduct.currency_icon} {allproduct.price}</strong> <br />
                                     Total Fee
                                  </span>
                                   <span className='pt-2 d-block'>*Includes Processing fee</span>
                                </li>
                                <li className='d-flex mb-1'>
                                    <span><i className='fa fa-hourglass-start'></i> 
                                    Entry Type </span> <span>{allproduct.entry_type}</span>
                                </li>
                                <li className='d-flex mb-1'>
                                    <span><i className='fa fa-hourglass-start'></i> Processing Time</span>
                                     <span>{allproduct.tat}</span></li>
                                <li className='d-flex mb-1'>
                                    <span><i className='fa fa-clock-o'></i> Duration of stay </span> 
                                    <span>up to {allproduct.duration} 
                                        <i className='fa fa-question-circle' title='Maximum stay allowed at one time'></i> 
                                    </span>
                                </li>
                                 <li className='d-flex mb-2'>
                                    <span><i className='fa fa-hourglass-start'></i> Visa Validity </span>
                                    <span>{allproduct.validity}</span>
                                </li>                               
                                <li>
                               <Link href={'/' + props.country_ext + '/checkout/' + allproduct.urllink + '/' + allproduct.id} className="buy_btn">Apply for {allproduct.title}
                              </Link> 
                            </li>
                        </ul>
                             </div>
                        </Col>
                    )}
                </Row>
          </div>
      </Container>
    </>
  )
}
export const getServerSideProps = async(cxt)=>{
      const pageUrl = cxt.query.visa
      const country_ext = cxt.locale
      const res = await fetch(`https://cms.fasttrackvisa.com/api/${country_ext}/international-visa/${pageUrl}`)
   
      const visalisting = await res.json()
      return{
        props:{pageUrl, visalisting}
      }
}
