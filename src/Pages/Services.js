import React from "react";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Header />
      <Banner title={"Our Services"} pageName={"Services"} />
      <AboutCompo />
      <ServicesCompo />
      <MoreInfo />
      <Footer />
    </>
  );
};

function AboutCompo() {
  return (
    <div>
      <section className="w3l-index2" id="about">
        <div className="calltoaction-20  py-5 editContent">
          <div className="container py-md-3">
            <div className="calltoaction-20-content row">
              <div className="column ccont-left col-lg-6">
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src="assets/images/g1.jpg"
                      className="img-responsive"
                      alt="Apartment Interior"
                    />
                  </div>
                  <div className="col-sm-6 pt-5">
                    <img
                      src="assets/images/g2.jpg"
                      className="img-responsive"
                      alt="Living Space"
                    />
                  </div>
                  <div className="col-sm-6 pt-sm-0 pt-5">
                    <img
                      src="assets/images/g3.jpg"
                      className="img-responsive"
                      alt="Luxury Apartment"
                    />
                  </div>
                  <div className="col-sm-6 pt-5">
                    <img
                      src="assets/images/g4.jpg"
                      className="img-responsive"
                      alt="Cozy Home"
                    />
                  </div>
                </div>
              </div>

              <div className="column center-align-self col-lg-6 pl-lg-5 pl-3 mt-lg-0 mt-4">
                <h5 className="editContent">
                  Find Your Perfect Rental Property
                </h5>
                <h3 className="editContent">
                  Discover Comfortable & Affordable Homes for Rent
                </h3>
                <p className="editContent">
                  We offer a wide range of rental properties, from cozy
                  apartments to luxurious villas, all designed to suit your
                  lifestyle and budget. Browse our listings to find your ideal
                  home.
                </p>
                <p className="more-gap editContent">
                  Whether you're looking for a city apartment, a family home, or
                  a vacation rental, we have options that match your needs. Our
                  properties come with flexible lease terms and competitive
                  pricing.
                </p>
                <Link id="link" to="/about" className="theme-button btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServicesCompo() {
  return (
    <section className="w3l-features-7">
      <div className="features py-5" id="services">
        <div className="container py-md-3">
          <div className="heading text-center mx-auto">
            <h3 className="head">Our Rental Services</h3>
            <p className="my-3 head">
              Explore our variety of rental services, ensuring you find the best
              home that fits your lifestyle and budget.
            </p>
          </div>
          <div className="fea-gd-vv row mt-5 pt-3">
            <div className="float-lt feature-gd col-lg-4 col-md-6">
              <div className="icon">
                {" "}
                <span className="fa fa-home" aria-hidden="true"></span>
              </div>
              <div className="icon-info">
                <h5>
                  <Link id="link" to="/properties">
                    Apartments & Condos for Rent
                  </Link>
                </h5>
                <p>
                  Choose from a variety of modern apartments and condos in prime
                  locations.
                </p>
                <Link id="link" to="/properties" className="red mt-3">
                  View Listings <span className="fa fa-long-arrow-right"></span>
                </Link>
              </div>
            </div>
            <div className="float-mid feature-gd col-lg-4 col-md-6 mt-md-0 mt-5">
              <div className="icon">
                {" "}
                <span className="fa fa-building" aria-hidden="true"></span>
              </div>
              <div className="icon-info">
                <h5>
                  <Link id="link" to="/properties">
                    Luxury Villas & Homes
                  </Link>
                </h5>
                <p>
                  Find spacious and high-end homes perfect for families and
                  professionals.
                </p>
                <Link id="link" to="/properties" className="red mt-3">
                  View Listings <span className="fa fa-long-arrow-right"></span>
                </Link>
              </div>
            </div>
            <div className="float-rt feature-gd col-lg-4 col-md-6 mt-lg-0 mt-5">
              <div className="icon">
                {" "}
                <span className="fa fa-key" aria-hidden="true"></span>
              </div>
              <div className="icon-info">
                <h5>
                  <Link id="link" to="/properties">
                    Short-Term Rentals
                  </Link>
                </h5>
                <p>
                  Need a place for a short stay? Explore our flexible rental
                  options.
                </p>
                <Link id="link" to="/properties" className="red mt-3">
                  View Listings <span className="fa fa-long-arrow-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MoreInfo() {
  return (
    <section className="w3l-content-with-photo-4">
      <div id="content-with-photo4-block" className="py-5">
        <div className="container py-md-3">
          <div className="cwp4-two row">
            <div className="cwp4-image col-lg-6">
              <img
                src="assets/images/g4.jpg"
                className="img-responsive"
                alt="Rental Property"
              />
            </div>
            <div className="cwp4-text col-lg-6 pl-lg-5 mt-lg-0 mt-4">
              <h3>Reliable Rental Services You Can Trust</h3>
              <p>
                We provide high-quality rental properties with excellent
                customer service to make your stay comfortable and hassle-free.
              </p>
              <ul className="cont-4">
                <li>1. Fully Furnished Options</li>
                <li>2. Prime Locations</li>
                <li>3. 24/7 Customer Support</li>
                <li>4. Affordable Pricing Plans</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
