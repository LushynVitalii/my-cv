import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>web development</h1>
        <Link
          smooth={true}
          to="contacts"
          href="#"
          offset={-70}
          className="btn-main-offer"
        >
          Contact me
        </Link>
      </div>
    </div>
  );
};
export default Header;
