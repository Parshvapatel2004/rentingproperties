import React, { useState, useEffect, useRef } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

function Main() {
  const navigate = useNavigate();

  const formRef = useRef(null); // Reference for smooth scrolling
  const [formData, setFormData] = useState({
    bookingDate: new Date().toISOString().split("T")[0], // Auto-fill today's date
    startDate: "",
    endDate: "",
    propertyId: "",
    ownerId: "",
  });

  const [properties, setProperties] = useState([]); // Property list
  const [owners, setOwners] = useState([]); // Owner list
  const [error, setError] = useState("");

  // Fetch Properties & Owners from API (Simulated)
  useEffect(() => {
    // Simulating an API call to get properties
    setProperties([
      { id: "prop1", name: "Luxury Villa" },
      { id: "prop2", name: "Beach House" },
      { id: "prop3", name: "Mountain Cabin" },
    ]);

    // Simulating an API call to get owners
    setOwners([
      { id: "owner1", name: "John Doe" },
      { id: "owner2", name: "Alice Smith" },
    ]);
  }, []);

  // Handles form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Scroll to Form
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle Booking Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");

    // Validate input fields
    if (
      !formData.startDate ||
      !formData.endDate ||
      !formData.propertyId ||
      !formData.ownerId
    ) {
      setError("Please fill all required fields.");
      return;
    }

    // Ensure startDate is before endDate
    if (new Date(formData.startDate) >= new Date(formData.endDate)) {
      setError("End Date must be after Start Date.");
      return;
    }

    setError(""); // Clear previous errors

    // Simulated API call
    console.log("Booking Data Submitted:", formData);
    alert("Booking Confirmed!");
  };

  return (
    <div className="container my-5">
      <div className="text-center">
        <h1>Book a Property</h1>
        <p>Find and book your ideal property today.</p>
        <button className="btn btn-primary btn-lg" onClick={scrollToForm}>
          Book Now
        </button>
      </div>

      {/* Booking Form */}
      <div
        ref={formRef}
        className="booking-form mt-5 p-4 border rounded shadow"
      >
        <h2>Booking Details</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Booking Date (Auto-filled) */}
          <div className="mb-3">
            <label className="form-label">Booking Date</label>
            <input
              type="date"
              name="bookingDate"
              className="form-control"
              value={formData.bookingDate}
              readOnly
            />
          </div>

          {/* Start Date */}
          <div className="mb-3">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              name="startDate"
              className="form-control"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* End Date */}
          <div className="mb-3">
            <label className="form-label">End Date</label>
            <input
              type="date"
              name="endDate"
              className="form-control"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Property Selection */}
          <div className="mb-3">
            <label className="form-label">Select Property</label>
            <select
              name="propertyId"
              className="form-control"
              value={formData.propertyId}
              onChange={handleChange}
              required
            >
              <option value="">Choose a Property</option>
              {properties.map((property) => (
                <option key={property.id} value={property.id}>
                  {property.name}
                </option>
              ))}
            </select>
          </div>

          {/* Owner Selection */}
          <div className="mb-3">
            <label className="form-label">Select Owner</label>
            <select
              name="ownerId"
              className="form-control"
              value={formData.ownerId}
              onChange={handleChange}
              required
            >
              <option value="">Choose an Owner</option>
              {owners.map((owner) => (
                <option key={owner.id} value={owner.id}>
                  {owner.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success btn-lg w-100">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
