import React from 'react';
import { NavLink } from 'react-router-dom';
import HelloWorld from './pages/HelloWorld';
import Contact from './pages/Contact';
import Vehicules from './pages/Vehicules';

export default function NavBar() {
  return (
    <nav className="nav">
    <img className="logo" src="https://upload.wikimedia.org/wikipedia/en/c/c6/BRP_inc_logo.svg" alt="brp"></img>
    <ul>
      <li>
      <NavLink to='/contact'>Contact</NavLink>
      </li>
      <li>
      <NavLink to='/vehicules'>Vehicules</NavLink>
      </li>
    </ul>
  </nav>
  );
}
