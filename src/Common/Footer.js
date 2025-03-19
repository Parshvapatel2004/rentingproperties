import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-28 bg-dark text-white pt-5 px-4">
      <div className="footer-bg-layer">
        <div className="container py-lg-4">
          <div className="row footer-top-28">
            {/* Company Info */}
            <div className="col-lg-4 footer-list-28">
              <h2 className="footer-title-28">
                <Link id="link" to="/" className="text-warning fw-bold">
                  Renting Properties
                </Link>
              </h2>
              <p className="mt-3">
                Discover your perfect rental property with us. We offer a wide
                range of properties to suit all needs and budgets. Our dedicated
                team is here to help you find your next home with ease and
                confidence.
              </p>
              <div className="mt-3">
                <ul className=" list-unstyled social-icons d-flex gap-3">
                  <li>
                    <Link
                      id="link"
                      to="/#facebook"
                      title="Facebook"
                      className="text-white fs-4"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="link"
                      to="/#twitter"
                      title="Twitter"
                      className="text-white fs-4"
                    >
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="link"
                      to="/#instagram"
                      title="Instagram"
                      className="text-white fs-4"
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="link"
                      to="/#linkedin"
                      title="LinkedIn"
                      className="text-white fs-4"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-4 footer-list-28 mt-4 mt-lg-0">
              <h6 className="footer-title-28 text-warning">Quick Links</h6>
              <ul className="list-unstyled mt-3">
                <li>
                  <Link id="link" to="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link id="link" to="/about" className="text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link id="link" to="/services" className="text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link id="link" to="/contact" className="text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="col-lg-3 col-md-4 footer-list-28 mt-4 mt-lg-0">
              <h6 className="footer-title-28 text-warning">Support</h6>
              <ul className="list-unstyled mt-3">
                <li>
                  <Link id="link" to="/faq" className="text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link id="link" to="/privacy-policy" className="text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link id="link" to="/terms" className="text-white">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-4 footer-list-28 mt-4 mt-lg-0">
              <h6 className="footer-title-28 text-warning">Contact Us</h6>
              <ul className="list-unstyled mt-3">
                <li>
                  <i className="fa fa-envelope text-warning"></i>{" "}
                  <Link
                    id="link"
                    to="mailto:info@rentingproperties.com"
                    className="text-white"
                  >
                    info@rentingproperties.com
                  </Link>
                </li>
                <li className="mt-2">
                  <i className="fa fa-phone text-warning"></i>{" "}
                  <Link id="link" to="tel:+919054800900" className="text-white">
                    +91 9054800900
                  </Link>
                </li>
                <li className="mt-2">
                  <i className="fa fa-map-marker text-warning"></i> Ahmedabad,
                  India
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}

        <div
          className="midd-footer-28 text-center py-1"
          style={{ backgroundColor: "#212529" }}
        >
          <div className="container">
            <hr />
            <p className="copy-footer-28 text-white">
              &copy; 2025 Renting Properties. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
