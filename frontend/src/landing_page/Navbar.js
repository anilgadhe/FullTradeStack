import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
return ( 
<div className="container-fluid " style={{position:"fixed",top:"0%"}}>
<nav className="container navbar navbar-expand-lg bg-body-tertiary border-bottom d-flex justify-content-around "  >
 

    <a className="navbar-brand" href="/"> <img src="media/images/logo.svg"  height="20" alt="logo_img"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
       </button>

    <div className="collapse navbar-collapse  " id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/about">about</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/products">products</Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/pricing">pricing</Link>

        </li>
        <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/support">support</Link>

        </li>                
        <li className="nav-item dropstart">
          <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
          </a>
          <ul className="dropdown-menu mt-5">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
</nav>
 </div>
);
}

export default Navbar;