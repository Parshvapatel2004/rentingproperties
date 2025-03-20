import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const propertiesData = [
  {
    image: "assets/images/g7.jpg",
    location: "Bodakdev, Ahmedabad, Gujarat",
    beds: 4,
    baths: 3,
    size: "1800",
  },
  {
    image: "assets/images/g8.jpg",
    location: "Jubilee Hills, Hyderabad, Telangana",
    beds: 3,
    baths: 2,
    size: "1500",
  },
  {
    image: "assets/images/g9.jpg",
    location: "Koramangala, Bangalore, Karnataka",
    beds: 4,
    baths: 3,
    size: "2000",
  },
  {
    image: "assets/images/g10.jpg",
    location: "Salt Lake, Kolkata, West Bengal",
    beds: 5,
    baths: 3,
    size: "2500",
  },
  {
    image: "assets/images/g11.jpg",
    location: "Viman Nagar, Pune, Maharashtra",
    beds: 2,
    baths: 1,
    size: "1300",
  },
  {
    image: "assets/images/g12.jpg",
    location: "Civil Lines, Jaipur, Rajasthan",
    beds: 4,
    baths: 3,
    size: "2200 ",
  },
];

const Properties = () => {
  return (
    <div>
      <Header />
      <Banner title={"Our Properties"} pageName={"properties"} />
      <Main />
      <Footer />
    </div>
  );
};

const Main = () => {
  return (
    <section
      className="grids-3 m-auto"
      id="properties"
      style={{ width: "75%" }}
    >
      <div id="grids3-block" className="py-5">
        <div className="container py-md-3">
          <div className="row">
            {propertiesData.map((property, index) => (
              <div className="grids3-info col-lg-4 col-md-6 mt-5" key={index}>
                <Link id="link" to="/properties_single">
                  <img
                    src={property.image}
                    className="img-fluid"
                    alt={property.location}
                  />
                </Link>
                <p>Rent</p>
                <div className="info-bg">
                  <h5>
                    <Link id="link" to="/properties_single">
                      {property.location}
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <span className="fa fa-bed"></span> {property.beds} Beds
                    </li>
                    <li>
                      <span className="fa fa-bath"></span> {property.baths}{" "}
                      Baths
                    </li>
                    <li>
                      <span className="fa fa-share-square-o"></span>{" "}
                      {property.size} sq ft
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

export default Properties;
