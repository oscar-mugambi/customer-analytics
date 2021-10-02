import React from 'react';
import profile from '../../Assets/profile.jpg';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__heading__spacer">
        <div className="sidebar__heading">
          <h2>Profile</h2>
          <div className="sidebar__heading__subtitle">
            <h3>Status</h3>
            <h3>Active</h3>
          </div>
        </div>
      </div>

      <div className="sidebar__profile">
        <img src={profile} alt="profile" />
        <h3>Jane Doe</h3>
        <button>Update Details</button>
      </div>
      <div className="sidebar__border"></div>

      <div className="sidebar__contact">
        <h3>Contact Information</h3>
        <div className="sidebar__contact__mail">
          <h4>Email</h4>
          <h5>janedoe@gmail.com</h5>
        </div>
        <div className="sidebar__contact__phone">
          <h4>Phone</h4>
          <p>254733526754</p>
          <p>254733526754</p>
        </div>
        <div className="sidebar__border"></div>

        <div className="sidebar__customer__information">
          <h3>Customer Information</h3>
          <div className="customer__information__list">
            <div className="sidebar__info">
              <h4 className="sidebar__info__item">Bank</h4>
              <h5>KE0010001</h5>
            </div>
            <div className="sidebar__info">
              <h4 className="sidebar__info__item">Legal ID</h4>
              <h5>20061</h5>
            </div>
            <div className="sidebar__info">
              <h4 className="sidebar__info__item">Marital Status</h4>
              <h5>Married</h5>
            </div>
            <div className="sidebar__info">
              <h4 className="sidebar__info__item">Gender</h4>
              <h5>Female</h5>
            </div>
            <div className="sidebar__info">
              <h4 className="sidebar__info__item">Age</h4>
              <h5>30</h5>
            </div>
            <div className="sidebar__info">
              <h4 className="sidebar__info__item">First Account Date</h4>
              <h5>1/1/21</h5>
            </div>
            <div className="sidebar__info">
              <h4 className="sidebar__info__item">Employer Name</h4>
              <h5>Self</h5>
            </div>
            <div className="sidebar__info">
              <h4 className="sidebar__info__item">Occupation</h4>
              <h5>Pharmacist</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
