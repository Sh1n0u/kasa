import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import '../header/header.scss';

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <img src={logo} alt='Logo Kasa' />
        </div>
        <nav>
            <ul className="navbar">
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/apropos">A propos</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;