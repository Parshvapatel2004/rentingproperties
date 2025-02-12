import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";

const Properties = () => {
  return (
    <div>
      <Header />
      <Banner />
      <PropertiesMain/>
      <Footer/>
    </div>
  );
};
function PropertiesMain() {
  return (
    <>
      <section className="grids-3" id="properties">
        <div id="grids3-block" className="py-5">
          <div className="container py-md-3">
            <div className="row">
              <div className="grids3-info  col-lg-4 col-md-6">
                <Link to="/properties-single">
                  <img src="assets/images/g7.jpg" className="img-fluid" alt />
                </Link>
                <p>Rent</p>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      60 Thornley Street, Marrickville, NSW 2204
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 4 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 3 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 1200 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids3-info col-lg-4 col-md-6 mt-md-0 mt-5">
                <Link to="/properties-single">
                  <img src="assets/images/g8.jpg" className="img-fluid" alt />
                </Link>
                <p>Rent</p>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      423/1 Phillip Street, Petersham, NSW 2049
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 3 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 2 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 1200 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids3-info col-lg-4 col-md-6 mt-lg-0 mt-5">
                <Link to="/properties-single">
                  <img src="assets/images/g9.jpg" className="img-fluid" alt />
                </Link>
                <p>Rent</p>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      40 Piper Street, Lilyfield, NSW 2040
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 4 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 3 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 1200 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids3-info  col-lg-4 col-md-6 mt-5">
                <Link to="/properties-single">
                  <img src="assets/images/g10.jpg" className="img-fluid" alt />
                </Link>
                <p>Rent</p>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      324 Piper Street hasan, NSW 2040
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 5 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 3 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 1200 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids3-info  col-lg-4 col-md-6 mt-5">
                <Link to="/properties-single">
                  <img src="assets/images/g11.jpg" className="img-fluid" alt />
                </Link>
                <p>Rent</p>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      60 Thornley Street, Marrickville, NSW 2204
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 2 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 1 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 1200 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids3-info  col-lg-4 col-md-6 mt-5">
                <Link to="/properties-single">
                  <img src="assets/images/g12.jpg" className="img-fluid" alt />
                </Link>
                <p>Rent</p>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      423/1 Phillip Street, Petersham, NSW 2049
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 4 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 3 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 1200 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids3-info  col-lg-4 col-md-6 mt-5">
                <Link to="/properties-single">
                  <img src="assets/images/g13.jpg" className="img-fluid" alt />
                </Link>
                <p>Rent</p>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      324 Piper Street hasan, NSW 2040
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 5 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 3 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 1200 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids3-info  col-lg-4 col-md-6 mt-5">
                <Link to="/properties-single">
                  <img src="assets/images/g14.jpg" className="img-fluid" alt />
                </Link>
                <p>Rent</p>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      60 Thornley Street, Marrickville, NSW 2204
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 2 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 1 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 1200 sq ft
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grids3-info  col-lg-4 col-md-6 mt-5">
                <Link to="/properties-single">
                  <img src="assets/images/g15.jpg" className="img-fluid" alt />
                </Link>
                <p>Rent</p>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      40 Piper Street, Lilyfield, NSW 2040
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> 4 Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> 3 Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> 1200 sq ft
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Properties;
