// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigationbar.css';

function Navigation() {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link className='logo' to="/">GrinsGram</Link></li>
      </ul>
      <ul>
        <li><Link to="/login">Anmelden</Link></li>
        <li><Link to="/signup">Registrieren</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
