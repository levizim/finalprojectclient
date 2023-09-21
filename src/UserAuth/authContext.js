import React, { createContext, useState, useContext } from 'react';
import { loginUser, registerUser, logoutUser, getAuthToken } from '../api/userApi'; // Ensure this path is correct based on your folder structure.

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        const savedUser = localStorage.getItem('currentUser');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    // Update the setCurrentUser function to store user in local storage
    const storeCurrentUser = (user) => {
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
            localStorage.removeItem('currentUser');
        }
        setCurrentUser(user);
        console.log("Current User after set:", currentUser);
    };
    
    // Added a login function to manage authentication within context
    const login = async (userData) => {
        try {
            const response = await loginUser(userData);
            if (response.user) {
                storeCurrentUser(response.user);
            }
            return response;  // Return the response in case you need to handle any other data.
        } catch (error) {
            throw error;
        }
    };

    // Added a register function similar to login
    const register = async (userData) => {
        try {
            const response = await registerUser(userData);
            if (response.user) {
                storeCurrentUser(response.user);
            }
            return response;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        logoutUser();  // This removes the JWT token.
        storeCurrentUser(null); // This removes the user data from local storage and state.
    };

    // Check if token exists to determine authenticated status
    const isAuthenticated = !!getAuthToken();

    const value = {
        currentUser,
        setCurrentUser: storeCurrentUser,
        login,
        register,
        logout,
        isAuthenticated
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
