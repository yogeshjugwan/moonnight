import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Head from 'next/head';
const Categories = () => {

    const categoriesData = [
        {
            "title": "XC",
            "img": "/assets/img/categorie-bike1.jpg",
            "link": "#"
        },
        {
            "title": "Trail",
            "img": "/assets/img/categorie-bike2.jpg",
            "link": "#"
        },
        {
            "title": "Electric",
            "img": "/assets/img/categorie-bike3.jpg",
            "link": "#"
        },
        {
            "title": "BMX",
            "img": "/assets/img/categorie-bike4.jpg",
            "link": "#"
        },
        {
            "title": "Mountain",
            "img": "/assets/img/categorie-bike5.jpg",
            "link": "#"
        },
        {
            "title": "Speed",
            "img": "/assets/img/categorie-bike6.jpg",
            "link": "#"
        },
        {
            "title": "Comfort",
            "img": "/assets/img/categorie-bike7.jpg",
            "link": "#"
        },
        {
            "title": "Performance",
            "img": "/assets/img/categorie-bike8.jpg",
            "link": "#"
        },
        {
            "title": "Triathlon",
            "img": "/assets/img/categorie-bike9.jpg",
            "link": "#"
        },
        {
            "title": "Fat",
            "img": "/assets/img/categorie-bike10.jpg",
            "link": "#"
        },
        {
            "title": "Dirt",
            "img": "/assets/img/categorie-bike11.jpg",
            "link": "#"
        },

    ]
    var categoriesSlider = {
        dots: false,
        initialSlide: 3,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 1500,
        centerPadding: '60px',
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
        <div>
            <Head>
                <style jsx>{
                    ``
                }

                </style>
            </Head>
            {/* Start Bikes Categories Area */}
            <section className="bikes-categories-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2><span>Bikes</span> categories</h2>
                        <img src="/assets/img/section-title-logo.png" alt="section-title-logo" />
                    </div>
                    <div className="row">
                        <div className="categories-bike-slider">
                            <div className="col-lg-12">
                                <Slider {...categoriesSlider}>
                                    {categoriesData.map((value,i)=>{return(
                                          <div key={i} className="categories-item">
                                    <img src={value.img} alt="categorie-bike" />
                                    <h3><a href="#">{value.title}</a></h3>
                                    <a href={value.link} className="view-btn">View Bikes</a>
                                </div>
                                )})}
                                </Slider>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* End Bikes Categories Area */}
        </div>
    )
}

export default Categories