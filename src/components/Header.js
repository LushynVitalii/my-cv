import  React from 'react'
import Typed from 'react-typed'
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div id='home' className="header-wrapper">
            <div className="main-info">
                <h1>web development</h1>
                <Typed className="typed-text"
                       strings={['JavaScript ', 'React ', 'Node JS ']}
                       typeSpeed={40}
                       backSpeed={60}
                       loop
                />
                <Link smooth={true} to='contacts' href='#' offset={-100}  className='btn-main-offer'>Contact me</Link>
            </div>

        </div>
    )
}
export default  Header