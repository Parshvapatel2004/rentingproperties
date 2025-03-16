import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { useNavigate } from "react-router-dom";

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
    name: "Jay Patel",
    email: "jaypatel@gmail.com",
    phone: "+1 234 567 890",
    bio: "Real Estate Investor & Property Owner | 5+ Years in Rental Business",
    profilePic: "/assets/images/te1.jpg",
  });

  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury Apartment in Mumbai",
      rent: "₹50,000/month",
      location: "Mumbai, Maharashtra",
      bedrooms: 3,
      bathrooms: 2,
      description:
        "A spacious luxury apartment with modern amenities and city views.",
      status: "Rented",
      image: "assets/images/g11.jpg",
    },
    {
      id: 2,
      title: "Cozy 2BHK in Bangalore",
      rent: "₹35,000/month",
      location: "Bangalore, Karnataka",
      bedrooms: 2,
      bathrooms: 1,
      description:
        "A comfortable 2BHK with easy access to public transport and shopping malls.",
      status: "Available",
      image: "assets/images/g10.jpg",
    },
    {
      id: 3,
      title: "Modern Studio in Delhi",
      rent: "₹40,000/month",
      location: "Delhi",
      bedrooms: 1,
      bathrooms: 1,
      description:
        "A modern studio apartment in the heart of the city with excellent connectivity.",
      status: "Available",
      image: "assets/images/g12.jpg",
    },
  ]);

  const navigate = useNavigate();

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

  // Handle property delete
  const handleDeleteProperty = (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      const updatedProperties = properties.filter(
        (property) => property.id !== id
      );
      setProperties(updatedProperties);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    alert("You have been logged out!");
    navigate("/login"); // Redirect to login page
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
            <div className="d-flex justify-content-center align-items-center">
              <button
                className="btn btn-primary mb-4"
                onClick={() => setIsEditingProfile(true)}
              >
                Edit Profile
              </button>
              {/* Logout Button */}
              <button
                className="btn btn-danger mb-4 ms-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
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
                        className="btn btn-primary me-2"
                        onClick={() => setIsEditingProperty(property.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteProperty(property.id)}
                      >
                        Delete
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
