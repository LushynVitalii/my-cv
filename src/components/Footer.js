import React from 'react'
import {FaFacebook, FaLinkedin, FaTelegram} from 'react-icons/fa'
import {IconContext} from "react-icons"
// import {
//     FacebookShareButton,
//     FacebookIcon,
//     LinkedinIcon,
//     LinkedinShareButton,
//     TelegramShareButton,
//     TelegramIcon
// } from 'react-share'
// import {Link} from 'react-scroll'

const Footer = () => {

    return (
        <IconContext.Provider value={{size:'2em'}} >
        <div id='footer' className='footer'>
            <div className="container ">
                <div className='row justify-content-around'>
                    <div id='footer-contact' className="col-md-4 text-center mb-5">
                        <div >
                            <p>Montreal, QC H4E 2B3</p>
                        </div>
                        <div >
                            <a href='tel:+1 514-617-5780'>Tel. +1 514-617-5780</a>
                        </div>
                        <div >
                            <a href="mailto:vitalii.lushyn@gmail.com?">vitalii.lushyn@gmail.com</a>
                        </div>
                    </div>



                    {/*<div className="col-sm-2">*/}
                    {/*    <div className="row d-flex justify-content-center ">*/}
                    {/*        <div className="col-sm-6">*/}
                    {/*            <Link smooth={true} to='home' offset={-110} className='footer-nav' href="">Home</Link>*/}
                    {/*            <br/>*/}
                    {/*            <Link smooth={true} to='about' offset={-110} className='footer-nav' href="">About me</Link>*/}
                    {/*            <br/>*/}
                    {/*            <Link smooth={true} to='experience' offset={-150} className='footer-nav' href="">Experience</Link>*/}
                    {/*        </div>*/}


                    {/*        <div className="col-sm-6">*/}
                    {/*            <Link smooth={true} to='portfolio' offset={-110} className='footer-nav' href="">Portfolio</Link>*/}
                    {/*            <br/>*/}
                    {/*            <Link smooth={true} to='contacts' offset={-110} className='footer-nav' href="">Contact me</Link>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    <div className=" col-md-4 mb-5 align-items-center">
                        <div className="d-flex justify-content-center mb-3">

                           <a className='m-3' href='https://www.facebook.com/vitaliy.flex' target="_blank" rel="noopener noreferrer" title="My Facebook account"><FaFacebook id='fb-icon'/></a>

                           <a className='m-3' href='https://www.linkedin.com/in/vitalii-lushyn-bb6731a5/' rel="noopener noreferrer" target="_blank" title="My Linkedin account"><FaLinkedin  id='linid-icon' /></a>

                           <a className='m-3' href='https://t.me/@Vitalii_Lushyn' rel="noopener noreferrer" target="_blank" title="My Telegram account"> <FaTelegram id='teleg-icon' /></a>



                            {/*<FacebookShareButton*/}
                            {/*    url={'https://www.facebook.com/vitaliy.flex'}*/}
                            {/*    quote={'My Facebook account'}>*/}
                            {/*    <FacebookIcon className='mx-3' round={true} size={36} />*/}
                            {/*</FacebookShareButton>*/}

                            {/*<LinkedinShareButton*/}
                            {/*    url={'https://www.linkedin.com/in/vitalii-lushyn-bb6731a5/'}*/}
                            {/*    quote={'My LinkedIn account'}>*/}
                            {/*    <LinkedinIcon className='mx-3' round={true} size={36} />*/}
                            {/*</LinkedinShareButton>*/}

                            {/*<TelegramShareButton*/}
                            {/*    url={'https://t.me/@Vitalii_Lushyn'}*/}
                            {/*    quote={'My Telegram account'}>*/}
                            {/*    <TelegramIcon className='mx-3' round={true} size={36} />*/}
                            {/*</TelegramShareButton>*/}
                        </div>
                            <div className="text-center">Created with React.js</div>

                    </div>
                </div>
            </div>

        </div>
        </IconContext.Provider>
    );
};

export default Footer;