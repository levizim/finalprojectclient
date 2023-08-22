import React from 'react';
import Image from 'react-bootstrap/Image';
import checkout from './images/checkout.png'; 

function CheckoutPage() {
  return (
    <div>
      <Image src={checkout} fluid />
      <h1>Checkout Page</h1>
    </div>
  );
}

export default CheckoutPage;
