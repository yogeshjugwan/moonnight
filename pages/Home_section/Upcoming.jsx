import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Upcoming = () => {
  const upcomingData=[
    {
        "title":"December 03, 2021 One",
        "img":"assets/img/upcoming-bike-1.jpg",
        "discription":"Diamondback Bicycles Trace Dual Sport Bike"
    },
    {
        "title":"December 03, 2021 two",
        "img":"assets/img/upcoming-bike-2.jpg",
        "discription":"Diamondback Bicycles Trace Dual Sport Bike"
    },
    {
        "title":"December 03, 2021 three",
        "img":"assets/img/upcoming-bike-3.jpg",
        "discription":"Diamondback Bicycles Trace Dual Sport Bike"
    },
    {
        "title":"December 03, 2021 four",
        "img":"assets/img/upcoming-bike-4.jpg",
        "discription":"Diamondback Bicycles Trace Dual Sport Bike"
    },
    {
        "title":"December 03, 2021 five",
        "img":"assets/img/upcoming-bike-5.jpg",
        "discription":"Diamondback Bicycles Trace Dual Sport Bike"
    },
    {
        "title":"December 03, 2021 six",
        "img":"assets/img/upcoming-bike-6.jpg",
        "discription":"Diamondback Bicycles Trace Dual Sport Bike"
    },
    {
        "title":"December 03, 2021 seven",
        "img":"assets/img/upcoming-bike-1.jpg",
        "discription":"Diamondback Bicycles Trace Dual Sport Bike"
    },
]
  var upsettings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
  return (
    <div>{/* Start Upcoming Bike */}
    <section className="upcoming-bikes-area">
      <div className="row m-0">
        <div className="col-lg-3 col-md-5 col-sm-5 p-0">
          <div className="upcoming-bike-text">
            <h2>05+</h2>
            <h3>Upcoming Bikes</h3>
          </div>
        </div>
        <div className="col-lg-9 col-md-7 col-sm-7 p-0">
          <div className="row m-0">
            <div className="upcoming-bike-slider">
              <Slider {...upsettings} >
                  {upcomingData.map((value,i)=>{return(  
              <div key={i} className="single-upcoming-bike">
                <div className="upcoming-bike-image">
                  <img src={value.img} alt="upcoming-bike" />
                </div>
                <div className="upcoming-bike-content">
                  <p>{value.title}</p>
                  <h3><a href="#">{value.discription}</a></h3>
                  <a href="#" className="pull-right"><i className="fa fa-angle-right" /></a>
                </div>
              </div>
                  )})}
             
            </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Upcoming Bike */}</div>
  )
}

export default Upcoming