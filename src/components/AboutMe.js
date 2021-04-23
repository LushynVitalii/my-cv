import React from 'react'
import Author from '../images/my-photo.png'

const AboutMe = () => {
    return (
        <div id='about' className='container py-5 mt-5'>
            <div className="row">
                <div className="col-lg-6 col-xm-12 mt-5">
                    <div className="photo-wrap mb-5">
                    <img className='profile-img'  src={Author} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12 text-center">
                    <h1 className='about-heading mb-5'>about me</h1>
                    <p className='h5'>A full-stack web developer who is motivated by challenges. Positive, energetic and eager to learn to accomplish the set goal. Able to bring my experience to your company where I can contribute to designing and developing successful software. With several years of experience working for an international company, I understand the importance of high standards.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;