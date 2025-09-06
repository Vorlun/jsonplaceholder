import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-colors duration-200 
     ${
       isActive
         ? "bg-red-500 text-white"
         : "text-gray-200 hover:text-red-400"
     }`;

  return (
    <header className="bg-slate-900 sticky top-0 z-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="text-2xl font-bold text-white">🍽️ MyApp</div>

        <nav className="flex gap-4">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/user" className={navLinkClass}>
            User
          </NavLink>
          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
