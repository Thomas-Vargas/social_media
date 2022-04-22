const NavBar = () => {
    return (
      <div>
        <nav className='navbar navbar-expands-lg navbar-dark bg-dark'>
            <div className="container-fluid">
              <a className='navbar-brand' href='#'>Social Media</a>
              <ul className='navbar-nav flex-row'>
                <li className='nav-item'>
                  <a className='nav-link active'>Home</a>
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