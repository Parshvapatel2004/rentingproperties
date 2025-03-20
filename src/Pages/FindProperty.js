import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const FindProperty = () => {
  return (
    <div>
      <Header />
      <Banner title={"Find Your Dream Property"} pageName={"find_property"} />
      <Main />
      <Footer />
    </div>
  );
};

function Main() {
  return (
    <>
      <section
        className="form-16"
        id="booking"
        style={{ padding: "0px 140px" }}
      >
        <div className="form-16-mian py-5">
          <div className="container py-md-3">
            <div className="forms-16-top">
              <div className="form-right-inf">
                <div className="form-inner-cont">
                  <h3>Find Your Perfect Property</h3>
                  <p className="text-black fw-light mb-4">
                    Search from a wide range of properties to rent in top
                    locations.
                  </p>
                  <form action="" method="post" className="signin-form">
                    <div className="row book-form">
                      <div className="form-input col-lg-8 col-md-6">
                        <input
                          type="text"
                          name="keywords"
                          placeholder="Enter property name, city, or keyword..."
                          required
                        />
                      </div>
                      <div className="form-input col-lg-4 col-md-6 mt-md-0 mt-3">
                        <select className="selectpicker" name="location">
                          <option value="">Select a City</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Pune">Pune</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Kolkata">Kolkata</option>
                          <option value="Jaipur">Jaipur</option>
                        </select>
                      </div>
                      <div className="form-input col-md-4 mt-3">
                        <input
                          type="number"
                          name="maxArea"
                          placeholder="Maximum Area (sqft)"
                          required
                        />
                      </div>
                      <div className="form-input col-md-4 mt-3">
                        <select className="selectpicker" name="propertyType">
                          <option value="">Select Property Type</option>
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                        </select>
                      </div>

                      <div className="form-input col-md-4 mt-3">
                        <input
                          type="number"
                          name="maxPrice"
                          placeholder="Maximum Budget (₹)"
                          required
                        />
                      </div>
                      <div className="bottom-btn col-md-4 mt-3">
                        <button type="submit" className="btn">
                          Search Properties
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FindProperty;
