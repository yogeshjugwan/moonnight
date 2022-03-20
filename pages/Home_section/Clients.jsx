import React from 'react'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Clients = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>{/* Start Testimonials Area*/}
            <section className="testimonials-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonials">
                                <h3 className="title">What clients say</h3>
                                <div className="testimonials-slider">
                                    <Slider {...settings}>
                                        
                                        <div className="single-feedback" >
                                            <div>
                                                <div className="client-pic">
                                                    <img src="assets/img/client-avatar1.jpg" alt="client-avatar" />
                                                </div>
                                                <h4>David Smith</h4>
                                                <span>@Google CEO</span>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                                    make a type specimen book. It has survived not only five centuries.</p>
                                            </div>
                                        </div>
                                        <div className="single-feedback">
                                            <div>
                                            <div className="client-pic">
                                                <img src="assets/img/client-avatar2.jpg" alt="client-avatar" />
                                            </div>
                                            <h4>John Rock</h4>
                                            <span>@Facebook CEO</span>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                                make a type specimen book. It has survived not only five centuries.</p></div>
                                        </div>
                                        <div className="single-feedback">
                                           <div><div className="client-pic">
                                                <img src="assets/img/client-avatar3.jpg" alt="client-avatar" />
                                            </div>
                                            <h4>Olivar Thomas</h4>
                                            <span>@Twitter CEO</span>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                                make a type specimen book. It has survived not only five centuries.</p>
                                               </div>
                                        </div>

                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Testimonials Area*/}
        </div>
    )
}

export default Clients