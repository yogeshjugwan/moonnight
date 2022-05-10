import React from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import FunFactsArea from "./home_section/FunFactsArea";
import History from "./about/History";
import About from "./about/About";
import Vision from "./about/Vision";
import PartnerArea from "./about/PartnerArea";
const about = () => {
 
  return (
    <div>
      <Head>
        <title>Moon Night Group | About-Us</title>
      </Head>
      <div>
        {/* Start Page Title Area */}
        <div className="page-title">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="page-title-text">
                      <h3>About Us</h3>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ul>
                      <li>
                        <Link scroll={false} href="/" as={"/"}>
                          <a>
                            <i className="fa fa-home" /> Home
                          </a>
                        </Link>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />
                      </li>
                      <li className="active">About Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title Area */}
        {/* Start About Area */}
        <About />
        {/* End About Area */}
        {/* Start Our History Area */}
        <History />
        {/* End Our History Area */}
        {/* Start Our Vision */}
        <Vision/>
        {/* End Our Vision */}
        {/* Start Fun Fcats Area*/}
        <FunFactsArea />
        {/* End Fun Fcats Area*/}
        {/* Start Partner Area */}
       <PartnerArea/>
        {/* End Partner Area */}
        
      </div>
    </div>
  );
};

export default about;
