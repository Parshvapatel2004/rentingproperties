import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const ManageProperty = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

function Main() {
  const [properties, setProperties] = useState([
    {
      title: "Luxury Apartment",
      description: "Spacious 3BHK apartment with sea view.",
      location: "Mumbai",
      address: "123, Marine Drive",
      zipCode: "400001",
      propertyType: "Residential",
      category: "For Rent",
      size: "1500 sqft",
      price: "₹50,000/month",
      bedrooms: "3",
      bathrooms: "2",
      images: ["assets/images/g12.jpg"],
      propertyIdentityType: "Sale Deed",
      propertyProof: [],
      amenities: ["Swimming Pool", "Gym", "Parking"],
      identityType: "Aadhar Card",
      identityId: "1234-5678-9012",
    },
    {
      title: "Cozy Studio",
      description: "Fully furnished studio apartment in city center.",
      location: "Bangalore",
      address: "45, MG Road",
      zipCode: "560001",
      propertyType: "Commercial",
      category: "For Rent",
      size: "600 sqft",
      price: "₹25,000/month",
      bedrooms: "1",
      bathrooms: "1",
      images: ["assets/images/g11.jpg"],
      propertyIdentityType: "Agreement Copy",
      propertyProof: [],
      amenities: ["Power Backup", "Security"],
      identityType: "PAN Card",
      identityId: "ABCDE1234F",
    },
  ]);

  const handleDelete = (index) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    setProperties(updatedProperties);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Manage Listings</h1>
      <div className="row">
        {properties.length > 0 ? (
          properties.map((property, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <img
                  src={property.images[0]}
                  className="card-img-top"
                  alt={property.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text">{property.description}</p>
                  <ul className="list-unstyled">
                    <li>
                      <strong>Location:</strong> {property.location}
                    </li>
                    <li>
                      <strong>Rent:</strong> {property.price}
                    </li>
                    <li>
                      <strong>Type:</strong> {property.propertyType}
                    </li>
                    <li>
                      <strong>Bedrooms:</strong> {property.bedrooms}
                    </li>
                    <li>
                      <strong>Bathrooms:</strong> {property.bathrooms}
                    </li>
                    <li>
                      <strong>Amenities:</strong>{" "}
                      {property.amenities.join(", ")}
                    </li>
                  </ul>
                  <Link
                    to={`/edit/${index}`}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No properties available</p>
        )}
      </div>
    </div>
  );
}

export default ManageProperty;
