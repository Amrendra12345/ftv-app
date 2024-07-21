import { SessionProvider } from "next-auth/react";
import Layout from "./components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.scss';
import'@/styles/flags.min.css'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


export default function MyApp({ Component, pageProps :{ session, ...pageProps }}) {
    return (
      <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
     </SessionProvider> 
    )
  }