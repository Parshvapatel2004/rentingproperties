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
  const propertySlides = [
    {
      location: "Mumbai, India",
      title: "Luxury Apartments in Bandra",
      beds: 3,
      baths: 2,
      size: "1500",
    },
    {
      location: "Bangalore, India",
      title: "Spacious Villas in Whitefield",
      beds: 4,
      baths: 3,
      size: "2000",
    },
    {
      location: "Delhi, India",
      title: "Modern Flats in Connaught Place",
      beds: 2,
      baths: 2,
      size: "1200",
    },
    {
      location: "Chennai, India",
      title: "Beachside Villas in ECR",
      beds: 5,
      baths: 4,
      size: "2500",
    },
    {
      location: "Kolkata, India",
      title: "Heritage Homes in Salt Lake",
      beds: 3,
      baths: 2,
      size: "1800",
    },
  ];
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
            {propertySlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <li>
                    <div
                      className={`slider-info banner-view banner-top${index} bg bg2`}
                    >
                      <div className="banner-info">
                        <div className="container">
                          <div className="banner-info-bg">
                            <h6>
                              <span className="fa fa-map-marker" />
                              {slide.location}
                            </h6>
                            <h5>{slide.title}</h5>
                            <ul className="banner-ul">
                              <li>
                                <span className="fa fa-bed" />
                                {slide.beds}
                              </li>
                              <li>
                                <span className="fa fa-bath" /> {slide.baths}
                              </li>
                              <li>
                                <span className="fa fa-share-square-o" />{" "}
                                {slide.size}
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
            ))}
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
  const properties = [
    {
      title: "Luxury Apartment in Bandra",
      location: "Mumbai, Maharashtra, India",
      beds: 4,
      baths: 3,
      area: "1800 sq ft",
      image: "assets/images/g12.jpg",
      link: "/properties_single",
    },
    {
      title: "Spacious Villa in Whitefield",
      location: "Bangalore, Karnataka, India",
      beds: 3,
      baths: 2,
      area: "2200 sq ft",
      image: "assets/images/g11.jpg",
      link: "/properties_single",
    },
    {
      title: "Modern Flat in Connaught Place",
      location: "Delhi, India",
      beds: 2,
      baths: 2,
      area: "1400 sq ft",
      image: "assets/images/g10.jpg",
      link: "/properties-single",
    },
    {
      title: "Beachside Villa in ECR",
      location: "Chennai, Tamil Nadu, India",
      beds: 5,
      baths: 4,
      area: "2500 sq ft",
      image: "assets/images/g9.jpg",
      link: "/properties-single",
    },
    {
      title: "Heritage Home in Salt Lake",
      location: "Kolkata, West Bengal, India",
      beds: 3,
      baths: 2,
      area: "1900 sq ft",
      image: "assets/images/g8.jpg",
      link: "/properties-single",
    },
    {
      title: "Premium Bungalow in Jubilee Hills",
      location: "Hyderabad, Telangana, India",
      beds: 6,
      baths: 5,
      area: "3000 sq ft",
      image: "assets/images/g7.jpg",
      link: "/properties-single",
    },
  ];
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
            {properties.map((property, index) => (
              <div
                key={index}
                className="grids4-info col-lg-4 col-md-6 mt-md-0 mt-4"
              >
                <Link id="link" to={property.link}>
                  <img
                    src={property.image}
                    className="img-fluid"
                    alt={property.title}
                  />
                </Link>
                <div className="info-bg">
                  <h5>
                    <Link id="link" to={property.link}>
                      {property.title}
                    </Link>
                  </h5>
                  <p>{property.location}</p>
                  <ul>
                    <li>
                      <span className="fa fa-bed" /> {property.beds} Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> {property.baths} Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> {property.area}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
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
