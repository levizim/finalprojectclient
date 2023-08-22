import React from 'react';
import Image from 'react-bootstrap/Image';
import cartPage from './images/cartPage.png';  // adjust this path as needed

function CartPage() {
  return (
    <div>
      <Image src={cartPage} fluid />
      <h1>Cart Page</h1>
    </div>
  );
}

export default CartPage;
