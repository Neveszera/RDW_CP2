import React from 'react';
import { Link } from 'react-router-dom';
import './SCSS/Header.scss'; 

function Header() {
  return (
    <header className="header">
      <h1>GaRaToLu Store</h1>
      <nav>
        <Link to="/" className="headerLink">
          Home
        </Link>
        <Link to="/aparelhos" className="headerLink">
          Aparelhos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
