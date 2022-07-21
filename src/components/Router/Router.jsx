import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Home/Home.jsx'
import  Githubuser from '../Home/Githubuser'
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/githubuser" element={<Githubuser/>}  />
    </Routes>
  )
}

export default Router