import React from 'react'
const Model = (props) => {
  return (
    <div><div
    className="modal fade"
    id="exampleModalCenter"
    tabIndex="-1"
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="product-img">
                <img src={props.img} alt="new-product" />
              </div>
            </div>

            <div className="col-lg-7 col-md-6">
              <div className="product-body">
                <h3>{props.name}</h3>
                <h4 className="price">{props.pricemax}</h4>
                <p className="availability">
                  Availability: <span>In stock</span>
                </p>
                <ul>
                  <li>
                    Buy 2 for <span>$880.00</span> each and save{" "}
                    <span>4%</span>{" "}
                  </li>
                  <li>
                    Buy 5 for <span>$860.00</span> each and save{" "}
                    <span>7%</span>{" "}
                  </li>
                  <li>
                    Buy 10 for <span>$840.00</span> each and save{" "}
                    <span>9%</span>{" "}
                  </li>
                </ul>
                <form>
                  {/* <input
                    type="number"
                    name="quantity"
                    title="Qty"
                    className="form-control"
                  /> */}
                  <button className="btn btn-primary"><a href="/productsInquiry" style={{color:"white"}}>Buy Now</a></button>

                  {/* <a
                    href="#"
                    className="wishlist-compare"
                    title="Add To Wishlist"
                  >
                    <i className="fa fa-heart-o"></i>
                  </a>

                  <a
                    href="#"
                    className="wishlist-compare"
                    title="Add To Compare"
                  >
                    <i className="fa fa-retweet"></i>
                  </a> */}
                </form>

                <p>
                 {props.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i> Share
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i> Tweet
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus"></i> Google+
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin"></i> Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Model