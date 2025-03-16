import React from "react";
import { Link } from "react-router-dom";

const SignUP = () => {
  return (
    <div>
      <Main />
    </div>
  );
};
function Main() {
  return (
    <div>
      <section className="w3l-forms-23">
        <div id="forms23-block">
          <div className="wrapper">
            <div className="logo1">
              <Link id="link" className="brand-logo" to="/">
                <span>Renting </span>Properties
              </Link>
            </div>
            <div className="d-grid forms23-grids">
              <div className="form23">
                <h6>Register a new account</h6>

                <form action="#" method="GET">
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    required="required"
                  />
                  <input
                    type="email"
                    name="username"
                    placeholder="Email"
                    required="required"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required="required"
                  />

                  <button type="submit">Sign Up</button>
                </form>
                <p>
                  Are you a member?{" "}
                  <Link id="link" to="/login">
                    Login now
                  </Link>
                </p>
              </div>
              <div className="frm-tp">
                <div className="form23-text">
                  <h6>Connect with</h6>
                  <div className="form23-text-top">
                    <Link id="link" to="/#facebook">
                      <div className="signin facebook">
                        <span
                          className="fa fa-facebook"
                          aria-hidden="true"
                        ></span>
                        <p className="action">Facebook</p>
                      </div>
                    </Link>
                    <Link id="link" to="/#google-plus">
                      <div className="signin google-plus">
                        <span
                          className="fa fa-google-plus"
                          aria-hidden="true"
                        ></span>
                        <p className="action">Google</p>
                      </div>
                    </Link>
                    <Link id="link" to="/#twitter">
                      <div className="signin twitter">
                        <span
                          className="fa fa-twitter"
                          aria-hidden="true"
                        ></span>
                        <p className="action">Twitter</p>
                      </div>
                    </Link>
                    <Link id="link" to="/#linkedin">
                      <div className="signin linkedin">
                        <span
                          className="fa fa-linkedin"
                          aria-hidden="true"
                        ></span>
                        <p className="action">Linkedin</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUP;
