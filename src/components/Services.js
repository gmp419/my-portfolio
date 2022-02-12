import React from 'react'
import {faFacebookF, faReact, faLaravel} from '@fortawesome/free-brands-svg-icons'
import {faCloud, faDesktop} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faDesktop} 
                                size="2x" className="icon"/>
                            </div>
                            <h3>Web Development</h3>
                            <p>Your website will be built with an new proven technologies. I've strong knowledge of basic web technologies.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faReact} 
                                size="2x" className="icon"/>
                            </div>
                            <h3>React JS</h3>
                            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faLaravel} 
                                size="2x" className="icon"/>
                            </div>
                            <h3>Laravel Developer</h3>
                            <p>Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faCloud} 
                                size="2x" className="icon"/>
                            </div>
                            <h3>Cloud Practioner</h3>
                            <p>I'm actively learning new cloud technologies and also preparing fro AWS Cloud Practioner exam on daily basis.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Services
