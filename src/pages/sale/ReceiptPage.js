import React from 'react';
import Image from 'react-bootstrap/Image';
import receipt from '../images/receipt.png'; 

function ReceiptPage() {
  return (
    <div>
      <Image src={receipt} fluid />
      <h1>Receipt Page</h1>
    </div>
  );
}

export default ReceiptPage;
