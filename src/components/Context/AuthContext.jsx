import React, { useState } from 'react'
import {createContext} from 'react'

export const AuthContext=createContext();
export const AuthContextProvider = ({children}) => {
 const Navigate=useNavigate();
    const[token,setToken]=useState(null);
  
    const handleLogin=(body)=>{
      axios({
       method:"post",
       url:`https://reqres.in/api/login`,
       data:body
      }).then((res)=>{setToken(res.token);})
      .catch((err)=>console.log(err));
     }

    const toggleAuth=()=>{
        setToken((prev)=>!prev);
      token?Navigate('/'):Navigate('/login')
    }
  return (
    <AuthContext.Provider value={{toggleAuth,handleLogin,token}}>{children}</AuthContext.Provider>
  )
}

export default AuthContext