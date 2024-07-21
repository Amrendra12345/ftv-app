import Link from 'next/link'
import Head from 'next/head'
import React, { useEffect, useState, createRef } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Login from '../../login/login';
import Curr_list from '../Curr_List';
import Country_dd from '../Country_dd';
import Lang_dsp from '../../components/Lang_dsp';
import Lang_dd from '../Lang_dd';
import { useSession, signOut } from "next-auth/react";
import axios from 'axios';
import { Inter } from 'next/font/google' 
const inter = Inter({ subsets: ['latin'] })
const nextAuthUrl = 'https://fasttrackvisa.com';


const Navbar = (props) => {
  const {locale, pathname} = useRouter();
  const router = useRouter()

 console.log(router)
  //Selecteddestination(locale)

  const { data: session } = useSession();
  const [isActive, setIsActive] = useState(false);
  const [userName, setUserName] = useState(null);
  const [uName, setuName] = useState(null);
  const [stickyClass, setStickyClass] = useState('relative');
  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShow = () => setShow(true);
  const handleShowSignUp = () => setShowSignUp(true);
  const nextAuthUrl = 'https://fasttrackvisa.com';
  
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {    
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass('hsticky') : setStickyClass('relative');
    }
  };

  useEffect(() => {
    // console.log('test', session?.user.email)
    if (localStorage.getItem('loginDetails') !== null) {
      var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
      if (loginDetails.email !== '' && loginDetails.email !== null && loginDetails.email !== undefined) {
      } else if (loginDetails.mobile_number !== '' && loginDetails.mobile_number !== null && loginDetails.mobile_number !== undefined) {
      } else {
        isCheckoutPage(true);
      }
    } else {
      var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
      localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
    }


    axios.get('https://cms.fasttrackvisa.com/api' + (locale === '' ? '' : '/' + locale) + '/staticcontent').then(res => {
      // console.log(res)
      if (res.status === 200) {
        localStorage.setItem('staticContent', JSON.stringify(res.data));

      }
    })


  }, [])

  useEffect(() => {
    var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
    if (localStorage.getItem('loginDetails') !== null) {
      loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
      if (loginDetails.email !== '' && loginDetails.email !== null && loginDetails.email !== undefined) {
        setUserName(loginDetails.email)
      } else if (loginDetails.mobile_number !== '' && loginDetails.mobile_number !== null && loginDetails.mobile_number !== undefined) {
        setUserName(loginDetails.mobile_number)
      }
      if (loginDetails.name_of_agency !== '' && loginDetails.name_of_agency !== null && loginDetails.name_of_agency !== undefined) {
        setuName(loginDetails.name_of_agency)
      }
    } else {
      localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
    }
  })

  useEffect(() => {
    setTimeout(() => {
      // console.log('sssion', session?.user.email);
      if (session !== undefined && session !== null && userName === null) {
        var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
        setUserName(session?.user?.name);
        setuName(session?.user?.name);
        loginDetails.email = session?.user?.email;
        loginDetails.name = session?.user?.name;
        //  console.log('loginDetails,', loginDetails);
        axios.post('https://cms.fasttrackvisa.com/api' + (locale === '' ? '' : '/' + locale) + '/user-login', loginDetails).then(res => {
          //alert("nav")
          if (res.status === 200) {
            localStorage.setItem('loginDetails', JSON.stringify(res.data.data));
             const url = pathname;
             var checkOut = url == '/checkout' || url == '/my-profile' || url == '/success';
            if (checkOut) {
              setShow(false);
            }
          }
        })
        // console.log("load nav...", loginDetails)
      }
    }, 1)
  }, [session])

  const isCheckoutPage = (status) => {
    if (userName === null || userName === undefined || userName === '') {
      //const url = pathname.split('/');
      
      var checkOut = pathname == '/checkout' || pathname == '/my-profile' || pathname == '/success';
      // console.log(userName,status, checkOut, (status && checkOut), (!status && !checkOut))
      if (status && checkOut && session?.user.email != '') {
        setShow(true);
        login();
      }
      else if (!status && checkOut && session == null) {
        router.push('/','/',  { locale })

      }
    }
  }

  const login = () => {
    if (show === true) {
      setShow(false);
      setTimeout(() => {
        setShow(true);
      }, 100)
    } else {
      setShow(true);
    }
  }

  const logOut = () => {
    var loginDetail = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
    localStorage.setItem('loginDetails', JSON.stringify(loginDetail));
    //console.log('setTimeout')
    if (locale != '') {
      if (props?.handleCallback) {
        props?.handleCallback(false);
        router.push('/','/',  { locale })
      } else {
        router.push('/','/',  { locale })
      }
    }
    else {
      if (props?.handleCallback) {
        props?.handleCallback(false);
        router.push('/','/',  { locale })
      } else {
        router.push('/','/',  { locale })
      }
    }
    if (session != undefined && session != null) {
      setTimeout(() => {
        signOut();
        setUserName(null);
        setuName(null);
      }, 1);
      if (locale != '') {
        router.push('/','/',  { locale })
      } else {
        router.push('/','/',  { locale })
      }
    }
  }

  const Showhidenav = event => {
    setIsActive(current => !current);
  };
  const handleCallback = (loginStatue) => {
    //Selecteddestination(loginStatue)
    if (loginStatue) {
      if (props?.handleCallback) {
        props?.handleCallback(true)
      }
      var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
      if (JSON.parse(localStorage.getItem('loginDetails')) !== null) {
        loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
        if (loginDetails.email !== '' && loginDetails.email !== null && loginDetails.email !== undefined) {
          setUserName(loginDetails.email)
        } else if (loginDetails.mobile_number !== '' && loginDetails.mobile_number !== null && loginDetails.mobile_number !== undefined) {
          setUserName(loginDetails.mobile_number)
        }
      }
    } else {
      isCheckoutPage(false);
    }
  }


  return (
    <>
      <header className={`${inter.className } ${stickyClass}`}>
        <div className='container'>
          <nav className='d-flex justify-content-between align-items-center'>
              <Link href={'/'}>
                 <Image sizes="(min-width: 750px) 40vw, 60vw" priority alt="Fast Track Visa" src={'/img/logo.png'} width={204} height={56} />
              </Link>
              <div className='menu'>
                  <ul className='d-flex justify-content-end align-items-center'>
                      <li className='cdd'>
                        <Curr_list country_ext={locale}></Curr_list>
                        <Country_dd country_ext={locale}></Country_dd>
                      </li>
                      <li className='cdd'>
                        <Lang_dsp country_ext={locale}></Lang_dsp>
                        <Lang_dd country_ext={locale}></Lang_dd>
                      </li>
                      {userName !== null && userName !== undefined && userName !== '' ? (
                          <li className='cdd'>
                          <span><i className='fa fa-user-circle'></i>
                            {uName === null || userName === undefined || userName === '' ?
                              ' Hi User'
                              : ' ' + uName || userName
                            }</span>
                          {locale === '' ?
                            (<div className='cn_dd'>
                              <Link href={'/my-profile'}><i className='fa fa-user'></i> My Profile </Link>
                              <Link href={'/my-profile/my-transactions'}><i className='fa fa-list'></i> My Transaction</Link>
                              <button onClick={logOut}><i className='fa fa-sign-out'></i> Log Out</button>
                            </div>)
                            :
                            (<div className='cn_dd'>
                              <Link href={'/' + locale + '/my-profile'}><i className='fa fa-user'></i> My Profile </Link>
                              <Link href={'/' + locale + '/my-profile/my-transactions'}><i className='fa fa-list'></i> My Transaction </Link>
                              <button onClick={logOut}><i className='fa fa-sign-out'></i> Log Out</button>
                            </div>)
                          }
                        </li>
                        ):(
                        <li>
                           <button onClick={login}>Sign In</button>
                        </li>
                       )
                    }  
                  </ul>
              </div>
          </nav>
       </div>
      </header>
     {show === true ? <Login ce_name={locale} handleCallback={handleCallback} /> : ''}
    </>
  )
}
export default Navbar
