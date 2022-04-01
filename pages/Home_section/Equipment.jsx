import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const Equipment=[
    {
      name:"Sidi Mountain Bike Shoes",
      price:"$100.12",
      actualPrice:"$180.00",
      diccount:"20%"
    },
    {
      name:"Sidi Mountain Bike Shoes",
      price:"$100.12",
      actualPrice:"$180.00",
      diccount:"20%"
    },
    {
      name:"Sidi Mountain Bike Shoes",
      price:"$100.12",
      actualPrice:"$180.00",
      diccount:"20%"
    },
    {
      name:"Sidi Mountain Bike Shoes",
      price:"$100.12",
      actualPrice:"$180.00",
      diccount:"20%"
    },
    {
      name:"Sidi Mountain Bike Shoes",
      price:"$100.12",
      actualPrice:"$180.00",
      diccount:"20%"
    },
    {
      name:"Sidi Mountain Bike Shoes",
      price:"$100.12",
      actualPrice:"$180.00",
      diccount:"20%"
    },
    {
      name:"Sidi Mountain Bike Shoes",
      price:"$100.12",
      actualPrice:"$180.00",
      diccount:"20%"
    },
    {
      name:"Sidi Mountain Bike Shoes",
      price:"$100.12",
      actualPrice:"$180.00",
      diccount:"20%"
    },
    {
      name:"Sidi Mountain Bike Shoes",
      price:"$100.12",
      actualPrice:"$180.00",
      diccount:"20%"
    },
  ]
  return (
    <div>
      {/* Start Bikes Equipment Area */}
      <section className="equipment-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>
              <span>Bikes</span> Equipment
            </h2>
            <img
              src="assets/img/section-title-logo.png"
              alt="section-title-logo"
            />
          </div>
          <div className="row">
            <div className="equipment-slider">
              <Slider {...settings}>
                {Equipment.map((data)=>{return(
                  <>
                <div className="col-lg-12">
                  <div className="single-product">
                    <div className="product-image">
                      <Link  href="/products"><a>
                        <img
                          src="assets/img/equipment-img1.jpg"
                          alt="equipment-img"
                        />
                      </a></Link>
                      <div className="hover-box">
                        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                   {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                      </div>
                    </div>
                    <div className="product-content">
                      <h3>
                        <Link href="/products"><a>{data.name}</a></Link>
                      </h3>
                      <p>
                        <span>{data.actualPrice}</span>{data.price}
                      </p>
                      <ul>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="discount">
                      Off<span>{data.diccount}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="single-product">
                    <div className="product-image">
                      <Link  href="/products"><a>
                        <img
                          src="assets/img/equipment-img2.jpg"
                          alt="equipment-img"
                        />
                      </a></Link>
                      <div className="hover-box">
                        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Quick View</button>
                   {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                      </div>
                    </div>
                    <div className="product-content">
                      <h3>
                      <Link href="/products"><a>{data.name}</a></Link>
                      </h3>
                      <p>
                      <span>{data.actualPrice}</span>{data.price}
                      </p>
                      <ul>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="sale">sale</div>
                    <div className="discount">
                    Off<span>{data.diccount}</span>
                    </div>
                  </div>
                </div>
                </>
                  )})}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* End Bikes Equipment Area */}
    </div>
  );
};

export default Equipment;
