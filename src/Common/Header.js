import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    alert("You have been logged out!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <section className="w3l-bootstrap-header">
      <nav className="navbar navbar-expand-lg navbar-light py-lg-2 py-2">
        <div className="container">
          <Link id="link" className="navbar-brand" to="/">
            <span>Renting </span>Properties
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
              style={{ fontSize: "20px" }}
            >
              <li className="nav-item active">
                <Link id="link" className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link id="link" className="nav-link" to="/about">
                  About
                </Link>
              </li>

              {/* Properties Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Properties
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link id="link" className="dropdown-item" to="/properties">
                      All Properties
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="link"
                      className="dropdown-item"
                      to="/propertiessingle"
                    >
                      Single Property
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
                <Link id="link" className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link id="link" className="nav-link" to="/services">
                  Services
                </Link>
              </li>
            </ul>

            {/* Search & Profile Dropdown */}
            <div className="d-flex align-items-center">
              <Link
                id="link"
                className="btn btn-secondary me-3"
                to="/find-property"
              >
                <span className="fa fa-search"></span> Find Property
              </Link>

              {/* Profile Dropdown */}
              <div className="dropdown">
                <button
                  className="btn btn-outline-dark dropdown-toggle"
                  type="button"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="User Avatar"
                    className="rounded-circle"
                    width="30"
                    height="30"
                  />
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="profileDropdown"
                >
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
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
