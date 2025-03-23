import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUP = () => {
  return (
    <div>
      <Main />
    </div>
  );
};
function Main() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    alert("Register Successfully");
    navigate("/login");
  };
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

                <form
                  action={"http://localhost:8000/register_user"}
                  method="post"
                >
                  <div className="d-flex gap-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      required="required"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      required="required"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required="required"
                  />
                  <input
                    type="tel"
                    name="phoneNo"
                    placeholder="Phone no"
                    required="required"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required="required"
                  />
                  <button type="submit" onClick={handleSignUp}>
                    Sign Up
                  </button>
                </form>

                <p className="text-center pt-2">
                  Already have an account?{" "}
                  <Link id="link" to="/login">
                    Login now
                  </Link>
                </p>
              </div>
              {/* <div className="frm-tp">
                                <div className="form23-text">
                                    <h6>Connect with</h6>
                                    <div className="form23-text-top">
                                        <Link id="link" to="/#google-plus" className='m-auto'>
                                            <div className="signin google-plus">
                                                <span className="fa fa-google" aria-hidden="true"></span>
                                                <p className="action m-2">Google</p>
                                            </div>
                                        </Link>
                                       
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUP;
