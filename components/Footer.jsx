import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>{/* Start Footer Area */}
      <footer className="footer-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widgets">
                <div className="footer-logo">
                  <a href="index.html"> <img src="assets/img/footer-logo.png" alt="logo" /></a>
                </div>
                <ul className="contact-us">
                  <li><i className="fa fa-map-marker" /> 6000 Universal Blvd, Orlando, FL 32819, USA</li>
                  <li><i className="fa fa-phone" /> <a href="tel:+91 921 254-5874"> +91 921 254-5874</a></li>
                  <li><i className="fa fa-envelope" /> <a href="mailto:moonnight@gmail.com">  <span className="__cf_email__" data-cfemail="2e474048416e424f59574b5c4d415b5c5a004d4143">moonnight@gmail.com</span></a></li>
                </ul>
                <ul className="social">
                  <li><Link href="/"><a href="#" className="facebook"><i className="fa fa-facebook" /></a></Link></li>
                  <li><Link href="/"><a href="#" className="twitter"><i className="fa fa-twitter" /></a></Link></li>
                  <li><Link href="/"><a href="#" className="linkedin"><i className="fa fa-linkedin" /></a></Link></li>
                  <li><Link href="/"><a href="#" className="google-plus"><i className="fa fa-google-plus" /></a></Link></li>
                  <li><Link href="/"><a href="#" className="instagram"><i className="fa fa-instagram" /></a></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widgets">
                <h3>Usefull Links</h3>
                <ul className="usefull-links">
                  <li><Link href="/"><a ><i className="fa fa-angle-double-right" /> Home</a></Link></li>
                  <li><Link href="/about"><a ><i className="fa fa-angle-double-right" /> About Us</a></Link></li>
                  <li><Link href="/product"><a ><i className="fa fa-angle-double-right" /> Product</a></Link></li>
                  <li><Link href="/blog"><a ><i className="fa fa-angle-double-right" /> Blog</a></Link></li>
                  <li><Link href="/contact"><a ><i className="fa fa-angle-double-right" /> Contact</a></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widgets">
                <h3>Latest Tweets</h3>
                <div className="latest-tweets-post">
                  <div className="icon">
                    <i className="fa fa-twitter" />
                  </div>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, <a href="#">@Morbi turpis massa</a></p>
                    <span>About an hour ago</span>
                  </div>
                </div>
                <div className="latest-tweets-post mb-0">
                  <div className="icon">
                    <i className="fa fa-twitter" />
                  </div>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, <a href="#">@Morbi turpis massa</a></p>
                    <span>About an hour ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widgets">
                <h3>Subscribe Us</h3>
                <div className="subscribe-us">
                  <p>Subscribe to our Newsletter and get bonuses for the next purchase</p>
                  <form>
                    <div className="form-group mb-0">
                      <input type="email" className="form-control" name="email" placeholder="Enter Your E-Mail" />
                      <button type="submit"><i className="fa fa-paper-plane-o" /></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7">
                <p><i className="fa fa-copyright" /> 2021 <a href="http://envytheme.com/" target="_blank" rel="noreferrer">EnvyTheme.</a> All rights reserved.</p>
              </div>
              {/* <div className="col-lg-5 col-md-5">
                <ul>
                  <li><a href="#"><img src="assets/img/paypal.png" alt="paypal" /></a></li>
                  <li><a href="#"><img src="assets/img/visa.png" alt="visa" /></a></li>
                  <li><a href="#"><img src="assets/img/master-card.png" alt="master-card" /></a></li>
                  <li><a href="#"><img src="assets/img/maestro.png" alt="maestro" /></a></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer Area */}
    </div>
  )
}

export default Footer