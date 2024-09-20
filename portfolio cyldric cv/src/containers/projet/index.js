import React from "react";
import "./style.scss";

// eslint-disable-next-line react/prop-types
function Projets({ pictures, title, type }) {


    return (

        <div className="filterDiv">
            <img className="cart" src={pictures} alt={type} />
            <p> {title}</p>
        </div>
    )

};


export default Projets;
