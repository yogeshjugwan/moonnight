import React from 'react'
import Head from 'next/head'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Upcoming from './Home_section/Upcoming';
import About from './Home_section/About';
import Categories from './Home_section/Categories';
import Product from './Home_section/Product';
import FunFactsAreaData from './Home_section/funFactsAreaData';
import Equipment from './Home_section/Equipment';
import SaleProduct from './Home_section/SaleProduct';
import Blog from './Home_section/Blog';
import Clients from './Home_section/Clients';
const Home = () => {
    const homeSlider = [
        {
            "className": "item-bg-one",
            "title": "New Collection",
            "title_year": "2021",
            "link": "#",
            "link_title": "Shop Now",
        },
        {
            "className": "item-bg-two",
            "title": "2021",
            "title_year": "New Collection",
            "link": "#",
            "link_title": "Shop Now",
        },
        {
            "className": "item-bg-three",
            "title": "New Collection",
            "title_year": "2021",
            "link": "#",
            "link_title": "Shop Now",
        }
    ];

    var settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
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
                breakpoint: 600,
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
        
            {/* Start Home Slides Area */}
            <div className="home-slides">
                <Slider {...settings}>
                    {homeSlider.map((value, i) => {
                        return (
                            <div key={i} className={`main-banner ${value.className}`}>
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="main-banner-text">
                                                        <h1>{value.title}<span>{value.title_year}</span></h1>
                                                        <a href={value.link} className="btn btn-primary">{value.link_title}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            {/* End Home Slides Area */}

            {/* Start Upcoming Bike */}
            <Upcoming />
            {/* End Upcoming Bike */}

            {/* <!-- Start About Area --> */}
            <About />
            {/* <!-- End About Area --> */}

            {/* Start Bikes Categories Area */}
            <Categories />
            {/* End Bikes Categories Area */}
            {/* Start New Produts Area */}
            <Product />
            {/* End New Produts Area */}

            {/* Start fun-facts-area */}
            <FunFactsAreaData />
            {/*End fun-facts-area */}
            {/* Start Bikes Equipment Area */}
            <Equipment />
            {/* End Bikes Equipment Area */}
            {/* Start Sale Product Area */}
            <SaleProduct />
            {/* End Sale Product Area */}
            {/* Start Our Blog Area */}
            <Blog />
            {/* End Our Blog Area */}
            {/* Start Testimonials Area*/}
            <Clients />
            {/* End Testimonials Area*/}

        </div>
    )
}

export default Home