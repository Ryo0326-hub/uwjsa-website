// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import tinyLogo from "../assets/uwjsa_tiny.png";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="bg-uwjsa text-white">
      {/* full-width bar */}
      <div className="flex h-14 items-center pl-2 pr-4 md:pl-4 md:pr-8">
        {/* 1️⃣ brand block — logo + text */}
        <div className="flex items-center space-x-1 md:space-x-2">
          <img
            src={tinyLogo}
            alt="UWJSA logo"
            className="h-5 w-5 sm:h-6 sm:w-6"
          />
          <span className="text-base sm:text-lg font-semibold">UW JSA</span>
          
          {/* Language toggle switch - with adjusted padding */}
          <div className="ml-2 flex items-center">
            <button 
              onClick={toggleLanguage}
              className="relative flex items-center h-6 rounded-full w-12 bg-white/10 pl-[5px] pr-1 transition-colors"
              aria-label={language === 'en' ? 'Switch to Japanese' : 'Switch to English'}
            >
              {/* Sliding indicator - position unchanged */}
              <span 
                className={`absolute h-4 w-5 rounded-full bg-white transition-transform duration-300 ${
                  language === 'en' ? 'left-1' : 'left-6'
                }`}
              />
              
              {/* Text labels - with slight adjustment */}
              <span className={`z-10 text-xs w-5 text-center ${language === 'en' ? 'text-black font-bold' : 'text-white opacity-60'}`}>
                JP
              </span>
              <span className={`z-10 text-xs w-5 text-center ${language === 'jp' ? 'text-black font-bold' : 'text-white opacity-60'}`}>
                EN
              </span>
            </button>
          </div>
        </div>

        {/* 2️⃣ nav links push to far right */}
        <div className="ml-auto flex items-center space-x-6 md:space-x-10 text-sm sm:text-base">
          {/* NavLink adds an "active" class automatically if you want styling */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:opacity-80"
            }
          >
            {language === 'en' ? 'Home' : 'ホーム'}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:opacity-80"
            }
          >
            {language === 'en' ? 'About' : '私たちについて'}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
