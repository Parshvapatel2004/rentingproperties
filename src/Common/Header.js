import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  // Handle Logout
  const handleLogout = () => {
    alert("You have been logged out!");
    setLogin(false);
    navigate("/login");
  };

  return (
    <section className="w3l-bootstrap-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-lg-3 py-2 shadow-sm">
        <div className="container">
          <Link id="link" className="navbar-brand text-light fw-bold" to="/">
            <span style={{ color: "#f8b400" }}>Renting</span> Properties
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto ms-auto"
              style={{ fontSize: "18px" }}
            >
              <li className="nav-item active">
                <Link id="link" className="nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link id="link" className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>

              {/* Properties Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Properties
                </a>
                <ul className="dropdown-menu border-0 shadow-lg">
                  <li>
                    <Link id="link" className="dropdown-item" to="/properties">
                      All Properties
                    </Link>
                  </li>
                  <li>
                    <Link id="link" className="dropdown-item" to="/faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link id="link" className="nav-link text-light" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link id="link" className="nav-link text-light" to="/services">
                  Services
                </Link>
              </li>
            </ul>

            {/* Search & Profile Dropdown */}
            <div className="d-flex align-items-center">
              <Link
                id="link"
                className="btn btn-warning me-3 fw-bold"
                to="/find-property"
              >
                <span className="fa fa-search"></span> Find Property
              </Link>

              {/* Profile Dropdown */}
              <div className="dropdown">
                <button
                  className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
                  type="button"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="User Avatar"
                    className="rounded-circle me-2"
                    width="35"
                    height="35"
                  />
                  <span className="d-none d-lg-inline">Profile</span>
                </button>

                {login ? (
                  <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        View Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Edit Profile
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger fw-bold"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                ) : (
                  <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                    <li>
                      <Link
                        className="dropdown-item text-warring fw-bold"
                        to={"/signup"}
                      >
                        Register
                      </Link>
                      <hr className="dropdown-divider" />
                      <Link
                        className="dropdown-item text-primary fw-bold"
                        to={"/login"}
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
