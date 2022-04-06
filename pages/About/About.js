import React from 'react';
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const About = () => {
    const aboutImg = [
        {
          img: "assets/img/about-img-1.jpg",
        },
        {
          img: "assets/img/about-img-2.jpg",
        },
        {
          img: "assets/img/about-img-3.jpg",
        },
        {
          img: "assets/img/about-img-5.jpg",
        },
      ];
  return (
    <div><section className="about-us-area ptb-80">
    <div className="container">
      <div className="section-title">
        <h2>
          Trust, Reciprocation, Efficiency, <span>and Innovation</span>
        </h2>
        <img
          src="assets/img/section-title-logo.png"
          alt="section-title-logo"
        />
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="about-text">
            <p>
              These innovations serve a huge reason. Victorious races and
              Manufacturing lighter, stronger, faster bikes are dominant,
              but there’s more to it than that. We trust the journey will
              be just as illuminating as the winning, and that damn all
              beats the feeling of experiencing our triumph
              simultaneously.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="about-img-slider">
            <Carousel
              showArrows={true}
              autoPlay="true"
              showThumbs={false}
              infiniteLoop={true}
            >
              {aboutImg.map((value, i) => {
                return (
                  <div key={i} className="item">
                    <img src={value.img} alt="about-img" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="about-content">
            <p>
              <p >
                We are creators and progressive, but we are also an Indian
                community of cyclists. We are athletes, adventurers and
                advocates for cycling.
              </p>
              <p >
                Put it all together, Moon Night Bikes is a complete
                ecosystem of bikes, gear and cycling services,
                effortlessly, connected and always accessible.
              </p>
              <p >
                You can find us at our eCommerce store on Amazon, Flipkart
                & other, around Faridabad, Haryana or connect with us
                online from wherever you are.
              </p>
              <p >
                Our Vision Living up to its dynamic vision of going far
                away from just bicycles, Moon Night Cycles has also
                forayed into fitness and wheels for tiny and neonates with
                Moon Night Group Champ respectively.
              </p>
              <p >
                In keeping with its visionary status, Rides and conquers
                future trends, be it in new products, areas of business or
                retail.
              </p>
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="features-box bg-1">
            <div className="content">
              <i className="fa fa-bicycle" />
              <h3>All Brands</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </p>
            </div>
            <Link href="#">
              <a className="btn btn-primary">Read More</a>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="features-box bg-2">
            <div className="content">
              <i className="fa fa-life-ring" />
              <h3>Free Support</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </p>
            </div>
            <Link href="#">
              <a className="btn btn-primary">Read More</a>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="features-box bg-3">
            <div className="content">
              <i className="fa fa-user" />
              <h3>Dealership</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </p>
            </div>
            <Link href="#">
              <a className="btn btn-primary">Read More</a>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="features-box bg-4">
            <div className="content">
              <i className="fa fa-bullseye" />
              <h3>Affordable</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </p>
            </div>
            <Link href="#">
              <a className="btn btn-primary">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default About