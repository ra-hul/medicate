import React, { createContext } from 'react';


 export const AuthContext = createContext();

const AuthProvder = ({children}) => {
    // const {children}= props;
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvder;