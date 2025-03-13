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
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Full Stack Developer | React & Node.js Enthusiast",
    profilePic:
      "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Save the edited details
  const handleSave = () => {
    setIsEditing(false);
  };

  // Logout Function
  const handleLogout = () => {
    alert("You have been logged out!");
    window.location.href = "/login"; // Redirect to login page (Change as needed)
  };

  return (
    <div
      className="container mt-5"
      style={{ marginBottom: "180px", padding: "100px" }}
    >
      <div
        className="card mx-auto shadow p-4 text-center"
        style={{ maxWidth: "400px" }}
      >
        <img
          src={user.profilePic}
          alt="Profile"
          className="rounded-circle mb-3 m-auto"
          width="120"
        />

        {isEditing ? (
          // Editable form
          <div>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Enter name"
              required
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Enter email"
              required
            />
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Enter bio"
              rows="3"
              required
            ></textarea>
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          // Display profile details
          <>
            <h4 className="card-title">{user.name}</h4>
            <p className="card-text text-muted">{user.email}</p>
            <p className="card-text">{user.bio}</p>
            <div className=" d-flex justify-content-center text-center align-items-center">
              <button
                className="btn btn-primary me-2 "
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
              <button className="btn btn-danger" onClick={handleLogout}>
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
