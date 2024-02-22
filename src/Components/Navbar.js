import React from 'react';
import logo from '../images/bluetick-consultants.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-white static-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" height="36" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active m-1 px-3 py-2 text-dark rounded-3 border" aria-current="page" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark m-1 px-3 py-2 rounded-3 border" href="#blogs">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark m-1 px-3 py-2 rounded-3 border" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
