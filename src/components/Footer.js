import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterShareButton,
    TwitterIcon
} from 'react-share'
import {Link} from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className='row'>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>city Montreal H4E 2B#</p>
                        </div>
                        <div className="d-flex">
                            <a href='tel:+1 514-617-5780'>Tel. +1 514-617-5780</a>
                        </div>
                        <div className="d-flex">
                            <p>vitalii.lushyn@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to='home' offset={-110} className='footer-nav' href="">Home</Link>
                                <br/>
                                <Link smooth={true} to='about' offset={-110} className='footer-nav' href="">About me</Link>
                                <br/>
                                <Link smooth={true} to='experience' offset={-150} className='footer-nav' href="">Experience</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to='portfolio' offset={-110} className='footer-nav' href="">Portfolio</Link>
                                <br/>
                                <Link smooth={true} to='contacts' offset={-110} className='footer-nav' href="">Contact me</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={'https://www.facebook.com/vitaliy.flex'}
                                quote={'My Facebook account'}>
                                <FacebookIcon className='mx-3' size={36} />
                            </FacebookShareButton>

                            <LinkedinShareButton
                                url={'https://ca.linkedin.com/in/vitalii-lushyn-bb6731a5?trk=public_profile_browsemap_profile-result-card_result-card_full-click'}
                                quote={'My LinkedIn account'}>
                                <LinkedinIcon className='mx-3' size={36} />
                            </LinkedinShareButton>

                            <TwitterShareButton
                                url={'https://ca.linkedin.com/in/vitalii-lushyn-bb6731a5?trk=public_profile_browsemap_profile-result-card_result-card_full-click'}
                                quote={'My Twitter account'}>
                                <TwitterIcon className='mx-3' size={36} />
                            </TwitterShareButton>
                            <p className="pt-3 text-center">Montreal 2021</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;