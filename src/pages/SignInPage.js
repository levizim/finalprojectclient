import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { loginUser as apiLoginUser } from '../api/userApi'; 
import { useAuth } from '../sessions/authContext'; // Import the hook

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const { setCurrentUser } = useAuth(); // Destructure the method

    const handleLogin = async () => {
        try {
            const user = await apiLoginUser({ email, password });
            console.log("User logged in:", user);
            
            setCurrentUser(user); // Set the current user upon successful login

            // Reset any login errors upon successful login
            setLoginError('');
            navigate('/user');  
        } catch (error) {
            console.error("Error during login:", error.message);
            setLoginError(error.message);
        }
    };

    return (
        <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
            <Container>
                <h1 className="text-center mb-4">Sign In</h1>
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

                    <Button variant="primary" type="button" onClick={handleLogin} className="mr-2">
                        Login
                    </Button>
                </Form>
                <p className="mt-2">
                    Don't have an account? <Link to="/register" className="text-warning">Register here</Link>
                </p>
            </Container>
        </div>
    );
}

export default SignInPage;
