import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import './Navbar.css'
const Navbar = () => {
  const {token,toggleAuth}=useContext(AuthContext);
  return (
    <div className="navbar">
        <Link to='/' >HOME</Link>
        <Link to='/login' ><button onClick={()=>toggleAuth()}>{token?"Logout":"Login"}</button></Link>
    </div>
  )
}

export default Navbar