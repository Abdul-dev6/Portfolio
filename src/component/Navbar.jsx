import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from './UserContext';

const Navbar = () => {
  const { mode, setmode } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setmode(!mode);
    if (!mode) {
      document.body.style.background = "oklch(27.4% 0.006 286.033)";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  };

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <>
      <nav
        className={`${mode
          ? 'bg-gray-700 text-white'
          : 'bg-gradient-to-r from-orange-300 via-orange-200 to-orange-50 text-black'
          } fixed top-0 left-1/2 -translate-x-1/2 z-50
          rounded-[10px] h-[55px] w-[95%] max-w-[800px]
          flex justify-between items-center px-4 md:px-6 shadow-lg mt-2 `}
      >
        <h1 className='font-semibold text-xl'>
          Portfolio<span className="text-orange-500">.</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item}`}
                className="capitalize text-medium font-normal hover:text-orange-500 cursor-pointer"
              >
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div onClick={toggle} className="cursor-pointer text-lg">
            <FontAwesomeIcon icon={mode ? faSun : faMoon} />
          </div>

          <a href="#contact" className="hidden md:block">
            <button
              className={`${mode
                ? 'bg-gray-800 hover:bg-gray-900'
                : 'bg-orange-500 hover:bg-orange-600'
                } transition-transform duration-200 hover:scale-95
                text-white px-5 py-2 rounded-full font-medium shadow-md`}
            >
              Hire Me
            </button>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden text-xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`fixed top-[65px] left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-[800px] rounded-xl shadow-lg px-6 py-4
            ${mode ? 'bg-gray-700 text-white' : 'bg-orange-50 text-black'}`}
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="capitalize font-medium hover:text-orange-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                <button
                  className={`${mode ? 'bg-gray-800' : 'bg-orange-500'} text-white px-5 py-2 rounded-full font-medium w-full`}
                >
                  Hire Me
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;