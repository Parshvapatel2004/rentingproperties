import React from "react";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from "react-router-dom";

const Ecommerce = () => {
  return (
    <div>
      <Header />
      <Banner title={"Properites"} pageName={"ecommerce"} />
      <Main />
      <Footer />
    </div>
  );
};

function Main() {
  return (
    <>
      <section className="w3l-ecommerce-page-main">
        <div className="ecom-pro-grids py-5">
          <div className="container py-md-3">
            <div className="heading text-center  mx-auto px-5">
              <h3 className="head">Sale in New Jersey</h3>
              <p className="my-3 head">
                {" "}
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.
              </p>
            </div>
            <div className="products-ecom-grids mt-5 pt-3 px-5">
              <div className="products-right row px-5">
                <div className="product-grid2 col-md-6">
                  <div className="product-image2">
                    <Link id="link" to="/ecommerce_single">
                      <img
                        className="pic-1 img-responsive"
                        src="assets/images/g1.jpg"
                      />
                      <img
                        className="pic-2 img-responsive"
                        src="assets/images/g1.jpg"
                      />
                    </Link>
                    <ul className="social">
                      <li>
                        <Link
                          id="link"
                          to="/ecommerce_single"
                          data-tip="Quick View"
                        >
                          <span className="fa fa-eye"></span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          id="link"
                          className="crt"
                          to="/ecommerce_single"
                          data-tip="Add to Cart"
                        >
                          <span className="fa fa-shopping-cart"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link id="link" to="/ecommerce_single">
                        345 HUBER AVENUE, Williamstown, NJ
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span className="fa fa-bed"></span> 3 Beds
                      </li>
                      <li>
                        <span className="fa fa-bath"></span> 2 Baths
                      </li>
                      <li>
                        <span className="fa fa-share-square-o"></span> 1200 sq
                        ft
                      </li>
                    </ul>
                    <span className="price">$2199,000 USD </span>
                  </div>
                </div>
                <div className="product-grid2 col-md-6 mt-5 mt-md-0">
                  <div className="product-image2">
                    <Link id="link" to="/ecommerce_single">
                      <img
                        className="pic-1 img-responsive"
                        src="assets/images/g2.jpg"
                      />
                      <img
                        className="pic-2 img-responsive"
                        src="assets/images/g2.jpg"
                      />
                    </Link>
                    <ul className="social">
                      <li>
                        <Link
                          id="link"
                          to="/ecommerce_single"
                          data-tip="Quick View"
                        >
                          <span className="fa fa-eye"></span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          id="link"
                          className="crt"
                          to="/ecommerce_single"
                          data-tip="Add to Cart"
                        >
                          <span className="fa fa-shopping-cart"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link id="link" to="/ecommerce_single">
                        {" "}
                        1840 FRONTAGE RD #1707, Cherry Hill, NJ
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span className="fa fa-bed"></span> 3 Beds
                      </li>
                      <li>
                        <span className="fa fa-bath"></span> 2 Baths
                      </li>
                      <li>
                        <span className="fa fa-share-square-o"></span> 1200 sq
                        ft
                      </li>
                    </ul>
                    <span className="price">$3199,000 USD </span>
                  </div>
                </div>
                <div className="product-grid2 col-md-6 mt-5">
                  <div className="product-image2">
                    <Link id="link" to="/ecommerce_single">
                      <img
                        className="pic-1 img-responsive"
                        src="assets/images/g3.jpg"
                      />
                      <img
                        className="pic-2 img-responsive"
                        src="assets/images/g3.jpg"
                      />
                    </Link>
                    <ul className="social">
                      <li>
                        <Link
                          id="link"
                          to="/ecommerce_single"
                          data-tip="Quick View"
                        >
                          <span className="fa fa-eye"></span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          id="link"
                          className="crt"
                          to="/ecommerce_single"
                          data-tip="Add to Cart"
                        >
                          <span className="fa fa-shopping-cart"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link id="link" to="/ecommerce_single">
                        {" "}
                        6226 Lexington Avenue, Cherry Hill, NJ
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span className="fa fa-bed"></span> 3 Beds
                      </li>
                      <li>
                        <span className="fa fa-bath"></span> 2 Baths
                      </li>
                      <li>
                        <span className="fa fa-share-square-o"></span> 1200 sq
                        ft
                      </li>
                    </ul>
                    <span className="price">$4199,000 USD </span>
                  </div>
                </div>
                <div className="product-grid2 col-md-6 mt-5">
                  <div className="product-image2">
                    <Link id="link" to="/ecommerce_single">
                      <img
                        className="pic-1 img-responsive"
                        src="assets/images/g4.jpg"
                      />
                      <img
                        className="pic-2 img-responsive"
                        src="assets/images/g4.jpg"
                      />
                    </Link>
                    <ul className="social">
                      <li>
                        <Link
                          id="link"
                          to="/ecommerce_single"
                          data-tip="Quick View"
                        >
                          <span className="fa fa-eye"></span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          id="link"
                          className="crt"
                          to="/ecommerce_single"
                          data-tip="Add to Cart"
                        >
                          <span className="fa fa-shopping-cart"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link id="link" to="/ecommerce_single">
                        {" "}
                        1224 COOPER STREET, Woodbury, NJ
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span className="fa fa-bed"></span> 3 Beds
                      </li>
                      <li>
                        <span className="fa fa-bath"></span> 2 Baths
                      </li>
                      <li>
                        <span className="fa fa-share-square-o"></span> 1200 sq
                        ft
                      </li>
                    </ul>
                    <span className="price">$5199,000 USD</span>
                  </div>
                </div>
                <div className="product-grid2 col-md-6 mt-5">
                  <div className="product-image2">
                    <Link id="link" to="/ecommerce_single">
                      <img
                        className="pic-1 img-responsive"
                        src="assets/images/g5.jpg"
                      />
                      <img
                        className="pic-2 img-responsive"
                        src="assets/images/g5.jpg"
                      />
                    </Link>
                    <ul className="social">
                      <li>
                        <Link
                          id="link"
                          to="/ecommerce_single"
                          data-tip="Quick View"
                        >
                          <span className="fa fa-eye"></span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          id="link"
                          className="crt"
                          to="/ecommerce_single"
                          data-tip="Add to Cart"
                        >
                          <span className="fa fa-shopping-cart"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link id="link" to="/ecommerce_single">
                        432 9TH AVENUE, Lindenwold, NJ
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span className="fa fa-bed"></span> 3 Beds
                      </li>
                      <li>
                        <span className="fa fa-bath"></span> 2 Baths
                      </li>
                      <li>
                        <span className="fa fa-share-square-o"></span> 1200 sq
                        ft
                      </li>
                    </ul>
                    <span className="price">$6199,000 USD</span>
                  </div>
                </div>
                <div className="product-grid2 col-md-6 mt-5">
                  <div className="product-image2">
                    <Link id="link" to="/ecommerce_single">
                      <img
                        className="pic-1 img-responsive"
                        src="assets/images/g6.jpg"
                      />
                      <img
                        className="pic-2 img-responsive"
                        src="assets/images/g6.jpg"
                      />
                    </Link>
                    <ul className="social">
                      <li>
                        <Link
                          id="link"
                          to="/ecommerce_single"
                          data-tip="Quick View"
                        >
                          <span className="fa fa-eye"></span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          id="link"
                          className="crt"
                          to="/ecommerce_single"
                          data-tip="Add to Cart"
                        >
                          <span className="fa fa-shopping-cart"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link id="link" to="/ecommerce_single">
                        701 DEBRA DRIVE, Williamstown, NJ
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span className="fa fa-bed"></span> 3 Beds
                      </li>
                      <li>
                        <span className="fa fa-bath"></span> 2 Baths
                      </li>
                      <li>
                        <span className="fa fa-share-square-o"></span> 1200 sq
                        ft
                      </li>
                    </ul>
                    <span className="price">$7199,000 USD</span>
                  </div>
                </div>
                <div className="product-grid2 col-md-6 mt-5">
                  <div className="product-image2">
                    <Link id="link" to="/ecommerce_single">
                      <img
                        className="pic-1 img-responsive"
                        src="assets/images/g7.jpg"
                      />
                      <img
                        className="pic-2 img-responsive"
                        src="assets/images/g7.jpg"
                      />
                    </Link>
                    <ul className="social">
                      <li>
                        <Link
                          id="link"
                          to="/ecommerce_single"
                          data-tip="Quick View"
                        >
                          <span className="fa fa-eye"></span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          id="link"
                          className="crt"
                          to="/ecommerce_single"
                          data-tip="Add to Cart"
                        >
                          <span className="fa fa-shopping-cart"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link id="link" to="/ecommerce_single">
                        Residential Property for sale in 22A Cambridge Circle
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span className="fa fa-bed"></span> 3 Beds
                      </li>
                      <li>
                        <span className="fa fa-bath"></span> 2 Baths
                      </li>
                      <li>
                        <span className="fa fa-share-square-o"></span> 1200 sq
                        ft
                      </li>
                    </ul>
                    <span className="price">$4599,000 USD</span>
                  </div>
                </div>
                <div className="product-grid2 col-md-6 mt-5">
                  <div className="product-image2">
                    <Link id="link" to="/ecommerce_single">
                      <img
                        className="pic-1 img-responsive"
                        src="assets/images/g8.jpg"
                      />
                      <img
                        className="pic-2 img-responsive"
                        src="assets/images/g8.jpg"
                      />
                    </Link>
                    <ul className="social">
                      <li>
                        <Link
                          id="link"
                          to="/ecommerce_single"
                          data-tip="Quick View"
                        >
                          <span className="fa fa-eye"></span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          id="link"
                          className="crt"
                          to="/ecommerce_single"
                          data-tip="Add to Cart"
                        >
                          <span className="fa fa-shopping-cart"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link id="link" to="/ecommerce_single">
                        {" "}
                        Residential Property for sale in 76E Dorchester
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <span className="fa fa-bed"></span> 3 Beds
                      </li>
                      <li>
                        <span className="fa fa-bath"></span> 2 Baths
                      </li>
                      <li>
                        <span className="fa fa-share-square-o"></span> 1200 sq
                        ft
                      </li>
                    </ul>
                    <span className="price">$3699,000 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ecommerce;
