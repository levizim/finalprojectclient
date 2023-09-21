import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/products';
const base2 = 'http://localhost:3000/api/special'
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
const apiSpecial = axios.create({
    baseURL: base2,
    headers: {
        'Content-Type': 'application/json'
    }
});
// Pulling out the token functionality
//const getAuthToken = () => {
//    return localStorage.getItem('authToken');
//}

//apiClient.interceptors.request.use((config) => {
//   const token = getAuthToken();
//    if (token) {
//        config.headers['Authorization'] = `Bearer ${token}`;
//    }
//    return config;
//}, (error) => {
//    return Promise.reject(error);
//});

function handleApiError(error) {
    if (error.response) {
        if (error.response.status === 401) {
            localStorage.removeItem('authToken'); 
        }
        throw new Error(`API Error: ${error.response.data.error}`);
    } else if (error.request) {
        throw new Error('No response received from server.');
    } else {
        throw error;
    }
}

// Product API Calls

export const getAllProducts = async () => {
    try {
        const response = await apiClient.get('/');
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const getProductById = async (id) => {
    try {
        const response = await apiClient.get(`/${id}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const addProduct = async (product) => {
    try {
        const response = await apiClient.post('/', product);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const updateProduct = async (id, updatedProduct) => {
    try {
        const response = await apiClient.put(`/${id}`, updatedProduct);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await apiClient.delete(`/${id}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const getBestSellingProducts = async () => { 
    try {
        const response = await apiSpecial.get('/best-sellers')
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};
