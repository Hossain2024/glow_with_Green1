import React from "react";
import GreenJuice from '../assets/GreenJuice.jpg'

const Card = (props) => {
    return (
        <a href={props.link} className="card-link">
        <div className= "card">
            <img className = "card-image" src = {props.image} alt = "juice picture"></img>
            <h2 className = "card-title"> {props.title}</h2>
            <p className = "card-text">{props.text} </p>
            
        </div>
        </a>


       
    );
}
export default Card;