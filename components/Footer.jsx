import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Start Footer Area */}
      <footer className="footer-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="widgets">
                <div className="footer-logo">
                  <Link href="/">
                    <a>
                      {" "}
                      <img
                        src="assets/img/logo.png"
                        alt="logo"
                        width={"100px"}
                      />
                    </a>
                  </Link>
                </div>
                <ul className="contact-us">
                  <li>
                    <i className="fa fa-map-marker" /> A-482/16, Gagan Vihar
                    Bhopura Sahibabad Ghaziabad U.P.-201005 (INDIA)
                  </li>
                  <li>
                    <i className="fa fa-phone" />{" "}
                    <span><a href="tel:+91 6387 982 497">+91 6387 982 497</a></span>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />{" "}
                    <a href="mailto:moonnight@gmail.com">
                      {" "}
                      <span><a href="mailto:Info@moonnightgroup.com" type='email'><span className="__cf_email__" data-cfemail="e0898e868fa08885928f82898b85ce838f8d">Info@moonnightgroup.com</span></a></span>
                    </a>
                  </li>
                </ul>
                <ul className="social">
                  <li>
                    <Link href="/">
                      <a href="#" className="facebook">
                        <i className="fa-brands fa-facebook" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a href="#" className="twitter">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a href="#" className="linkedin">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a href="#" className="instagram">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-6">
              <div className="ms-lg-5 widgets">
                <h3>Usefull Links</h3>
                <ul className="usefull-links">
                  <li>
                    <Link href="/">
                      <a>
                        <i className="fa fa-angle-double-right" /> Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>
                        <i className="fa fa-angle-double-right" /> About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product">
                      <a>
                        <i className="fa fa-angle-double-right" /> Product
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>
                        <i className="fa fa-angle-double-right" /> Blog
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>
                        <i className="fa fa-angle-double-right" /> Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widgets">
                <h3>Latest Tweets</h3>
                <div className="latest-tweets-post">
                  <div className="icon">
                    <i className="fa-brands fa-twitter" />
                  </div>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, <a href="#">@Morbi turpis massa</a></p>
                    <span>About an hour ago</span>
                  </div>
                </div>
                <div className="latest-tweets-post mb-0">
                  <div className="icon">
                    <i className="fa-brands fa-twitter" />
                  </div>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, <a href="#">@Morbi turpis massa</a></p>
                    <span>About an hour ago</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widgets">
                <h3>Subscribe Us</h3>
                <div className="subscribe-us">
                  <p>Subscribe to our Newsletter and get bonuses for the next purchase</p>
                  <form>
                    <div className="form-group mb-0">
                      <input type="email" className="form-control" name="email" placeholder="Enter Your E-Mail" />
                      <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="widgets">
                <h3>Usefull Links</h3>
                <ul className="usefull-links">
                  <li>
                    <Link href="/">
                      <a>
                        <i className="fa fa-angle-double-right" /> Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>
                        <i className="fa fa-angle-double-right" /> About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product">
                      <a>
                        <i className="fa fa-angle-double-right" /> Product
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>
                        <i className="fa fa-angle-double-right" /> Blog
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>
                        <i className="fa fa-angle-double-right" /> Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div>
                <p className="text-center">
                  <i className="fa fa-copyright" /> 2021{" "}
                  <a
                    href="https://prideconsultancy.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Prideconsultancy.com
                  </a>{" "}
                  All rights reserved.
                </p>
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
  );
};

export default Footer;
