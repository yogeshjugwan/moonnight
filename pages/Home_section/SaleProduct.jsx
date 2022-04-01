import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SaleProduct = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    className: "slick-slider-fade",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  const saleProduct =[
    {
      title:"Deal of the day!",
      name:" 2021 Marin Four Corners Touring Disc Road Bike",
      image:"assets/img/deal-day.png",
      actualPrice:"$1000.00",
      price:"$850.00"
    },
    {
      title:"Deal of the day!",
      name:" 2021 Marin Four Corners Touring Disc Road Bike",
      image:"assets/img/best-seller.png",
      actualPrice:"$1000.00",
      price:"$850.00"
    },
    {
      title:"Deal of the day!",
      name:" 2021 Marin Four Corners Touring Disc Road Bike",
      image:"assets/img/top-seller.png",
      actualPrice:"$1000.00",
      price:"$850.00"
    },
  ]
  return (
    <div>
      {/* Start Sale Product Area */}
      <section className="sale-product-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="sale-product-slider">
              <Slider {...settings}>
                {saleProduct.map((data,i)=>{return(
                <div key={i} className="col-lg-12 col-md-12">
                  <div className="single-sale-product">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="sale-product-content">
                          <h3>{data.title}</h3>
                          <h4>
                            <Link  href="/products"><a>
                             {data.name}
                            </a></Link>
                          </h4>
                          <div className="price">
                            <p>
                              <span>{data.actualPrice}</span>{data.price}
                            </p>
                          </div>
                          <Link href="/products">
                            <a className="btn btn-primary">Shop Now</a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="sale-product-img">
                          <img src={data.image} alt="deal-day" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )})}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* End Sale Product Area */}
    </div>
  );
};

export default SaleProduct;
