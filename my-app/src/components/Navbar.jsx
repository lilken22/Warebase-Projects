import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-40">
      <div className="flex items-center justify-between h-[70px] px-6 sm:px-12 lg:px-28">
        {/* Logo */}
        <div className="w-[120px]">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-16" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <ul className="flex flex-row items-center space-x-8 text-gray-700 font-medium text-lg">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/listing" className="hover:text-blue-600">Listings</Link></li>
            <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-black text-white px-5 py-2 rounded-[50px] text-sm font-semibold hover:bg-blue-700 transition">
            Explore Services
          </button>
          <button className="bg-gray-100 text-gray-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-900 hover:text-white transition">
            Browse Listings
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
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
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/listing" onClick={() => setMenuOpen(false)}>Listings</Link></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* ✅ Mobile Buttons - Reduced Width */}
        <div className="flex flex-col items-center mt-5 space-y-3">
          <button className="max-w-[200px] bg-black text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
            Explore Services
          </button>
          <button className="max-w-[200px] bg-gray-500 text-gray-800 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-gray-900 hover:text-white transition">
            Browse Listings
          </button>
        </div>
      </div>
    </header>
  );
}





