import React, { useState } from 'react';
import { requestPasswordReset } from '../../api/userApi';

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await requestPasswordReset(email);
            setMessage('Password reset link has been sent to your email.');
            setError(''); // clear any previous errors
        } catch (err) {
            setError(err.message || 'Error sending reset link. Please try again.');
            setMessage(''); // clear previous success message
        }
    };

    return (
        <div className="bg-dark text-white" style={{ minHeight: '100vh', padding: '2rem' }}>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    style={{ backgroundColor: '#333', color: 'white', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #555', borderRadius: '5px' }}
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <button style={{ backgroundColor: '#007BFF', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }} type="submit">
                    Request Reset Link
                </button>
            </form>
            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Forgot;
