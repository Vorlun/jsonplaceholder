import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">🍽️ MyApp</h2>
          <p className="text-sm leading-6">
            Delicious recipes and food ordering app. <br />
            Eat better, live better.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-red-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/user" className="hover:text-red-400">
                User
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-red-400">
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Email: one.humoyun@gmail.com</p>
          <p>Phone: +998 77 114 74 07</p>
          <p className="mt-2">Tashkent, Uzbekistan</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
