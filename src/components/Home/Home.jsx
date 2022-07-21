import React from 'react'
    import {useContext} from 'react'
    import {AuthContext} from '../Context/AuthContext';
const Home = () => {

  const {token}=useContext(AuthContext);
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItem:"center"}}>
         <div>TOKEN:---{token}</div>
    </div>
  )
}

export default Home