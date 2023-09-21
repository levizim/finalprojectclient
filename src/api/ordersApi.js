import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/orders/';

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

const getAuthToken = () => {
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
            removeToken();
        }
        throw new Error(`API Error: ${error.response.data.error}`);
    } else if (error.request) {
        throw new Error('No response received from server.');
    } else {
        throw error;
    }
}

export const getAllOrdersForUser = async (userId) => {
    try {
        const response = await apiClient.get(`user/${userId}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const getOrderDetails = async (orderId) => {
    try {
        const response = await apiClient.get(`${orderId}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const createOrder = async (orderData) => {
    try {
        const response = await apiClient.post('create', orderData);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const updateOrder = async (orderId, orderData) => {
    try {
        const response = await apiClient.put(`${orderId}`, orderData);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const deleteOrder = async (orderId) => {
    try {
        const response = await apiClient.delete(`${orderId}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const getAllOrders = async () => {
    try {
        const response = await apiClient.get('all');
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};
