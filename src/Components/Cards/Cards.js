import React from 'react';
import './Cards.css';

const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card__title">Total Deposits</div>
        <div className="card__amount">935,786.95</div>
      </div>
      <div className="card">
        <div className="card__title">Total Deposits</div>
        <div className="card__amount">100,000.00</div>
      </div>
      <div className="card">
        <div className="card__title">Total Deposits</div>
        <div className="card__amount">5000</div>
      </div>
      <div className="card">
        <div className="card__title">Total Deposits</div>
        <div className="card__amount">0.0</div>
      </div>
    </div>
  );
};

export default Cards;
