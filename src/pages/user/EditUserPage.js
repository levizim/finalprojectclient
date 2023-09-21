import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../UserAuth/authContext';
import { updateUser } from '../../api/userApi';

const EditUserPage = () => {
  
  const { currentUser, storeCurrentUser } = useAuth();  // Added setCurrentUser
  console.log("currentUser:", currentUser);
  
  
  const [userName, setUserName] = useState(currentUser?.userName || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [address, setAddress] = useState(currentUser?.address || '');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {};

    if (userName.trim()) userData.userName = userName;
    if (email.trim()) userData.email = email;
    if (address.trim()) userData.address = address;

    if (Object.keys(userData).length === 0) {
      alert("No data provided to update.");
      return;
    }

    try {
      const response = await updateUser(currentUser.user.UserID, userData);
      alert(response.message);
      console.log("EditUserPage -> Updated User:", response.user);

      // Update the context's user data
      if (response && response.user) {
        storeCurrentUser(response.user); 
      }
      console.log("EditUserPage -> Updated User:", response.currentUser.user);

      navigate("/user");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container fluid className="bg-dark text-white" style={{ minHeight: '100vh' }}>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="mb-4 mt-4">Edit Profile</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className="bg-dark text-white"
                type="text"
                placeholder="Enter username"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="bg-dark text-white"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                className="bg-dark text-white"
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update Profile
            </Button>
            <Button variant="outline-light" onClick={() => navigate("/user")} className="ml-2">
              Cancel
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditUserPage;
