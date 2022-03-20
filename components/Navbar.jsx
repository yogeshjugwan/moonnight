import Link from 'next/link';
import React,{ useState } from 'react'

const Navber = () => {
  const [toggle,setToggle]= useState(false);
  const toggleMenu=()=>{
      setToggle(!toggle)
  }
  return (
    <div className='sticky-top'>{/* Start Main Menu Area */}
      <div className="main-header-area header-sticky">
        <div className="container">
          <div className="classy-nav-container breakpoint-off">
            {/* Classy Menu */}
            <nav className="classy-navbar justify-content-between" id="bikeNav">
              {/* Logo */}
              <Link className="nav-brand" href="/" passHref><img src="assets/img/logo.png" alt="logo" /></Link>
              {/* Navbar Toggler */}
              <div className="classy-navbar-toggler">
                <span className={`navbarToggler ${toggle && "navbarToggler active"}`} 
                onClick={()=>{toggleMenu()}}><span /><span /><span /></span>
              </div>
              {/* Menu */}
              <div className={`classy-menu ${toggle && "classy-menu menu-on"}`}>
                {/* close btn */}
                <div className="classycloseIcon"  onClick={()=>{toggleMenu()}}>
                  <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                </div>
                {/* Nav Start */}
                <div className="classynav">
                  <ul>
                   <li> <Link href="/" className="active"><a>Home</a></Link></li>
                   <li> <Link href="/about"><a>about us</a></Link></li>
                   <li> <Link href="/products"><a>products</a></Link></li>
                   <li> <Link href="/blog"><a>Blog</a></Link></li>
                   <li> <Link href="/contact"><a>contact</a></Link></li>
                    {/* <Link href="#search" className="search-btn"><i className="fa fa-search" /></Link> */}
                  </ul>
                </div>
                {/* Nav End */}
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* End Main Menu Area */}
    </div>
  )
}

export default Navber