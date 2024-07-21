import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
const Lang_dd = (props) => {
  const { locale } = useRouter();
 // console.log(locale);
  return (
    <>
      {locale === "" ? (
        ""
      ) : locale === "en-sg" || locale === "zh-sg" ? (
        <div className="cn_dd la_ndd">
          <Link href="/en-sg">
            English
          </Link>
          <Link href="/zh-sg">
            中文
          </Link>
        </div>
      ) : locale === "zh-tw" || locale === "en-tw" ? (
        <div className="cn_dd la_ndd">
          <Link href="/zh-tw">
            中文
          </Link>
          <Link href="/en-tw">
            English
          </Link>
        </div>
      ) : locale === "ja-jp" || locale === "en-jp" ? (
        <div className="cn_dd la_ndd">
          <Link href="/ja-jp">
            倭国 
          </Link>
          <Link href="/en-jp">
            English
          </Link>
        </div>
      ) : locale === "zh-hk" || locale === "en-hk" ? (
        <div className="cn_dd la_ndd">
          <Link href="/zh-hk">
            中文
          </Link>
          <Link href="/en-hk">
            English
          </Link>
        </div>
      ) : locale === "ko-kr" || locale === "en-kr" ? (
        <div className="cn_dd la_ndd">
          <Link href="/ko-kr">
            한국어 
          </Link>
          <Link href="/en-kr">
            English
          </Link>
        </div>
      ) : locale === "en-ph" ? (
        ""
      ) : locale === "en-th" || locale === "th-th" ? (
        <div className="cn_dd la_ndd">
          <Link href="/en-th">
            English 
          </Link>
          <Link href="/th-th">
            แบบไทย
          </Link>
        </div>
      ) : locale === "en-gb" ? (
        ""
      ) : locale === "en-in" || locale === "hi-in" ? (
        <div className="cn_dd la_ndd">
          <Link href="/en-in">
            English
          </Link>
          <Link href="/hi-in">
            हिन्दी
          </Link>
        </div>
      ) : locale === "en-sl" ? (
        ""
      ) : locale === "en-za" ? (
        ""
      ) : locale === "en-au" ? (
        ""
      ) : locale === "en-ke" ? (
        ""
      ) : locale === "en-kw" || locale === "ar-kw" ? (
        <div className="cn_dd la_ndd">
          <Link href="/en-kw">
            English
          </Link>
          <Link href="/ar-kw">
            عربى
          </Link>
        </div>
      ) : locale === "ms-my" || locale === "en-my" ? (
        <div className="cn_dd la_ndd">
          <Link href="/ms-my">
            melayu 
          </Link>
          <Link href="/en-my">
            English
          </Link>
        </div>
      ) : locale === "en-nz" ? (
        ""
      ) : locale === "en-sa" || locale === "ar-sa" ? (
        <div className="cn_dd la_ndd">
          <Link href="/en-sa">
            English
          </Link>
          <Link href="/ar-sa">
            عربى
          </Link>
        </div>
      ) : locale === "en-tr" || locale === "tr-tr" ? (
        <div className="cn_dd la_ndd">
          <Link href="/en-tr">
            English
          </Link>
          <Link href="/tr-tr">
            Türk
          </Link>
        </div>
      ) : locale === "uk-ua" || locale === "en-ua" ? (
        <div className="cn_dd la_ndd">
          <Link href="/uk-ua">
            русский
          </Link>
          <Link href="/en-ua">
            English
          </Link>
        </div>
      ) : locale === "en-ae" || locale === "ar-ae" ? (
        <div className="cn_dd la_ndd">
          <Link href="/en-ae">
            English
          </Link>
          <Link href="/ar-ae">
            عربى
          </Link>
        </div>
      ) : locale === "en-ca" || locale === "fr-ca" ? (
        <div className="cn_dd la_ndd">
          <Link href="/en-ca">
            English
          </Link>
          <Link href="/fr-ca">
            française
          </Link>
        </div>
      ) : locale === "hu-hu" || locale === "de-hu" ? (
        <div className="cn_dd la_ndd">
          <Link href="/hu-hu">
            Magyar
          </Link>
          <Link href="/de-hu">
            deutsch
          </Link>
        </div>
      ) : locale === "de-at" || locale === "fr-at" ? (
        <div className="cn_dd la_ndd">
          <Link href="/de-at">
            deutsch
          </Link>
          <Link href="/fr-at">
            française
          </Link>
        </div>
      ) : locale === "en-rs" || locale === "sr-rs" ? (
        <div className="cn_dd la_ndd">
          <Link href="/en-rs">
            English
          </Link>
          <Link href="/sr-rs">
            Српски
          </Link>
        </div>
      ) : locale === "de-ch" || locale === "fr-ch" ? (
        <div className="cn_dd la_ndd">
          <Link href="/de-ch">
            deutsch
          </Link>
          <Link href="/fr-ch">
            française
          </Link>
        </div>
      ) : locale === "de-de" || locale === "en-de" ? (
        <div className="cn_dd la_ndd">
          <Link href="/de-de">
            deutsch
          </Link>
          <Link href="/en-de">
            English
          </Link>
        </div>
      ) : locale === "en-il" || locale === "he-il" ? (
        <div className="cn_dd la_ndd">
          <Link href="/en-il">
            English
          </Link>
          <Link href="/he-il">
            עִברִית
          </Link>
        </div>
      ) : locale === "bg-bg" || locale === "en-bg" ? (
        <div className="cn_dd la_ndd">
          <Link href="/bg-bg">
            български
          </Link>
          <Link href="/en-bg">
            English
          </Link>
        </div>
      ) : locale === "fr-fr" || locale === "en-fr" ? (
        <div className="cn_dd la_ndd">
          <Link href="/fr-fr">
            française
          </Link>
          <Link href="/en-fr">
            English
          </Link>
        </div>
      ) : locale === "it-it" || locale === "en-it" ? (
        <div className="cn_dd la_ndd">
          <Link href="/it-it">
            italiano
          </Link>
          <Link href="/en-it">
            English
          </Link>
        </div>
      ) : locale === "da-dk" || locale === "en-dk" ? (
        <div className="cn_dd la_ndd">
          <Link href="/da-dk">
            dansk
          </Link>
          <Link href="/en-dk">
            English
          </Link>
        </div>
      ) : locale === "sk-sk" || locale === "hu-sk" ? (
        <div className="cn_dd la_ndd">
          <Link href="/sk-sk">
            slovenský
          </Link>
          <Link href="/hu-sk">
            Magyar
          </Link>
        </div>
      ) : locale === "no-no" || locale === "en-no" ? (
        <div className="cn_dd la_ndd">
          <Link href="/no-no">
            norsk
          </Link>
          <Link href="/en-no">
            English
          </Link>
        </div>
      ) : locale === "en-ie" ? (
        ""
      ) : locale === "es-es" ? (
        ""
      ) : locale === "hr-hr" ? (
        ""
      ) : locale === "pl-pl" ? (
        ""
      ) : locale === "lt-lt" ? (
        ""
      ) : locale === "ro-ro" || locale === "hu-ro" ? (
        <div className="cn_dd la_ndd">
          <Link href="/ro-ro">
            Română
          </Link>
          <Link href="/hu-ro">
            Magyar
          </Link>
        </div>
      ) : locale === "lv-lv" ? (
        ""
      ) : locale === "nl-nl" || locale === "en-nl" ? (
        <div className="cn_dd la_ndd">
          <Link href="/nl-nl">
            nederlands
          </Link>
          <Link href="/en-nl">
            English
          </Link>
        </div>
      ) : locale === "ru-ru" ? (
        ""
      ) : locale === "nl-be" || locale === "fr-be" ? (
        <div className="cn_dd la_ndd">
          <Link href="/nl-be">
            deutsch
          </Link>
          <Link href="/fr-be">
            française
          </Link>
        </div>
      ) : locale === "cs-cz" || locale === "de-cz" ? (
        <div className="cn_dd la_ndd">
          <Link href="/cs-cz">
            čeština
          </Link>
          <Link href="/de-cz">
             deutsch
          </Link>
        </div>
      ) : locale === "el-gr" ? (
        ""
      ) : locale === "pt-pt" ? (
        ""
      ) : locale === "sv-se" || locale === "en-se" ? (
        <div className="cn_dd la_ndd">
          <Link href="/sv-se">
            svenska
          </Link>
          <Link href="/en-se">
            English
          </Link>
        </div>
      ) : locale === "es-mx" || locale === "en-mx" ? (
        <div className="cn_dd la_ndd">
          <Link href="/es-mx">
            español
          </Link>
          <Link href="/en-mx">
            English
          </Link>
        </div>
      ) : locale === "pt-br" || locale === "es-br" ? (
        <div className="cn_dd la_ndd">
          <Link href="/pt-br">
            Português
          </Link>
          <Link href="/es-br">
            español
          </Link>
        </div>
      ) : locale === "fi-fi" || locale === "sv-fi" ? (
        <div className="cn_dd la_ndd">
          <Link href="/fi-fi">
            Suomalainen
          </Link>
          <Link href="/sv-fi">
            svenska
          </Link>
        </div>
      ) : locale === "zh-cn" ? (
        ""
      ) : locale === "en-id" || locale === "ms-id" ? (
        <div className="cn_dd la_ndd">
          <Link href="/en-id">
            English
          </Link>
          <Link href="/ms-id">
            melayu
          </Link>
        </div>
      ) : locale === "es-ar" || locale === "it-ar" ? (
        <div className="cn_dd la_ndd">
          <Link href="/es-ar">
            español
          </Link>
          <Link href="/it-ar">
            italiano
          </Link>
        </div>
      ) : locale === "es-cl" || locale === "en-cl" ? (
        <div className="cn_dd la_ndd">
          <Link href="/es-cl">
            español
          </Link>
          <Link href="/en-cl">
            English
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Lang_dd;
