import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const logout = () => setCurrentUser(null);

    const value = {
        currentUser,
        setCurrentUser, // This line is optional. I've included it here in case you want to directly use setCurrentUser elsewhere.
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
