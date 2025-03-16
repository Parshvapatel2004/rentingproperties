import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const Ecommercesingle = () => {
  return (
    <div>
      <Header />
      <Banner  heading={"Ecommerce Single"} pagename={"Ecommerce Single"}/>
      <EcommerceMain />
      <Footer />
    </div>
  );
};
function EcommerceMain() {
  return (
    <>
      <section className="w3l-features-photo-7">
        <div className="features-photo-7_sur py-5">
          <div className="container py-md-3">
            <div className="features-photo-7_top row">
              <div className="features-photo-7_top-right col-lg-5">
                <div className="galleryContainer">
                  <div className="gallery">
                    <input
                      type="radio"
                      name="controls"
                      id="c1"
                      defaultChecked
                    />
                    <img
                      className="galleryImage"
                      id="i1"
                      src="assets/images/g4.jpg"
                      alt
                    />
                    <input type="radio" name="controls" id="c2" />
                    <img
                      className="galleryImage"
                      id="i2"
                      src="assets/images/g5.jpg"
                      alt
                    />
                    <input type="radio" name="controls" id="c3" />
                    <img
                      className="galleryImage"
                      id="i3"
                      src="assets/images/g6.jpg"
                      alt
                    />
                    <input type="radio" name="controls" id="c4" />
                    <img
                      className="galleryImage"
                      id="i4"
                      src="assets/images/g7.jpg"
                      alt
                    />
                  </div>
                  <div className="thumbnails">
                    <label className="thumbnailImage" htmlFor="c1">
                      <img
                        src="assets/images/g4.jpg"
                        className="img-responsive"
                        alt
                      />
                    </label>
                    <label className="thumbnailImage" htmlFor="c2">
                      <img
                        src="assets/images/g5.jpg"
                        className="img-responsive"
                        alt
                      />
                    </label>
                    <label className="thumbnailImage" htmlFor="c3">
                      <img
                        src="assets/images/g6.jpg"
                        className="img-responsive"
                        alt
                      />
                    </label>
                    <label className="thumbnailImage" htmlFor="c4">
                      <img
                        src="assets/images/g7.jpg"
                        className="img-responsive"
                        alt
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="features-photo-7_top-left col-lg-7">
                <h3>801 Renaissance Dr, Williamstown, NJ 08094 </h3>
                <ul className="beds">
                  <li>
                    <span className="fa fa-bed" /> 3 Beds
                  </li>
                  <li>
                    <span className="fa fa-bath" /> 2 Baths
                  </li>
                  <li>
                    <span className="fa fa-share-square-o" /> 1200 sq ft
                  </li>
                </ul>
                <h5>$225,000</h5>
                <div className="color-quality-right"></div>
                <div className="desc_single">
                  <h6>Facts and Features</h6>
                  <ul className>
                    <li>
                      <span className="title-text">Type : </span>
                      <span className="feature-count"> Single Family</span>
                    </li>
                    <li>
                      <span className="title-text">Year built : </span>
                      <span className="feature-count">2014</span>
                    </li>
                    <li>
                      <span className="title-text">Heating : </span>
                      <span className="feature-count">Forced air</span>
                    </li>
                    <li>
                      <span className="title-text">Cooling : </span>{" "}
                      <span className="feature-count">Central</span>
                    </li>
                    <li>
                      <span className="title-text">Parking : </span>{" "}
                      <span className="feature-count">5 spaces</span>
                    </li>
                    <li>
                      <span className="title-text">Lot : </span>{" "}
                      <span className="feature-count">10,018 sqft</span>
                    </li>
                    <li>
                      <span className="title-text">Price/sqft : </span>{" "}
                      <span className="feature-count">$65</span>
                    </li>
                  </ul>
                </div>
                <div className="buttons">
                  <Link id="link" to="/agent-single" className="actionbg">
                    Contact Agent
                  </Link>
                </div>
              </div>
            </div>
            <div className>
              <h4>Over View :-</h4>
              <p>
                Welcome to the Arbours. As you approach the home you will notice
                the large front yard and driveway that leads to the side entry 2
                car garage. You enter the home into the 2 story foyer with
                hardwood flooring. To the left you have a spacious office with
                bay window and carpet flooring. To the right of the foyer you
                have the large living room with carpet flooring and crown
                molding which flow into the dining room space with has chair
                molding and hanging light fixture. The large kitchen has hard
                wood flooring, center island, ceiling fan, recessed lighting,
                tile{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ecommercesingle;
