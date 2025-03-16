import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional: Navigation buttons
import "swiper/css/pagination"; // Optional: Pagination dots
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <InfoBlock />
      <Specification />
      <PropertyInfo />
      <ContactUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

const Slider = () => {
  return (
    <section className="w3l-main-slider" id="home">
      <div className="companies20-content">
        <div className="companies-wrapper" />
        <div style={{ width: "100%", margin: "auto" }}>
          <Swiper
            style={{
              height: "50%",
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
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
                  <div className="slider-info banner-view banner-top0 bg bg2">
                    <div className="banner-info">
                      <div className="container">
                        <div className="banner-info-bg">
                          <h6>
                            <span className="fa fa-map-marker" /> Mumbai, India
                          </h6>
                          <h5>Luxury Apartments in Bandra</h5>
                          <ul className="banner-ul">
                            <li>
                              <span className="fa fa-bed" /> 3
                            </li>
                            <li>
                              <span className="fa fa-bath" /> 2
                            </li>
                            <li>
                              <span className="fa fa-share-square-o" /> 1500 sq
                              ft
                            </li>
                          </ul>
                          <Link
                            id="link"
                            className="btn btn-secondary btn-theme1"
                            to="/properties"
                          >
                            {" "}
                            View Property
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
                  <div className="slider-info banner-view banner-top1  bg bg2">
                    <div className="banner-info">
                      <div className="container">
                        <div className="banner-info-bg">
                          <h6>
                            <span className="fa fa-map-marker" /> Bangalore,
                            India
                          </h6>
                          <h5>Spacious Villas in Whitefield</h5>
                          <ul className="banner-ul">
                            <li>
                              <span className="fa fa-bed" /> 4
                            </li>
                            <li>
                              <span className="fa fa-bath" /> 3
                            </li>
                            <li>
                              <span className="fa fa-share-square-o" /> 2000 sq
                              ft
                            </li>
                          </ul>
                          <Link
                            id="link"
                            className="btn btn-secondary btn-theme1"
                            to="/properties"
                          >
                            View Property
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
                  <div className="slider-info banner-view banner-top2 bg bg2">
                    <div className="banner-info">
                      <div className="container">
                        <div className="banner-info-bg">
                          <h6>
                            <span className="fa fa-map-marker" /> Delhi, India
                          </h6>
                          <h5>Modern Flats in Connaught Place</h5>
                          <ul className="banner-ul">
                            <li>
                              <span className="fa fa-bed" /> 2
                            </li>
                            <li>
                              <span className="fa fa-bath" /> 2
                            </li>
                            <li>
                              <span className="fa fa-share-square-o" /> 1200 sq
                              ft
                            </li>
                          </ul>
                          <Link
                            id="link"
                            className="btn btn-secondary btn-theme1"
                            to="/properties"
                          >
                            {" "}
                            View Property
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
                  <div className="slider-info banner-view banner-top3 bg bg2">
                    <div className="banner-info">
                      <div className="container">
                        <div className="banner-info-bg">
                          <h6>
                            <span className="fa fa-map-marker" /> Chennai, India
                          </h6>
                          <h5>Beachside Villas in ECR</h5>
                          <ul className="banner-ul">
                            <li>
                              <span className="fa fa-bed" /> 5
                            </li>
                            <li>
                              <span className="fa fa-bath" /> 4
                            </li>
                            <li>
                              <span className="fa fa-share-square-o" /> 2500 sq
                              ft
                            </li>
                          </ul>
                          <Link
                            id="link"
                            className="btn btn-secondary btn-theme1"
                            to="/properties"
                          >
                            {" "}
                            View Property
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
                  <div className="slider-info banner-view banner-top4 bg bg2">
                    <div className="banner-info">
                      <div className="container">
                        <div className="banner-info-bg">
                          <h6>
                            <span className="fa fa-map-marker" /> Kolkata, India
                          </h6>
                          <h5>Heritage Homes in Salt Lake</h5>
                          <ul className="banner-ul">
                            <li>
                              <span className="fa fa-bed" /> 3
                            </li>
                            <li>
                              <span className="fa fa-bath" /> 2
                            </li>
                            <li>
                              <span className="fa fa-share-square-o" /> 1800 sq
                              ft
                            </li>
                          </ul>
                          <Link
                            id="link"
                            className="btn btn-secondary btn-theme1"
                            to="/properties"
                          >
                            {" "}
                            View Property
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
  );
};

const InfoBlock = () => {
  return (
    <>
      <section className="w3l-index-block2 py-5">
        <div className="container py-md-3">
          <div className="heading text-center mx-auto">
            <h3 className="head">Our Services</h3>
            <p className="my-3 head">
              {" "}
              We provide expert rental property solutions, ensuring a smooth and
              hassle-free experience for tenants and landlords alike. From
              finding the perfect home to managing properties efficiently, we've
              got you covered.
            </p>
          </div>
          <div className="row bottom_grids mt-5 pt-3">
            <div className="col-lg-4 col-md-6">
              <div className="s-block p-4">
                <span className="fa fa-home icon-siz" />
                <h3 className="my-3">Residential Rentals</h3>
                <p className="">
                  Discover a wide range of rental homes, apartments, and condos
                  that suit your lifestyle and budget.
                </p>
                <Link id="link" to="/services">
                  Read More <span className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-sm-0 mt-4">
              <div className="s-block p-4">
                <span className="fa fa-university icon-siz" />
                <h3 className="my-3">Commercial Spaces</h3>
                <p className="">
                  Find ideal office spaces, retail shops, and commercial
                  properties to meet your business needs.
                </p>
                <Link id="link" to="/services">
                  Read More <span className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
              <div className="s-block p-4">
                <span className="fa fa-hourglass icon-siz" />
                <h3 className="my-3">Property Management</h3>
                <p className="">
                  We handle everything from tenant screening to maintenance,
                  making property ownership stress-free.
                </p>
                <Link id="link" to="/services">
                  Read More <span className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="s-block p-4">
                <span className="fa fa-futbol-o icon-siz" />
                <h3 className="my-3">Short-Term Rentals</h3>
                <p className="">
                  Looking for a vacation rental or a temporary stay? We have
                  fully furnished properties available.
                </p>
                <Link id="link" to="/services">
                  Read More <span className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="s-block p-4">
                <span className="fa fa-cubes icon-siz" />
                <h3 className="my-3">Tenant Services</h3>
                <p className="">
                  We assist tenants in finding the right property and provide
                  ongoing support throughout the lease.
                </p>
                <Link id="link" to="/services">
                  Read More <span className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="s-block p-4">
                <span className="fa fa-area-chart icon-siz" />
                <h3 className="my-3">Investment Opportunities</h3>
                <p className="">
                  Explore lucrative real estate investment options with expert
                  guidance from our team.
                </p>
                <Link id="link" to="/services">
                  Read More <span className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Specification = () => {
  return (
    <>
      <section className="w3l-specifications-9">
        <div className="main-w3 py-5" id="stats">
          <div className="container text-center py-md-3 mt-4">
            <div className="main-cont-wthree-fea row">
              <div className="grids-speci1 col-lg-3 col-6">
                <h3 className="title-spe">445</h3>
                <p>RESIDENTAL PROPERTIES TO RENT</p>
              </div>
              <div className="grids-speci1 midd-eff-spe col-lg-3 col-6">
                <h3 className="title-spe">350</h3>
                <p>COMMERCIAL PROPERTIES FOR RENT</p>
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
      </section>
    </>
  );
};

const PropertyInfo = () => {
  return (
    <section className="grids-4">
      <div id="grids4-block" className="py-5">
        <div className="container py-md-3">
          <div className="heading text-center mx-auto">
            <h3 className="head">Recently Added Properties</h3>
            <p className="my-3 head">
              {" "}
              Explore our latest listings of premium rental properties across
              India, offering comfort and convenience.
            </p>
          </div>
          <div className="row mt-5 pt-3">
            <div className="grids4-info col-lg-4 col-md-6">
              <Link id="link" to="/properties-single">
                <img src="assets/images/g12.jpg" className="img-fluid" alt="" />
              </Link>
              <div className="info-bg">
                <h5>
                  <Link id="link" to="/properties-single">
                    Luxury Apartment in Bandra
                  </Link>
                </h5>
                <p>Mumbai, Maharashtra, India</p>
                <ul>
                  <li>
                    <span className="fa fa-bed" /> 4 Beds
                  </li>
                  <li>
                    <span className="fa fa-bath" /> 3 Baths
                  </li>
                  <li>
                    <span className="fa fa-share-square-o" /> 1800 sq ft
                  </li>
                </ul>
              </div>
            </div>
            <div className="grids4-info col-lg-4 col-md-6 mt-md-0 mt-4">
              <Link id="link" to="/properties-single">
                <img src="assets/images/g11.jpg" className="img-fluid" alt="" />
              </Link>
              <div className="info-bg">
                <h5>
                  <Link id="link" to="/properties-single">
                    Spacious Villa in Whitefield
                  </Link>
                </h5>
                <p>Bangalore, Karnataka, India</p>
                <ul>
                  <li>
                    <span className="fa fa-bed" /> 3 Beds
                  </li>
                  <li>
                    <span className="fa fa-bath" /> 2 Baths
                  </li>
                  <li>
                    <span className="fa fa-share-square-o" /> 2200 sq ft
                  </li>
                </ul>
              </div>
            </div>
            <div className="grids4-info col-lg-4 col-md-6 mt-lg-0 mt-4">
              <Link id="link" to="/properties-single">
                <img src="assets/images/g10.jpg" className="img-fluid" alt="" />
              </Link>
              <div className="info-bg">
                <h5>
                  <Link id="link" to="/properties-single">
                    Modern Flat in Connaught Place
                  </Link>
                </h5>
                <p>Delhi, India</p>
                <ul>
                  <li>
                    <span className="fa fa-bed" /> 2 Beds
                  </li>
                  <li>
                    <span className="fa fa-bath" /> 2 Baths
                  </li>
                  <li>
                    <span className="fa fa-share-square-o" /> 1400 sq ft
                  </li>
                </ul>
              </div>
            </div>
            <div className="grids4-info col-lg-4 col-md-6 mt-4">
              <Link id="link" to="/properties-single">
                <img src="assets/images/g9.jpg" className="img-fluid" alt="" />
              </Link>
              <div className="info-bg">
                <h5>
                  <Link id="link" to="/properties-single">
                    Beachside Villa in ECR
                  </Link>
                </h5>
                <p>Chennai, Tamil Nadu, India</p>
                <ul>
                  <li>
                    <span className="fa fa-bed" /> 5 Beds
                  </li>
                  <li>
                    <span className="fa fa-bath" /> 4 Baths
                  </li>
                  <li>
                    <span className="fa fa-share-square-o" /> 2500 sq ft
                  </li>
                </ul>
              </div>
            </div>
            <div className="grids4-info col-lg-4 col-md-6 mt-4">
              <Link id="link" to="/properties-single">
                <img src="assets/images/g8.jpg" className="img-fluid" alt="" />
              </Link>
              <div className="info-bg">
                <h5>
                  <Link id="link" to="/properties-single">
                    Heritage Home in Salt Lake
                  </Link>
                </h5>
                <p>Kolkata, West Bengal, India</p>
                <ul>
                  <li>
                    <span className="fa fa-bed" /> 3 Beds
                  </li>
                  <li>
                    <span className="fa fa-bath" /> 2 Baths
                  </li>
                  <li>
                    <span className="fa fa-share-square-o" /> 1900 sq ft
                  </li>
                </ul>
              </div>
            </div>
            <div className="grids4-info col-lg-4 col-md-6 mt-4">
              <Link id="link" to="/properties-single">
                <img src="assets/images/g7.jpg" className="img-fluid" alt="" />
              </Link>
              <div className="info-bg">
                <h5>
                  <Link id="link" to="/properties-single">
                    Premium Bungalow in Jubilee Hills
                  </Link>
                </h5>
                <p>Hyderabad, Telangana, India</p>
                <ul>
                  <li>
                    <span className="fa fa-bed" /> 6 Beds
                  </li>
                  <li>
                    <span className="fa fa-bath" /> 5 Baths
                  </li>
                  <li>
                    <span className="fa fa-share-square-o" /> 3000 sq ft
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactUs = () => {
  return (
    <>
      <section className="w3l-customers-7">
        <div className="customers_sur py-5">
          <div className="container py-md-3">
            <div className="customers-top_sur row">
              <div className="customers-left_sur col-lg-6">
                <h4>Find Your Perfect Rental Home with Ease</h4>
                <p>
                  We specialize in connecting tenants with the best rental
                  properties available. Whether you're looking for an apartment,
                  a house, or a commercial space, we make the process simple and
                  hassle-free.
                </p>
                <Link
                  id="link"
                  to="/contact"
                  className="btn btn-secondary btn-theme1 mt-4"
                >
                  Contact Us
                </Link>
              </div>
              <div className="customers-middle_sur col-lg-6 mt-lg-0 mt-4">
                <div className="customers_grid">
                  <p className="sub-test">
                    Our team ensures that you find a rental property that fits
                    your needs and budget. With a wide range of listings, secure
                    transactions, and personalized assistance, we make renting
                    stress-free.
                  </p>
                  <p>
                    Contact us today to explore available properties and find
                    your ideal home or commercial space!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Testimonials = () => {
  return (
    <>
      <section className="w3l-customers-8" id="testimonials">
        <div className="customers_sur py-5">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head">Happy Clients</h3>
              <p className="my-3 head">
                Our clients love us! Here's what they have to say about our
                services.
              </p>
            </div>
            <div className="customers-top_sur row mt-5 pt-3">
              <div className="customers-left_sur col-md-6">
                <div className="customers_grid">
                  <ul className="mb-3 d-flex justify-content-center gap-5 align-items-center">
                    <li className="rated">
                      <span className="fa fa-star" />
                    </li>
                    <li className="rated">
                      <span className="fa fa-star" />
                    </li>
                    <li className="rated">
                      <span className="fa fa-star" />
                    </li>
                    <li className="rated">
                      <span className="fa fa-star" />
                    </li>
                    <li className="rated">
                      <span className="fa fa-star" />
                    </li>
                  </ul>
                  <p className="sub-test">
                    The team was incredibly professional and helped me find the
                    perfect property. Highly recommend!
                  </p>
                  <div className="customers-bottom_sur row">
                    <div className="custo-img-res col-3">
                      <img
                        src="assets/images/te2.jpg"
                        alt=" "
                        className="img-responsive rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="custo_grid col-9">
                      <h5>Rajesh Sharma</h5>
                      <span>Landlord</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="customers-middle_sur col-md-6 mt-md-0 mt-4">
                <div className="customers_grid">
                  <ul className="mb-3 d-flex justify-content-center gap-5 align-items-center">
                    <li className="rated">
                      <span className="fa fa-star" />
                    </li>
                    <li className="rated">
                      <span className="fa fa-star" />
                    </li>
                    <li className="rated">
                      <span className="fa fa-star" />
                    </li>
                    <li className="rated">
                      <span className="fa fa-star" />
                    </li>
                    <li className="rated">
                      <span className="fa fa-star" />
                    </li>
                  </ul>
                  <p className="sub-test">
                    Excellent service and great communication throughout the
                    process. Couldn't be happier!
                  </p>
                  <div className="customers-bottom_sur row">
                    <div className="custo-img-res col-3">
                      <img
                        src="assets/images/te3.jpg"
                        alt=" "
                        className="img-responsive rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="custo_grid col-9">
                      <h5>Priya Patel</h5>
                      <span>Client</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
