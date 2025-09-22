// import react from 'react';
// import Movies from './Movies';
// import WatchList from './WatchList';
// import logo from "../assets/logo.png"
// import { Link } from 'react-router-dom';

// function NavBar(){
//     return (
//         <div className='bg-black flex items-center space-x-5 '>
//             <img src={logo} className='w-[70px]' />
//             <Link to="/" className='text-white'>Movies</Link>
//             <Link to="/WatchList" className='text-white'>WatchList</Link>
//         </div>
//     )
// }

// export default NavBar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar() {
  const location = useLocation();

  const navLinks = [
    { name: "Movies", path: "/" },
    { name: "WatchList", path: "/WatchList" },
  ];

  return (
    <nav className="bg-black px-6 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-[50px] h-auto" />
          <h1 className="text-white font-bold text-xl tracking-wide">
            MovieApp
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? "text-red-500 font-semibold"
                  : "text-gray-300"
              } hover:text-red-400 transition-colors duration-200`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
