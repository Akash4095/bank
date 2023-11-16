
import React from 'react';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top-section">
        <button className="new-button">New</button>
      </div>
      <div className="menu-section">
        <p>Menu </p>
        <div className="options">
          <label>
            <input type="radio" name="option" /> Dashboard
          </label>
          <label>
            <input type="radio" name="option" /> Project
          </label>
          <label>
            <input type="radio" name="option" /> Bank/It Troust
          </label>
          <label>
            <input type="radio" name="option" /> Contracts
          </label>
          <label>
            <input type="radio" name="option" /> Clients
          </label>
          <label>
            <input type="radio" name="option" /> Pay Apps
          </label>
          <label>
            <input type="radio" name="option" /> Retentions
          </label>
          <label>
            <input type="radio" name="option" /> Payments
          </label>
          <label>
            <input type="radio" name="option" /> Book Keeping
          </label>
          <label>
            <input type="radio" name="option" /> Notices
          </label>
          <label>
            <input type="radio" name="option" /> Trust Accounting
          </label>
          <label>
            <input type="radio" name="option" /> Compliance
          </label>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
