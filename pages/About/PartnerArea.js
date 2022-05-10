import React from 'react'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PartnerArea = () => {
    const aboutPartnerImg = [
        {
          img: "/assets/img/partner1.png",
        },
        {
          img: "/assets/img/partner2.png",
        },
        {
          img: "/assets/img/partner3.png",
        },
        {
          img: "/assets/img/partner4.png",
        },
        {
          img: "/assets/img/partner5.png",
        },
        {
          img: "/assets/img/partner6.png",
        },
        {
          img: "/assets/img/partner7.png",
        },
      ];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <section className="partner-area ptb-80">
    {/* <div className="container">
      <div className="section-title">
        <h2>
          Our <span>Partner</span>
        </h2>
        <img
          src="/assets/img/section-title-logo.png"
          alt="section-title-logo"
        />
      </div>
      <div className="row">
        <div className="partner-slider">
          <Slider {...settings}>
            {aboutPartnerImg.map((value, i) => {
              return (
                <div key={i} className="item">
                  <Link scroll={false} href="#">
                    <a>
                      <img src={value.img} alt="partner1" />
                    </a>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div> */}
  </section>
  </div>
    )
}

export default PartnerArea