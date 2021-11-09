import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
        <div className="header-wrapper">
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
            <a href="#" className="btn-main-header text-uppercase">Contact me</a>
            </div>
        </div>
    )
}

export default Header
