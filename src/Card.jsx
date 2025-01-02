// Card.js
import React from 'react';
import './Card.css';

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img loading="lazy"  src={image} alt={title} />
      <div className="card-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

