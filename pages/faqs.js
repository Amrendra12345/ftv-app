
import Link from 'next/link'; 
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import LazyLoad from 'react-lazy-load';

class Faqs extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            apistatus: '',
        };

    }

    // static async getInitialProps(context) {

    //     return {

    //     }

    // }

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

        return (
            <>
                <div className="Home-page">
                    <div className="checkout_banner">
                        <Container>
                            <h1>FAQs</h1>
                        </Container>
                    </div>
                    <Container>
                        <ol className="breadcrumb pl-0 bg-white">
                            <li className="breadcrumb-item"><Link href={'/'}> Home </Link></li>
                            <li className="breadcrumb-item active" aria-current="page">FAQs</li>
                        </ol>
                        <div className="desi-work-container">
                            <h5 className='pb-5 mb-5 pt-5 mt-5'>Coming Soon</h5>
                        </div>
                    </Container>                   
                </div>
            </>

        );
    }
}
export default Faqs;