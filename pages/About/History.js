import React from 'react'

const History = () => {
  return (
    <div><section className="history-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>
            Our <span>History</span>
          </h2>
          <img
            className="bg-white"
            src="/assets/img/section-title-logo.png"
            alt="section-title-logo"
          />
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <ul className="timeline">
              <li>
                <div className="timeline-badge">1</div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">The beginning</h4>
                    <p>
                      <i className="fa fa-calendar" /> Years Of 2021
                    </p>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Moon Night Bikes was started in 2021 by two enthusiastic and passionate personalities of Mr Shubham kumar and  Rahul Kumar.
                      Mr Shubham kumar is the Founder of Moon Night Group. He is an enthusiastic personality. He has expertise in sales and business promotions.
                      Mr Rahul Kumar is the Co-Founder of Moon Night Group. He has the expertise and is passionate about the cycle industry.

                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-badge">2</div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Website Launch</h4>
                    <p>
                      <i className="fa fa-calendar" /> Years Of 2022
                    </p>
                  </div>
                  <div className="timeline-body">
                    <p>
                      We don’t just produce bikes, we build companions that empower everyone to enjoy stunning rides continuously. That’s why our bikes provide what we call that little ‘more’: the emotion of riding the perfect bike, comparatively than just ‘any’ bike. To make sure this eccentric feel forever, we offer a lifetime warranty* on all new frames as standard.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section></div>
  )
}

export default History