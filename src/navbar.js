import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeContext.js";

export default function BeautifulNavbar() {
  const { mod, changeMod } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 shadow-md ${
        mod === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
      }`}
    >
      <nav className="p-4 flex flex-wrap items-center justify-between sm:flex-nowrap sm:px-8">
        {/* Logo */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Portfolio
          </h1>

          {/* Hamburger button (only on mobile) */}
          <button
            className="sm:hidden p-2 rounded-md transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full sm:w-auto sm:flex sm:items-center sm:space-x-6 mt-3 sm:mt-0`}
        >
          <ul className="flex flex-col sm:flex-row sm:gap-6 gap-3 text-base sm:text-lg items-center text-center">
            <li className={mod === "dark" ? "text-gray-100" : "text-black"}>
              <a href="#">Home</a>
            </li>
            <li className={mod === "dark" ? "text-gray-150" : "text-black"}>
              <a href="#">About</a>
            </li>
            <li className={mod === "dark" ? "text-gray-200" : "text-black"}>
              <a href="#">Education</a>
            </li>
            <li className={mod === "dark" ? "text-gray-250" : "text-black"}>
              <a href="#">Skills</a>
            </li>
            <li className={mod === "dark" ? "text-gray-300" : "text-black"}>
              <a href="#">Services</a>
            </li>
            <li className={mod === "dark" ? "text-gray-350" : "text-black"}>
              <a href="#">Portfolio</a>
            </li>
            <li className={mod === "dark" ? "text-gray-400" : "text-black"}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Theme Toggle */}
        <div className="hidden sm:flex">
          <button
            onClick={changeMod}
            className="p-2 rounded-full transition cursor-pointer"
          >
            {mod === "dark" ? (
              <Moon size={26} color="blue" />
            ) : (
              <Sun size={26} color="orange" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Theme Toggle (menu ke andar dikhayenge) */}
      {isMenuOpen && (
        <div className="sm:hidden flex justify-center py-2 border-t border-gray-300 dark:border-gray-700">
          <button
            onClick={changeMod}
            className="p-2 rounded-full transition cursor-pointer"
          >
            {mod === "dark" ? (
              <Moon size={26} color="blue" />
            ) : (
              <Sun size={26} color="orange" />
            )}
          </button>
        </div>
      )}
    </header>
  );
}
