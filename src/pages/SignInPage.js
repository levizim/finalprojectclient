import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { loginUser as apiLoginUser } from '../api/userApi'; // Import the function

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const user = await apiLoginUser({ email, password });
            console.log("User logged in:", user);
            
            // Reset any login errors upon successful login
            setLoginError('');

            // Navigate to the user's page
            navigate('/user');  
        } catch (error) {
            console.error("Error during login:", error.message);
            setLoginError(error.message);
        }
    };

    return (
        <div>
            <Container className="mt-4">
                <h1>Sign In</h1>
                {loginError && <Alert variant="danger">{loginError}</Alert>}
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={handleLogin}>
                        Login
                    </Button>
                </Form>
                <p className="mt-2">
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </Container>
        </div>
    );
}

export default SignInPage;
