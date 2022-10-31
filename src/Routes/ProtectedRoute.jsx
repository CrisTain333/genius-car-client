import React from 'react'

const ProtectedRoute = ({children}) => {
    const user =  true;
     const loading =  true;

     if(loading){
        return <><p>Loadign.....</p></>
     }

 if(!user){

 }
 return children
}

export default ProtectedRoute
