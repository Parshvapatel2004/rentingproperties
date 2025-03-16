import React from "react";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Header />
      <Banner title={"About Us"} pageName={"About"} />
      <AboutCompo />
      <Features />
      <Footer />
    </div>
  );
};

function AboutCompo() {
  return (
    <>
      <section className="w3l-index1" id="about">
        <div className="calltoaction-20 py-5 editContent">
          <div className="container py-md-3">
            <div className="calltoaction-20-content row">
              <div className="column ccont-left col-lg-6">
                <img
                  src="assets/images/g15.jpg"
                  className="img-responsive"
                  alt="Rental Property"
                />
              </div>

              <div className="column center-align-self col-lg-6 mt-lg-0 mt-4 pl-lg-5 pl-3">
                <h5 className="editContent">About Our Rental Services</h5>
                <h3 className="editContent">
                  Helping You Find the Perfect Rental Home
                </h3>
                <p className="more-gap editContent">
                  We specialize in providing high-quality rental properties,
                  ensuring comfort, affordability, and convenience. Whether you
                  need a city apartment, a suburban home, or a short-term
                  rental, we have options to fit your needs.
                </p>
                <Link id="link" to="/services" className="theme-button btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Features() {
  return (
    <>
      <section className="grids-1">
        <div className="grids py-5">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head">Our Key Features</h3>
              <p className="my-3 head">
                Explore the benefits of renting with us, including ease of
                search, expert guidance, and secure rental agreements.
              </p>
            </div>
            <div className="grids-content row mt-5 pt-3">
              <div className="col-lg-4 col-md-6">
                <div className="column gri-1 text-left">
                  <div className="icon-top mb-4">
                    <span className="fa fa-home"></span>
                  </div>
                  <h4>
                    <Link id="link" to="/services">
                      Find Rentals Easily
                    </Link>
                  </h4>
                  <p>
                    Search for rental properties from anywhere, anytime, with
                    our user-friendly platform.
                  </p>
                  <Link id="link" to="/services" className="red">
                    View Listings{" "}
                    <span className="fa fa-long-arrow-right"></span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div className="column gri-3 text-left">
                  <div className="icon-top mb-4">
                    <span className="fa fa-user"></span>
                  </div>
                  <h4>
                    <Link id="link" to="/services">
                      Expert Rental Agents
                    </Link>
                  </h4>
                  <p>
                    Our professional agents assist you in finding the perfect
                    rental property based on your preferences.
                  </p>
                  <Link id="link" to="/services" className="red">
                    View Listings{" "}
                    <span className="fa fa-long-arrow-right"></span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-0 offset-md-3 col-md-6 mt-lg-0 mt-4">
                <div className="column gri-2 text-left">
                  <div className="icon-top mb-4">
                    <span className="fa fa-key"></span>
                  </div>
                  <h4>
                    <Link id="link" to="/services">
                      Secure & Hassle-Free Rentals
                    </Link>
                  </h4>
                  <p>
                    We ensure smooth rental agreements, fair pricing, and a
                    secure process for tenants and landlords.
                  </p>
                  <Link id="link" to="/services" className="red">
                    View Listings{" "}
                    <span className="fa fa-long-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
