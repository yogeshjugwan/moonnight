import React from 'react'

const Vision = () => {
  return (
    <div><div className="container-fluid row ">
    <div className="col-sm-6">
      <div class="card border border-white mb-3" >
      <h5 class="card-title p-2">Our Vision</h5>
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2018/07/22/05/16/person-3553814_1280.jpg" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              
              <p class="card-text">
              We are fitness enthusiasts and cyclists who aim to promote a healthier lifestyle and equip individuals to be able to do that through Cycling.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-6 pl-4">
      <div class="card border border-white mb-3" >
      <h5 class="card-title p-2">Our Mission</h5>

        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2018/05/08/04/44/person-3382248_1280.jpg" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
              We want to create a community where we ignite the passion for cycling and help people make healthier life choices.

              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div></div>
  )
}

export default Vision