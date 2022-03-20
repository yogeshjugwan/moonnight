import React from 'react'

const Header = () => {
  return (
    <div>{/* Start Top Header Area */}
    <header className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <p><a href="#"><i className="fa fa-envelope" /> <span className="__cf_email__" data-cfemail="e0898e868fa08885928f82898b85ce838f8d">[email&nbsp;protected]</span></a></p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <p><a href="#"><i className="fa fa-phone" /> +001 321 254-5874</a></p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <ul>
              <li><a href="#" title="Facebook"><i className="fa fa-facebook" /></a></li>
              <li><a href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
              <li><a href="#" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" title="Google Plus"><i className="fa fa-google-plus" /></a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="dropdown">
              <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-user" />
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Profile Settings</a>
                <a className="dropdown-item" href="#">Sign Out</a>
              </div>
            </div>
            <a href="#" className="btn btn-primary">Login/Register</a>
          </div>
        </div>
      </div>
    </header>
    {/* End Top Header Area */}
    </div>
  )
}

export default Header