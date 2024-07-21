import Head from 'next/head'
import Banner from './components/home-page/Banner'
import CountryExLists from '../countyExList'
import Searchband from './components/home-page/Search_band'
import HomeList from './components/home-page/HomeList'
import Simple_step from './components/Simple_step'
import { useEffect, useState } from 'react'
import Testimonials from './components/Testimonials'
import { useRouter } from 'next/router'
import Ready_get from './components/Ready_get'
import Widget_v from './components/Widget_v2'
import BlogSection from './components/home-page/Blog-Section'
import { coundryExt } from '@/lib/server'
import LazyLoad from 'react-lazy-load'
export default  function Home(props) { 
  
  const {locale}= useRouter();
  //console.log(props.ce_name)
 // console.log(props.homeData)
  return (
    <>
     <Head>
      <title>Fast track visa</title> 
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content='Apply for tourist e-visas and visas globally online through Fast Track Visa. We offer the most enjoyable and reliable way to obtain your visas promptly, guaranteed.' />
     </Head>
      <>
        <Banner pageTitle={'Apply for Global Visas and ETAs Online'}/>
        <Searchband  ce_name={locale} />
        <HomeList homelists ={props.homeData.homelist}/>
        <Simple_step scountryname="Relevant" /> 
        <Testimonials testimonialsData = {props.homeData.testimonials} />
        <Ready_get></Ready_get>
        <BlogSection blogs={props.homeData.blog_arr}></BlogSection>        
        {/* <Widget_v ce_name={locale}></Widget_v>  */}
     
      </>
    </>
  )
}

export async function getServerSideProps(ctx){
  // console.log(ctx.locale)
  let ce_name ;
  const country_ext = ctx.locale;
  const res = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=0303334790d54efdb7a07b113b206ced`)
  if (!res.ok){
    throw new Error('Failed to fetch data')
  }
  const data = await res.json() 
   if(data !== null){ 
    if (data.country_code !== null && data.country_code !== 'US'){
      const country_code =  data.country_code.toLowerCase();
      for(let CountryExList of CountryExLists){
         if(CountryExList.split('-')[1] ===  country_code){                  
              ce_name = CountryExList
         }
      }
    } 
   }
   const homeList = await fetch(`https://cms.fasttrackvisa.com/api/${country_ext}/homelisting`);
   if(!homeList.ok){
    throw new Error('Failed to homelist data')
   }
   const homeData = await homeList.json()

   return{
    props: {ce_name, homeData}
   }
}

