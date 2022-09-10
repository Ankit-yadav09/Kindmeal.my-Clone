import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from '../Pages/Homepage/Home'
import Directory from '../Pages/Directory'
import PrivateRoute from '../components/PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/Kindmeal.my-Clone' element={<Home/>}/>
            <Route  path='/login' element={<Login/>}/>
            <Route  path='/directory' element={
              <PrivateRoute>
                <Directory/>
              </PrivateRoute>
            }/>
            
        </Routes>
    </div>
  )
}

export default AllRoutes