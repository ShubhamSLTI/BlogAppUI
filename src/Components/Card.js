// src/Card.js
import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <div className="card-content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
