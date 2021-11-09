import React from 'react'
import {faFacebookF, faReact, faLaravel} from '@fortawesome/free-brands-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faFacebookF} 
                                size="2x" className="icon"/>
                            </div>
                            <h3>Web Design</h3>
                            <p>I approach each project individually and always focus on the results.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faDesktop} 
                                size="2x" className="icon"/>
                            </div>
                            <h3>Web Development</h3>
                            <p>Your website will be built with an new proven technologies.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faReact} 
                                size="2x" className="icon"/>
                            </div>
                            <h3>React JS</h3>
                            <p>I approach each project individually and always focus on the results.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faLaravel} 
                                size="2x" className="icon"/>
                            </div>
                            <h3>Laravel Development</h3>
                            <p>I approach each project individually and always focus on the results.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Services
