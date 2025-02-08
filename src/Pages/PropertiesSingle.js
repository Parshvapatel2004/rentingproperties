import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";

const PropertiesSingle = () => {
  return (
    <div>
      <Header />
      <Banner />
      <PropertiesMain />
      <Footer />
    </div>
  );
};
function PropertiesMain() {
  return (
    <>
      <section className="w3l-content-with-photo-11">
        <div className="contentwithphoto-11 py-5">
          <div className="container py-md-3">
            <div className="contentwithphoto-11-content">
              <div className="column contentwithphoto-img">
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
                      src="assets/images/g3.jpg"
                      alt
                    />
                    <input type="radio" name="controls" id="c2" />
                    <img
                      className="galleryImage"
                      id="i2"
                      src="assets/images/g4.jpg"
                      alt
                    />
                    <input type="radio" name="controls" id="c3" />
                    <img
                      className="galleryImage"
                      id="i3"
                      src="assets/images/g5.jpg"
                      alt
                    />
                  </div>
                  <div className="thumbnails">
                    <label className="thumbnailImage" htmlFor="c1">
                      <img
                        src="assets/images/g3.jpg"
                        className="img-responsive"
                        alt
                      />
                    </label>
                    <label className="thumbnailImage" htmlFor="c2">
                      <img
                        src="assets/images/g4.jpg"
                        className="img-responsive"
                        alt
                      />
                    </label>
                    <label className="thumbnailImage" htmlFor="c3">
                      <img
                        src="assets/images/g5.jpg"
                        className="img-responsive"
                        alt
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="contentwithphoto-top">
                <div className="column contentwithphoto-text mt-4">
                  <h3>Description</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the when an printer took a
                    galley of type and scrambled it to make.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the when an printer took a
                    galley of type and scrambled it to make.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the when an printer took a
                    galley of type and scrambled it to make.Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="work">
              <h3>Challenge &amp; Solutions</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the when an printer took a galley
                of type and scrambled it to make Lorem Ipsum has been the
                industry's standard dummy text ever since the when an printer
                took a galley of type and scrambled it to make.
              </p>
            </div>
            <div className="column con-bottom row mt-5">
              <div className="con-bottom-left col-md-6">
                <h4>Core Details</h4>
                <ul className="mt-4">
                  <li>
                    <span className="title-text">Property Size : </span>
                    <span className="feature-count"> 2100 sqft</span>
                  </li>
                  <li>
                    <span className="title-text">Total Rooms : </span>
                    <span className="feature-count">8</span>
                  </li>
                  <li>
                    <span className="title-text">Bedrooms : </span>
                    <span className="feature-count">5</span>
                  </li>
                  <li>
                    <span className="title-text">Bathrooms : </span>{" "}
                    <span className="feature-count">2</span>
                  </li>
                  <li>
                    <span className="title-text">Garage : </span>{" "}
                    <span className="feature-count">1</span>
                  </li>
                  <li>
                    <span className="title-text">Year Build : </span>{" "}
                    <span className="feature-count">2019</span>
                  </li>
                </ul>
              </div>
              <div className="con-bottom-right col-md-6">
                <h4>More Features</h4>
                <ul className="mt-4">
                  <li>
                    <span className="fa fa-check" /> Air conditioning
                  </li>
                  <li>
                    <span className="fa fa-check" /> Balcony
                  </li>
                  <li>
                    <span className="fa fa-check" /> Front Yard
                  </li>
                  <li>
                    <span className="fa fa-check" /> Pool
                  </li>
                  <li>
                    <span className="fa fa-check" /> Attic
                  </li>
                  <li>
                    <span className="fa fa-check" /> Broadband
                  </li>
                  <li>
                    <span className="fa fa-check" /> Ground
                  </li>
                  <li>
                    <span className="fa fa-check" /> Parking
                  </li>
                  <li>
                    <span className="fa fa-check" /> Dining Space
                  </li>
                  <li>
                    <span className="fa fa-check" /> Back Yard
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default PropertiesSingle;
