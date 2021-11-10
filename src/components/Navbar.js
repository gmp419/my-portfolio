import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid container">
          <Link smooth={true} aria-current="page" offset={-55} to="home" className="navbar-brand" href="#">
            <img src={logo} alt="logo" className="logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            {/* <FontAwesomeIcon icon={faBars} /> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" aria-current="page">
                <Link className="nav-link" smooth={true} offset={-55} to="home" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item" aria-current="page">
                <Link className="nav-link " smooth={true} offset={-55} to="about" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item" aria-current="page">
                <Link className="nav-link" smooth={true} offset={-55} to="services" >
                  Services
                </Link>
              </li>
              <li className="nav-item" aria-current="page">
                <Link className="nav-link" smooth={true} offset={-55} to="experience">
                  Experience
                </Link>
              </li>
              <li className="nav-item" aria-current="page">
                <Link className="nav-link" smooth={true} offset={-55} to="portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item " aria-current="page">
                <Link className="nav-link" smooth={true} offset={-55} to="contact">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
