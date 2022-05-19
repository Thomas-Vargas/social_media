import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import AuthService from '../services/auth.service'
import EventBus from '../common/EventBus'

const NavBar = () => {
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
        
        EventBus.on('logout', () => {
            logOut()
        })

        return () => {
            EventBus.remove('logout')
        }
    }, [])

    const logOut = () => {
        AuthService.logout()
        setShowModeratorBoard(false)
        setShowAdminBoard(false)
        setCurrentUser(undefined)
    }

    return (
        <div>
            <Modal />
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className='container-fluid'>
                    <Link to={'/'} className="navbar-brand">
                        Social Media
                    </Link>

                    <div className='flex-row nav-container'>
                        <div className="navbar-nav">
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
                                        {currentUser.username.charAt(0).toUpperCase() + currentUser.username.slice(1)}
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
                                    <a href='#' className='nav-link' data-bs-toggle="modal" data-bs-target="#loginModal">
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/register'} className="nav-link">
                                        Sign Up
                                    </Link>
                                </li>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar