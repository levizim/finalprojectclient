import React from 'react';
import Image from 'react-bootstrap/Image';
import adminLogin from '../images/adminLogin.png'; 

function AdminLoginPage() {
  return (
    <div>
      <Image src={adminLogin} fluid />
      <h1>Admin Login Page</h1>
    </div>
  );
}

export default AdminLoginPage;
