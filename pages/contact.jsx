import Head from 'next/head'
import React from 'react'

const contact = () => {
  const inputFild =[
    {
      "type":"text",
      "name":"name",
      "id":"name",
      "placeholder":"Your Name",
      "data_error":"Please enter your name"
    },
    {
      "type":"email",
      "name":"email",
      "id":"email",
      "placeholder":"Your Email",
      "data_error":"Please enter your email"
    },
    {
      "type":"number",
      "name":"number",
      "id":"number",
      "placeholder":"Your Phone Number",
      "data_error":"Please enter your phone number"
    },
    {
      "type":"text",
      "name":"subject",
      "id":"subject",
      "placeholder":"Your Email",
      "data_error":"Please enter your email"
    }
  ]
  return (
    <div>
      <Head>
        <title>Moon Night Group | Contact-US</title>
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
                  <h3>Contact Us</h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul>
                  <li><a href="index.html"><i className="fa fa-home" /> Home</a></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li className="active">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Page Title Area */}
    {/* Start Contact Area */}
    <section className="contact-area ptb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="contact-box">
              <i className="fa fa-map-marker" />
              <h4>Address</h4>
              <p>6000 Universal Blvd, Orlando, FL 32819, USA</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="contact-box">
              <i className="fa fa-phone" />
              <h4>Phone</h4>
              <p><a href="#">+001 321 254-5874</a></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="contact-box">
              <i className="fa fa-envelope" />
              <h4>Email</h4>
              <p><a href="#"><span className="__cf_email__" data-cfemail="e0898e868fa08885928f82898b85ce838f8d">[email&nbsp;protected]</span></a></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="contact-box">
              <i className="fa fa-skype" />
              <h4>Skype</h4>
              <p><a href="#">freelance.herobike</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Area */}
  </div>

  {/* Start Contcta Area */}
<div className="contact ptb-80">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-6 col-md-6 offset-md-6">
        <form id="contactForm">
          <div className="row">
            {inputFild.map((value,i)=>{return(
            <div key={i} className="col-lg-12 col-md-12">
              <div className="form-group">
                <input type="text" className="form-control" name={value.name} id={value.id} placeholder={value.placeholder} required data_error={value.data_error} />
                <div className="help-block with-errors" />
              </div>
            </div>
              )})}
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <textarea name="message" className="form-control" id="message" cols={30} rows={6} placeholder="Message" required data_error="Write your message" defaultValue={""} />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <button type="submit" className="btn btn-primary">Send Message</button>
              <div id="msgSubmit" className="h3 text-center hidden" />
              <div className="clearfix" /> 
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
{/* End Contact Area */}

  </div>
  )
}

export default contact