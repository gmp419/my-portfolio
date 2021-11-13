import React from 'react';
import Typed from 'react-typed';
import {Link} from 'react-scroll';


const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <canvas></canvas>
            <h1>Web development and Website Promotion</h1>
            <Typed
                className="typed-text"
                strings={["Web Design", "Web Development", "Laravel Development", "React JS"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <Link smooth={true} aria-current="page" offset={-55} to="contact" className="btn-main-header text-uppercase" >Contact me</Link>

            </div>
        </div>
    )
}

export default Header
