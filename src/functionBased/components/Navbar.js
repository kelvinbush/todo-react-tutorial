import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ];

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <nav className="navBar">
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? "Close" : "Open"}
      </button>
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
