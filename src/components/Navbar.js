import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activestyle="active-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;