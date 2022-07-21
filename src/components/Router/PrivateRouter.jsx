import React from 'react'
import {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';


const PrivateRouter = ({children}) => {
    const {token}=useContext(AuthContext);
    console.log(token)
    if(!token){
        return <Navigate to={'/login'} />
    }

  return children;
    
}

export default PrivateRouter