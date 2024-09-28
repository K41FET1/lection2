import React from "react";
import "./Card.css"

export default function Card({ name, age, desc = "No desc", bg }) {
    return(
        <div className='card' style={{background: bg}}>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <p>{desc}</p>
        </div>
    );
}
