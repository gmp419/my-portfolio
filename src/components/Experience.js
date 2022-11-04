import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-blog timeline-blog-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Computer Science</h3>
                        <p>
                            I've finished my Bachelors in Computer Science from University of Regina, Saskatchwan.
                        </p>
                    </div>
                </div>
                <div className="timeline-blog timeline-blog-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>PHP Developer</h3>
                        <p>
                            Started my first job as PHP developer to managed web application up to date.
                        </p>
                    </div>
                </div>
                <div className="timeline-blog timeline-blog-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Junior Software Developer</h3>
                        <p>
                            I have been building software using Laravel, Bootstrap and other third party utilities.
                        </p>
                    </div>
                </div>
                <div className="timeline-blog timeline-blog-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Cloud Engineer</h3>
                        <p>
                            I'm also certified AWS Cloud Practiotioner and working as a cloud engineer at software firm to utilize my expertise.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
