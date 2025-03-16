import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import { Link } from "react-router-dom";

const SearchResults = () => {
  return (
    <div>
      <Header />
      <Banner title={"Search Results"} pageName={"search-results"} />
      <Main />
      <Footer />
    </div>
  );
};

function Main() {
  return (
    <>
      <section className="grids-2 m-auto" style={{ width: "75%" }}>
        <div id="grids4-block" className="py-5">
          <div className="container py-md-3">
            <div className="row mt-5 pt-3">
              <div className="grids4-info col-lg-4 col-md-6">
                <Link id="link" to="/properties-single">
                  <img
                    src="assets/images/g12.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link id="link" to="/properties-single">
                      Luxury Apartment in Bandra
                    </Link>
                  </h5>
                  <p>Mumbai, Maharashtra, India</p>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 4 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 3 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 1800 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids4-info col-lg-4 col-md-6 mt-md-0 mt-4">
                <Link id="link" to="/properties-single">
                  <img
                    src="assets/images/g11.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link id="link" to="/properties-single">
                      Spacious Villa in Whitefield
                    </Link>
                  </h5>
                  <p>Bangalore, Karnataka, India</p>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 3 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 2 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 2200 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids4-info col-lg-4 col-md-6 mt-lg-0 mt-4">
                <Link id="link" to="/properties-single">
                  <img
                    src="assets/images/g10.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link id="link" to="/properties-single">
                      Modern Flat in Connaught Place
                    </Link>
                  </h5>
                  <p>Delhi, India</p>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 2 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 2 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 1400 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids4-info col-lg-4 col-md-6 mt-4">
                <Link id="link" to="/properties-single">
                  <img
                    src="assets/images/g9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link id="link" to="/properties-single">
                      Beachside Villa in ECR
                    </Link>
                  </h5>
                  <p>Chennai, Tamil Nadu, India</p>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 5 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 4 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 2500 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids4-info col-lg-4 col-md-6 mt-4">
                <Link id="link" to="/properties-single">
                  <img
                    src="assets/images/g8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link id="link" to="/properties-single">
                      Heritage Home in Salt Lake
                    </Link>
                  </h5>
                  <p>Kolkata, West Bengal, India</p>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 3 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 2 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 1900 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids4-info col-lg-4 col-md-6 mt-4">
                <Link id="link" to="/properties-single">
                  <img
                    src="assets/images/g7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link id="link" to="/properties-single">
                      Premium Bungalow in Jubilee Hills
                    </Link>
                  </h5>
                  <p>Hyderabad, Telangana, India</p>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 6 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 5 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 3000 sq ft
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchResults;
