import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../sessions/authContext'; // Import the hook

const UserPage = () => {
    const { currentUser } = useAuth(); // Access the current user from the context
    const [orders, setOrders] = useState([]);

  //  useEffect(() => {
    //    const fetchOrders = async () => {
      //      try {
        //        if (currentUser) {
          //          const response = await axios.get(`/api/orders?userId=${currentUser.id}`);
            //        setOrders(response.data);
              //  }
       //     } catch (error) {
         //       console.error("Failed to fetch orders:", error.message);
          //  }
       // };

       // fetchOrders();
 //   }, [currentUser]);

    return (
        <div>
            <section className="container mt-4">
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
                        <ul className="list-group">
                            {orders.map((order) => (
                                <li key={order.id} className="list-group-item">
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
