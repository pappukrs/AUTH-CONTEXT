import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Home/Home.jsx'
import PrivateRouter from './PrivateRouter'
import Login from '../Home/Login'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<PrivateRouter><Home/></PrivateRouter>} />
        <Route path="/login" element={<Login/>}  />
    </Routes>
  )
}

export default Router