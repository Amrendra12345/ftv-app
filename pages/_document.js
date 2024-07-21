import Document, { Html, Head, Main, NextScript } from 'next/document'

 
class MyDocument extends Document {
  render() {  
   // const lng = ctx.req.i18n ? lngFromReq(ctx.req) : ctx.req.lng; 
    return (
      <Html lang="en">
        {/* <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSNXH65');`}}></script>  */}
        <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/img/favicon.ico" /> 
            <meta name="theme-color" content="#245cc1" />            
            <meta property="og:type" content="Article" />
            <meta property="og:site_name" content="FastTrackVisa.com" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@FastTrackVisa" />
            <meta name="twitter:creator" content="@FastTrackVisa" />
            <meta name="description" content='Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.' />         
            <meta name="google-site-verification" content="L0_50ckD83y8UrprubZ2rY3vo-2RucflVhKVAi_qSrg" />
        </Head>
        <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSNXH65"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}></noscript>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
 
export default MyDocument