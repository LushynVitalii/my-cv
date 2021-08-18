import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGoogle} from "@fortawesome/free-brands-svg-icons"
import {faDesktop, faFileCode} from "@fortawesome/free-solid-svg-icons"

const Portfolio = () => {
    return (
        <div id='portfolio' className='portfolio'>
            <div className="py-5">
                <div className="container">
                    <h1  className='mb-5'>Portfolio</h1>
                    <div id='projectsWrapper' className="row">
                        <div className="col-md-4 col-sm-12 project__card1" style={{position:"relative"}}>
                            <a href="https://react-cafeapp.web.app/" target="_blank" rel="noopener noreferrer">
                            <div className="box">
                               <div className="circle"><FontAwesomeIcon className='icon' icon={faDesktop} size='2x' /></div>
                                <h3 className='mt-4 project-heading'>CafeApp project</h3>
                                <p style={{color: 'black'}}>This project created using React</p>
                                </div>
                                <div className="portfolio-proj1"/>
                            </a>
                        </div>
                        <div className="col-md-4 col-sm-12 project__card2" style={{position:"relative"}}>
                        <a href="https://quotesapp-ef4e9.web.app/quotes" target="_blank" rel="noopener noreferrer">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className='icon' icon={faFileCode} size='2x'/></div>
                                <h3 className='mt-4'>Quotes App</h3>
                                <p style={{color: 'black'}}>This project created using React</p>
                            </div>
                                <div className="portfolio-proj2"/>
                                </a>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className='icon' icon={faGoogle} size='2x'/></div>
                                <h3 className='mt-4'>My project 3</h3>
                                <p>This project will be added soon </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;