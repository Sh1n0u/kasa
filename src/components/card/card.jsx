import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../assets/logements.json';
import './card.scss';

function Card() {
  return (
    <div className="card-container">
      {data.map((item) => (
        <Link key={item.id} to={`/content/${item.id}`} className="card">
          <img src={item.cover} alt="Cover" className="card-img" />
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default Card;