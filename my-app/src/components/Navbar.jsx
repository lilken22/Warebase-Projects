import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ scrollToServices }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // ✅ Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  const handleMoreClick = () => {
    navigate("/listing");
  };

  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-40">
      <div className="flex items-center justify-between h-[81px] px-6 sm:px-12 lg:px-28">
        {/* Logo */}
        <div className="w-[120px]">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-16" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <ul className="flex flex-row items-center space-x-8 text-[#1D3F3F] font-medium text-lg font-aeonik">
            <li>
              <Link
                to="/"
                className={`${
                  isActive("/") ? "text-[#00E5FF]" : "hover:text-[#00E5FF]"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  isActive("/about") ? "text-[#00E5FF]" : "hover:text-[#00E5FF]"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/listing"
                className={`${
                  isActive("/listing")
                    ? "text-[#00E5FF]"
                    : "hover:text-[#00E5FF]"
                }`}
              >
                Listings
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`${
                  isActive("/blog") ? "text-[#00E5FF]" : "hover:text-[#00E5FF]"
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  isActive("/contact")
                    ? "text-[#00E5FF]"
                    : "hover:text-[#00E5FF]"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="bg-[#1C1C1C] text-[#FFF7F2] px-6 py-3 rounded-[50px] text-lg font-normal hover:bg-[#1D3F3F] transition"
            onClick={scrollToServices} // Calls the function from Home
          >
            Explore our services
          </button>

          <button
            className="bg-[#FFFFFF] text-[#1D3F3F] shadow-xl px-6 py-3 rounded-[50px] text-lg font-normal hover:bg-[#1C1C1C] hover:text-[#FFFFFF] transition"
            onClick={handleMoreClick}
          >
            Browse Listings
          </button>

          {/* <Link
            to="/Login"
            className="bg-transparent shadow-2xl border border-[] text-[#1D3F3F] px-5 py-2 rounded-[50px] text-lg font-normal hover:bg-[#1D3F3F] hover:text-white transition"
          >
            Login
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#1D3F3F]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`md:hidden fixed top-[70px] left-0 w-full bg-white shadow-md p-5 transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium text-lg">
          <li>
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-[#00E5FF]" : "hover:text-[#00E5FF]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-[#00E5FF]" : "hover:text-[#00E5FF]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/listing"
              className={`${
                isActive("/listing") ? "text-[#00E5FF]" : "hover:text-[#00E5FF]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Listings
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`${
                isActive("/blog") ? "text-[#00E5FF]" : "hover:text-[#00E5FF]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-[#00E5FF]" : "hover:text-[#00E5FF]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* ✅ Mobile Buttons - Reduced Width */}
        <div className="flex flex-col items-center mt-5 space-y-3">
          <button
            className="max-w-[200px] bg-[#1C1C1C] text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-[#1D3F3F] transition"
            onClick={scrollToServices} // Calls the function from Home
          >
            Explore Services
          </button>
          <button
            className="max-w-[200px] bg-gray-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition"
            onClick={handleMoreClick}
          >
            Browse Listings
          </button>

          {/* <Link
            to="/login"
            onClick={() => setMenuOpen(false)} // close the menu after click
            className="max-w-[200px] shadow-2xl border border-[] text-[#1D3F3F] py-2 px-4 rounded-full text-sm font-semibold hover:bg-[#1D3F3F] hover:text-white transition"
          >
            Login
          </Link> */}
        </div>
      </div>
    </header>
  );
}
