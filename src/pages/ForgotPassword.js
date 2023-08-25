import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { requestPasswordReset } from '../api/userApi';  // You'll create this function soon

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await requestPasswordReset(email);
            alert("If this email address exists in our system, we have sent a password reset link.");
        } catch (error) {
            alert("Error requesting password reset.");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Reset Password
            </Button>
        </Form>
    );
}

export default ForgotPassword;
