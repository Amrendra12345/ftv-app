
import { LoginDetail, useShowModel, useUserInfo } from '@/context/loginContext';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'


const Login = (props, { handleCallback }) => {   
    const [isError, setIsError] = useState('')
    const handleCloseSignUp = () => setShowSignUp(false);
    const [inputValue, setinputValue] = useState('')
    const {locale, pathname} = useRouter();
    const show = useShowModel(); 
    const loginDetails = LoginDetail()
    const userInf = useUserInfo()
    console.log(userInf)
    
    const googleSignIn = async()=>{
      const status = await signIn('google', {
            redirect:true,           
        })

    }
    const facebookSignIn = async()=>{
        const status = await signIn('facebook', {
              redirect:true,              
          })    
        console.log(status)      
      }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(inputValue)){
            setIsError('Please enter a valid email address');
        }else{
            setIsError('') 
            const loginDetail ={
                provider_id:'',
                provider :'', 
                name :'',
                email: inputValue, 
                phone:'', 
                ce_name: locale
            }
         const status =  await signIn('credentials', loginDetail, {callbackUrl:'', redirect:false })
         console.log(status)
        }
    }
    const handleClose = () => {
        show.setLoginModel(false)

    };
    return (
      
        <Modal size="lg" dialogClassName="lsnmodal" backdrop="static"
            keyboard={false} show={true} onHide={handleClose} animation={true} className='mt-5'>
            <Modal.Body>
                <Container className='p-0'>
                    <Row className='no-gutters'>
                        <Col>
                            <div className='login_Content'>
                                <div className='login_img'>
                                    <Image alt="Log in" src={'/img/loginimg.jpg'} height={600} width={400} />
                                </div>
                                <div className='login-from'>
                                    <span className="close2 p-3" onClick={(event) => {handleClose() }}>&times; </span>
                                    <div className='login-from'>
                                        <span className="close2 p-3" onClick={(event) => { handleClose() }}> &times; </span>
                                        <div className="form">
                                            <h2 className="mb-1"> Log in</h2>
                                            <p className='mb-5'>Welcome back! Please enter your details.</p>
                                            
                                                <button type='button' className='btn btn-smlogin facebookbtn' onClick={facebookSignIn}> Login with Facebook </button>
                                                <button type='button' className='btn btn-smlogin googlebtn mt-3' onClick={googleSignIn}> Sign In with Google  </button>
                                                <div className='or'><span>OR</span></div>
                                                <form method='POST' onSubmit={handleSubmit}>
                                                <div className="ftv-field">
                                                    <label htmlFor="logininput">Email ID</label>
                                                    <input id="logininput" name="logininput" type="text" className="form-control" placeholder="Here" onChange={(e)=> setinputValue(e.target.value)} />
                                                </div>
                                                <p className='login_error'>{isError}</p>
                                                <button className="buy_btn w-100" id="form-submit-button" type="submit" >Submit</button>
                                            </form>
                                            <p className="mt-3 mb-1">
                                                <input type={'checkbox'} defaultChecked={true} /> I have reviewed the <Link href={props.ce_name === '' ? '' : '/' + props.ce_name + '/privacy-policy'}>Privacy Policy* </Link>
                                            </p>
                                            <p><input type={'checkbox'} defaultChecked={true} />  I agree to receive alerts via email & SMS*</p>
                                            <p className="mt-4 text-center">If you have an account, please  <span onClick={handleCloseSignUp} >Sign In</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default Login