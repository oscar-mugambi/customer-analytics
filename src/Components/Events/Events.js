import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <div className="custom-event">
      <div className="custom__event__heading">
        <h4>Custom Events</h4>
        <h5>Manage Custom Events</h5>
      </div>

      <div className="event__details">
        <div className="event-detail">
          <h4>Interest Income</h4>
          <p>1000</p>
        </div>
        <div className="event-detail">
          <h4>Interest Expense</h4>
          <p>(2000)</p>
        </div>
        <div className="event-detail">
          <h4>Commisions</h4>
          <p>5000</p>
        </div>
        <div className="event-detail">
          <h4>Churn Score</h4>
          <p>0</p>
        </div>
        <div className="event-detail">
          <h4>Churn Score Dates</h4>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
