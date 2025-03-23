import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

function Main() {
  const navigate = useNavigate();
  const handleLogin = () => {
    alert("Login successfully");
    navigate("/");
  };
  return (
    <>
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
                <h6>Login with your account</h6>
                <form action={"http://localhost:8000/login"} method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required="required"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required="required"
                  />
                  <Link id="link" to="/#URL">
                    Forgot your password?
                  </Link>
                  <button type="submit" onClick={handleLogin}>
                    Login
                  </button>
                </form>
                <p className="text-center pt-2">
                  Not have an account yet?{" "}
                  <Link id="link" to="/signup">
                    Register now
                  </Link>
                </p>
              </div>

              {/* <div className="frm-tp">
                                <div className="form23-text">
                                    <h6>Connect with</h6>
                                    <div className="form23-text-top">
                                        <Link id="link" to="/#google-plus">
                                            <div className="signin google-plus">
                                                <span className="fa fa-google-plus" aria-hidden="true"></span>
                                                <p className="action">Google</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
