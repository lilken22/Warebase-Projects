import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-8 w-full">
      <div className="max-w-7xl px-4 lg:px-0 mx-auto flex flex-col md:flex-row justify-between items-start">
        
     {/* Left Section - Logo & Address */}
<div className="w-full space-y-1">
  {/* Show text logo on small screens and hide on medium screens and above */}
  <h3 className="text-lg font-semibold md:hidden">Warebase</h3>

  {/* Show image logo on medium screens and above and hide on small screens */}
  <img src="/logo.png" alt="Warebase Logo" className="w-10 hidden md:block" />

  <p className="text-sm leading-5">
    123 Warehouse Avenue, Industrial Layout,<br />
    Ikeja, Lagos, Nigeria.
  </p>
</div>

 {/* Combined Sections */}
<div className="w-full flex flex-col lg:flex-row lg:justify-center items-center mt-4">
  <div className="flex flex-grow justify-between gap-16 items-center text-center">
  {/* Contact Info Section */}
  <div className="w-full lg-w-1/2 flex flex-col items-start lg:items-center space-y-1">
    <h3 className="font-normal text-md text-gray-700">Support</h3>
    <p className="text-sm">+234-7022588472</p>
    <p className="text-sm">support@webbase.com.ng</p>
  </div>

  {/* Links & Policies Section */}
  <div className=" w-full lg:w-1/3 flex flex-row justify-end space-x-2 ">
    {/* Links Section */}
    <div className="flex flex-col space-y-1">
      <h3 className="font-normal text-sm text-gray-700">Links</h3>
      <ul className="text-xs space-y-1">
        <li><Link to="/blog" className="hover:underline">Blog</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </div>

    {/* Policies Section */}
    <div className="flex flex-col space-y-1">
      <h3 className="font-normal text-md text-gray-700">Policies</h3>
      <ul className="text-xs space-y-1">
        <li><Link to="/terms" className="hover:underline">Terms&Conditions</Link></li>
        <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
      </ul>
    </div>
  </div>
  </div>
</div>
        
        
      {/* Right Section - Social Media Icons */}
 {/* Bottom Section */}
<div className="max-w-7xl mx-auto px-4 lg:px-0 text-xs border-t border-gray-700 mt-6 pt-4">
  {/* Small Screen: Icons & Copyright in Same Row */}
  <div className="flex flex-col items-center justify-between space-y-2 md:hidden">
    <div className="flex space-x-3">
      <Link to="#" className="text-gray-400 hover:text-white"><FaFacebookF size={18} /></Link>
      <Link to="#" className="text-gray-400 hover:text-white"><FaTwitter size={18} /></Link>
      <Link to="#" className="text-gray-400 hover:text-white"><FaLinkedinIn size={18} /></Link>
      <Link to="#" className="text-gray-400 hover:text-white"><FaInstagram size={18} /></Link>
    </div>
    <p className="text-gray-400">WebBase © 2025. All rights reserved.</p>
  </div>

  {/* Large Screen: Original Layout (Unchanged) */}
  <div className="hidden md:flex flex-row justify-between">
    <p>WebBase © 2025. All rights reserved.</p>
    <div className="flex space-x-3">
      <Link to="#" className="text-gray-400 hover:text-white"><FaFacebookF size={18} /></Link>
      <Link to="#" className="text-gray-400 hover:text-white"><FaTwitter size={18} /></Link>
      <Link to="#" className="text-gray-400 hover:text-white"><FaLinkedinIn size={18} /></Link>
      <Link to="#" className="text-gray-400 hover:text-white"><FaInstagram size={18} /></Link>
    </div>
  </div>

  {/* Designed By Section */}
  <div className="w-full text-center mt-2">
    <p>Designed by <span className="text-blue-400">Gurugeeks Royalty Limited</span></p>
  </div>
</div>
</div>

    </footer>
  );
}



    