import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthService from './services/auth.service'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import Home from './pages/Home'
import Profile from './components/Profile'
import BoardUser from './pages/BoardUser'
//import BoardModerator from './components/BoardModerator'
//import BoardAdmin from './components/BoardAdmin'

const TestApp = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false)
    const [showAdminBoard, setShowAdminBoard] = useState(false)
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        const user = AuthService.getCurrentUser()
        if (user) {
            setCurrentUser(user)
            setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'))
            setShowAdminBoard(user.roles.includes('ROLE_ADMIN'))
        }
    }, [])

    const logOut = () => {
        AuthService.logout()
    }

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={'/'} className="navbar-brand">
                    bezKoder
                </Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={'/home'} className="nav-link">
                            Home
                        </Link>
                    </li>
                    {showModeratorBoard && (
                        <li className="nav-item">
                            <Link to={'/mod'} className="nav-link">
                                Moderator Board
                            </Link>
                        </li>
                    )}
                    {showAdminBoard && (
                        <li className="nav-item">
                            <Link to={'/admin'} className="nav-link">
                                Admin Board
                            </Link>
                        </li>
                    )}
                    {currentUser && (
                        <li className="nav-item">
                            <Link to={'/user'} className="nav-link">
                                User
                            </Link>
                        </li>
                    )}
                </div>
                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/profile'} className="nav-link">
                                {currentUser.username}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={logOut}>
                                LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/login'} className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/register'} className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                )}
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/login" element={<LoginForm/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/user" element={<BoardUser/>} />
                </Routes>
            </div>
        </div>
    )
}

export default TestApp