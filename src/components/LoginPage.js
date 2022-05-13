/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import SecondaryLoginForm from './SecondaryLoginForm'

const LoginPage = () => {
    return (
        <section id='login-page'>
            <div className='container flex-row login-container'>
                <div className="company-info">
                    <h5>Social Media</h5>
                    <p>Connect with friends, family and coworkers around the world on Social Media</p>
                </div>
  
                <div className='login-form'>
                    <SecondaryLoginForm />
                </div>
            </div>
        </section>
    )
}

export default LoginPage