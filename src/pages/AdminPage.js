import React from 'react';
import Image from 'react-bootstrap/Image';
import admin from './images/admin.png'; 

function AdminPage() {
  return (
    <div>
      <Image src={admin} fluid />
      <h1>Admin Page</h1>
    </div>
  );
}

export default AdminPage;
