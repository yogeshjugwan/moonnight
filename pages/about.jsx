import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Head from 'next/head';
import FunFactsAreaData from './Home_section/funFactsAreaData';
const about = () => {
  const aboutImg = [
    {
      "img": "assets/img/about-img-1.jpg"
    },
    {
      "img": "assets/img/about-img-2.jpg"
    },
    {
      "img": "assets/img/about-img-3.jpg"
    },
    {
      "img": "assets/img/about-img-5.jpg"
    }
  ]
  const aboutPartnerImg = [
    {
      "img": "assets/img/partner1.png"
    },
    {
      "img": "assets/img/partner2.png"
    },
    {
      "img": "assets/img/partner3.png"
    },
    {
      "img": "assets/img/partner4.png"
    },
    {
      "img": "assets/img/partner5.png"
    },
    {
      "img": "assets/img/partner6.png"
    },
    {
      "img": "assets/img/partner7.png"
    },
  ]
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
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
        <title>Moon Night Group | About-Us</title>
      </Head>
      <div>
      {/* Start Page Title Area */}
      <div className="page-title">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="page-title-text">
                    <h3>About Us</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <ul>
                    <li><a href="index.html"><i className="fa fa-home" /> Home</a></li>
                    <li><i className="fa fa-angle-right" /></li>
                    <li className="active">About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}
      {/* Start About Area */}
      <section className="about-us-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Welcome to Our <span>HeroBike</span></h2>
            <img src="assets/img/section-title-logo.png" alt="section-title-logo" />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="about-text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-img-slider">
                <Carousel showArrows={true} autoPlay="true" showThumbs={false} infiniteLoop={true}>
                  {aboutImg.map((value, i) => {
                    return (<div key={i}className="item">
                      <img src={value.img} alt="about-img" />
                    </div>
                    )
                  })}

                </Carousel>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="features-box bg-1">
                <div className="content">
                  <i className="fa fa-bicycle" />
                  <h3>All Brands</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                </div>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="features-box bg-2">
                <div className="content">
                  <i className="fa fa-life-ring" />
                  <h3>Free Support</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                </div>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="features-box bg-3">
                <div className="content">
                  <i className="fa fa-user" />
                  <h3>Dealership</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                </div>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="features-box bg-4">
                <div className="content">
                  <i className="fa fa-bullseye" />
                  <h3>Affordable</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                </div>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Area */}
      {/* Start Our History Area */}
      <section className="history-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our <span>History</span></h2>
            <img src="assets/img/section-title-logo.png" alt="section-title-logo" />
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-badge">1</div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">The beginning</h4>
                      <p><i className="fa fa-calendar" /> Years Of 1988</p>
                    </div>
                    <div className="timeline-body">
                      <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge">2</div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">New Garage</h4>
                      <p><i className="fa fa-calendar" /> Years Of 1993</p>
                    </div>
                    <div className="timeline-body">
                      <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge">3</div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">New Main office</h4>
                      <p><i className="fa fa-calendar" /> Years Of 1998</p>
                    </div>
                    <div className="timeline-body">
                      <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted mb-0">
                  <div className="timeline-badge">4</div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">New website launch</h4>
                      <p><i className="fa fa-calendar" /> Years Of 2008</p>
                    </div>
                    <div className="timeline-body">
                      <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Our History Area */}
      {/* Start Fun Fcats Area*/}
      <FunFactsAreaData/>
      {/* End Fun Fcats Area*/}
      {/* Start Partner Area */}
      <section className="partner-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our <span>Partner</span></h2>
            <img src="assets/img/section-title-logo.png" alt="section-title-logo" />
          </div>
          <div className="row">
            <div className="partner-slider">
            <Slider {...settings}>
              {aboutPartnerImg.map((value,i)=>{return(
              <div key={i} className="item">
                <a href="#"><img src={value.img} alt="partner1" /></a>
              </div>           
              )})}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* End Partner Area */}
    </div>
    </div>
  )
}

export default about