import React from 'react'
import Blog from './Home_section/Blog'
import Head from 'next/head'
const blog = () => {
  return (
    <div>
      <Head>
        <title>Moon Night Group | Blogs</title>
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
                      <h3>Bags &amp; Storage</h3>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ul>
                      <li><Link href="/"><a><i className="fa fa-home" /> Home</a></Link></li>
                      <li><i className="fa fa-angle-right" /></li>
                      <li className="active">Bags &amp; Storage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title Area */}

        <Blog />
      </div>
    </div>
  )
}

export default blog