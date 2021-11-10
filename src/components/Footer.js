import React from 'react'
import {  
    WhatsappIcon,
    WhatsappShareButton ,
    LinkedinIcon, 
    LinkedinShareButton,
    EmailIcon,
    EmailShareButton,
     } from "react-share"

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
                                <a className="footer-nav">Home</a><br/>
                                <a className="footer-nav">About</a><br/>
                                <a className="footer-nav">Services</a><br/>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a><br/>
                                <a className="footer-nav">Portfolio</a><br/>
                                <a className="footer-nav">Contact</a><br/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center ">
                        <div className="d-flex justify-content-center">
                            <WhatsappShareButton url={"https://api.whatsapp.com/send?phone=9898474265"}>
                                <WhatsappIcon size={32} round={true} className="mx-3" />
                            </WhatsappShareButton>
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
