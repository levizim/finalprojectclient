import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/users/';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Utility functions to manage the JWT
const setToken = (token) => {
    localStorage.setItem('authToken', token);
}

export const getAuthToken = () => {
    return localStorage.getItem('authToken');
}

const removeToken = () => {
    localStorage.removeItem('authToken');
}

// Add a request interceptor to axios to include the JWT token in the Authorization header
apiClient.interceptors.request.use((config) => {
    const token = getAuthToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

function handleApiError(error) {
    if (error.response) {
        // If token is invalid or expired
        if (error.response.status === 401) {
            removeToken();  // Optional: You can redirect the user to login page or show a modal asking them to login again
        }
        throw new Error(`API Error: ${error.response.data.error}`);
    } else if (error.request) {
        throw new Error('No response received from server.');
    } else {
        throw error;
    }
}

export const registerUser = async (userData) => {
    try {
        const response = await apiClient.post('register', userData);
        
        // Save the token on successful registration
        if (response.data.token) {
            setToken(response.data.token);
        }

        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await apiClient.post('login', userData);
        
        // Save the token on successful login
        if (response.data.token) {
            setToken(response.data.token);
        }

        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const logoutUser = () => {
    removeToken();
}

export const updateUser = async (userId, userData) => {
    try {
        const response = await apiClient.put(`${userId}`, userData);
        console.log("Response from updateUser:", response.data);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const requestPasswordReset = async (email) => {
    try {
        const response = await apiClient.post('request-reset', { email });
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

export const resetPassword = async (token, password) => {
    try {
        const response = await apiClient.post(`reset/${token}`, { password });
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}