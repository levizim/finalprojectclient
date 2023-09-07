import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/users/'; 

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(BASE_URL + 'register', userData, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        if (error.response) {
 
            throw new Error(`Error during registration: ${error.response.data.error}`);
        } else if (error.request) {

            throw new Error('No response received from server.');
        } else {
            throw error;
        }
    }
    
};



export const loginUser = async (userData) => {
    try {
        const response = await axios.post(BASE_URL + 'login', userData, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
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

export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${BASE_URL}/${userId}`, userData, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`Error updating user: ${error.response.data.error}`);
        } else if (error.request) {
            throw new Error('No response received from server.');
        } else {
            throw error;
        }
    }
};


export const requestPasswordReset = async (email) => {
    try {
        const response = await axios.post(`${BASE_URL}request-reset`, { email });
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(`Error requesting password reset: ${error.response.data.error}`);
        } else if (error.request) {
         
            throw new Error('No response received from server.');
        } else {
    
            throw error;
        }
    }
}



export const resetPassword = async (token, password) => {
    try {
        const response = await axios.post(`${BASE_URL}reset/${token}`, { password });
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
          
            throw new Error(`Error resetting password: ${error.response.data.error}`);
        } else if (error.request) {
       
            throw new Error('No response received from server.');
        } else {
        
            throw error;
        }
    }
}