import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {
    return (
        <div>
            <Link to='/' className='unstyled-link'>
                <h1 className='logo'>Social <span className='primary'>Media</span></h1>
            </Link>
            <RegisterForm />
        </div>
    )
}

export default RegisterPage