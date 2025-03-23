import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
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
  const [isEditing, setIsEditing] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [user, setUser] = useState({
    name: "Priya Patel",
    email: "priyapatel@gmail.com",
    password: "12345678",
    bio: "Full Stack Developer | React & Node.js Enthusiast",
    profilePic:
      "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain",
  });

  const [newProfilePic, setNewProfilePic] = useState(null);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle profile picture change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePic(URL.createObjectURL(file)); // Preview the image
    }
  };

  // Save changes
  const handleSave = () => {
    setUser({ ...user, profilePic: newProfilePic || user.profilePic });
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Logout Function
  const handleLogout = () => {
    alert("You have been logged out!");
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-5 text-center w-50"
        style={{ borderRadius: "15px" }}
      >
        {/* Profile Image Section */}
        <div className="position-relative d-flex justify-content-center">
          <img
            src={newProfilePic || user.profilePic}
            alt="Profile"
            className="rounded-circle shadow-sm"
            width="140"
            height="140"
            style={{ objectFit: "cover", border: "4px solid #007bff" }}
          />
          {isEditing && (
            <label
              className="position-absolute bottom-0 end-0 bg-white p-2 rounded-circle shadow-lg"
              style={{ cursor: "pointer" }}
            >
              <input
                type="file"
                accept="image/*"
                className="d-none"
                onChange={handleProfilePicChange}
              />
              <i className="fa fa-camera text-primary"></i>
            </label>
          )}
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="alert alert-success mt-3" role="alert">
            Profile updated successfully! ✅
          </div>
        )}

        {isEditing ? (
          // Editable form
          <div className="mt-3">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="form-control mb-3"
              placeholder="Enter name"
              required
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control mb-3"
              placeholder="Enter email"
              required
            />
            <div className="input-group mb-3">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={user.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter password"
                required
              />
              <span
                className="input-group-text bg-light"
                style={{ cursor: "pointer" }}
                onClick={togglePasswordVisibility}
              >
                <i
                  className={`fa ${
                    passwordVisible ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </span>
            </div>
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="form-control mb-3"
              placeholder="Enter bio"
              rows="3"
              required
            ></textarea>
            <button
              className="btn btn-success me-2 shadow-sm w-40"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="btn btn-secondary shadow-sm w-40"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          // Display profile details
          <>
            <h2 className="card-title mt-3">{user.name}</h2>
            <p className="card-text text-muted">{user.email}</p>
            <p className="card-text">{user.bio}</p>
            <div className="d-flex justify-content-center text-center align-items-center">
              <button
                className="btn btn-primary me-3 shadow-sm w-40"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
              <button
                className="btn btn-danger shadow-sm w-40"
                onClick={handleLogout}
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
