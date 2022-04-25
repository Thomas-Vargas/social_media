import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4 footer-links">
                        
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-facebook"></i
                            ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-twitter"></i
                            ></a>
                
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-google"></i
                            ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-instagram"></i
                            ></a>
                
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-linkedin"></i
                            ></a>
                
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-github"></i
                            ></a>
                    </section>
                </div>
        
                <div className="text-center p-3 footer-bottom">
                    © 2020 Copyright: Social Media
                </div>
            </footer>
        </div>
    )
}

export default Footer