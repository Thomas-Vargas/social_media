import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import Home from './pages/Home'
import Profile from './components/Profile'
import BoardUser from './pages/BoardUser'
import NavBar from './components/NavBar'
//import BoardModerator from './components/BoardModerator'
//import BoardAdmin from './components/BoardAdmin'

const TestApp = () => {

    return (
        <div>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/user" element={<BoardUser/>} />
            </Routes>
        </div>
    )
}

export default TestApp