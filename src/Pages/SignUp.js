import React, { useState } from "react";
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
  const [role, setRole] = useState("user");

  const handleSignUp = (e) => {
    e.preventDefault();
    alert(`Registered Successfully as ${role}`);
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
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="tel"
                    name="phoneNo"
                    placeholder="Phone no"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />

                  {/* Role Selection */}
                  {/* <div className="d-flex  justify-content-center align-items-center  gap-2"> */}
                  <label htmlFor="role" className=" fw-lighter mr-5 ml-2">
                    Role:
                  </label>
                  <select
                    name="role"
                    className="w-50"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="user">User</option>
                    <option value="owner">Owner</option>
                    {/* <option value="admin">Admin</option> */}
                  </select>
                  {/* </div> */}

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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUP;
