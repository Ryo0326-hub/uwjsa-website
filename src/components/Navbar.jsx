// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import tinyLogo from "../assets/uwjsa_tiny.png";   // ← 32-64 px wide version of your logo

export default function Navbar() {
  return (
    <nav className="bg-uwjsa text-white">
      {/* full-width bar */}
      <div className="flex h-14 items-center pl-2 pr-4 md:pl-4 md:pr-8">
        {/* 1️⃣ brand block — logo + text */}
        <Link to="/" className="flex items-center space-x-1 md:space-x-2">
          <img
            src={tinyLogo}
            alt="UWJSA logo"
            className="h-5 w-5 sm:h-6 sm:w-6"
          />
          <span className="text-base sm:text-lg font-semibold">UW JSA</span>
        </Link>

        {/* 2️⃣ nav links push to far right */}
        <div className="ml-auto flex items-center space-x-6 md:space-x-10 text-sm sm:text-base">
          {/* NavLink adds an “active” class automatically if you want styling */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:opacity-80"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:opacity-80"
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
