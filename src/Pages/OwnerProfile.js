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
  const [selectedFile, setSelectedFile] = useState(null);

  const [user, setUser] = useState({
    name: "Jay Patel",
    email: "jaypatel@gmail.com",
    phone: "+1 234 567 890",
    bio: "Real Estate Investor & Property Owner | 5+ Years in Rental Business",
    profilePic: "/assets/images/te1.jpg",
    identityType: "",
    identityId: "",
  });

  const navigate = useNavigate();

  const handleProfileChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    setIsEditingProfile(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, profilePic: imageUrl });
      setSelectedFile(file);
    }
  };

  return (
    <div
      className="container-fluid bg-light vh-100 d-flex justify-content-center align-items-center"
      style={{ marginTop: "50px", marginBottom: "200px" }}
    >
      <div className="card shadow-lg p-4 text-center w-75">
        <div className="position-relative d-inline-block">
          <img
            src={user.profilePic}
            alt="Profile"
            className="rounded-circle mb-3"
            width="120"
            height="120"
          />
          <label
            className="position-absolute translate-middle-x  p-1 m-1 rounded-circle"
            style={{ cursor: "pointer", bottom: "5%", right: "42%" }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              style={{ display: "none" }}
            />
            <i className="fa fa-edit" />
          </label>
        </div>

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

            <h4 className="mt-4">Identity Verification</h4>
            <div className="form-group">
              <label>Identity Type:</label>
              <select
                name="identityType"
                value={user.identityType}
                onChange={handleProfileChange}
                className="form-control"
                required
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
                value={user.identityId}
                placeholder="Enter ID number"
                onChange={handleProfileChange}
                className="form-control"
                required
              />
            </div>

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
            {/* {user.identityType && user.identityId && ( */}
            <div className="mb-3 d-flex justify-content-center align-content-center gap-3">
              <p>
                <strong>Identity Type:</strong>{" "}
                {!user.identityType ? "No data" : user.identityType}
              </p>
              <p>
                <strong>Identity ID:</strong>{" "}
                {!user.identityId ? "No data" : user.identityId}
              </p>
            </div>
            {/* )} */}
            <div className="d-flex justify-content-center gap-2 align-items-center">
              <button
                className="btn btn-primary mb-4"
                onClick={() => setIsEditingProfile(true)}
              >
                Edit Profile
              </button>
              <button
                className="btn btn-danger mb-4 ms-2"
                onClick={() => navigate("/login")}
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
