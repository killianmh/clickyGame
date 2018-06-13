import React from "react";
import "./PicCard.css";

const PicCard = props => {
    return(
    <div className="card click-card">
        <img className="card-img-top" src={props.image} />
    </div>
    )
}

export default PicCard;