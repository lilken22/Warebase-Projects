import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-40">
      <div className="flex items-center justify-between h-[70px] px-6 sm:px-12 lg:px-28">
        {/* Logo - No Import, Uses Public Folder */}
        <div className="w-[120px]">
          <Link to="/">
            <img src="/logo.png" alt="" className="w-16" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          <ul className="flex flex-row items-center space-x-8 text-gray-700 font-medium text-lg">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/listing" className="hover:text-blue-600">Listings</Link></li>
            <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>

        {/* Call-to-Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-[rgb(2,2,2)] text-white px-5 py-4 rounded-[50px] text-sm font-semibold hover:bg-blue-700 transition">
            Explore Services
          </button>
          <button className="bg-white bg-opacity-20 text-gray-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-900 hover:text-white transition">
            Browse Listings
          </button>


        </div>
      </div>
    </header>
  );
}


