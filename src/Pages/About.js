import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const About = () => {
  return (
    <div>
      <Header />
      <Banner title="About Us" pageName="About" />
      <AboutSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="w3l-index1" id="about">
      <div className="calltoaction-20 py-5">
        <div className="container py-md-3">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="assets/images/g15.jpg"
                className="img-fluid"
                alt="Rental Property"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4 pl-lg-5">
              <h4>About Our Rental Services</h4>
              <h3>Find Your Perfect Rental Home</h3>
              <p>
                We provide top-quality rental properties to ensure comfort,
                affordability, and convenience. Whether you’re looking for a
                city apartment, a suburban home, or a short-term rental, we have
                options to fit your needs.
              </p>
              <Link id="link" to="/services" className="theme-button btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: "fa-home",
      title: "Find Rentals Easily",
      description:
        "Search for rental properties anytime, anywhere with our easy-to-use platform.",
    },
    {
      icon: "fa-user",
      title: "Expert Rental Services",
      description: "We help you find the perfect rental based on your needs.",
    },
    {
      icon: "fa-key",
      title: "Secure & Hassle-Free Rentals",
      description:
        "We ensure smooth rental agreements, fair pricing, and a secure process.",
    },
  ];

  return (
    <section className="grids-1">
      <div className="grids py-5">
        <div className="container py-md-3">
          <div className="heading text-center mx-auto">
            <h3 className="head">Why Choose Us?</h3>
            <p className="my-3 head">
              Enjoy a seamless rental experience with easy search, expert
              guidance, and secure agreements.
            </p>
          </div>
          <div className="row mt-5 pt-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="col-lg-4 col-md-6 mt-4">
      <div className="column text-left">
        <div className="icon-top mb-4">
          <span className={`fa ${icon}`}></span>
        </div>
        <h4>
          <Link id="link" to="/services">
            {title}
          </Link>
        </h4>
        <p>{description}</p>
        <Link id="link" to="/services" className="red">
          View More <span className="fa fa-long-arrow-right"></span>
        </Link>
      </div>
    </div>
  );
};

export default About;
