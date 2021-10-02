import React from 'react';
import './Attributes.css';

const Attributes = () => {
  return (
    <div className="attr">
      <div className="attr__heading">
        <h4 className="attr__title">Custom Attributes</h4>
        <h4 className="attr__title__two">Manage Custom Attributes</h4>
      </div>

      <div className="attr__details">
        <div className="attr__detail">
          <h4>Branch</h4>
          <div>Kapenguria</div>
        </div>
        <div className="attr__detail">
          <h4>Region</h4>
          <p>Rift Region</p>
        </div>
        <div className="attr__detail">
          <h4>Business Segment</h4>
          <p>Customer</p>
        </div>
        <div className="attr__detail">
          <h4>CVP Segment</h4>
          <p>Mass</p>
        </div>
        <div className="attr__detail">
          <h4>Sector</h4>
          <p>Individual</p>
        </div>
        <div className="attr__detail">
          <h4>Merchant</h4>
          <p>No</p>
        </div>
        <div className="attr__detail">
          <h4>MTAANI Agent</h4>
          <p>No</p>
        </div>
        <div className="attr__detail">
          <h4>VOOMA Agent</h4>
          <p>No</p>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
