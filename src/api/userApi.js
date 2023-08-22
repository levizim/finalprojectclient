import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/users/register'; // Assuming your server is set up to proxy requests or your client is running on the same origin.

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(BASE_URL, userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 200 range
            throw new Error(`Error during registration: ${error.response.data.error}`);
        } else if (error.request) {
            // The request was made but no response was received
            throw new Error('No response received from server.');
        } else {
            // Some other error occurred while setting up the request
            throw error;
        }
    }
    
};


const LOGIN_URL = 'http://localhost:3000/api/users/login';

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(LOGIN_URL, userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`Error during login: ${error.response.data.error}`);
        } else if (error.request) {
            throw new Error('No response received from server.');
        } else {
            throw error;
        }
    }
};
