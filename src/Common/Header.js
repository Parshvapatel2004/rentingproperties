import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <>
      <section className="w3l-bootstrap-header">
        <nav className="navbar navbar-expand-lg navbar-light py-lg-2 py-2">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <span className>E-</span>Property
            </a>
            {/* if logo is image enable this   
    <a class="navbar-brand" href="#index.html">
  <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
    </a> */}
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
                 <Link className='nav-link' to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to='/about'>About</Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="services.html">
                      Services
                    </a>
                    <a className="dropdown-item" href="properties.html">
                      Properties
                    </a>
                    <a className="dropdown-item" href="properties-single.html">
                      Properties Single
                    </a>
                    <a className="dropdown-item" href="agent-single.html">
                      Agent Single
                    </a>
                    <a className="dropdown-item" href="login.html">
                      Login
                    </a>
                    <a className="dropdown-item" href="signup.html">
                      Sign Up
                    </a>
                    <a className="dropdown-item" href="timeline.html">
                      Timeline
                    </a>
                    <a className="dropdown-item" href="faq.html">
                      Faq
                    </a>
                    <a className="dropdown-item" href="404.html">
                      404
                    </a>
                    <a className="dropdown-item" href="coming-soon.html">
                      Coming Soon
                    </a>
                    <a className="dropdown-item" href="email-template.html">
                      Email Template
                    </a>
                    <a className="dropdown-item" href="single.html">
                      Single Page
                    </a>
                    <a className="dropdown-item" href="search-results.html">
                      Search Results
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="blog.html">
                      Blog
                    </a>
                    <a className="dropdown-item" href="blog-single.html">
                      Blog Single
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="ecommerce.html">
                      Shop
                    </a>
                    <a className="dropdown-item" href="ecommerce-single.html">
                      Shop Single
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="form-inline">
                <a
                  className="btn btn-secondary btn-theme"
                  href="find-property.html"
                >
                  <span className="fa fa-search" /> Find Property
                </a>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}







