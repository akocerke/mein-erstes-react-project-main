// Navigation.js
import React from 'react';

import './Navigationbar.css';

function Navigation() {
  return (
    <nav className='navbar'>
      <ul>
        <li><a className='logo' href="#">GrinsGram</a></li>
      </ul>
      <ul>
        <li><a href="#">Anmelden</a></li>
        <li><a href="#">Registrieren</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
