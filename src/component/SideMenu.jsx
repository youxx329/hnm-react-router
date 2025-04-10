import React from 'react';
import '../App.css';

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <div className="close-btn" onClick={onClose}>
        X
      </div>
      <ul>
        <li>Women</li>
        <li>Men</li>
        <li>Baby</li>
        <li>Kids</li>
        <li>Home</li>
      </ul>
    </div>
  );
};

export default SideMenu;
