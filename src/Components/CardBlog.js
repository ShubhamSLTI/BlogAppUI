// src/App.js
import React from 'react';

import Card from './Card';

import './Card.css';

const data = [
  {
    title: 'Card 1',
    description: 'Description for Card 1',
    
  },
  {
    title: 'Card 2',
    description: 'Description for Card 2',
    
  },
  // Add more data objects as needed
];

function CardBlog() {
  return (
    <div className="App">
      <h1>Card Data View</h1>
      <div className="card-container">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default CardBlog;
