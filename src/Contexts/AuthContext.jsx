import React from 'react';
import UserContext from './Context';

const AuthContext = ({children}) => {

    const user =  {name:'cristain'}
    return (
        <UserContext.Provider value={user}>

        {children}
            
        </UserContext.Provider>
    );
};

export default AuthContext;