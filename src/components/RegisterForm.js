/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return (
        <div className='flex-center container register-container'>
            <div className='register-form'>
                <form>
                    <div className="mb-2">
                        <label htmlFor="inputFirstName" className="form-label">First</label>
                        <input type="text" className="form-control" id="InputFirstName" placeholder='First' />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="inputLastName" className="form-label">Last</label>
                        <input type="text" className="form-control" id="InputLastName" placeholder='Last' />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="inputEmail1" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="registerPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="registerPassword" placeholder="Password" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Password" />
                    </div>
                    <div className="register-form-btns">
                        <Link to='/dashboard'>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm