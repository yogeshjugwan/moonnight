import React from 'react'
import Link from 'next/link'
const About = () => {
  const aboutdata=[
    {
        "title":"All Brands",
        "img":"bg-1",
        "linkTitle":"Read More",
        "link":"/products",
        "icon":"fa fa-bicycle",
        "discription":"We have multiple brands of bikes designed and manufactured by MOON NIGHT GROUP."
    },
    {
        "title":"Free Support",
        "img":"bg-2",
        "linkTitle":"Read More",
        "link":"/contact",
        "icon":"fa fa-life-ring",
        "discription":"We love to hear from you Our support team is always with you."
    },
    {
        "title":"Dealership",
        "img":"bg-3",
        "linkTitle":"Read More",
        "link":"/contact",
        "icon":"fa fa-user",
        "discription":"You want to grow with the Moon Night Bikes Brand, Contact Now for our Dealership."
    },
    {
        "title":"Affordable",
        "img":"bg-4",
        "linkTitle":"Read More",
        "link":"/products",
        "icon":"fa fa-bullseye",
        "discription":" Our All bikes of category are at affordable price rather than popular brands in the Indian market."
    }
]
  return (
    <div>{/* Start About Area */}
    <section className="about-area ptb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-5">
            <div className="section-title">
              <h2>Welcome to   <span>Moon Night Bikes with innovations.</span></h2>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-7">
            <div className="about-text">
              <p>
              An Initiative innovation to the avenue of the nation in the form of Moon Night Bikes is providing an undivided two-wheeled luxury  &apos; magnificent experience for modern Indian society. The glorious, goodwill and performance of Moon Night Bikes within a short span is an adventure that speaks of Superlative Designs and Excellent Quality with Support. Meeting the demand for Indian quality products in the domestic market, Moon Night road bikes have set up a new standard on the industrial overlook.</p>
            </div>
          </div>
          {aboutdata.map((value,i)=>{return(
          <div key={i} className="col-lg-3 col-md-6 col-sm-6">
            <div className={`features-box ${value.img}`}>
              <div className="content" style={{height:"230px"}}>
                <i className={value.icon} />
                <h3>{value.title}</h3>
                <p>{value.discription}</p>
              </div>
            <Link scroll={false} href={value.link} ><a className="btn btn-primary">{value.linkTitle}</a></Link>
            </div>
          </div>
          )})}
          
        </div>
      </div>
    </section>
    {/* End About Area */}
    </div>
  )
}

export default About