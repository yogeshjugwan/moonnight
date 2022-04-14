import Head from 'next/head'
import React, { useState } from "react";
import Link from 'next/link'
import axios from 'axios'
const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  })
  const input_blank_after_submit = () => {
    setUser({
      name: "",
      email: "",
      number: "",
      message: ""
    })
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: user.name, email: user.email, number: user.number, message: user.message
    }
    if (user.name !== "") {
      axios.post(`https://sheetdb.io/api/v1/cb20fkkvu0f1c`, data)
      setUser({
        name: "",
        email: "",
        number: "",
        message: ""
      })
    } else {
      alert("Seee");
    }
  }
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const dataInput = [
    {

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
                      <li><Link href="/"><a><i className="fa fa-home" /> Home</a></Link></li>
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
                  <span>A-482/16, Gagan Vihar
                    Bhopura Sahibabad Ghaziabad U.P.-201005 (INDIA)</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="contact-box">
                  <i className="fa fa-phone" />
                  <h4>Phone</h4>
                  <span><a href="tel:+91 6387 982 497">+91 6387 982 497</a></span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="contact-box">
                  <i className="fa fa-envelope" />
                  <h4>Email</h4>
                  <span><a href="mailto:Info@moonnightgroup.com" type='email'><span className="__cf_email__" data-cfemail="e0898e868fa08885928f82898b85ce838f8d">Info@moonnightgroup.com</span></a></span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="contact-box">
                <i className="fa-brands fa-whatsapp"></i>
                  <h4>whatsapp</h4>
                  <span><a href="tel:+91 6387 982 497">+91 6387 982 497</a></span>
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
              <form id="contactForm" action="" data-confirm="Are you sure you want to submit the form?" >
                <div className="row">

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required onChange={onChange} value={user.name} data_error="Please enter your name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required onChange={onChange} value={user.email} data_error="Please enter your email" />
                    </div>
                    <div className="form-group">
                      <input type="number" className="form-control" name="number" id="number" placeholder="Your Number" required onChange={onChange} value={user.number} data_error="Please enter your number" />
                    </div>
                    <div className="form-group">
                      <textarea name="message" className="form-control" id="message" cols={30} rows={6} placeholder="Message" required data_error="Write your message" onChange={onChange} value={user.message} />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Send Message</button>
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

export default Contact