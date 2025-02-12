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
                    <Link to="index"> Estate Property </Link>
                  </h2>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="main-social-footer-28 mt-3">
                    <ul className="social-icons">
                      <li className="facebook">
                        <Link to="#link" title="Facebook">
                          <span className="fa fa-facebook" aria-hidden="true" />
                        </Link>
                      </li>
                      <li className="twitter">
                        <Link to="#link" title="Twitter">
                          <span className="fa fa-twitter" aria-hidden="true" />
                        </Link>
                      </li>
                      <li className="dribbble">
                        <Link to="#link" title="Dribbble">
                          <span className="fa fa-dribbble" aria-hidden="true" />
                        </Link>
                      </li>
                      <li className="google">
                        <Link to="#link" title="Google">
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
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/services">Services</Link>
                        </li>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-8 footer-list-28 mt-md-0 mt-4">
                      <h6 className="footer-title-28">Recent Posts</h6>
                      <div className="fot-top row mt-4">
                        <div className="col-4">
                          <Link to="/blogsingle">
                            <img
                              src="assets/images/g1.jpg"
                              className="img-responsive"
                              alt
                            />
                          </Link>
                        </div>
                        <div className="col-8 pl-2">
                          <h5>
                            <Link to="/blogsingle">
                              We Are Leading International Consultiing Agency
                            </Link>
                          </h5>
                          <p>
                            <span className="fa fa-clock-o" /> December 17, 2019
                          </p>
                        </div>
                      </div>
                      <div className="fot-top row mt-4">
                        <div className="col-4">
                          <Link to="/blogsingle">
                            <img
                              src="assets/images/g2.jpg"
                              className="img-responsive"
                              alt
                            />
                          </Link>
                        </div>
                        <div className="col-8 pl-2">
                          <h5>
                            {" "}
                            <Link to="/blogsingle">
                              We Are Leading International Consultiing Agency
                            </Link>
                          </h5>
                          <p>
                            {" "}
                            <span className="fa fa-clock-o" /> December 27, 2019
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="midd-footer-28 text-center py-lg-4 py-3 mt-5">
              <div className="container">
                <p className="copy-footer-28 text-center">
                  © 2020 Estate Property. All Rights Reserved.Design by
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* move top */}
        <button onclick="topFunction()" id="movetop" title="Go to top">
          ⤴
        </button>
        {/* /move top */}
        {/* //footer-28 block */}
      </section>
    </div>
  );
};

export default Footer;
