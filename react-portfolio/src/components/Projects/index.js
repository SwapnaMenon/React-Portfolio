import React from 'react';
import Projects from "../Projects";

const Projects () => {
    return (
        <div className="container" id="repo">
            <div className="row justify-description-center">
            {/* Project 1 */}
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                            <h3>Project: Foston Pizza</h3>
                            <div className="screenshot">
                                <img src={`${process.env.PUBLIC_URL}../public/images/foston-pizza`} 
                                className="d-flex align-self-center"
                                    alt="foston pizza" />
                            </div>
                            <div className="card-body mb-5 pl-0">
                                <p className="card-text">
                                </p>
                                <div className="url w-100 position-absolute">
                                    <a href="https://github.com/project0204/reimagined-system" target="_blank" className="btn" rel="noreferrer">
                                        <i className="fab fa-githubrepo"></i>
                                    </a>
                                    <a href="https://reimagined-system.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                        <i className="fas fa-deployedlink"></i>
                                    </a>
                                </div>
                            </div>
                </div> 
            </div>
        </div>
    )
}

                            
  
  
export default Projects


