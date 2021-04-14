import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGoogle} from "@fortawesome/free-brands-svg-icons"
import {faDesktop, faFileCode} from "@fortawesome/free-solid-svg-icons"

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className="py-5">
                <div className="container">
                    <h1 className='mb-5'>Portfolio</h1>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="box">
                               <div className="circle"><FontAwesomeIcon className='icon' icon={faDesktop} size='2x' /></div>
                                <h3>Result1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className='icon' icon={faFileCode} size='2x'/></div>
                                <h3>Result2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className='icon' icon={faGoogle} size='2x'/></div>
                                <h3>Result3</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;