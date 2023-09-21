import React, { useState, useEffect } from 'react';
import { useAuth } from '../../UserAuth/authContext';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../api/ordersApi';
const CheckoutPage = () => {

    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    console.log(currentUser)
    // Local state for recipient details
    const [recipientName, setRecipientName] = useState(currentUser?.user.UserName || '');
    const [recipientAddress, setRecipientAddress] = useState(currentUser?.user.Address || '');

    // Edit mode state
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart);
    }, []);

    // Compute the totals based on cart data
    const subtotal = cart.reduce((acc, cartItem) => acc + (cartItem.Price * cartItem.quantity), 0);
    const tax = subtotal * 0.10; 
    const shipping = subtotal * 0.05;
    const grandTotal = subtotal + tax + shipping;

    const handleReturnToCart = () => {
        navigate('/cart');  // Navigate back to cart
    };
    const handleCheckout = async () => {
      // Prepare the order data
      const cartItems = cart.map(item => ({
        ProductID: item.ProductID,
        quantity: item.quantity
    }));
    
    const orderData = {
      userId: currentUser?.user?.UserID,  // Access the user's ID here
      recipientName: recipientName,
      address: recipientAddress,
      date: new Date().toLocaleDateString('en-CA'),
      total: grandTotal,
      cartItems: cartItems  
  };
  
      console.log(orderData)
      try {
          // Call the API to create the order
          await createOrder(orderData);
  
          // Clear the cart from local storage
          localStorage.removeItem('cart');
  
          // Navigate the user to their user page (assuming it's at '/user')
          navigate('/user');
      } catch (error) {
          console.error('Error processing checkout:', error.message);
          alert('There was an error processing your order. Please try again later.');
      }
  };
  
  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh', padding: '2rem' }}>
        <h2>Checkout</h2>

        <section style={{ marginBottom: '2rem', border: '1px solid #555', borderRadius: '5px', padding: '1rem' }}>
            <h3>Recipient Information</h3>
            {isEditing ? (
                <form>
                    <div style={{ marginBottom: '1rem' }}>
                        <label>
                            Name: 
                            <input 
                                type="text"
                                value={recipientName}
                                onChange={(e) => setRecipientName(e.target.value)}
                                style={{ backgroundColor: '#333', color: 'white', padding: '0.5rem', marginLeft: '1rem', border: '1px solid #555', borderRadius: '5px' }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label>
                            Address: 
                            <textarea 
                                value={recipientAddress}
                                onChange={(e) => setRecipientAddress(e.target.value)}
                                style={{ width: '100%', backgroundColor: '#333', color: 'white', padding: '0.5rem', border: '1px solid #555', borderRadius: '5px' }}
                            />
                        </label>
                    </div>
                    <button onClick={() => setIsEditing(false)} style={{ backgroundColor: '#007BFF', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Save
                    </button>
                </form>
            ) : (
                <div>
                    <p>Name: {recipientName} <button onClick={() => setIsEditing(true)} style={{ backgroundColor: '#007BFF', color: 'white', marginLeft: '1rem', padding: '0.3rem 0.8rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Edit
                    </button></p>
                    <p>Address: {recipientAddress} <button onClick={() => setIsEditing(true)} style={{ backgroundColor: '#007BFF', color: 'white', marginLeft: '1rem', padding: '0.3rem 0.8rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Edit
                    </button></p>
                </div>
            )}
        </section>

        <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <div>Subtotal: ${subtotal.toFixed(2)}</div>
                <div>Tax: ${tax.toFixed(2)}</div>
                <div>Shipping: ${shipping.toFixed(2)}</div>
                <div style={{ fontWeight: 'bold', marginTop: '1rem' }}>Grand Total: ${grandTotal.toFixed(2)}</div>
            </div>
            <div>
                <button onClick={handleReturnToCart} style={{ marginRight: '10px', backgroundColor: '#007BFF', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Return to Cart
                </button>
                <button onClick={handleCheckout} style={{ backgroundColor: '#28a745', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Checkout
                </button>
            </div>
        </section>
    </div>
);
}

export default CheckoutPage;