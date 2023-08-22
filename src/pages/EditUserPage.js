import React from 'react';
import Image from 'react-bootstrap/Image';
import editUser from './images/editUser.png'; 

function EditUserPage() {
  return (
    <div>
      <Image src={editUser} fluid />
      <h1>Edit User Page</h1>
    </div>
  );
}

export default EditUserPage;
