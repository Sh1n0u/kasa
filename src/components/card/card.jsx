import React from "react";
import './card.scss';
import data from '../../assets/logements.json';

function Card() {
    return (
        <div className="card-container">
            {data.map((item) => (
                <div key={item.id} className="card">
                    <img src={item.cover} alt="Cover" className="card-img"/>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;
