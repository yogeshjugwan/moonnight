import Link from 'next/link';
import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const SaleProduct = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        className:'slick-slider-fade',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
    <div>{/* Start Sale Product Area */}
    <section className="sale-product-area ptb-80">
      <div className="container">
        <div className="row">
          <div className="sale-product-slider">
<Slider {...settings}>
            <div className="col-lg-12 col-md-12">
              <div className="single-sale-product">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="sale-product-content">
                      <h3>Deal of the day!</h3>
                      <h4><a href="/products">2021 Marin Four Corners Touring Disc Road Bike</a></h4>
                      <div className="price">
                        <p><span>$1000.00</span> $850.00</p>
                      </div>
                      <Link href="/products"><a className="btn btn-primary">Shop Now</a></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="sale-product-img">
                      <img src="assets/img/deal-day.png" alt="deal-day" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="single-sale-product">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="sale-product-content">
                      <h3>Bestseller of the week</h3>
                      <h4> <a href="/products">Polygon Bend RV - Gravel / Cyclocross Disc Bike</a></h4>
                      <div className="price">
                        <p><span>$1020.00</span> $900.00</p>
                      </div>
                      <Link href="/products"><a className="btn btn-primary">Shop Now</a></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="sale-product-img">
                    <Link href="/products"><img src="assets/img/best-seller.png" alt="best-seller" ></img></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="single-sale-product">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="sale-product-content">
                      <h3>Top of the week</h3>
                      <h4><a href="/products">Diamondback Bicycles 2021 Haanjo Road Bike</a></h4>
                      <div className="price">
                        <p><span>$1220.00</span> $1100.01</p>
                      </div>
                      <Link href="/products"><a className="btn btn-primary">Shop Now</a></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="sale-product-img">
                      <img src="assets/img/top-seller.png" alt="best-seller" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
    {/* End Sale Product Area */}
    </div>
  )
}

export default SaleProduct