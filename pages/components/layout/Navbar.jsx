import Link from 'next/link'
import React, { useEffect, useState} from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Login from '../../login/login';
import Curr_list from '../Curr_List';
import Country_dd from '../Country_dd';
import Lang_dsp from '../../components/Lang_dsp';
import Lang_dd from '../Lang_dd';
import { useSession, signOut } from "next-auth/react";
import axios from 'axios';
import { FaBars, FaList, FaSignOutAlt, FaUser, FaUserCircle } from "react-icons/fa";
import { Inter } from 'next/font/google' 
import { LoginDetail, useShowModel, useUserInfo } from '@/context/loginContext';
const inter = Inter({ subsets: ['latin'] })
const nextAuthUrl = 'https://fasttrackvisa.com';


const Navbar = (props) => {
  const {locale, pathname} = useRouter();
  const router = useRouter()
  const { data: session } = useSession();
  const [stickyClass, setStickyClass] = useState('relative');
  const [isActive, setIsActive] = useState('false');
  const show = useShowModel(); 
  const userInfo = useUserInfo()
  const loginDetails = LoginDetail()
//   console.log(loginDetails.logininfo)
//   console.log( userInfo.userData)




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

  const toggleMenu = ()=>{

  }
  const login  = ()=>{
     show.setLoginModel(true)   
  }
 
 const logOut = ()=>{
    const loginDetail = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
    localStorage.setItem('loginDetails', JSON.stringify(loginDetail));
    loginDetails.setLoginInfo(null) 
    signOut()
 }

 useEffect(()=>{
    const loginData = async()=>{ 
     const loginDetail = { 
         provider_id: session?.user?.provider_id,
         provider: session?.user?.provider, 
         name: session?.user?.name, 
         email: session?.user?.email, 
         mobile_number: session?.user?.phone 
      };
      loginDetails.setLoginInfo(loginDetail) 
      localStorage.setItem('loginDetails', JSON.stringify(loginDetail));     
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${locale}/user-login`, loginDetail)
    if (res.status === 200){
        const result = res.data.data        
        userInfo.setUserData(result)
        localStorage.setItem('loginDetails', JSON.stringify(result));
        
    }
   }
    loginData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
 },[session])
  

  return (
    <>
      <header className={`${inter.className } ${stickyClass}`}>
        <div className='container'>
          <nav className='d-flex justify-content-between align-items-center'>
            <div className='nav-brand'>
              <span className='d-md-none' onClick={toggleMenu}><FaBars/></span>
              <Link href={'/'}>
                <div className='logo_img'>
                 <Image sizes="(min-width: 750px) 20vw, 30vw" priority="false" alt="Fast Track Visa" src={'/img/logo.webp'} fill  />
                 </div>
              </Link>
              </div>
              <div className='menu'>
                  <ul className={`menu_ul ${isActive?'':'active'}`}>
                      <li className='cdd'>
                        <Curr_list country_ext={locale}></Curr_list>
                        <Country_dd country_ext={locale}></Country_dd>
                      </li>
                      <li className='cdd'>
                        <Lang_dsp country_ext={locale}></Lang_dsp>
                        <Lang_dd country_ext={locale}></Lang_dd>
                      </li>
                     
                     {session ? (
                        <li className='cdd'>
                            <span><i className='mr-2'><FaUserCircle /></i>{session.user.name}</span>
                            <div className='cn_dd'>
                              <Link href={'/my-profile'}><i className='mr-2'><FaUser /></i> My Profile </Link>
                              <Link href={'/my-profile/my-transactions'}><i className='mr-2'> <FaList /></i> My Transaction</Link>
                              <button onClick={logOut}><i className='mr-2'><FaSignOutAlt /></i> Log Out</button>
                            </div>
                        </li>
                     ) :(
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
      {show.loginModel === true ? <Login ce_name={locale}  /> : ''}
    
    </>
  )
}
export default Navbar
