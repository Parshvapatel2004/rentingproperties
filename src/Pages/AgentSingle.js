import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const AgentSingle = () => {
  return (
    <div>
      <Header />
      <Banner heading={"Agent Single"} pagename={"Agent Single"} />
      <AgentSingleMain/>
      <Footer/>
    </div>
  );
};
function AgentSingleMain() {
  return (
    <>
      <section className="w3l-teams-17">
        <div id="teams17-block" className="py-5">
          <div className="container py-md-3">
            <div className="row">
              <div className="team col-lg-8">
                <div className="team-top">
                  <div className="team-grids-single1">
                    <img
                      src="assets/images/t4.jpg"
                      className="img-responsive"
                      alt
                    />
                  </div>
                  <div className="team-grids-single">
                    <h3 className="title-wthree-tem">Mark Stonis</h3>
                    <h5>Real Estate Broker</h5>
                    <div className="team-top3">
                      <div className="cont-right">
                        <h6>Phone Number</h6>
                        <p>
                          <Link to="/tel:+142 5897555">+142 5897555</Link>
                        </p>
                      </div>
                      <div className="cont-right">
                        <h6>Email Address</h6>
                        <p>
                          <Link
                            to="/https://p.w3layouts.com/cdn-cgi/l/email-protection#b9dad6cbc9d6cbd8cddc94d4d8d0d5f9caccc9c9d6cbcd97dad6d4"
                            className="mail"
                          >
                            <span
                              className="__cf_email__"
                              data-cfemail="3e5b464a5b4c57514c13535f57527e4d4b4e4e514c4a105d5153"
                            >
                              [email&nbsp;protected]
                            </span>
                          </Link>
                        </p>
                      </div>
                      <div className="cont-right">
                        <h6>Follow me:</h6>
                        <ul className="follow">
                          <li>
                            <Link to="/#team">
                              <span
                                className="fa fa-facebook"
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#team">
                              <span
                                className="fa fa-twitter"
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#team">
                              <span
                                className="fa fa-instagram"
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#team">
                              <span
                                className="fa fa-google-plus"
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="middle-single-team">
                  <h3 className="title-wthree-tem ">About Mark Stonis</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    Quis nostrud exerc
                  </p>
                </div>
              </div>
              <div className="team-1 col-lg-4 mt-lg-0 mt-4">
                <div className="right-single-team">
                  <h4 className>Contact Agent</h4>
                  <form
                    action="https://sendmail.w3layouts.com/submitForm"
                    method="post"
                  >
                    <input
                      type="text"
                      name="w3lName"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="email"
                      name="w3lSender"
                      placeholder="Email"
                      required
                    />
                    <input
                      type="text"
                      name="w3lName"
                      placeholder="Phone"
                      required
                    />
                    <textarea
                      name="w3lMessage"
                      placeholder="Message"
                      required
                      defaultValue={""}
                    />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AgentSingle;
