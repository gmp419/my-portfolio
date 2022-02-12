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
                        <h3>React Js With Laravel Build</h3>
                        <p>
                            Complete PWA Ecommerce Project using ReactJS and Laravel.
                        </p>
                    </div>
                </div>
                <div className="timeline-blog timeline-blog-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>AWS Certified Cloud Practitioner</h3>
                        <p>
                            I'm preparing for the AWS Certified Cloud Practitioner exam.
                        </p>
                    </div>
                </div>
                <div className="timeline-blog timeline-blog-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Building Rest API using laravel</h3>
                        <p>
                            I've built a rest api using laravel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
