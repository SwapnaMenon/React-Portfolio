import React from 'react';
import Projects from "../Projects";

const Projects = () => {
    return (
        <div className="container" id="repo">
            <div className="row justify-description-center">
           
                <div className="col-xs-12 col-sm-10 col-lg-4 mb-5">
                            <h2>Project: Foston Pizza</h2>
                            <div className="screenshot">
                                <img src={`${process.env.PUBLIC_URL}../public/images/foston-pizza`} 
                                className="d-flex align-self-center"
                                    alt="foston pizza"/>
                            </div>
                            <div className="card-body mb-3 pl-0">
                                <p className="card-text">
                                </p>
                                <div className="url w-90 position-absolute">
                                    <a href="https://github.com/project0204/reimagined-system" target="_blank" className="btn" rel="noreferrer">
                                        <i className="githubrepo"></i>
                                    </a>
                                    <a href="https://reimagined-system.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                        <i className="deployedlink"></i>
                                    </a>
                                </div>
                            </div>
                </div> 
            </div>
        </div>
    )
} 
export default Projects;



