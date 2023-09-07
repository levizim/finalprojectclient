import React from 'react';
import Image from 'react-bootstrap/Image';
import adminResponse from '../images/adminresponse.png'; 

function AdminResponsePage() {
  return (
    <div>
      <Image src={adminResponse} fluid />
      <h1>Admin Response Page</h1>
    </div>
  );
}

export default AdminResponsePage;
