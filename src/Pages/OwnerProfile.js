import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const Profile = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

function Main() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingProperty, setIsEditingProperty] = useState(null);

  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    bio: "Real Estate Investor & Property Owner | 5+ Years in Rental Business",
    profilePic: "https://www.w3schools.com/howto/img_avatar.png",
  });

  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury Apartment in New York",
      rent: "$2000/month",
      location: "New York, NY",
      bedrooms: 3,
      bathrooms: 2,
      description:
        "A spacious luxury apartment with modern amenities and city views.",
      status: "Rented",
      image: "assets/images/g11.jpg",
    },
    {
      id: 2,
      title: "Cozy 2BHK in Los Angeles",
      rent: "$1500/month",
      location: "Los Angeles, CA",
      bedrooms: 2,
      bathrooms: 1,
      description:
        "A comfortable 2BHK with easy access to public transport and shopping malls.",
      status: "Available",
      image: "assets/images/g10.jpg",
    },
    {
      id: 3,
      title: "Modern Studio in San Francisco",
      rent: "$1800/month",
      location: "San Francisco, CA",
      bedrooms: 1,
      bathrooms: 1,
      description:
        "A modern studio apartment in the heart of the city with excellent connectivity.",
      status: "Available",
      image: "assets/images/g12.jpg",
    },
  ]);

  // Handle profile input change
  const handleProfileChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle profile save
  const handleProfileSave = (e) => {
    e.preventDefault();
    setIsEditingProfile(false);
  };

  // Handle property input change
  const handlePropertyChange = (id, e) => {
    const updatedProperties = properties.map((property) =>
      property.id === id
        ? { ...property, [e.target.name]: e.target.value }
        : property
    );
    setProperties(updatedProperties);
  };

  // Handle property save
  const handlePropertySave = (id) => {
    setIsEditingProperty(null);
  };

  return (
    <div
      className="container-fluid bg-light vh-100 d-flex justify-content-center align-items-center"
      style={{ marginTop: "150px", marginBottom: "200px" }}
    >
      <div className="card shadow-lg p-4 text-center w-75">
        {/* Profile Section */}
        <img
          src={user.profilePic}
          alt="Profile"
          className="rounded-circle mb-3 m-auto"
          width="120"
        />

        {isEditingProfile ? (
          <form onSubmit={handleProfileSave}>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleProfileChange}
              className="form-control mb-2"
              required
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleProfileChange}
              className="form-control mb-2"
              required
            />
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleProfileChange}
              className="form-control mb-2"
              required
            />
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleProfileChange}
              className="form-control mb-2"
              rows="3"
            ></textarea>
            <button type="submit" className="btn btn-success me-2">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsEditingProfile(false)}
            >
              Cancel
            </button>
          </form>
        ) : (
          <>
            <h3 className="card-title">{user.name}</h3>
            <p className="text-muted">
              {user.email} | {user.phone}
            </p>
            <p className="card-text">{user.bio}</p>
            <button
              className="btn btn-primary mb-4"
              onClick={() => setIsEditingProfile(true)}
            >
              Edit Profile
            </button>
          </>
        )}

        {/* Property Listings Section */}
        <h4 className="mb-3">Properties Listed</h4>
        <div className="row">
          {properties.map((property) => (
            <div key={property.id} className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <img
                  src={property.image}
                  alt={property.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  {isEditingProperty === property.id ? (
                    <>
                      <input
                        type="text"
                        name="title"
                        value={property.title}
                        onChange={(e) => handlePropertyChange(property.id, e)}
                        className="form-control mb-2"
                        required
                      />
                      <input
                        type="text"
                        name="rent"
                        value={property.rent}
                        onChange={(e) => handlePropertyChange(property.id, e)}
                        className="form-control mb-2"
                        required
                      />
                      <input
                        type="text"
                        name="location"
                        value={property.location}
                        onChange={(e) => handlePropertyChange(property.id, e)}
                        className="form-control mb-2"
                        required
                      />
                      <input
                        type="number"
                        name="bedrooms"
                        value={property.bedrooms}
                        onChange={(e) => handlePropertyChange(property.id, e)}
                        className="form-control mb-2"
                        required
                      />
                      <input
                        type="number"
                        name="bathrooms"
                        value={property.bathrooms}
                        onChange={(e) => handlePropertyChange(property.id, e)}
                        className="form-control mb-2"
                        required
                      />
                      <textarea
                        name="description"
                        value={property.description}
                        onChange={(e) => handlePropertyChange(property.id, e)}
                        className="form-control mb-2"
                        rows="2"
                        required
                      ></textarea>
                      <button
                        className="btn btn-success me-2"
                        onClick={() => handlePropertySave(property.id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => setIsEditingProperty(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <h5 className="card-title">{property.title}</h5>
                      <p className="text-muted">{property.location}</p>
                      <p>
                        <strong>Rent:</strong> {property.rent}
                      </p>
                      <p>
                        <strong>Bedrooms:</strong> {property.bedrooms} |{" "}
                        <strong>Bathrooms:</strong> {property.bathrooms}
                      </p>
                      <p className="card-text">{property.description}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => setIsEditingProperty(property.id)}
                      >
                        Edit Property
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
