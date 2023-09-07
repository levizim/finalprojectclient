// ResetPassword.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { resetPassword as apiResetPassword  } from '../../api/userApi'; 

const ResetPW = () => {
    const { token } = useParams(); // getting the token from the URL
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            await apiResetPassword(token, password);
            setMessage('Password reset successfully. You can now login with your new password.');
            setError(''); // clear any previous errors
        } catch (err) {
            setError(err.message || 'Error resetting password. Please try again.');
            setMessage(''); // clear previous success message
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ResetPW;
