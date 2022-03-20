import React from 'react'

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
              <h2>Welcome to Our <span>HeroBike</span></h2>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-7">
            <div className="about-text">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
              <a href="#" className="btn btn-primary">{value.link}</a>
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