import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import { Link } from "react-router-dom";

const properties = [
  {
    image: "assets/images/g12.jpg",
    title: "Luxury Apartment in Bandra",
    location: "Mumbai, Maharashtra, India",
    beds: 4,
    baths: 3,
    size: "1800 sq ft",
  },
  {
    image: "assets/images/g11.jpg",
    title: "Spacious Villa in Whitefield",
    location: "Bangalore, Karnataka, India",
    beds: 3,
    baths: 2,
    size: "2200 sq ft",
  },
  {
    image: "assets/images/g10.jpg",
    title: "Modern Flat in Connaught Place",
    location: "Delhi, India",
    beds: 2,
    baths: 2,
    size: "1400 sq ft",
  },
  {
    image: "assets/images/g9.jpg",
    title: "Beachside Villa in ECR",
    location: "Chennai, Tamil Nadu, India",
    beds: 5,
    baths: 4,
    size: "2500 sq ft",
  },
  {
    image: "assets/images/g8.jpg",
    title: "Heritage Home in Salt Lake",
    location: "Kolkata, West Bengal, India",
    beds: 3,
    baths: 2,
    size: "1900 sq ft",
  },
  {
    image: "assets/images/g7.jpg",
    title: "Premium Bungalow in Jubilee Hills",
    location: "Hyderabad, Telangana, India",
    beds: 6,
    baths: 5,
    size: "3000 sq ft",
  },
];

const SearchResults = () => {
  return (
    <div>
      <Header />
      <Banner title={"Search Results"} pageName={"search-results"} />
      <Main />
      <Footer />
    </div>
  );
};

const Main = () => {
  return (
    <section className="grids-2 m-auto" style={{ width: "75%" }}>
      <div id="grids4-block" className="py-5">
        <div className="container py-md-3">
          <div className="row mt-5 pt-3">
            {properties.map((property, index) => (
              <div className="grids4-info col-lg-4 col-md-6 mt-4" key={index}>
                <Link id="link" to="/properties-single">
                  <img
                    src={property.image}
                    className="img-fluid rounded shadow-sm"
                    alt={property.title}
                  />
                </Link>
                <div className="info-bg p-3">
                  <h5>
                    <Link id="link" to="/properties-single">
                      {property.title}
                    </Link>
                  </h5>
                  <p>{property.location}</p>
                  <ul className="list-unstyled d-flex gap-2 flex-wrap">
                    <li>
                      <span className="fa fa-bed" /> {property.beds} Beds
                    </li>
                    <li>
                      <span className="fa fa-bath" /> {property.baths} Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o" /> {property.size}
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

export default SearchResults;
