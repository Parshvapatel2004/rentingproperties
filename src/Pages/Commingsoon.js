import React from "react";
import { Link } from "react-router-dom";
const Commingsoon = () => {
  return (
    <div>
      <section className="w3l-error-page">
        <div className="covers-main">
          <div className="wrapper">
            <div className="d-gird">
              <div className="main-cover">
                <h2>Coming Soon</h2>
                <div className="countdown">
                  <div className="countdown__days">
                    <div className="number" />
                    <span className>Days</span>
                  </div>
                  <div className="countdown__hours">
                    <div className="number" />
                    <span className>Hours</span>
                  </div>
                  <div className="countdown__minutes">
                    <div className="number" />
                    <span className>Minutes</span>
                  </div>
                  <div className="countdown__seconds">
                    <div className="number" />
                    <span className>Seconds</span>
                  </div>
                </div>
                <form action="#" method="post" className="comingsoon-form">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email"
                    aria-label="email"
                    required
                  />
                  <button className="btn">Notify Me</button>
                </form>
                <p className="form-text">Stay tuned for something amazing</p>
              </div>
              <div className="buy-tick">
                <Link to="/index" className="back-button">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commingsoon;
