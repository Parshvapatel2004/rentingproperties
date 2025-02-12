import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional: Navigation buttons
import "swiper/css/pagination"; // Optional: Pagination dots
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Index />
      <Specification />
      <Grids />
      <Customer />
      <Gridese />
      <Forms/>
      <Consumer/>
      <Footer/>
    </>
  );
}

function Slider() {
  return (
    <>
      <section className="w3l-main-slider" id="home">
        <div className="companies20-content">
          <div className="companies-wrapper" />
          <div
            style={{
              width: "100%",
              margin: "auto",
              padding: "",
              
            }}
          >
            <Swiper
              style={{ height: "50%" }}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
            >
              <SwiperSlide>
                <div className="item">
                  <li>
                    <div
                      className="slider-info banner-view bg bg2"
                      data-selector=".bg.bg2"
                    >
                      <div className="banner-info">
                        <div className="container">
                          <div className="banner-info-bg">
                            <h6>
                              <span className="fa fa-map-marker" />{" "}
                              Melbourne,Australia
                            </h6>
                            <h5>60 Thornley Street, Marrickville, NSW 2204</h5>
                            <ul className="banner-ul">
                              <li>
                                <span className="fa fa-bed" /> 3
                              </li>
                              <li>
                                <span className="fa fa-bath" /> 3
                              </li>
                              <li>
                                <span className="fa fa-share-square-o" /> 1200
                                sq ft
                              </li>
                            </ul>
                            <Link
                              className="btn btn-secondary btn-theme1"
                              to="/properties"
                            >
                              {" "}
                              Check Property
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <li>
                    <div
                      className="slider-info  banner-view banner-top1 bg bg2"
                      data-selector=".bg.bg2"
                    >
                      <div className="banner-info">
                        <div className="container">
                          <div className="banner-info-bg">
                            <h6>
                              <span className="fa fa-map-marker" />{" "}
                              Sydney,Australia
                            </h6>
                            <h5>60 Thornley Street, Marrickville, NSW 2204</h5>
                            <ul className="banner-ul">
                              <li>
                                <span className="fa fa-bed" /> 3
                              </li>
                              <li>
                                <span className="fa fa-bath" /> 3
                              </li>
                              <li>
                                <span className="fa fa-share-square-o" /> 1200
                                sq ft
                              </li>
                            </ul>
                            <Link
                              className="btn btn-secondary btn-theme1"
                              to="/properties"
                            >
                              {" "}
                              Check Property
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <li>
                    <div
                      className="slider-info banner-view banner-top2 bg bg2"
                      data-selector=".bg.bg2"
                    >
                      <div className="banner-info">
                        <div className="container">
                          <div className="banner-info-bg">
                            <h6>
                              <span className="fa fa-map-marker" />{" "}
                              Perth,Australia
                            </h6>
                            <h5>60 Thornley Street, Marrickville, NSW 2204</h5>
                            <ul className="banner-ul">
                              <li>
                                <span className="fa fa-bed" /> 3
                              </li>
                              <li>
                                <span className="fa fa-bath" /> 3
                              </li>
                              <li>
                                <span className="fa fa-share-square-o" /> 1200
                                sq ft
                              </li>
                            </ul>
                            <Link
                              className="btn btn-secondary btn-theme1"
                              to="/properties"
                            >
                              {" "}
                              Check Property
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <li>
                    <div
                      className="slider-info banner-view banner-top3 bg bg2"
                      data-selector=".bg.bg2"
                    >
                      <div className="banner-info">
                        <div className="container">
                          <div className="banner-info-bg">
                            <h6>
                              <span className="fa fa-map-marker" />{" "}
                              Melbourne,Australia
                            </h6>
                            <h5>60 Thornley Street, Marrickville, NSW 2204</h5>
                            <ul className="banner-ul">
                              <li>
                                <span className="fa fa-bed" /> 3
                              </li>
                              <li>
                                <span className="fa fa-bath" /> 3
                              </li>
                              <li>
                                <span className="fa fa-share-square-o" /> 1200
                                sq ft
                              </li>
                            </ul>
                            <Link
                              className="btn btn-secondary btn-theme1"
                              to="/properties"
                            >
                              {" "}
                              Check Property
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

function Index() {
  return (
    <>
      <section className="w3l-index-block2 ">
        <div className="container py-md-3">
          <div className="heading text-center mx-auto">
            <h3 className="head">What We Do</h3>
            <p className="head">
              {"{"}" "{"}"}
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.
            </p>
          </div>
          <div className="row bottom_grids mt-5 pt-3">
            <div className="col-lg-4 col-md-6">
              <div className="s-block p-4">
                <span className="fa fa-home icon-siz" />
                <h3 className="my-3">Office Agency</h3>
                <p className>
                  Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed
                  do i eiusmod tempor incididunt.
                </p>
                <Link to="/services">
                  Read More <span className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-sm-0 mt-4">
              <div className="s-block p-4">
                <span className="fa fa-university icon-siz" />
                <h3 className="my-3">Retail Agency</h3>
                <p className>
                  Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed
                  do i eiusmod tempor incididunt.
                </p>
                <Link to="/services">
                  Read More <span className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
              <div className="s-block p-4">
                <span className="fa fa-hourglass icon-siz" />
                <h3 className="my-3">Industrial Agency</h3>
                <p className>
                  Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed
                  do i eiusmod tempor incididunt.
                </p>
                <Link to="/services">
                  Read More <span className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="s-block p-4">
                <span className="fa fa-futbol-o icon-siz" />
                <h3 className="my-3">Property &amp; Asset</h3>
                <p className>
                  Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed
                  do i eiusmod tempor incididunt.
                </p>
                <Link to="/services">
                  Read More <span className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="s-block p-4">
                <span className="fa fa-cubes icon-siz" />
                <h3 className="my-3">Building Surviying</h3>
                <p className>
                  Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed
                  do i eiusmod tempor incididunt.
                </p>
                <Link to="/services">
                  Read More <span className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="s-block p-4">
                <span className="fa fa-area-chart icon-siz" />
                <h3 className="my-3">Total Investment</h3>
                <p className>
                  Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed
                  do i eiusmod tempor incididunt.
                </p>
                <Link to="/services">
                  Read More <span className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function Specification() {
  return (
    <>
      <section className="w3l-specifications-9">
        <div className="main-w3 py-5" id="stats">
          <div className="container text-center py-md-3 mt-4">
            <div className="main-cont-wthree-fea row">
              <div className="grids-speci1 col-lg-3 col-6">
                <h3 className="title-spe">445</h3>
                <p>PROPERTIES TO RENT</p>
              </div>
              <div className="grids-speci1 midd-eff-spe col-lg-3 col-6">
                <h3 className="title-spe">350</h3>
                <p>PROPERTIES FOR SALE</p>
              </div>
              <div className="grids-speci1 las-but col-lg-3 col-6  mt-lg-0 mt-4">
                <h3 className="title-spe">530</h3>
                <p>PROPERTIES UNDER OFFER</p>
              </div>
              <div className="grids-speci1 las-t col-lg-3 col-6  mt-lg-0 mt-4">
                <h3 className="title-spe">25k </h3>
                <p>SQARE. FT</p>
              </div>
            </div>
          </div>
        </div>
        {/* //specifications */}
      </section>
    </>
  );
}

const Grids = () => {
  return (
    <div>
      <section className="grids-4">
        <div id="grids4-block" className="py-5">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head">Recently Added Properties</h3>
              <p className="my-3 head">
                {" "}
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.
              </p>
            </div>
            <div className="row mt-5 pt-3">
              <div className="grids4-info  col-lg-4 col-md-6">
                <Link to="/properties-single">
                  <img src="assets/images/g12.jpg" className="img-fluid" alt />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">84 Woodland St. Cocoa</Link>
                  </h5>
                  <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
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
              <div className="grids4-info col-lg-4 col-md-6 mt-md-0 mt-4">
                <Link to="/properties-single">
                  <img src="assets/images/g11.jpg" className="img-fluid" alt />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      28 Westport Dr. Warminster
                    </Link>
                  </h5>
                  <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
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
              <div className="grids4-info col-lg-4 col-md-6 mt-lg-0 mt-4">
                <Link to="/properties-single">
                  <img src="assets/images/g10.jpg" className="img-fluid" alt />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">32 Pawnee Street Butte</Link>
                  </h5>
                  <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
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
              <div className="grids4-info  col-lg-4 col-md-6 mt-4">
                <Link to="/properties-single">
                  <img src="assets/images/g9.jpg" className="img-fluid" alt />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      2 Glen Creek St. Alexandria
                    </Link>
                  </h5>
                  <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
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
              <div className="grids4-info  col-lg-4 col-md-6 mt-4">
                <Link to="/properties-single">
                  <img src="assets/images/g8.jpg" className="img-fluid" alt />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      798 Talbot St. Bridgewater
                    </Link>
                  </h5>
                  <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
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
              <div className="grids4-info  col-lg-4 col-md-6 mt-4">
                <Link to="/properties-single">
                  <img src="assets/images/g7.jpg" className="img-fluid" alt />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link to="/properties-single">
                      7240C Argyle St. Lawndale
                    </Link>
                  </h5>
                  <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
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
    </div>
  );
};

const Customer = () => {
  return (
    <div>
      <section className="w3l-customers-7">
        <div className="customers_sur py-5">
          <div className="container py-md-3">
            <div className="customers-top_sur row">
              <div className="customers-left_sur col-lg-6">
                <h6 />
                <h4>
                  Common Sense Solutions For All Aspects Of Commercial Property,
                  Development Land.
                </h4>
                <Link
                  to="/contact"
                  className="btn btn-secondary btn-theme1 mt-4"
                >
                  {" "}
                  Contact Us
                </Link>
              </div>
              <div className="customers-middle_sur col-lg-6 mt-lg-0 mt-4">
                <div className="customers_grid">
                  <p className="sub-test">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                  <div className="customers-bottom_sur row">
                    <div className="custo-img-res col-3">
                      <img
                        src="assets/images/te1.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </div>
                    <div className="custo_grid col-9">
                      <h5>Henry Nicholas</h5>
                      <span>Agent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Gridese = () => {
  return (
    <div>
      <section className="w3l-grids-9">
        <div className="grid-top-9 py-5">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head">Latest News</h3>
              <p className="my-3 head">
                {"{"}" "{"}"}
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.
              </p>
            </div>
            <div className="grid-col-2 grid-element-9 row mt-5 pt-3">
              <div className="col-lg-4 col-md-6">
                <div className="left-grid-ele-9 grid-bg3">
                  <div className="sub-wid-grid-9">
                    <p className="mb-2">
                      <Link to="/blog-single">December 17, 2019</Link>
                    </p>
                    <h4 className="text-grid-9">
                      <Link to="/blog-single">
                        Retail banks wake up to digital lending this year
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div className="left-grid-ele-9 grid-bg4">
                  <div className="sub-wid-grid-9">
                    <p className="mb-2">
                      <Link to="/blog-single">December 17, 2019</Link>
                    </p>
                    <h4 className="text-grid-9">
                      <Link to="/blog-single">
                        Strategic and commercial approach with issues
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-0 offset-md-3 col-md-6 mt-lg-0 mt-4">
                <div className="left-grid-ele-9 grid-bg5">
                  <div className="sub-wid-grid-9">
                    <p className="mb-2">
                      <Link to="/blog-single">December 17, 2019</Link>
                    </p>
                    <h4 className="text-grid-9">
                      <Link to="/blog-single">
                        Within the construction industry as their overdraft
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};



const Forms = () => {
  return (
    <div>
      <section className="w3l-forms-9" id="subscribe">
        <div className="main-w3 py-5">
          <div className="container py-md-3">
            <div className="grids-forms row">
              <div className="main-midd col-lg-6">
                <h4 className="title-head">
                  Keep up to date — Get e-mail updates
                </h4>
                <p>Stay tuned for the latest company news.</p>
              </div>
              <div className="main-midd-2 col-lg-6">
                <form action="#" method="post" className="rightside-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <button className="btn" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


const Consumer = () => {
  return (
    <div>
     <section className="w3l-customers-8" id="testimonials">
  <div className="customers_sur py-5">
    <div className="container py-md-3">
      <div className="heading text-center mx-auto">
        <h3 className="head">Happy Clients</h3>
        <p className="my-3 head"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Nulla mollis dapibus nunc, ut rhoncus
          turpis sodales quis. Integer sit amet mattis quam.</p>
      </div>
      <div className="customers-top_sur row mt-5 pt-3">
        <div className="customers-left_sur col-md-6">
          <div className="customers_grid">
            <ul className="mb-3">
              <li className="rated"><ispan className="fa fa-star" /></li>
              <li className="rated"><ispan className="fa fa-star" /></li>
              <li className="rated"><ispan className="fa fa-star" /></li>
              <li className="rated"><ispan className="fa fa-star" /></li>
              <li className="rated"><ispan className="fa fa-star" /></li>
            </ul>
            <p className="sub-test">Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <div className="customers-bottom_sur row">
              <div className="custo-img-res col-3">
                <img src="assets/images/te2.jpg" alt=" " className="img-responsive" />
              </div>
              <div className="custo_grid col-9">
                <h5>Shane Watson</h5>
                <span>Co-founder</span>
              </div>
            </div>
          </div>
        </div>
        <div className="customers-middle_sur col-md-6 mt-md-0 mt-4">
          <div className="customers_grid">
            <ul className="mb-3">
              <li className="rated"><ispan className="fa fa-star" /></li>
              <li className="rated"><ispan className="fa fa-star" /></li>
              <li className="rated"><ispan className="fa fa-star" /></li>
              <li className="rated"><ispan className="fa fa-star" /></li>
              <li className="rated"><ispan className="fa fa-star" /></li>
            </ul>
            <p className="sub-test">Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <div className="customers-bottom_sur row">
              <div className="custo-img-res col-3">
                <img src="assets/images/te3.jpg" alt=" " className="img-responsive" />
              </div>
              <div className="custo_grid col-9">
                <h5>Henry Nicholas</h5>
                <span>Client</span>
              </div>
            </div>
          </div>
        </div>	
      </div>
    </div>
  </div>
</section>

    </div>
  )
}



