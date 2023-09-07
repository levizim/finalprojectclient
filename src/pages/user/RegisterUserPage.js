import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { registerUser } from '../../api/userApi';

function RegisterUserPage() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        console.log("handle reg active");
        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return;
        }

        const userData = {
            userName: name,
            email: email,
            password: password,
            address: address
        };

        try {
            const response = await registerUser(userData);
            if (response && response.message === 'User registered successfully') {
                console.log('User registered successfully:', response);
                navigate('/signin');
            } else {
                console.log('Error registering user:', response);
            }
        } catch (error) {
            console.error('Error during registration:', error.message || error);
        }
    };

    return (
        <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
            <Container>
                <h1 className="text-center mb-4">Welcome to Adaept!</h1>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Re-enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={handleRegister} className="mr-2">
                        Register
                    </Button>
                    <Link to="/">
                        <Button variant="danger">
                            Cancel
                        </Button>
                    </Link>
                </Form>
            </Container>
        </div>
    );
}

export default RegisterUserPage;
