import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const ManagePayments = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

function Main() {
  // Simulating the logged-in owner (In a real-world app, fetch from authentication)
  const loggedInOwnerId = "OWN123"; // Unique owner ID

  const [payments, setPayments] = useState([
    {
      paymentId: "PAY001",
      bookingId: "BKG001",
      userId: "USR101",
      propertyId: "PRP001",
      amount: 50000,
      date: "2024-04-10",
      paymentMethod: "Debit Card",
      transactionId: "TRN004",
      status: "Completed",
    },
    {
      paymentId: "PAY002",
      bookingId: "BKG002",
      userId: "USR102",
      propertyId: "PRP002",
      amount: 75000,
      date: "2024-04-12",
      paymentMethod: "Net Banking",
      transactionId: "TRN003",
      status: "Pending",
    },
    {
      paymentId: "PAY003",
      bookingId: "BKG003",
      userId: "USR103",
      propertyId: "PRP003",
      amount: 30000,
      date: "2024-04-15",
      paymentMethod: "Credit Card",
      transactionId: "TRN001",
      status: "Completed",
    },
    {
      paymentId: "PAY004",
      bookingId: "BKG004",
      userId: "USR104",
      propertyId: "PRP004",
      amount: 20000,
      date: "2024-04-18",
      paymentMethod: "Debit Card",
      transactionId: "TRN002",
      status: "Failed",
    },
  ]);

  return (
    <div
      className="container mt-5"
      style={{ minHeight: "90vh", marginBottom: "70px" }}
    >
      <h2 className="text-center mb-4">Payment Record</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Payment ID</th>
              <th>Booking ID</th>
              <th>User ID</th>
              <th>Property ID</th>
              <th>Amount (₹)</th>
              <th>Payment Date</th>
              <th>Payment Method</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center">
                  No payments found.
                </td>
              </tr>
            ) : (
              payments.map((payment, index) => (
                <tr key={payment.paymentId}>
                  <td>{index + 1}</td>
                  <td>{payment.paymentId}</td>
                  <td>{payment.bookingId}</td>
                  <td>{payment.userId}</td>
                  <td>{payment.propertyId}</td>
                  <td>₹{payment.amount.toLocaleString()}</td>
                  <td>{payment.date}</td>
                  <td>{payment.paymentMethod}</td>
                  <td>{payment.transactionId}</td>
                  <td>
                    <span
                      className={`badge ${
                        payment.status === "Completed"
                          ? "badge-success"
                          : payment.status === "Failed"
                          ? "badge-danger"
                          : "badge-warning"
                      }`}
                    >
                      {payment.status}
                    </span>
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

export default ManagePayments;
