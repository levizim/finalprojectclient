import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { IMAGES, getDefaultImage } from '../images/products/imageImport';

const CartPage = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart);
    }, []);

    const getImage = (imageName) => {
        return IMAGES[imageName] || getDefaultImage();
    };

    const handleRemoveFromCart = (productId) => {
        const newCart = cart.filter(p => p.ProductID !== productId);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const handleQuantityChange = (productId, event) => {
        const newQuantity = event.target.value;
        const newCart = cart.map(p => {
            if (p.ProductID === productId) {
                return { ...p, quantity: parseInt(newQuantity) };
            }
            return p;
        });
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const subtotal = cart.reduce((sum, item) => sum + (item.Price * item.quantity), 0);

    return (
        <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
            <section className="container py-5">
                <div className="d-flex justify-content-start mb-4">
                    <button className="btn btn-outline-light" onClick={() => navigate('/products')}>
                        ← Continue Shopping
                    </button>
                </div>
                <h2>Your Cart</h2>
                <div className="mt-4">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.ProductID}>
                                    <td><img src={getImage(item.ImageName)} alt={item.ProductName} style={{ width: '50px' }} /></td>
                                    <td>{item.ProductName}</td>
                                    <td>${Number(item.Price).toFixed(2)}</td>
                                    <td>
                                        <select
                                            className="form-control"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.ProductID, e)}
                                        >
                                            {[...Array(20)].map((_, index) => (
                                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>${(Number(item.Price) * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.ProductID)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-end">
                    <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
                </div>
                <div className="d-flex justify-content-end mt-4">
                    <button className="btn btn-success">Checkout</button>
                </div>
            </section>
        </div>
    );
};

export default CartPage;
