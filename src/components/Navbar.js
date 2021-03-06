import React, { useRef, useEffect } from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 992px)` });

  const inputRef = useRef(null);
  function hideNav() {
    if (isMobile) {
      inputRef.current.click();
    }
  }
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: true,
    });
  }, []);
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div id="container-navbar" className="container">
        <Link smooth={true} to="home" className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo..." />
        </Link>
        <button
          ref={inputRef}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li
              className="nav-item active"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <Link
                smooth={true}
                to="home"
                onClick={hideNav}
                offset={-110}
                className="nav-link"
                href="#"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item" data-aos="fade-down" data-aos-delay="200">
              <Link
                smooth={true}
                to="about"
                onClick={hideNav}
                offset={-75}
                className="nav-link"
                href="#"
              >
                About me
              </Link>
            </li>
            <li className="nav-item" data-aos="fade-down" data-aos-delay="300">
              <Link
                smooth={true}
                to="portfolio"
                onClick={hideNav}
                offset={-75}
                className="nav-link"
                href="#"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item" data-aos="fade-down" data-aos-delay="400">
              <Link
                smooth={true}
                to="experience"
                onClick={hideNav}
                offset={-120}
                className="nav-link"
                href="#"
              >
                Experience
              </Link>
            </li>

            <li className="nav-item" data-aos="fade-down" data-aos-delay="500">
              <Link
                smooth={true}
                to="contacts"
                onClick={hideNav}
                offset={-60}
                className="nav-link"
                href="#"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
