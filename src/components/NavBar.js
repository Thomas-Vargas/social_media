import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
      <div>
        <nav className='navbar navbar-expands-lg navbar-dark bg-dark'>
            <div className="container-fluid">
            <Link to='/' className='navbar-brand'>
              Social Media
            </Link>
              <ul className='navbar-nav flex-row'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                  <button type="button" className="btn btn-primary"   data-bs-toggle="modal" data-bs-target="#loginModal">
                    Login
                  </button>
                </li>
              </ul>
            </div>
        </nav>
    </div>
    )
}

export default NavBar