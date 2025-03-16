import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";

const PropertiesSingle = () => {
  return (
    <div>
      <Header />
      <Banner title={"Property"} pageName={"properties-single"} />
      <Main />
      <Footer />
    </div>
  );
};

function Main() {
  return (
    <>
      <section
        className="w3l-content-with-photo-11 m-auto"
        style={{ width: "75%" }}
      >
        <div className="contentwithphoto-11 py-5">
          <div className="container py-md-3">
            <div className="contentwithphoto-11-content">
              <div className="column contentwithphoto-img">
                <div className="galleryContainer">
                  <div className="gallery">
                    <label className="thumbnailImage" htmlFor="c1">
                      <img
                        src="assets/images/bandra1.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </label>
                  </div>
                  <div className="thumbnails">
                    <label className="thumbnailImage" htmlFor="c1">
                      <img
                        src="assets/images/bandra2.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </label>
                    <label className="thumbnailImage" htmlFor="c2">
                      <img
                        src="assets/images/bandra3.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </label>
                    <label className="thumbnailImage" htmlFor="c3">
                      <img
                        src="assets/images/bandra4.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="contentwithphoto-top">
                <div className="column contentwithphoto-text mt-4">
                  <h3>Description</h3>
                  <p>
                    This stunning property located in the heart of Bandra,
                    Mumbai, offers a luxurious living experience with its
                    spacious 2100 sqft area. The property features 8 rooms,
                    including 5 bedrooms and 2 bathrooms, providing ample space
                    for a large family. The modern design and high-quality
                    finishes make this property a perfect blend of comfort and
                    style.
                  </p>
                  <p>
                    The property boasts a range of amenities, including air
                    conditioning, a balcony, a front yard, and a pool, ensuring
                    a comfortable and enjoyable living experience. The garage
                    provides secure parking for your vehicle, and the property
                    is equipped with broadband for high-speed internet access.
                  </p>
                  <p>
                    Built in 2019, this property is relatively new and offers
                    all the modern conveniences you would expect from a high-end
                    home. The spacious attic and dining space add to the charm
                    of this beautiful property, making it an ideal choice for
                    those looking for a luxurious and comfortable living space
                    in Mumbai.
                  </p>
                </div>
              </div>
            </div>
            <div className="work">
              <h3>Challenge & Solutions</h3>
              <p>
                One of the main challenges of living in a bustling city like
                Mumbai is finding a property that offers both space and modern
                amenities. This property addresses these challenges by providing
                a spacious living area with all the modern conveniences you need
                for a comfortable lifestyle. The strategic location in Bandra
                ensures easy access to all the essential services and
                entertainment options, making it an ideal choice for urban
                living.
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
                    <span className="fa fa-check"></span> Air conditioning
                  </li>
                  <li>
                    <span className="fa fa-check"></span> Balcony
                  </li>
                  <li>
                    <span className="fa fa-check"></span> Front Yard
                  </li>
                  <li>
                    <span className="fa fa-check"></span> Pool
                  </li>
                  <li>
                    <span className="fa fa-check"></span> Attic
                  </li>
                  <li>
                    <span className="fa fa-check"></span> Broadband
                  </li>
                  <li>
                    <span className="fa fa-check"></span> Ground
                  </li>
                  <li>
                    <span className="fa fa-check"></span> Parking
                  </li>
                  <li>
                    <span className="fa fa-check"></span> Dining Space
                  </li>
                  <li>
                    <span className="fa fa-check"></span> Back Yard
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
