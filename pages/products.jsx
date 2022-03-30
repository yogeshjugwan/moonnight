import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Model from "./Model";
const Products = () => {
  const [items, setItems] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://yogesh-jugwan.github.io/moonnight/moonnight.json")
      .then((response) => response.json())
      .then((result) => {
        setItems(result.products);
      });
      // setTimeout(() => {
      //   const placeholder ="new-products-area ptb-80"
      // }, timeout);
  });
  const getProduct = (
    title,
    name,
    img,
    discount,
    pricemini,
    pricemax,
    description
  ) => {
    let data = [title, name, img, discount, pricemini, pricemax, description];
    setModalData((item) => [...data]);
    console.warn(data);
  };
  const search = (rows) => {
    const filter = rows.filter(
      (row) =>
        row.name.toLowerCase().indexOf(searchTerm) > -1 ||
        row.pricemini.toLowerCase().indexOf(searchTerm) > -1 ||
        row.pricemax.toLowerCase().indexOf(searchTerm) > -1
    );
    return filter;
  };
  // let DataTitleName = [title,name,img,discount,pricemini];
  /*
  data.title,
  data.name
  data.img,
  data.discount,
  data.pricemini,
  data.pricemax,
  data.description
  */
  return (
    <>
      <Head>
        <title>Moon Night Group | Product</title>
      </Head>
      <div>

        <section className="new-products-area ptb-80">
        <div class="search">
          <input
            class="search-txt"
            type="text"
            name=""
            placeholder={"Type to search"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <a class="search-btn" href="#">
            <i class="fas fa-search"></i>
          </a>
        </div>
          <div className="container">
            <div className="row">
              {search(items).map((data) => {
                return (
                  <div key={data.id} className="col-lg-3 col-md-6">
                    <div className="single-product">
                      <div className="product-image">
                        <img src="assets/img/bike1.jpg" alt="bike" />
                        <div className="hover-box">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                            onClick={() =>
                              getProduct(
                                data.title,
                                data.name,
                                data.img,
                                data.discount,
                                data.pricemini,
                                data.pricemax,
                                data.description
                              )
                            }
                          >
                            {data.title}
                          </button>
                          {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                        </div>
                      </div>

                      <div className="product-content">
                        <h3>
                          <a href="#">{data.name}</a>
                        </h3>
                        <p>
                          <span>{data.pricemini}</span>
                          {data.pricemax}
                        </p>
                        <ul>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>

                      <div className="discount">
                        Off<span>{data.discount}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Model */}
      <Model
        title={modalData[0]}
        name={modalData[1]}
        img={modalData[2]}
        discount={modalData[3]}
        pricemini={modalData[4]}
        pricemax={modalData[5]}
        description={modalData[6]}
      />
    </>
  );
};

export default Products;
