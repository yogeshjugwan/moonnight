import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Equipment = () => {
    var settings = {
        dots: true,
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
    <div>{/* Start Bikes Equipment Area */}
    <section className="equipment-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2><span>Bikes</span> Equipment</h2>
          <img src="assets/img/section-title-logo.png" alt="section-title-logo" />
        </div>
        <div className="row">
          <div className="equipment-slider">
            <Slider {...settings}>
            <div className="col-lg-12">
              <div className="single-product">
                <div className="product-image">
                  <img src="assets/img/equipment-img1.jpg" alt="equipment-img" />
                  <div className="hover-box">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                   {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                  </div>
                </div>
                <div className="product-content">
                  <h3><a href="#">Sidi Mountain Bike Shoes</a></h3>
                  <p><span>$180.00</span> $100.12</p>
                  <ul>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                </div>
                <div className="discount">
                  Off<span>20%</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="single-product">
                <div className="product-image">
                  <img src="assets/img/equipment-img2.jpg" alt="equipment-img" />
                  <div className="hover-box">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                   {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                  </div>
                </div>
                <div className="product-content">
                  <h3><a href="#">Bell Stoker Bike Helmet</a></h3>
                  <p><span>$39.21</span> $29.25</p>
                  <ul>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                </div>
                <div className="sale">
                  sale
                </div>
                <div className="discount">
                  Off<span>10%</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="single-product">
                <div className="product-image">
                  <img src="assets/img/equipment-img3.jpg" alt="equipment-img" />
                  <div className="hover-box">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                   {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                  </div>
                </div>
                <div className="product-content">
                  <h3><a href="#">Red and black motorbike gloves</a></h3>
                  <p><span>$15.00</span> $08.00</p>
                  <ul>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                </div>
                <div className="discount">
                  Off<span>05%</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="single-product">
                <div className="product-image">
                  <img src="assets/img/equipment-img4.jpg" alt="equipment-img" />
                  <div className="hover-box">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                   {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                  </div>
                </div>
                <div className="product-content">
                  <h3><a href="#">27.5 x 2.10 Gila Mountain Tyre</a></h3>
                  <p><span>$50.00</span> $40.00</p>
                  <ul>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                </div>
                <div className="sale">
                  sale
                </div>
                <div className="discount">
                  Off<span>20%</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="single-product">
                <div className="product-image">
                  <img src="assets/img/equipment-img5.jpg" alt="equipment-img" />
                  <div className="hover-box">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                   {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                  </div>
                </div>
                <div className="product-content">
                  <h3><a href="#">Pioneer Ace 9000 Power Meter</a></h3>
                  <p><span>$680.00</span> $649.95</p>
                  <ul>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                </div>
                <div className="discount">
                  Off<span>10%</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="single-product">
                <div className="product-image">
                  <img src="assets/img/equipment-img6.jpg" alt="equipment-img" />
                  <div className="hover-box">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                   {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                  </div>
                </div>
                <div className="product-content">
                  <h3><a href="#">Muddyfox Track Pump 100</a></h3>
                  <p><span>$40.00</span> $34.98</p>
                  <ul>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                </div>
                <div className="sale">
                  sale
                </div>
                <div className="discount">
                  Off<span>05%</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="single-product">
                <div className="product-image">
                  <img src="assets/img/equipment-img7.jpg" alt="equipment-img" />
                  <div className="hover-box">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                   {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                  </div>
                </div>
                <div className="product-content">
                  <h3><a href="#">Planet Bike Standard bike seat</a></h3>
                  <p><span>$35.02</span> $30.97</p>
                  <ul>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                </div>
                <div className="discount">
                  Off<span>05%</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="single-product">
                <div className="product-image">
                  <img src="assets/img/equipment-img8.jpg" alt="equipment-img" />
                  <div className="hover-box">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                   {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                  </div>
                </div>
                <div className="product-content">
                  <h3><a href="#">Ridley X-Trail Ultegra Carbon</a></h3>
                  <p><span>$30.00</span> $26.99</p>
                  <ul>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                </div>
                <div className="discount">
                  Off<span>12%</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="single-product">
                <div className="product-image">
                  <img src="assets/img/equipment-img9.jpg" alt="equipment-img" />
                  <div className="hover-box">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                   {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                  </div>
                </div>
                <div className="product-content">
                  <h3><a href="#">BV Bicycle Handlebar Grips</a></h3>
                  <p><span>$12.20</span> $10.00</p>
                  <ul>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                </div>
                <div className="discount">
                  Off<span>15%</span>
                </div>
              </div>
            </div>
              </Slider>
          </div>
        </div>
      </div>
    </section>
    {/* End Bikes Equipment Area */}
    </div>
  )
}

export default Equipment