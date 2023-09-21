import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../UserAuth/authContext';
import { getAllOrdersForUser } from '../../api/ordersApi';
const UserPage = () => {
    const { currentUser } = useAuth();
    const [orders, setOrders] = useState([]);
    console.log("UserPage -> Current User:", currentUser);

    useEffect(() => {
        // Check if the user is logged in
        if (currentUser?.user?.UserID) {
            // Fetch orders for the current user
            const fetchOrders = async () => {
                try {
                    const userOrders = await getAllOrdersForUser(currentUser.user.UserID); 
                    setOrders(userOrders);
                } catch (error) {
                    console.error("Error fetching orders:", error);
                }
            };
            fetchOrders();
        }
    }, [currentUser]); 

    return ( 
        <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
            <section className="container ">
                <div className="row">
                    {/* User Info */}
                    <div className="col-md-4">
                        <h2>User Info</h2>
                        <p>Name: {currentUser?.user.UserName}</p>
                        <p>Email: {currentUser?.user.Email}</p>
                        <p>Address: {currentUser?.user.Address}</p>
                        <Link to="/edituser" className="btn btn-primary">
                            Edit Profile
                        </Link>
                    </div>

                    {/* Order History */}
            <div className="col-md-4">
                <h2>Order History</h2>
                <ul className="list-group bg-dark text-white">
                    {orders.map((order) => (
                        <li key={order.OrderID} className="list-group-item bg-dark text-white">
                            Order #{order.OrderID} - Date:  {new Date(order.Date).toLocaleDateString()} - Total: ${order.Total}
                            <br />
                            <Link to={`/leavereview/${order.OrderID}`}>Leave Review</Link>
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
                                <input type="text" className="form-control bg-dark text-white" placeholder="Type your message..." />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-light">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default UserPage;
