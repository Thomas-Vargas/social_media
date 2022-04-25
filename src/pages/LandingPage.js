import NavBar from '../components/NavBar.js'
import Modal from '../components/Modal.js'
import LoginPage from '../components/LoginPage.js'
import Footer from '../components/Footer.js'
import React from 'react'

const landingPage = () => {
    return (
        <div>
            <NavBar />
            <Modal />
            <LoginPage /> 
            <Footer />
        </div>
    )
} 

export default landingPage