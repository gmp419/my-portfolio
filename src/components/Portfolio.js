import React from 'react'
import project from '../images/project-1.png'
import project2pic from '../images/backend_laravel.png'
import project3pic from '../images/react-ecom.png'
import project4pic from '../images/project4.png'

import {faSearchPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {

    //First project is
    const project1 = () =>{
        const content = (
            <>
            <img src={project} alt="project-1" className="popupbox-image"/>
            <div className="project-text">
                <p>Professional electrical webpage using frontend technologies</p>
                <b>Live:</b>
                <a className="hyper-link"
                   onClick={() => 
                        window.open("https://gmp419.github.io/AM_Electrics/")
                   } >
                   https://gmp419.github.io/AM_Electrics/
                </a>
                <br />
                <b>Github:</b>
                <a className="hyper-link"
                   onClick={() => 
                        window.open("https://github.com/gmp419/AM_Electrics")
                   } >
                   https://github.com/gmp419/AM_Electrics
                </a>
            </div>
        </>
        )
        
        PopupboxManager.open({content});
        PopupboxManager.update({  content, config: {
            titleBar: {  text: "AM Electrics"  }
        },
        });
        
    }

    const popupboxConfigproject1 = {
        titleBar: {
            enable: true
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }
    //Second project is
    const project2 = () =>{
        const content = (
            <>
            <img src={project2pic} alt="project-2" className="popupbox-image"/>
            <div className="project-text">
                <p>Building admin panel for ecommerce project using laravel.</p>
                <b>Github:</b>
                <a className="hyper-link"
                   onClick={() => 
                        window.open("https://github.com/gmp419/ecom_server", "_blank")
                   } >
                   https://github.com/gmp419/ecom_server
                </a>
            </div>
        </>
        )
        
        PopupboxManager.open({content});
        PopupboxManager.update({  content, config: {
            titleBar: {  text: "Backend Admin Panel"  }
        },
        });
    }

    const popupboxConfigproject2 = {
        titleBar: {
            enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }
    const project3 = () =>{
        const content = (
            <>
            <img src={project3pic} alt="project-3" className="popupbox-image"/>
            <div className="project-text">
                <p>Building e-commerce PWA app using React and laravel rest api.</p>
                <b>Github:</b>
                <a className="hyper-link"
                   onClick={() => 
                        window.open("https://github.com/gmp419/ecommerce", "_blank")
                   } >
                   https://github.com/gmp419/ecommerce
                </a>
            </div>
        </>
        )
        
        PopupboxManager.open({content});
        PopupboxManager.update({  content, config: {
            titleBar: {  text: "React e-commerce app"  }
        },
        });
    }

    const popupboxConfigproject3 = {
        titleBar: {
            enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }
    const project4 = () =>{
        const content = (
            <>
            <img src={project2pic} alt="project-2" className="popupbox-image"/>
            <div className="project-text">
                <p>React JS news app</p>
                <b>Github:</b>
                <a className="hyper-link"
                   onClick={() => 
                        window.open("https://github.com/gmp419/NewsMonkey", "_blank")
                   } >
                   https://github.com/gmp419/NewsMonkey
                </a>
            </div>
        </>
        )
        
        PopupboxManager.open({content});
        PopupboxManager.update({  content, config: {
            titleBar: {  text: "News App"  }
        },
        });
    }

    const popupboxConfigproject4 = {
        titleBar: {
            enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }
       


    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">
                    Portfolio
                </h1>    
                
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="portfolio-image-box "onClick={project1}>
                        <img src={project} alt="Electric Company Website" className="portfolio-image"/>
                        <div className="overflow-portfolio-image"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                    </div>
        
                    <div className="portfolio-image-box" onClick={project2}>
                        <img src={project2pic} alt="Laravel App" className="portfolio-image"/>
                        <div className="overflow-portfolio-image"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                    </div>

                    <div className="portfolio-image-box" onClick={project3}>
                        <img src={project3pic} alt="React js e-commerce App" className="portfolio-image"/>
                        <div className="overflow-portfolio-image"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                    </div>

                    <div className="portfolio-image-box" onClick={project4}>
                        <img src={project4pic} alt="React js news app" className="portfolio-image"/>
                        <div className="overflow-portfolio-image"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                    </div>
        
       
                  
        
                </div>
                
                
            </div>
            <PopupboxContainer {...popupboxConfigproject1} />
            <PopupboxContainer {...popupboxConfigproject2} />
            <PopupboxContainer {...popupboxConfigproject3} />
            <PopupboxContainer {...popupboxConfigproject4} />
        </div>
    )
}

export default Portfolio
