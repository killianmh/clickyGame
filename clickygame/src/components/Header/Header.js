import React from "react";
import "./Header.css";

const Header = props => {
    return(
    <nav className="navbar nav-justified">
        <a className="navbar-brand nav-item pg-title" href="#">Click-It!</a>
        <span className="navbar-brand nav-item msg"> { props.message }</span>
        <span className="navbar-brand nav-item score"> {`Score: ${props.score} | Top Score: ${props.topscore}`}</span>
    </nav>
    )
}

export default Header;