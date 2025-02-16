import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="w3l-bootstrap-header">
      <nav className="navbar navbar-expand-lg navbar-light py-lg-2 py-2">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span>E-</span>Property
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
              className="navbar-nav me-auto ms-auto "
              style={{ fontSize: "22px" }}
            >
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              {/* Bootstrap Dropdown (No Hooks) */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/properties">
                      Properties
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/propertiessingle">
                      Properties Single
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/agentsingle">
                      Agent Single
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/timeline">
                      Timeline
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/*">
                      404
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/comingsoon">
                      Coming Soon
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/searchresult">
                      Search Results
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <form className="form-inline">
              <Link className="btn btn-secondary btn-theme" to="/find-property">
                <span className="fa fa-search"></span> Find Property
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
