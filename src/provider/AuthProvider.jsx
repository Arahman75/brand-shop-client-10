import React, { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {


    const authInfo = {
        name: "Hello world"
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;