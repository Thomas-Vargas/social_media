import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faBell, faGear } from '@fortawesome/free-solid-svg-icons'

const DashboardNav = () => {
    return (
        <div>
            <div>
                <nav className='navbar navbar-expands-lg navbar-dark bg-dark'>
                    <div className="container-fluid">
                        <div className='flex-row'>
                            <Link to='/' className='navbar-brand'>
                                Social Media
                            </Link>
                            <form className="form-inline">
                                <input className="form-control mr-sm-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>

                        <ul className='navbar-nav flex-row dashboard-links'>
                            <li className='nav-item user-link flex-row'>
                                <img 
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeUl_DyPU6PcpmjVhwv42XDrVhhOC7lspJQ&usqp=CAU'
                                    className='user-image'
                                ></img>
                                <Link to='/dashboard' className='nav-link active'>User</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item friends'>
                                <a href='#' className='unstyled-link-white'>
                                    <FontAwesomeIcon icon={faUserGroup} size='lg' className='friends-icon' />
                                </a>
                            </li>
                            <li className='nav-item notifications'>
                                <a href='#' className='unstyled-link-white'>
                                    <FontAwesomeIcon icon={faBell} size='lg' />
                                </a>
                            </li>
                            <li className='nav-item notifications'>
                                <a href='#' className='unstyled-link-white'>
                                    <FontAwesomeIcon icon={faGear} size='lg' className='gear-icon' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
} 

export default DashboardNav