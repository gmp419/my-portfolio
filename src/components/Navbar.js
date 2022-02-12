import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCertificate, faHome, faInfo, faLaptop, faMailBulk, faSchool, faTasks } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';


const Navbar = () => {

  window.onscroll = function () {
    if (window.pageYOffset > 400) {
      document.getElementById("navbar").classList.add("bg-dark");
      document.getElementById("navbar").classList.remove("bg-transparent");
      
    } else {
      document.getElementById("navbar").classList.add("bg-transparent");
      document.getElementById("navbar").classList.remove("bg-dark");
    }

  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top" id="navbar">
        <div className="container-fluid container">
          <Link smooth={true} aria-current="page" offset={-55} to="home" className="navbar-brand" href="#">
            <img src={logo} alt="" className="logo" />
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
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" aria-current="page">
                <Link className="nav-link" smooth={true} offset={-55} to="home" aria-current="page">
                  <FontAwesomeIcon icon={faHome} />
                </Link>
              </li>
              <li className="nav-item" aria-current="page">
                <Link className="nav-link " smooth={true} offset={-55} to="about" href="#">
                  <FontAwesomeIcon icon={faInfo} className="italic"/>
                </Link>
              </li>
              {/* <li className="nav-item" aria-current="page">
                <Link className="nav-link" smooth={true} offset={-55} to="services" >
                  Services
                </Link>
              </li> */}
              <li className="nav-item" aria-current="page">
                <Link className="nav-link" smooth={true} offset={-55} to="experience">
                  <FontAwesomeIcon icon={faTasks} />
                </Link>
              </li>
              <li className="nav-item" aria-current="page">
                <Link className="nav-link" smooth={true} offset={-55} to="portfolio">
                  <FontAwesomeIcon icon={faLaptop} />
                </Link>
              </li>
              <li className="nav-item " aria-current="page">
                <Link className="nav-link" smooth={true} offset={-55} to="contact">
                  <FontAwesomeIcon icon={faMailBulk} />
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
