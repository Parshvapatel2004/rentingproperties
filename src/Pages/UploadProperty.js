import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const UploadProperty = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

function Main() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    address: "",
    zipCode: "",
    propertyType: "",
    category: "",
    size: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    images: [],
    propertyIdentityType: "",
    propertyProof: [],
    amenities: [],
    identityType: "",
    identityId: "",
  });

  const amenitiesList = [
    "Air Conditioning",
    "Swimming Pool",
    "Gym",
    "Parking",
    "Balcony",
    "Security",
    "Garden",
    "Power Backup",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handlePropertyProofChange = (e) => {
    setFormData({ ...formData, propertyProof: Array.from(e.target.files) });
  };

  const handleAmenitiesChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      amenities: checked
        ? [...prevData.amenities, value]
        : prevData.amenities.filter((item) => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Upload Property</h2>
      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow bg-white"
      >
        <div className="row">
          {/* Property Details */}
          <div className="col-md-6">
            <div className="form-group">
              <label>Property Title:</label>
              <input
                type="text"
                name="title"
                placeholder="Enter property title"
                required
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group mt-3">
              <label>Description:</label>
              <textarea
                name="description"
                placeholder="Enter property details"
                rows="4"
                required
                onChange={handleChange}
                className="form-control"
              ></textarea>
            </div>

            <div className="form-group mt-3">
              <label>City:</label>
              <input
                type="text"
                name="location"
                placeholder="Enter city"
                required
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group mt-3">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                placeholder="Enter full address"
                required
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group mt-3">
              <label>ZIP Code:</label>
              <input
                type="text"
                name="zipCode"
                placeholder="Enter ZIP Code"
                required
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          {/* Property Specifications */}
          <div className="col-md-6">
            <div className="form-group">
              <label>Property Type:</label>
              <select
                name="propertyType"
                required
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Independent House">Independent House</option>
                <option value="Commercial">Commercial Property</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label>Category:</label>
              <select
                name="category"
                required
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Category</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </select>
            </div>

            <div className="form-group mt-3">
              <label>Size (sq ft):</label>
              <input
                type="number"
                name="size"
                placeholder="Enter size in sqft"
                required
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group mt-3">
              <label>Price (₹):</label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                required
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group mt-3">
              <label>Bedrooms:</label>
              <input
                type="number"
                name="bedrooms"
                placeholder="Enter number of bedrooms"
                required
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group mt-3">
              <label>Bathrooms:</label>
              <input
                type="number"
                name="bathrooms"
                placeholder="Enter number of bathrooms"
                required
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
        </div>

        {/* Upload Images */}
        <div className="form-group mt-3">
          <label>Upload Property Images:</label>
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            required
            onChange={handleFileChange}
            className="form-control"
          />
        </div>

        {/* Property Identity Type */}
        <div className="form-group mt-3">
          <label>Property Identity Type:</label>
          <select
            name="propertyIdentityType"
            required
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Property Proof Type</option>
            <option value="Sale Deed">Sale Deed</option>
            <option value="Property Tax Receipt">Property Tax Receipt</option>
            <option value="Agreement Copy">Agreement Copy</option>
            <option value="Ownership Certificate">Ownership Certificate</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Upload Property Proof */}
        <div className="form-group mt-3">
          <label>Upload Property Proof (Legal Documents):</label>
          <input
            type="file"
            name="propertyProof"
            multiple
            accept=".pdf,.jpg,.png,.docx"
            required
            onChange={handlePropertyProofChange}
            className="form-control"
          />
          <small className="text-muted">
            Accepted files: PDF, JPG, PNG, DOCX
          </small>
        </div>

        {/* Identity Verification */}
        <h4 className="mt-4">Identity Verification</h4>
        <div className="form-group">
          <label>Identity Type:</label>
          <select
            name="identityType"
            required
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select ID Type</option>
            <option value="Aadhaar">Aadhaar</option>
            <option value="PAN">PAN</option>
            <option value="Passport">Passport</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group mt-3">
          <label>Identity ID Number:</label>
          <input
            type="text"
            name="identityId"
            placeholder="Enter ID number"
            required
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary btn-block mt-4">
          Submit Property
        </button>
      </form>
    </div>
  );
}

export default UploadProperty;
