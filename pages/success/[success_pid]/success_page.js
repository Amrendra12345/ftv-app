
import Link from 'next/link'
import Router from 'next/router'
import Image from 'next/image'
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LazyLoad from 'react-lazy-load';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';

class Visa_detail extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      apistatus: '',
    };

  }


  static async getInitialProps(context) {

    const page_url = context.query.success_pid;
    const success_page_url = context.query.success_page;
    const payment_id = context.query.payment_intent;
    // payment_intent
    const res = await fetch(`https://cmslive.fasttrackvisa.com/api/thankyou/${page_url}/${success_page_url}`);
    //console.log(res.data)
    if (res.status === 200) {
      const thankupage = await res.json()
      const apistatus = res.status;
      return {
        thankupage, success_page_url, apistatus, page_url, payment_id
      }

    }
    else {
      return {
        success_page_url, page_url
      }
    }
  }




  componentDidMount() {

    window.addEventListener('scroll', () => {
      let activeClass = 'hsticky';
      if (window.scrollY === 0) {
        activeClass = 'top';
      }
      this.setState({ activeClass });
    });

  }





  render() {
    var settings = {
      dots: true,
      nav: false,
      infinite: true,
      lazyLoad: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,

    }
    return (

      <>
        {this.props.apistatus === 200 ?
          <>
           



            <Container>

              <div className='card card-body mt-5 text-center pt-5'>

                <figure> <Image priority alt="thank you" src={'/img/check.jpg'} width={152} height={158} />
                </figure>

                <h1>Congratulations {this.props.thankupage.full_name}</h1>
                <p>You have successfully applied for an eVisa to {this.props.thankupage.destination}</p>
                <p>Your Transaction ID is {this.props.payment_id}</p>

                <hr />
                <div className='text-left'>

                  <p>You have completed the Application for eVisa for {this.props.thankupage.destination} for the following applicants:</p>

                  {/* <div className='table-responsive'>
                <table className='table table-bordered'>
                  <thead>
                    <tr><th>Name</th><th>Citizenship</th> <th>Visa Type</th>  <th>Date of Travel</th>  <th>Documents Uploaded (?)</th></tr>
                  </thead>

                  <tbody>
                    <tr><td>Here</td> <td>Here</td> <td>Here</td> <td>Here</td> <td><i className='fa fa-check-circle text-success'></i> </td></tr>
                    <tr><td>Here</td> <td>Here</td> <td>Here</td> <td>Here</td> <td><a href='#'>Upload Documents</a> </td></tr>
                    <tr><td>Here</td> <td>Here</td> <td>Here</td> <td>Here</td> <td><a href='#'>Upload Documents</a>  </td></tr>
                    <tr><td>Here</td> <td>Here</td> <td>Here</td> <td>Here</td> <td><a href='#'>Upload Documents</a>  </td></tr>
                    <tr><td>Here</td> <td>Here</td> <td>Here</td> <td>Here</td> <td><a href='#'>Upload Documents</a>  </td></tr>
                    <tr><td>Here</td> <td>Here</td> <td>Here</td> <td>Here</td> <td><a href='#'>Upload Documents</a>  </td></tr>
                  </tbody>
                </table>
              </div> */}
                </div>
              </div>


              <div className='mt-4 ftv-title text-left'>
                <h5>Rate your experience with the Visa Application Process with fasttrackvisa.com</h5>
                <p><a href='#'><i className="fa fa-star-o f20 mr-1"></i><i className="fa fa-star-o f20 mr-1"></i><i className="fa fa-star-o f20 mr-1"></i><i className="fa fa-star-o f20 mr-1"></i><i className="fa fa-star-o f20 mr-1"></i></a> </p>
              </div>

              <hr />




              <Row className='mt-5'>

                <Col sm={12} md={12}>
                  <div className='card'>
                    <div className='card-header bg-white'>


                      <h5>Instructions to Activate and Use the eSIM Card:</h5>

                    </div>
                    <div className='card-body'>
                      {ReactHtmlParser(this.props.thankupage.gernal_rule)}
                    </div>

                  </div>
                </Col>
                {/* 
            <Col sm={12} md={6}>
              <div className='card'>
                <div className='card-header bg-white'>
                  <h5>Travel Tips for {this.props.thankupage.destination}</h5>
                  <div className="faq-page pt-3">
                    <Accordion defaultActiveKey="0a">
                      <li>
                        <Accordion.Toggle as={Card.Header} className="pl-0 font-weight-bold" eventKey="0a">
                          #1 Tip
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0a">
                          <div className='pt-1 pb-2'>
                            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the
                          </div>
                        </Accordion.Collapse>
                      </li>
                      <li>
                        <Accordion.Toggle as={Card.Header} className="pl-0 font-weight-bold" eventKey="1a">
                          #2 Tip
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1a">
                          <div className='pt-1 pb-2'>
                            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the
                          </div>
                        </Accordion.Collapse>
                      </li>
                      <li>
                        <Accordion.Toggle as={Card.Header} className="pl-0 font-weight-bold" eventKey="2a">
                          #3 Tip
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="2a">
                          <div className='pt-1 pb-2'>
                            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the
                          </div>
                        </Accordion.Collapse>
                      </li>
                      <li>
                        <Accordion.Toggle as={Card.Header} className="pl-0 font-weight-bold" eventKey="3a">
                          #4 Tip
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3a">
                          <div className='pt-1 pb-2'>
                            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the
                          </div>
                        </Accordion.Collapse>
                      </li>
                    </Accordion>
                  </div>
                </div>
              </div>
            </Col> */}

              </Row>


              <h5 className='mt-5'> Please note :</h5>

              <ol type='a'>
                <li>An e-mail with your Password to login to fasttrackvisa.com has been sent to you. Use your e-mail ID as the User ID (For 1st time Users only)</li>
                <li>Your {this.props.thankupage.destination} eVisa and the eSIM will be delivered to you within XX Hours via e-mail & WhatsApp</li>
                <li>You can also download your eVisa from your 'My Accounts' section after logging into fasttrackvisa.com</li>
                <li>Please note that it is mandatory to take a printout of your eVisa when you travel to {this.props.thankupage.destination}</li>
                <li>In case your visa is rejected for any reason whatsoever, you will get an e-mail to that effect.</li>
                <li>Your invoice has been e-mailed to you. You can also download it from here</li>
                <li>If you have any questions, send us an e-mail on support@fasttrackvisa.com</li>
              </ol>


              <p>Note : We will initiate your Visa Application with the {this.props.thankupage.destination} Embassy once all documents are uploaded and there are no errors in the application. If there are any gaps in your application; our support team will connect with you within 24 hours.</p>


            </Container>


           

          </>

          :
          <>
            <div className="error">
              <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-8 col-md-6">
                    <div className="card card-body text-center">
                      <Link href={'/'} className="navbar-brand">
                       <Image priority alt="Fast Track Visa" src={'/img/logo.png'} width={209} height={56} /> 
                      </Link>

                      <h1 className="mt-2 h3">Something went wrong please try again  </h1>

                      <p>
                        <Link href={'/'} className="btn btn-dark">Click Here</Link>
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </>

    );
  }
}
export default Visa_detail;