import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const EcommerceSingle = () => {
  return (
    <div>
      <Header />
      <Banner title={"Ecommerce"} pageName={"ecommerce_single"} />
      <Main />
      <Footer />
    </div>
  );
};
function Main() {
  return (
    <div style={{ padding: "0 140px" }}>
      <section class="w3l-features-photo-7">
        <div class="features-photo-7_sur py-5">
          <div class="container py-md-3">
            <div class="features-photo-7_top row">
              <div class="features-photo-7_top-right col-lg-5">
                <div class="galleryContainer">
                  <div class="gallery">
                    <input type="radio" name="controls" id="c1" checked />
                    <img
                      class="galleryImage img-responsive"
                      id="i1"
                      src="assets/images/g4.jpg"
                      alt=""
                    />
                    <input type="radio" name="controls" id="c2" />
                    <img
                      class="galleryImage img-responsive"
                      id="i2"
                      src="assets/images/g5.jpg"
                      alt=""
                    />
                    <input type="radio" name="controls" id="c3" />
                    <img
                      class="galleryImage img-responsive"
                      id="i3"
                      src="assets/images/g6.jpg"
                      alt=""
                    />
                    <input type="radio" name="controls" id="c4" />
                    <img
                      class="galleryImage img-responsive"
                      id="i4"
                      src="assets/images/g7.jpg"
                      alt=""
                    />
                  </div>
                  <div class="thumbnails">
                    <label class="thumbnailImage" htmlFor="c1">
                      <img
                        src="assets/images/g4.jpg"
                        class="img-responsive"
                        alt=""
                      />
                    </label>
                    <label class="thumbnailImage" htmlFor="c2">
                      <img
                        src="assets/images/g5.jpg"
                        class="img-responsive"
                        alt=""
                      />
                    </label>
                    <label class="thumbnailImage" htmlFor="c3">
                      <img
                        src="assets/images/g6.jpg"
                        class="img-responsive"
                        alt=""
                      />
                    </label>
                    <label class="thumbnailImage" htmlFor="c4">
                      <img
                        src="assets/images/g7.jpg"
                        class="img-responsive"
                        alt=""
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div class="features-photo-7_top-left col-lg-7">
                <h3>801 Renaissance Dr, Williamstown, NJ 08094 </h3>
                <ul class="beds">
                  <li>
                    <span class="fa fa-bed"></span> 3 Beds
                  </li>
                  <li>
                    <span class="fa fa-bath"></span> 2 Baths
                  </li>
                  <li>
                    <span class="fa fa-share-square-o"></span> 1200 sq ft
                  </li>
                </ul>
                <h5>$225,000</h5>

                <div class="color-quality-right"></div>

                <div class="desc_single">
                  <h6>Facts and Features</h6>

                  <ul class="">
                    <li>
                      <span class="title-text">Type : </span>
                      <span class="feature-count"> Single Family</span>
                    </li>
                    <li>
                      <span class="title-text">Year built : </span>
                      <span class="feature-count">2014</span>
                    </li>
                    <li>
                      <span class="title-text">Heating : </span>
                      <span class="feature-count">Forced air</span>
                    </li>
                    <li>
                      <span class="title-text">Cooling : </span>{" "}
                      <span class="feature-count">Central</span>
                    </li>
                    <li>
                      <span class="title-text">Parking : </span>{" "}
                      <span class="feature-count">5 spaces</span>
                    </li>
                    <li>
                      <span class="title-text">Lot : </span>{" "}
                      <span class="feature-count">10,018 sqft</span>
                    </li>
                    <li>
                      <span class="title-text">Price/sqft : </span>{" "}
                      <span class="feature-count">$65</span>
                    </li>
                  </ul>
                </div>
                <div class="buttons">
                  <Link id="link" to="/agent-single" class="actionbg">
                    Contact Agent
                  </Link>
                </div>
              </div>
            </div>
            <div class="">
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
    </div>
  );
}

export default EcommerceSingle;
