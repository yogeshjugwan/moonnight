import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Blog = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                    dots: true
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
        <div>{/* Start Our Blog Area */}
            <section className="blog-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Our <span>Blog</span></h2>
                        <img src="assets/img/section-title-logo.png" alt="section-title-logo" />
                    </div>
                    <div className="row">
                        <div className="blog-slider">
                            <Slider {...settings}>
                                <div className="col-lg-12">
                                    <div className="single-blog-post">
                                        <div className="thumb">
                                            <img src="assets/img/blog-img1.jpg" alt="blog-img" />
                                            <div className="date">
                                                <span>15 Jan 2021</span>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <h3><a href="#">Fixed gear bikes grab spot in pedal market</a></h3>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-user" /> Admin</a></li>
                                                <li><a href="#"><i className="fa fa-comments-o" /> 09</a></li>
                                                <li><a href="#"><i className="fa fa-tags" /> News</a></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed eiusmod tempor incididunt ut labore et dolor emagna eliqua.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single-blog-post">
                                        <div className="thumb">
                                            <img src="assets/img/blog-img2.jpg" alt="blog-img" />
                                            <div className="date">
                                                <span>15 Jan 2021</span>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <h3><a href="#">Tour: The New York Bicycles Workshop</a></h3>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-user" /> Admin</a></li>
                                                <li><a href="#"><i className="fa fa-comments-o" /> 09</a></li>
                                                <li><a href="#"><i className="fa fa-tags" /> News</a></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed eiusmod tempor incididunt ut labore et dolor emagna eliqua.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single-blog-post">
                                        <div className="thumb">
                                            <img src="assets/img/blog-img3.jpg" alt="blog-img" />
                                            <div className="date">
                                                <span>15 Jan 2021</span>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <h3><a href="#">10 weird and wonderful derailleurs and changed cycling</a></h3>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-user" /> Admin</a></li>
                                                <li><a href="#"><i className="fa fa-comments-o" /> 09</a></li>
                                                <li><a href="#"><i className="fa fa-tags" /> News</a></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed eiusmod tempor incididunt ut labore et dolor emagna eliqua.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single-blog-post">
                                        <div className="thumb">
                                            <img src="assets/img/blog-img4.jpg" alt="blog-img" />
                                            <div className="date">
                                                <span>15 Jan 2021</span>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <h3><a href="#">What to do if you hit a pothole while cycling</a></h3>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-user" /> Admin</a></li>
                                                <li><a href="#"><i className="fa fa-comments-o" /> 09</a></li>
                                                <li><a href="#"><i className="fa fa-tags" /> News</a></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed eiusmod tempor incididunt ut labore et dolor emagna eliqua.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single-blog-post">
                                        <div className="thumb">
                                            <img src="assets/img/blog-img5.jpg" alt="blog-img" />
                                            <div className="date">
                                                <span>15 Jan 2021</span>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <h3><a href="#">It's time football started to take cycling seriously</a></h3>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-user" /> Admin</a></li>
                                                <li><a href="#"><i className="fa fa-comments-o" /> 09</a></li>
                                                <li><a href="#"><i className="fa fa-tags" /> News</a></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed eiusmod tempor incididunt ut labore et dolor emagna eliqua.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single-blog-post">
                                        <div className="thumb">
                                            <img src="assets/img/blog-img6.jpg" alt="blog-img" />
                                            <div className="date">
                                                <span>15 Jan 2021</span>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <h3><a href="#">10 pro tips for surviving a 100-mile bike ride</a></h3>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-user" /> Admin</a></li>
                                                <li><a href="#"><i className="fa fa-comments-o" /> 09</a></li>
                                                <li><a href="#"><i className="fa fa-tags" /> News</a></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed eiusmod tempor incididunt ut labore et dolor emagna eliqua.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single-blog-post">
                                        <div className="thumb">
                                            <img src="assets/img/blog-img7.jpg" alt="blog-img" />
                                            <div className="date">
                                                <span>15 Jan 2021</span>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <h3><a href="#">When Should You Replace Your Bike Helmet?</a></h3>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-user" /> Admin</a></li>
                                                <li><a href="#"><i className="fa fa-comments-o" /> 09</a></li>
                                                <li><a href="#"><i className="fa fa-tags" /> News</a></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed eiusmod tempor incididunt ut labore et dolor emagna eliqua.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single-blog-post">
                                        <div className="thumb">
                                            <img src="assets/img/blog-img8.jpg" alt="blog-img" />
                                            <div className="date">
                                                <span>15 Jan 2021</span>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <h3><a href="#">Tips and inspiration for the new year, new you cyclist</a></h3>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-user" /> Admin</a></li>
                                                <li><a href="#"><i className="fa fa-comments-o" /> 09</a></li>
                                                <li><a href="#"><i className="fa fa-tags" /> News</a></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed eiusmod tempor incididunt ut labore et dolor emagna eliqua.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single-blog-post">
                                        <div className="thumb">
                                            <img src="assets/img/blog-img9.jpg" alt="blog-img" />
                                            <div className="date">
                                                <span>15 Jan 2021</span>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <h3><a href="#">What happens if you turn off the traffic lights?</a></h3>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-user" /> Admin</a></li>
                                                <li><a href="#"><i className="fa fa-comments-o" /> 09</a></li>
                                                <li><a href="#"><i className="fa fa-tags" /> News</a></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed eiusmod tempor incididunt ut labore et dolor emagna eliqua.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Our Blog Area */}
        </div>
    )
}

export default Blog