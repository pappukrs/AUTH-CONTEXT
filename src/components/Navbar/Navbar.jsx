import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="tem1">
            <Link to="/githubuser">Github User Search</Link>
            </div>
        <div className="item2">
            <Link to="/"> Home</Link>
            </div>
    </div>
  )
}

export default Navbar