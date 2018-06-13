import React from "react";
import "./Header.css";

const Header = props => {
    return(
    <nav className= "nav nav-fill align-items-center">
        <a className="nav-item nav-link" href="#">Click-It!</a>
        <a className="nav-item"> test<span></span></a>
        <a className="nav-item"> test<span></span></a>
    </nav>
    )
}

export default Header;