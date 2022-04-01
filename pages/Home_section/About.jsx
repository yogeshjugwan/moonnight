import React from 'react'
import Link from 'next/link'
const About = () => {
    const aboutdata=[
        {
            "title":"All Brands",
            "img":"bg-1",
            "link":"Read More",
            "icon":"fa fa-bicycle",
            "discription":"Lorem Ipsum is simply dummy text of the printing and type setting industry."
        },
        {
            "title":"Free Support",
            "img":"bg-2",
            "link":"Read More",
            "icon":"fa fa-life-ring",
            "discription":"Lorem Ipsum is simply dummy text of the printing and type setting industry."
        },
        {
            "title":"Dealership",
            "img":"bg-3",
            "link":"Read More",
            "icon":"fa fa-user",
            "discription":"Lorem Ipsum is simply dummy text of the printing and type setting industry."
        },
        {
            "title":"Affordable",
            "img":"bg-4",
            "link":"Read More",
            "icon":"fa fa-bullseye",
            "discription":"Lorem Ipsum is simply dummy text of the printing and type setting industry."
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
              <div className="content">
                <i className={value.icon} />
                <h3>{value.title}</h3>
                <p>{value.discription}</p>
              </div>
            <Link href="/products" ><a className="btn btn-primary">{value.link}</a></Link>
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