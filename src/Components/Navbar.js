import React from 'react';
import { Link } from 'react-router-dom';
import './Navebar.css'

const Navbar = () => {
    return (
        <div className='navbar-main'>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <Link className="navbar-brand" to="/">Romel-Barua-Bakul</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"to="/resume">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;