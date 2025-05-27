import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import ProfilePage from './Pages/ProfilePage'
import HomePage from './Pages/HomePage'
import {Toaster} from "react-hot-toast"
import { AuthContext } from '../context/AuthContext'

const App = () => {

  const {authUser}=useContext(AuthContext);

  return (
    <div className="min-h-screen bg-black bg-[url('/bgImage.svg')] bg-no-repeat bg-center bg-contain">
    <Toaster/>
    <Routes>
      <Route path='/' element={authUser?<HomePage/>:<Navigate to="/login"/>}></Route>
      <Route path='/login' element={!authUser?<LoginPage/>:<Navigate to="/"/>}></Route>
      <Route path='/profile' element={authUser?<ProfilePage/>:<Navigate to="/login"/>}></Route>
    </Routes>
    </div>

    
  )
}

export default App