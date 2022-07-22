import React from 'react';
import Projects from "../Projects";

const Projects = () => {
    return (
        <div className="container" id="repo">
            <div className="row justify-description-center">
            {/* Project 1 */}
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                            <h3>Project 1</h3>
                            {/* Import image */}
                            <div className="screenshot">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/`} 
                                className="d-flex align-self-center"
                                    alt="" />
                            </div>
                            <div className="card-body mb-5 pl-0">
                                <p className="card-text">
                                    {/* Description */}
                                    
                                </p>
                                <div className="url w-100 position-absolute">
                                    {/* GitHub link */}
                                    <a href="" target="_blank" className="btn" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    {/* Deployed link */}
                                    <a href="" target="_blank" className="btn mr-2" rel="noreferrer">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                </div> 
                            
  
  
export default Projects


