import React from "react";
import { Link } from "react-router-dom";

import Navigation from "./NavBar"; // Adjust the import path accordingly
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const UserPage = () => {
  // Replace this with actual user and order data
  const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };

  const orders = [
    { id: 1, date: "2023-08-15", total: 45.99 },
    { id: 2, date: "2023-08-10", total: 29.99 },
    // Add more orders if needed
  ];

  return (
    <div>
      <Navigation />

      <section className="container mt-4">
        <div className="row">
          {/* User Info */}
          <div className="col-md-4">
            <h2>User Info</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <Link to="/edituser" className="btn btn-primary">
              Edit Profile
            </Link>
          </div>

          {/* Order History */}
          <div className="col-md-4">
            <h2>Order History</h2>
            <ul className="list-group">
              {orders.map((order) => (
                <li key={order.id} className="list-group-item">
                  Order #{order.id} - Date: {order.date} - Total: ${order.total}
                  <br />
                  <Link to={`/leavereview/${order.id}`}>Leave Review</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Admin */}
          <div className="col-md-4">
            <h2>Contact Admin</h2>
            <div>
              {/* Display previous conversation */}
              <div className="mb-2">
                User: Hello, I have a question.
                <br />
                Admin: Sure, feel free to ask.
              </div>
              {/* Input box for new message */}
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Type your message..." />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default UserPage;
