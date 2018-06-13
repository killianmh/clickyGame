import React from "react";
import "./Jumbo.css";

const Jumbo = props => {
    return(
    <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid align-items-center">
            <h1 className="display-4 center-text title">Click-it!</h1>
            <p className="lead center-text">Click an image to get points, but don't click on one more than once!</p>
        </div>
    </div>
    )
}

export default Jumbo;