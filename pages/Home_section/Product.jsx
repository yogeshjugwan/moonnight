import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Product = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
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
    <div>
       {/* Start New Produts Area */}
<section className="new-products-area ptb-80">
  <div className="container">
    <div className="section-title">
      <h2><span>New</span> Products</h2>
      <img src="assets/img/section-title-logo.png" alt="section-title-logo" />
    </div>
    <div className="row">
      <div className="bike-slider">
          <Slider {...settings}>
        <div className="item">
          <div className="col-lg-12">
            <div className="single-product">
              <div className="product-image">
                <a href="/products">
                <img src="assets/img/new-product1.jpg" alt="new-product" />
                </a>
                <div className="hover-box">
                   {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                  {/* <a href="/products" className="btn btn-primary">Add to Cart</a> */}
                </div>
              </div>
              <div className="product-content">
                <h3><a href="/products">Polygon Bend RV - Gravel / Cyclocross Disc Bike </a></h3>
                <p><span>$1020.00</span> $900.00</p>
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
              <a href="/products">
                <img src="assets/img/new-product2.jpg" alt="new-product" /></a>
                <div className="hover-box">
                   {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                  {/* <a href="/products" className="btn btn-primary">Add to Cart</a> */}
                </div>
              </div>
              <div className="product-content">
                <h3><a href="/products">2021 Marin Four Corners Touring Disc Road Bike</a></h3>
                <p><span>$1000.00</span> $850.00</p>
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
        </div>
        <div className="item">
          <div className="col-lg-12">
            <div className="single-product">
              <div className="product-image">
              <a href="/products">
                <img src="assets/img/new-product1.jpg" alt="new-product" /></a>
                <div className="hover-box">
                   {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                  {/* <a href="/products" className="btn btn-primary">Add to Cart</a> */}
                </div>
              </div>
              <div className="product-content">
                <h3><a href="/products">Polygon Bend RV - Gravel / Cyclocross Disc Bike </a></h3>
                <p><span>$1020.00</span> $900.00</p>
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
              <a href="/products">
                <img src="assets/img/new-product2.jpg" alt="new-product" /></a>
                <div className="hover-box">
                   {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                  {/* <a href="/products" className="btn btn-primary">Add to Cart</a> */}
                </div>
              </div>
              <div className="product-content">
                <h3><a href="/products">2021 Marin Four Corners Touring Disc Road Bike</a></h3>
                <p><span>$1000.00</span> $850.00</p>
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
        </div>
        <div className="item">
          <div className="col-lg-12">
            <div className="single-product">
              <div className="product-image">
              <a href="/products">
                <img src="assets/img/new-product3.jpg" alt="new-product" /></a>
                <div className="hover-box">
                   {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                  {/* <a href="/products" className="btn btn-primary">Add to Cart</a> */}
                </div>
              </div>
              <div className="product-content">
                <h3><a href="/products">Diamondback Bicycles Podium Vitesse Disc Brake Road Bike</a></h3>
                <p><span>$1520.00</span> $1200.00</p>
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
              <a href="/products">
                <img src="assets/img/new-product4.jpg" alt="new-product" /></a>
                <div className="hover-box">
                   {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                  {/* <a href="/products" className="btn btn-primary">Add to Cart</a> */}
                </div>
              </div>
              <div className="product-content">
                <h3><a href="/products">Diamondback Bicycles 2021 Haanjo Road Bike </a></h3>
                <p><span>$1220.00</span> $1100.01</p>
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
        </div>
        <div className="item">
          <div className="col-lg-12">
            <div className="single-product">
              <div className="product-image">
              <a href="/products">
                <img src="assets/img/new-product5.jpg" alt="new-product" /></a>
                <div className="hover-box">
                   {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                  {/* <a href="/products" className="btn btn-primary">Add to Cart</a> */}
                </div>
              </div>
              <div className="product-content">
                <h3><a href="/products">Diamondback Bicycles Trace Dual Sport Bike, Blue </a></h3>
                <p><span>$620.02</span> $580.00</p>
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
              <a href="/products">
                <img src="assets/img/new-product6.jpg" alt="new-product" /></a>
                <div className="hover-box">
                   {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                  {/* <a href="/products" className="btn btn-primary">Add to Cart</a> */}
                </div>
              </div>
              <div className="product-content">
                <h3><a href="/products">Vilano Blackjack 29er Mountain Bike MTB with 29-Inch Wheels</a></h3>
                <p><span>$3020.00</span> $3000.03</p>
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
        </div>
          </Slider>
      </div>
    </div>
  </div>
</section>
{/* End New Produts Area */}

    </div>
  )
}

export default Product