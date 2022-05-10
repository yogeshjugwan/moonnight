import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Footer from '../components/Footer'
import Head from 'next/head'
import BackDrop from '../components/BackDrop'
import Script from 'next/script'
import '../styles/globals.css'
import '../components/backdrop.css'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/animate.css'
import '../public/assets/css/magnific-popup.css'
import '../public/assets/css/icofont.css'
import '../public/assets/css/classy-nav.min.css'
import '../public/assets/css/gallery-slider.css'
import '../public/assets/css/style.css'
import '../public/assets/css/responsive.css'
import '../public/assets/css/color/color-default.css'
import '../public/assets/dist/color-switcher.css'
function MyApp({ Component, pageProps }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Head>
        <title>Moon Night Group</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link scroll={false} rel="icon" href="/favicon.ico" /> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link scroll={false} rel="icon" href="/assets/img/favicon.ico" />
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
      </Head>
      <Script src="/assets/js/bootstrap.min.js"></Script>
      <Header />
      <Navbar show={toggle} click={() => setToggle(!toggle)} />
      <BackDrop show={toggle} click={() => setToggle(false)} />
      <Component {...pageProps} />
      <Footer />
    </>

  )
}

export default MyApp
