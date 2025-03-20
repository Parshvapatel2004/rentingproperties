import React, { useRef, useState } from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const propertyDetails = {
  images: [
    "assets/images/bandra1.jpg",
    "assets/images/bandra2.jpg",
    "assets/images/bandra3.jpg",
    "assets/images/bandra4.jpg",
  ],
  title: "Luxurious Property in Bandra, Mumbai",
  description:
    "This stunning property located in the heart of Bandra, Mumbai, offers a luxurious living experience with its spacious 2100 sqft area. The property features 8 rooms, including 5 bedrooms and 2 bathrooms, providing ample space for a large family. The modern design and high-quality finishes make this property a perfect blend of comfort and style.",
  features: [
    "Air Conditioning",
    "Balcony",
    "Front Yard",
    "Pool",
    "Attic",
    "Broadband",
    "Ground",
    "Parking",
    "Dining Space",
    "Back Yard",
  ],
  coreDetails: {
    size: "2100 sqft",
    rooms: 8,
    bedrooms: 5,
    bathrooms: 2,
    garage: 1,
    yearBuilt: 2019,
  },
};

const PropertiesSingle = () => {
  return (
    <div>
      <Header />
      <Banner title={"Property Details"} pageName={"properties_single"} />
      <Main />
      <Footer />
    </div>
  );
};

const Main = () => {
  const [rentForm, setRentForm] = useState(false);
  return (
    <section
      className="w3l-content-with-photo-11 m-auto"
      style={{ width: "75%" }}
    >
      <div className="contentwithphoto-11 py-5">
        <div className="container py-md-3">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="galleryContainer">
                <div className="gallery d-flex justify-content-center flex-wrap">
                  {propertyDetails.images.map((img, index) => (
                    <div key={index} className="large-image p-2">
                      <img
                        src={img}
                        className="img-fluid rounded shadow"
                        style={{
                          width: "100%",
                          maxHeight: "500px",
                          objectFit: "cover",
                        }}
                        alt={`Property Image ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <h3>Description</h3>
              <p>{propertyDetails.description}</p>
              <h3>Challenge & Solutions</h3>
              <p>
                Finding a property that offers both space and modern amenities
                in Mumbai can be challenging. This property ensures easy access
                to essential services while offering luxurious features.
              </p>
            </div>
            <div className="col-md-6">
              <h4>Core Details</h4>
              <ul>
                {Object.entries(propertyDetails.coreDetails).map(
                  ([key, value], index) => (
                    <li key={index}>
                      <span className="title-text">
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </span>
                      <span className="feature-count"> {value}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <h4>More Features</h4>
              <ul className="list-inline">
                {propertyDetails.features.map((feature, index) => (
                  <li
                    key={index}
                    className="list-inline-item m-2 p-2 border rounded shadow-sm bg-light"
                  >
                    <span className="fa fa-check"></span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rent This Property Form */}
          <div className="row mt-5">
            <div className="col-md-12 d-flex justify-content-center gap-3">
              <Link to={"/"} className="btn btn-primary btn-lg">
                Book Now
              </Link>
              <button
                className="btn btn-outline-primary btn-lg"
                onClick={() => {
                  document
                    .querySelector(".rent-form")
                    .scrollIntoView({ behavior: "smooth" });
                  setRentForm(true);
                }}
              >
                Make Inquiry
              </button>
            </div>
          </div>

          {/* Rent This Property Form */}
          <div className="rent-form">{rentForm ? <RentForm /> : null}</div>
        </div>
      </div>
    </section>
  );
};

const RentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Your request has been submitted successfully!");
    setFormData({ name: "", email: "", phone: "", date: "" });
  };

  return (
    <div className="rent-form mt-5 p-4 shadow-sm bg-light">
      <h3>Rent This Property</h3>
      {message && <p className="alert alert-success">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Move-in Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};

export default PropertiesSingle;
