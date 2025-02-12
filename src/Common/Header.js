import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="w3l-bootstrap-header">
        <nav className="navbar navbar-expand-lg navbar-light py-lg-2 py-2">
          <div className="container">
            <Link className="navbar-brand" to="/index">
              <span className>E-</span>Property
            </Link>
            {/* if logo is image enable this   
    <Link class="navbar-brand" to="/#index">
  <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
    </Link> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
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
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/service">
                      Services
                    </Link>
                    <Link className="dropdown-item" to="/properties">
                      Properties
                    </Link>
                    <Link className="dropdown-item" to="/propertiessingle">
                      Properties Single
                    </Link>
                    <Link className="dropdown-item" to="/agentsingle">
                      Agent Single
                    </Link>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                    <Link className="dropdown-item" to="/signup">
                      Sign Up
                    </Link>
                    <Link className="dropdown-item" to="/timeline">
                      Timeline
                    </Link>
                    <Link className="dropdown-item" to="/faq">
                      Faq
                    </Link>
                    <Link className="dropdown-item" to="/*">
                      404
                    </Link>
                    <Link className="dropdown-item" to="/comingsoon">
                      Coming Soon
                    </Link>
                    <Link className="dropdown-item" to="/searchresult">
                      Search Results
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/blog">
                      Blog
                    </Link>
                    <Link className="dropdown-item" to="/blogsingle">
                      Blog Single
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/ecommerce">
                      Shop
                    </Link>
                    <Link className="dropdown-item" to="/ecommercesingle">
                      Shop Single
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <form className="form-inline">
                <Link
                  className="btn btn-secondary btn-theme"
                  to="/findproperty"
                >
                  <span className="fa fa-search" /> Find Property
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
