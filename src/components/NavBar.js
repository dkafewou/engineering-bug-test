import React, { Component } from 'react';
import '../styles/App.css';

// Refactor rename file for consistency naming
// Make component a functional component
// Fix the state setting
// Remove the state since unused
// Remove handleLogoutButton
const NavBar = ({ showLogoutButton, handleLogout }) => {
  let sessionButton;
  if (showLogoutButton) {
    sessionButton = (<button className='flat-button border-gray' onClick={handleLogout}>Sign Out</button>);
  }

  return (
    <div className='app-navbar'>
      <div className='flex-container'>
        <div className='header'>React Debug App</div>
        {sessionButton}
      </div>
    </div>
  );
}

export default NavBar;
