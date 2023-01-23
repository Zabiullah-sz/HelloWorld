import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/">
    <img className="logo" src="house-256.png" alt="brp"></img>
    </a>
    <ul>
      <li>
      <NavLink to='/vehicules'> <div className='linkBox'> Vehicles </div></NavLink>
      </li>
      <li>
      <NavLink to='/contact'><div className='linkBox'> Contact </div></NavLink>
      </li>
    </ul>
  </nav>
  );
}
