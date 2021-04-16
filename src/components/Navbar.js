import React, {useRef } from 'react'
import logo from '../images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useMediaQuery } from 'react-responsive'



const Navbar = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 992px)` });


    const inputRef = useRef(null)
    function hideNav(){
        if(isMobile) {
            inputRef.current.click();
        }

    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">

                <Link smooth={true} to='home' className="navbar-brand " href="#"><img className="logo" src={logo} alt ="logo..." /></Link>
                <button ref={inputRef} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: 'white'}}/>
                </button>

                <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to='home' onClick={hideNav} offset={-110} className="nav-link"   href='#'>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='about' onClick={hideNav} offset={-110} className="nav-link"  href='#'>About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='portfolio' onClick={hideNav} offset={-110} className="nav-link" href='#'>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='experience' onClick={hideNav} offset={-150} className="nav-link" href='#'>Experience</Link>
                        </li>

                        <li className="nav-item">
                            <Link smooth={true} to='contacts' onClick={hideNav} offset={-110} className="nav-link" href='#'>Contacts</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar