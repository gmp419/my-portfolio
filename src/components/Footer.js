import React from 'react'
import {
    WhatsappIcon,
    WhatsappShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    EmailIcon,
    EmailShareButton,
} from "react-share";
import { Link } from 'react-scroll';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className=" col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Stratford, PE, Canada</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:306-807-9114">(306) 807 9114</a>
                        </div>
                        <div className="d-flex">
                            <a href="mailto:patel7483g@gmail.com">patel7483g@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6 ">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} offset={-55} to="home" className="footer-nav">Home</Link><br />
                                <Link smooth={true} offset={-55} to="about" className="footer-nav">About</Link><br />
                                <Link smooth={true} offset={-55} to="portfolio" className="footer-nav">Work</Link><br />

                            </div>
                            <div className="col">
                                <Link smooth={true} offset={-55} to="contact" className="footer-nav">Contact</Link><br />
                                <Link smooth={true} offset={-55} to="experience" className="footer-nav">Experience</Link><br />
                                <Link smooth={true} offset={-55} to="services" className="footer-nav">Services</Link><br />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center ">
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/gmp419" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="rounded mx-3"  />
                            </a>
                            <LinkedinShareButton url={"https://www.linkedin.com/in/gaurang-patel-b605761a8/"}>
                                <LinkedinIcon size={32} round={true} className="mx-3" />
                            </LinkedinShareButton>
                            <EmailShareButton url={"https://mail.google.com/mail/u/0/#inbox/16426a350b26c600"}>
                                <EmailIcon size={32} round={true} className="mx-3" />
                            </EmailShareButton>

                        </div>
                        <p className="text-center pt-3">© {new Date().getFullYear()}&nbsp;Gaurang Patel | All Right Reserved</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
