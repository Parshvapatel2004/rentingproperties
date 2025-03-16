import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="w3l-market-footer">
        <footer className="footer-28 pt-5">
          <div className="footer-bg-layer">
            <div className="container py-lg-3">
              <div className="row footer-top-28">
                <div className="col-lg-6 footer-list-28">
                  <h2 className="footer-title-28">
                    <Link id="link" to="index">
                      Renting Properties
                    </Link>
                  </h2>
                  <p className="mt-4">
                    Discover your perfect rental property with us. We offer a
                    wide range of properties to suit all needs and budgets. Our
                    dedicated team is here to help you find your next home with
                    ease and confidence.
                  </p>
                  <div className="main-social-footer-28 mt-3">
                    <ul className="social-icons">
                      <li className="facebook">
                        <Link id="link" to="#link" title="Facebook">
                          <span className="fa fa-facebook" aria-hidden="true" />
                        </Link>
                      </li>
                      <li className="twitter">
                        <Link id="link" to="#link" title="Twitter">
                          <span className="fa fa-twitter" aria-hidden="true" />
                        </Link>
                      </li>
                      <li className="dribbble">
                        <Link id="link" to="#link" title="Dribbble">
                          <span className="fa fa-dribbble" aria-hidden="true" />
                        </Link>
                      </li>
                      <li className="google">
                        <Link id="link" to="#link" title="Google">
                          <span className="fa fa-google" aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-4">
                  <div className="row">
                    <div className="col-md-4 footer-list-28">
                      <h6 className="footer-title-28">Important Links</h6>
                      <ul className="mt-4">
                        <li>
                          <Link id="link" to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link id="link" to="/about">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link id="link" to="/services">
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link id="link" to="/contact">
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="midd-footer-28 text-center py-lg-4 py-3 mt-5">
              <div className="container">
                <p className="copy-footer-28 text-center">
                  &copy; 2025 Estate Property. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
