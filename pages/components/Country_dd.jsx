import { useRouter } from "next/router";
import Link from 'next/link'
import { useEffect, useState } from "react";

 const Country_dd = () => {  
    const {locale} = useRouter();
    const router = useRouter()
    const { pathname, asPath, query } = router
//    // router.push({ pathname, query }, asPath, { locale: nextLocale})
  
   
    return (
        <div className='cn_dd'>       
        <Link href={locale === 'en-in' ? 'en-in' : `${asPath}`} locale="en-in" className={locale === "" ? "mactive" : ""} title="USA"><b className="gss_img flag-us"></b>USA </Link>
        <Link href={locale === 'en-sg' ? 'en-sg' : `${asPath}`} locale="en-sg" className={locale === "en-sg" ? "mactive" : ""} title="Singapore"><b className="gss_img flag-sg"></b>Singapore </Link>
        <Link href={locale === 'zh-tw' ? 'zh-tw' : `${asPath}`}  locale="zh-tw" className={locale === "zh-tw" ? "mactive" : ""} title="Taiwan"><b className="gss_img flag-tw"></b>Taiwan</Link>
        <Link href={locale === 'ja-jp' ? 'ja-jp' : `${asPath}`}  locale="ja-jp" className={locale === "ja-jp" ? "mactive" : ""} title="Japan"><b className="gss_img flag-jp"></b>Japan</Link>
        <Link href={locale === 'zh-hk' ? 'zh-hk' : `${asPath}`}   locale="zh-hk"  className={locale === "zh-hk" ? "mactive" : ""} title="Hong Kong"><b className="gss_img flag-hk"></b>Hong Kong</Link>
        <Link href={locale === 'ko-kr' ? 'ko-kr' : `${asPath}`} locale="ko-kr" className={locale === "ko-kr" ? "mactive" : ""} title="South Korea"><b className="gss_img flag-kr"></b>South Korea</Link>
        <Link href={locale === 'en-ph' ? 'en-ph' : `${asPath}`} locale="en-ph" className={locale === "en-ph" ? "mactive" : ""} title="Philippines"><b className="gss_img flag-ph"></b>Philippines</Link>
        <Link href={locale === 'en-th' ? 'en-th' : `${asPath}`} locale="en-th" className={locale === "en-th" ? "mactive" : ""} title="Thailand"><b className="gss_img flag-th"></b>Thailand</Link>
        <Link href={locale === 'en-gb' ? 'en-gb' : `${asPath}`} locale="en-gb" className={locale === "en-gb" ? "mactive" : ""} title="United Kingdom"><b className="gss_img flag-gb"></b>United Kingdom</Link>
        <Link href="/en-in" locale="en-in" className={locale === "en-in" ? "mactive" : ""} title="India"><b className="gss_img flag-in"></b>India</Link>
        <Link href="/en-sl" locale="en-sl" className={locale === "en-sl" ? "mactive" : ""} title="Sri Lanka"><b className="gss_img flag-sl"></b>Sri Lanka</Link>
        <Link href="/en-za" locale="en-za" className={locale === "en-za" ? "mactive" : ""} title="South Africa"><b className="gss_img flag-za"></b>South Africa</Link>
        <Link href="/en-au" locale="en-au" className={locale === "en-au" ? "mactive" : ""} title="Australia"><b className="gss_img flag-au"></b>Australia</Link>
        <Link href="/en-ke" locale="en-ke" className={locale === "en-ke" ? "mactive" : ""} title="Kenya"><b className="gss_img flag-ke"></b>Kenya</Link>
        <Link href="/en-kw" locale="en-kw" className={locale === "en-kw" ? "mactive" : ""} title="Kuwait"><b className="gss_img flag-kw"></b>Kuwait</Link>
        <Link href="/ms-my" locale="ms-my" className={locale === "ms-my" ? "mactive" : ""} title="Malaysia"><b className="gss_img flag-my"></b>Malaysia</Link>
        <Link href="/en-nz" locale="en-nz" className={locale === "en-nz" ? "mactive" : ""} title="New Zealand"><b className="gss_img flag-nz"></b>New Zealand</Link>
        <Link href="/en-sa" locale="en-sa" className={locale === "en-sa" ? "mactive" : ""} title="Saudi Arabia"><b className="gss_img flag-sa"></b>Saudi Arabia</Link>
        <Link href="/en-tr"locale="en-tr" className={locale === "en-tr" ? "mactive" : ""} title="Turkey"><b className="gss_img flag-tr"></b>Turkey</Link>
        <Link href="/uk-ua" locale="uk-ua" className={locale === "uk-ua" ? "mactive" : ""} title="Ukraine"><b className="gss_img flag-ua"></b>Ukraine</Link>
        <Link href="/en-ae"locale="en-ae" className={locale === "en-ae" ? "mactive" : ""} title="UAE"><b className="gss_img flag-ae"></b>UAE</Link>
        <Link href="/en-ca" locale="en-ca" className={locale === "en-ca" ? "mactive" : ""} title="Canada"><b className="gss_img flag-ca"></b>Canada</Link>
        <Link href="/hu-hu" locale="hu-hu" className={locale === "hu-hu" ? "mactive" : ""} title="Hungary"><b className="gss_img flag-hu"></b>Hungary</Link>
        <Link href="/de-at" locale="de-at" className={locale === "de-at" ? "mactive" : ""} title="Austria"><b className="gss_img flag-at"></b>Austria</Link>
        <Link href="/en-rs"locale="en-rs" className={locale === "en-rs" ? "mactive" : ""} title="Serbia"><b className="gss_img flag-rs"></b>Serbia</Link>
        <Link href="/de-ch" locale="de-ch" className={locale === "de-ch" ? "mactive" : ""} title="Switzerland"><b className="gss_img flag-ch"></b>Switzerland</Link>
        <Link href="/de-de" locale="de-de" className={locale === "de-de" ? "mactive" : ""} title="Germany"><b className="gss_img flag-de"></b>Germany</Link>
        <Link href="/en-il" locale="en-il" className={locale === "en-il" ? "mactive" : ""} title="Israel"><b className="gss_img flag-il"></b>Israel</Link>
        <Link href="/bg-bg" locale="bg-bg" className={locale === "bg-bg" ? "mactive" : ""} title="Bulgaria"><b className="gss_img flag-bg"></b>Bulgaria</Link>
        <Link href="/fr-fr" locale="fr-fr"className={locale === "fr-fr" ? "mactive" : ""} title="France"><b className="gss_img flag-fr"></b>France</Link>
        <Link href="/it-it" locale="it-it" className={locale === "it-it" ? "mactive" : ""} title="Italy"><b className="gss_img flag-it"></b>Italy</Link>
        <Link href="/da-dk" locale="da-dk" className={locale === "da-dk" ? "mactive" : ""} title="Denmark"><b className="gss_img flag-dk"></b>Denmark</Link>
        <Link href="/sk-sk"locale="sk-sk" className={locale === "sk-sk" ? "mactive" : ""} title="Slovakia"><b className="gss_img flag-sk"></b>Slovakia</Link>
        <Link href="/no-no" locale="no-no" className={locale === "no-no" ? "mactive" : ""} title="Norway"><b className="gss_img flag-no"></b>Norway</Link>
        <Link href="/en-ie" locale="en-ie" className={locale === "en-ie" ? "mactive" : ""} title="Ireland"><b className="gss_img flag-ie"></b>Ireland</Link>
        <Link href="/es-es"locale="es-es" className={locale === "es-es" ? "mactive" : ""} title="Spain"><b className="gss_img flag-es"></b>Spain</Link>
        <Link href="/hr-hr" locale="hr-hr" className={locale === "hr-hr" ? "mactive" : ""} title="Croatia"><b className="gss_img flag-hr"></b>Croatia</Link>
        <Link href="/pl-pl" locale="pl-pl" className={locale === "pl-pl" ? "mactive" : ""} title="Poland"><b className="gss_img flag-pl"></b>Poland</Link>
        <Link href="/lt-lt" locale="lt-lt" className={locale === "lt-lt" ? "mactive" : ""} title="Lithuania"><b className="gss_img flag-lt"></b>Lithuania</Link>
        <Link href="/ro-ro" locale="ro-ro" className={locale === "ro-ro" ? "mactive" : ""} title="Romania"><b className="gss_img flag-ro"></b>Romania</Link>
        <Link href="/lv-lv" locale="lv-lv" className={locale === "lv-lv" ? "mactive" : ""} title="Latvia"><b className="gss_img flag-lv"></b>Latvia</Link>
        <Link href="/nl-nl" locale="nl-nl" className={locale === "nl-nl" ? "mactive" : ""} title="Netherlands"><b className="gss_img flag-nl"></b>Netherlands</Link>
        <Link href="/ru-ru" locale="ru-ru" className={locale === "ru-ru" ? "mactive" : ""} title="Russia"><b className="gss_img flag-ru"></b>Russia</Link>
        <Link href="/nl-be" locale="nl-be" className={locale === "nl-be" ? "mactive" : ""} title="Belgium"><b className="gss_img flag-be"></b>Belgium</Link>
        <Link href="/cs-cz"locale="cs-cz" className={locale === "cs-cz" ? "mactive" : ""} title="Czech Republic"><b className="gss_img flag-cz"></b>Czech Republic</Link>
        <Link href="/el-gr" locale="el-gr" className={locale === "el-gr" ? "mactive" : ""} title="Greece"><b className="gss_img flag-gr"></b>Greece</Link>
        <Link href="/pt-pt" locale="pt-pt" className={locale === "pt-pt" ? "mactive" : ""} title="Portugal"><b className="gss_img flag-pt"></b>Portugal</Link>
        <Link href="/sv-se" locale="sv-se" className={locale === "sv-se" ? "mactive" : ""} title="Sweden"><b className="gss_img flag-se"></b>Sweden</Link>
        <Link href="/es-mx"locale="es-mx" className={locale === "es-mx" ? "mactive" : ""} title="Mexico"><b className="gss_img flag-mx"></b>Mexico</Link>
        <Link href="/pt-br" locale="pt-br" className={locale === "pt-br" ? "mactive" : ""} title="Brazil"><b className="gss_img flag-br"></b>Brazil</Link>
        <Link href="/fi-fi" locale="fi-fi" className={locale === "fi-fi" ? "mactive" : ""} title="Finland"><b className="gss_img flag-fi"></b>Finland</Link>
        <Link href="/zh-cn" locale="zh-cn" className={locale === "zh-cn" ? "mactive" : ""} title="China"><b className="gss_img flag-cn"></b>China</Link>
        <Link href="/en-id" locale="en-id" className={locale === "en-id" ? "mactive" : ""} title="Indonesia"><b className="gss_img flag-id"></b>Indonesia</Link>
        <Link href="/es-ar" locale="es-ar" className={locale === "es-ar" ? "mactive" : ""} title="Argentina"><b className="gss_img flag-ar"></b>Argentina</Link>
        <Link href="/es-cl" locale="es-cl" className={locale === "es-cl" ? "mactive" : ""} title="Chile"><b className="gss_img flag-cl"></b>Chile</Link>
        </div>

    )
    }

    export default Country_dd;
