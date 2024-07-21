import Image from "next/image";
import { Inter } from 'next/font/google' 
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ['latin'] })
const Footer = (props) => {
  const { locale} = useRouter();
  //console.log(locale)
  return (
    <footer className={`mt-auto ${inter.className}`}>
       <Container>
          <Row>
            <Col md={6}>
               <Image src={"/img/logo2.png"}  width={200} height={56} alt="fast track visa"/>
               <Row className="my-4">
                   <Col sm={6}>
                   <h5>UAE Office</h5>
                    <p>ELOB Office No. E2-123F-45
                    Hamriyah Free Zone
                    Sharjah, United Arab Emirates, 52101</p>
                   </Col>
                   <Col sm={6}>
                   <h5>US Office</h5>
                  <p>Suite 80
                    55 West 39th Street
                    New York, USA, 10018</p>
                  <a href='mailto:info@fasttrackvisa.com'>info@fasttrackvisa.com</a>
                   </Col>
               </Row>
            </Col>
            <Col md={6}>
               <Row>
                  <Col md={6}>
                  <h5>Company  </h5>
                      <ul>
                        <li><Link href={`/about-us`}>About Us </Link></li>
                        <li><Link href={`/contact-us`}>Contact Us</Link></li>
                        <li><Link href={'/blog'}>Blog</Link></li>
                        <li><Link href={`/career`}>Career </Link></li>
                      </ul>
                  </Col>
                  <Col md={6}>
                  <h5>Company  </h5>
                  <ul>
                      <li><Link href={`${locale}/sitemap`}>Sitemap</Link></li>
                      <li><Link href={`${locale}/terms-and-conditions`}>Terms & Conditions</Link></li>
                      <li><Link href={`${locale}/privacy-policy`}>Privacy policy</Link></li>
                      <li><Link href={`${locale}/refund-and-cancellation`}>Refund & cancellation</Link></li>
                      <li><Link href={`${locale}/disclaimer`}>Disclaimer</Link></li>
                    </ul>
                  </Col>
               </Row>
            </Col>
          </Row>         
       </Container>
       <div className="w-full bg-gray-300 py-2">
         <p className="text-center text-gray-800 text-sm font-semibold">© 2024 Fast Track Visa. All rights reserved.</p>
       </div>
    </footer>

  );

}

export default Footer;

