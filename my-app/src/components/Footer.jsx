import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-8 w-full">
      <div className="max-w-7xl px-4 lg:px-0 mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Section - Logo & Address */}
        <div className="w-1/3 space-y-">
          <img src="/logo.png" alt="" className="w-10" />
          <p className="text-sm leading-5">
            123 Warehouse Avenue, Industrial Layout,<br />
            Ikeja, Lagos, Nigeria.
          </p>
        </div>

        {/* Center Section - Contact Info, Links & Policies */}
        <div className="w-1/3 flex flex-col items-center space-y-1">
          <p className="text-sm">📞 +234-7022588472</p>
          <p className="text-sm">✉️ support@webbase.com.ng</p>
        </div>

     {/* Center Section - Links & Policies */}
     <div className="w-1/3 flex justify-between items-start">
          {/* Links Section */}
          <div className="flex flex-col space-y-">
            <h3 className="font-normal text-md text-gray-700">Links</h3>
            <ul className="text-sm space-y-1">
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="flex flex-col space-y-">
            <h3 className="font-normal text-lg text-gray-700">Policies</h3>
            <ul className="text-sm space-y-1">
              <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        
        {/* Right Section - Social Media Icons */}
        <div className="w-1/3 flex justify-end items-start">
          <div className="flex flex-col items-end">
            <h3 className="font-semibold text-md mb-1 text-gray-700">Connect</h3>
            <div className="flex space-x-2">
              <Link to="#" className="text-gray-400 hover:text-white"><FaFacebookF size={18} /></Link>
              <Link to="#" className="text-gray-400 hover:text-white"><FaTwitter size={18} /></Link>
              <Link to="#" className="text-gray-400 hover:text-white"><FaLinkedinIn size={18} /></Link>
              <Link to="#" className="text-gray-400 hover:text-white"><FaInstagram size={18} /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col md:flex-row justify-between text-xs border-t border-gray-700 mt-6 pt-4">
        <p>WebBase © 2025. All rights reserved.</p>
        <p>Designed by <span className="text-blue-400">Gurugeeks Royalty Limited</span></p>
      </div>
    </footer>
  );
}
    