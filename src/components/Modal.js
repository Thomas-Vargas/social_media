/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'

const Modal = () => {
    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title w-100" id="loginModalLabel">Social Media</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputEmail2" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="inputEmail2" aria-describedby="emailHelp" placeholder='Email' />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="check2" />
                                <label className="form-check-label" htmlFor="check1">Keep me logged in</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <Link to='/dashboard'>
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Login</button>
                        </Link>
                        <Link to='/register'>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal