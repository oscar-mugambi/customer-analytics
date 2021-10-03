import React from 'react';
import './ManageAttributes.css';

const ManageAttributes = () => {
  return (
    <div className="manage__attributes">
      <h1>Manage Custom Attribute</h1>
      <div className="manage__attributes__heading">
        <h2>Select Custom Attributes</h2>
        <p>These will appear on the custom attributes on the customer profile dashboard</p>
        <div className="manage__attributes__container">
          <div className="manage__attributes__item">
            <span>Branch</span>
            <span>
              <i className="fa-solid fa-circle-check fa-lg"></i>
            </span>
          </div>
          <div className="manage__attributes__item">
            <span>Region</span>
            <span>
              <i className="fa-solid fa-circle-check fa-lg"></i>
            </span>
          </div>
          <div className="manage__attributes__item">
            <span>Business Segment</span>
            <span>
              <i className="fa-solid fa-circle-check fa-lg"></i>
            </span>
          </div>
          <div className="manage__attributes__item">
            <span>CVP Segment</span>
            <span>
              <i className="fa-solid fa-circle-check fa-lg"></i>
            </span>
          </div>
          <div className="manage__attributes__item">
            <span>Sector</span>
            <span>
              <i className="fa-solid fa-circle-check fa-lg"></i>
            </span>
          </div>
          <div className="manage__attributes__item">
            <span>Merchant</span>
            <span>
              <i className="fa-solid fa-circle-check fa-lg"></i>
            </span>
          </div>
          <div className="manage__attributes__item">
            <span>Merchant</span>
            <span>
              <i className="fa-solid fa-circle-check fa-lg"></i>
            </span>
          </div>
          <div className="manage__attributes__item">
            <span>Merchant</span>
            <span>
              <i className="fa-solid fa-circle-check fa-lg"></i>
            </span>
          </div>
          <div className="manage__attributes__item">
            <span>Merchant</span>
            <span>
              <i className="fa-solid fa-circle-check fa-lg"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAttributes;
