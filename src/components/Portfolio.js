import React from 'react'
import project from '../images/project-1.png'
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!</p>
                <b>Github:</b>
                <a className="hyper-link"
                   onClick={() => 
                        window.open("https://gmp419.github.io/AM_Electrics/")
                   } >
                   https://gmp419.github.io/AM_Electrics/
                </a>
            </div>
        </>
        )
        
        PopupboxManager.open({content});
        PopupboxManager.update({  content, config: {
            titleBar: {  text: "AM"  }
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
            <img src={project} alt="project-2" className="popupbox-image"/>
            <div className="project-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!</p>
                <b>Demo:</b>
                <a className="hyper-link"
                   onClick={() => 
                        window.open("https://gmp419.github.io/AM_Electrics/", "_blank")
                   } >
                   project2
                </a>
            </div>
        </>
        )
        
        PopupboxManager.open({content});
        PopupboxManager.update({  content, config: {
            titleBar: {  text: "Your Text Here"  }
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
                        <img src={project} alt="Electric Company Website" className="portfolio-image"/>
                        <div className="overflow-portfolio-image"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                    </div>
        
       
                    <div className="portfolio-image-box">
                        <img src={project} alt="Electric Company Website" className="portfolio-image"/>
                        <div className="overflow-portfolio-image"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                    </div>
        
                    <div className="portfolio-image-box">
                        <img src={project} alt="Electric Company Website" className="portfolio-image"/>
                        <div className="overflow-portfolio-image"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                    </div>
        
                </div>
                
                
            </div>
            <PopupboxContainer {...popupboxConfigproject1} />
            <PopupboxContainer {...popupboxConfigproject2} />
        </div>
    )
}

export default Portfolio
