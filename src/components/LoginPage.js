/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <section id='login-page'>
            <div className='container flex-row login-container'>
                <div className="company-info">
                    <h5>Social Media</h5>
                    <p>Connect with friends, family and coworkers around the world on Social Media</p>
                </div>
  
                <div className='login-form'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputEmail1" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="check1" />
                            <label className="form-check-label" htmlFor="check1">Keep me logged in</label>
                        </div>
                        <div className="login-form-btns">
                            <button type="submit" className="btn btn-primary">Login</button>
                            <Link to='/register' >
                                <button type="button" className="btn btn-secondary">Sign Up</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginPage