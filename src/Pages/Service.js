import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";

const Service = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ServiceIndex />
      <ServiceFeature/>
      <ServiceContent/>
      <Footer/>
    </div>
  );
};
function ServiceIndex() {
  return (
    <>
      <section className="w3l-index2" id="about">
        <div className="calltoaction-20  py-5 editContent">
          <div className="container py-md-3">
            <div className="calltoaction-20-content row">
              <div className="column ccont-left col-lg-6">
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src="assets/images/g1.jpg"
                      className="img-responsive"
                      alt
                    />
                  </div>
                  <div className="col-sm-6 pt-5">
                    <img
                      src="assets/images/g2.jpg"
                      className="img-responsive"
                      alt
                    />
                  </div>
                  <div className="col-sm-6 pt-sm-0 pt-5">
                    <img
                      src="assets/images/g3.jpg"
                      className="img-responsive"
                      alt
                    />
                  </div>
                  <div className="col-sm-6 pt-5">
                    <img
                      src="assets/images/g4.jpg"
                      className="img-responsive"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div className="column center-align-self col-lg-6 pl-lg-5 pl-3 mt-lg-0 mt-4">
                <h5 className="editContent">Find Your House From Here.</h5>
                <h3 className="editContent">
                  Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed
                  do eiusmod.
                </h3>
                <p className="editContent">
                  Fusce faucibus ante vitae justo efficitur elementum. Donec
                  faucibus arcu elementum, luctus justo. ac purus semper
                  pharetra. Donec faucibus arcu elementum, luctus justo.
                </p>
                <p className="more-gap editContent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam architecto, ex veritatis tempora aliquid labore natus
                  autem iusto magni dicta incidunt nostrum odit veniam voluptas
                  provident minus saepe reiciendis nulla dolore delectus
                  molestias nam officiis repellat. Sequi corrupti reiciendis
                  nostrum.
                </p>
                <a href="about.html" className="theme-button btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceFeature() {
  return (
    <>
      <section className="w3l-features-7">
        {/* /features */}
        <div className="features py-5" id="services">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head">Services</h3>
              <p className="my-3 head">
                {" "}
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.
              </p>
            </div>
            <div className="fea-gd-vv row mt-5 pt-3">
              <div className="float-lt feature-gd col-lg-4 col-md-6">
                <div className="icon">
                  {" "}
                  <span className="fa fa-file-text-o" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a href="properties.html">
                      Flexible, Contemporary &amp; Included Spaces
                    </a>
                  </h5>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed
                    do eiusmod tempor incididunt
                  </p>
                  <a href="properties.html" className="red mt-3">
                    Read More <span className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="float-mid feature-gd col-lg-4 col-md-6 mt-md-0 mt-5">
                <div className="icon">
                  {" "}
                  <span className="fa fa-laptop" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a href="properties.html">
                      Dedicated Production &amp; Planning Teams
                    </a>
                  </h5>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed
                    do eiusmod tempor incididunt
                  </p>
                  <a href="properties.html" className="red mt-3">
                    Read More <span className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="float-rt feature-gd col-lg-4 col-md-6 mt-lg-0 mt-5">
                <div className="icon">
                  {" "}
                  <span className="fa fa-clone" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a href="properties.html">
                      Premium, Fresh Cuisine Made Onsite
                    </a>
                  </h5>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed
                    do eiusmod tempor incididunt
                  </p>
                  <a href="properties.html" className="red mt-3">
                    Read More <span className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="float-lt feature-gd col-lg-4 col-md-6 mt-5">
                <div className="icon">
                  {" "}
                  <span className="fa fa-bullseye" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a href="properties.html">
                      We’re Here To Make You Successful
                    </a>
                  </h5>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed
                    do eiusmod tempor incididunt
                  </p>
                  <a href="properties.html" className="red mt-3">
                    Read More <span className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="float-mid feature-gd col-lg-4 col-md-6 mt-5">
                <div className="icon">
                  {" "}
                  <span className="fa fa-cube" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a href="properties.html">
                      Broker Cutting-Edge And Technology
                    </a>
                  </h5>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed
                    do eiusmod tempor incididunt
                  </p>
                  <a href="properties.html" className="red mt-3">
                    Read More <span className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="float-rt feature-gd col-lg-4 col-md-6 mt-5">
                <div className="icon">
                  {" "}
                  <span className="fa fa-spinner" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a href="properties.html">
                      Human-Centered Design Friendly Spaces
                    </a>
                  </h5>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed
                    do eiusmod tempor incididunt
                  </p>
                  <a href="properties.html" className="red mt-3">
                    Read More <span className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //features */}
      </section>
    </>
  );
}
function ServiceContent(){
    return (
      <>
        <section className="w3l-content-with-photo-4">
  <div id="content-with-photo4-block" className="py-5">
    <div className="container py-md-3">
      <div className="cwp4-two row">
        <div className="cwp4-image col-lg-6">
          <img src="assets/images/g4.jpg" className="img-responsive" alt />
        </div>
        <div className="cwp4-text col-lg-6 pl-lg-5 mt-lg-0 mt-4">
          <h3>Quality Services &amp; Excellent Work!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>
          <ul className="cont-4">
            <li>1. Business Services</li>
            <li>2. Swimming Pool </li>
            <li>3. Restaurant</li>
            <li>4. Fitness Facility </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    );
}
export default Service;
