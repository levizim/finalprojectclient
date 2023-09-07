import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../UserAuth/authContext';

const UserPage = () => {
    const { currentUser } = useAuth();
    const [orders, setOrders] = useState([]);

    // The useEffect is commented out but will retain the same.
    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         try {
    //             if (currentUser) {
    //                 const response = await axios.get(`/api/orders?userId=${currentUser.id}`);
    //                 setOrders(response.data);
    //             }
    //         } catch (error) {
    //             console.error("Failed to fetch orders:", error.message);
    //         }
    //     };

    //     fetchOrders();
    // }, [currentUser]);

    return (
        <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
            <section className="container ">
                <div className="row">
                    {/* User Info */}
                    <div className="col-md-4">
                        <h2>User Info</h2>
                        <p>Name: {currentUser?.UserName}</p>
                        <p>Email: {currentUser?.Email}</p>
                        <p>Address: {currentUser?.Address}</p>
                        <Link to="/edituser" className="btn btn-primary">
                            Edit Profile
                        </Link>
                    </div>

                    {/* Order History */}
                    <div className="col-md-4">
                        <h2>Order History</h2>
                        <ul className="list-group bg-dark text-white">
                            {orders.map((order) => (
                                <li key={order.id} className="list-group-item bg-dark text-white">
                                    Order #{order.id} - Date: {order.dateOrdered} - Total: ${order.total}
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
