import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <div className="w3l-error-main">
        {/* error */}
        <div className="error">
          <div className="container">
            <div className="row main-cont-grid align-items-center">
              <div className="sub-wthreess col-md-6">
                <h3 className="text-err-wthree">Oops!</h3>
                <h4>404 - Page not found</h4>
                <p>
                  This page you are looking for might have been removed
                  <br /> had its name changed or temporarly unavailable.
                </p>
                <Link to="/" className="back-button">
                  Back to Home
                </Link>
              </div>
              <div className="right-cont col-md-6 mt-md-0 mt-5">
                <img src="assets/images/error.png" alt className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        {/* //error */}
      </div>
    </div>
  );
};

export default Notfound;
