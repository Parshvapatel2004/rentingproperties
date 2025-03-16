import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const ManageRequest = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

function Main() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      property: "3BHK Apartment, Mumbai",
      type: "Visit Request",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya Verma",
      property: "Villa, Bangalore",
      type: "Price Negotiation",
      status: "Approved",
    },
    {
      id: 3,
      name: "Amit Patel",
      property: "Office Space, Ahmedabad",
      type: "Legal Document Request",
      status: "Pending",
    },
    {
      id: 4,
      name: "Sanjay Rao",
      property: "Shop, Hyderabad",
      type: "Property Inquiry",
      status: "Rejected",
    },
    {
      id: 5,
      name: "Ananya Gupta",
      property: "2BHK Flat, Kolkata",
      type: "Maintenance Request",
      status: "Pending",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  return (
    <div
      className="container mt-5"
      style={{ minHeight: "90vh", marginBottom: "70px" }}
    >
      <h2 className="text-center mb-4">Manage Property Requests</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Property</th>
              <th>Request Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No requests found.
                </td>
              </tr>
            ) : (
              requests.map((request, index) => (
                <tr key={request.id}>
                  <td>{index + 1}</td>
                  <td>{request.name}</td>
                  <td>{request.property}</td>
                  <td>
                    <span className="badge badge-info">{request.type}</span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        request.status === "Approved"
                          ? "badge-success"
                          : request.status === "Rejected"
                          ? "badge-danger"
                          : "badge-warning"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td>
                    {request.status === "Pending" && (
                      <>
                        <button
                          className="btn btn-success btn-sm me-2"
                          onClick={() =>
                            handleStatusChange(request.id, "Approved")
                          }
                        >
                          Approve
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            handleStatusChange(request.id, "Rejected")
                          }
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {request.status !== "Pending" && (
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

export default ManageRequest;
