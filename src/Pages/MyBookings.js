import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const MyBookings = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

function Main() {
  // Simulating the logged-in user (In real-world, fetch from authentication)
  const loggedInUserId = "USR101"; // This ID should be dynamically fetched for each user

  const [bookings, setBookings] = useState([
    {
      bookingId: "BKG001",
      userId: "USR101", // Only bookings matching this ID will be displayed
      ownerId: "OWN123",
      propertyId: "PRP001",
      property: "3BHK Apartment, Mumbai",
      startDate: "2024-04-15",
      endDate: "2024-04-20",
      status: "Pending",
    },
    {
      bookingId: "BKG002",
      userId: "USR101",
      ownerId: "OWN124",
      propertyId: "PRP002",
      property: "Villa, Bangalore",
      startDate: "2024-04-18",
      endDate: "2024-04-25",
      status: "Confirmed",
    },
    {
      bookingId: "BKG003",
      userId: "USR101",
      ownerId: "OWN125",
      propertyId: "PRP003",
      property: "Office Space, Ahmedabad",
      startDate: "2024-04-20",
      endDate: "2024-04-28",
      status: "Pending",
    },
    {
      bookingId: "BKG004",
      userId: "USR102",
      ownerId: "OWN126",
      propertyId: "PRP004",
      property: "Shop, Hyderabad",
      startDate: "2024-04-22",
      endDate: "2024-04-30",
      status: "Canceled",
    },
  ]);

  // Filter bookings for the logged-in user
  const userBookings = bookings.filter(
    (booking) => booking.userId === loggedInUserId
  );

  const handleCancelBooking = (bookingId) => {
    setBookings(
      bookings.map((booking) =>
        booking.bookingId === bookingId
          ? { ...booking, status: "Canceled" }
          : booking
      )
    );
  };

  return (
    <div
      className="container mt-5"
      style={{ minHeight: "90vh", marginBottom: "70px" }}
    >
      <h2 className="text-center mb-4">My Bookings</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Booking ID</th>
              <th>Property</th>
              <th>Owner ID</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userBookings.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center">
                  No bookings found.
                </td>
              </tr>
            ) : (
              userBookings.map((booking, index) => (
                <tr key={booking.bookingId}>
                  <td>{index + 1}</td>
                  <td>{booking.bookingId}</td>
                  <td>{booking.property}</td>
                  <td>{booking.ownerId}</td>
                  <td>{booking.startDate}</td>
                  <td>{booking.endDate}</td>
                  <td>
                    <span
                      className={`badge ${
                        booking.status === "Confirmed"
                          ? "badge-success"
                          : booking.status === "Canceled"
                          ? "badge-danger"
                          : "badge-warning"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    {booking.status === "Pending" ? (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleCancelBooking(booking.bookingId)}
                      >
                        Cancel
                      </button>
                    ) : (
                      <span className="text-muted">Action Taken</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBookings;
