import React from "react";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12 px-6 md:px-10 h-none md:h-[250px] w-full flex flex-col justify-between mt-0 md:mt-10">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        {/* Left Section - Logo & Address */}
        <div className="w-full md:w-auto">
          {/* Logo (hidden on mobile, visible on md and above) */}
          <img
            src="/logo.png"
            alt="Logo"
            className="hidden md:block w-16 mb-4 -mt-3"
          />
          {/* Text (visible on mobile, hidden on md and above) */}
          <h1 className="md:hidden text-xl font-bold mb-4 -mt-3">Warebase</h1>
          <p className="text-sm text-[#FDFDFD] w-full font-aeonik font-normal">
            102 Warehouse Avenue, Industrial Layout,<br /> Ikeja Lagos, Nigeria.
          </p>
        </div>

        {/* Center Section - Contact Info */}
        <div className="w-full md:w-auto">
          <h6 className="text-[#FDFDFD45] font-aeonik text-base font-medium">
            Support
          </h6>
          <div className="mt-3 text-[#FDFDFD] text-sm space-y-2 font-aeonik font-normal">
            <p className="flex items-center gap-2">📞 +234-7003288473</p>
            <p className="flex items-center gap-2">📧 support@warehouse.com.ng</p>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="w-full md:w-auto">
          <h6 className="text-[#FDFDFD45] font-aeonik text-base font-medium">
            Links
          </h6>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4 text-[#FDFDFD] text-sm font-aeonik font-normal">
            <p>Blog</p>
            <p>Terms & Conditions</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="w-full md:w-auto">
          <h6 className="text-[#FDFDFD45] font-aeonik text-base font-medium mb-2">
            Connect
          </h6>
          <div className="flex space-x-3">
            <SlSocialInstagram className="text-[#FDFDFD] text-lg" />
            <FaXTwitter className="text-[#FDFDFD] text-lg" />
            <SlSocialLinkedin className="text-[#FDFDFD] text-lg" />
            <FaWhatsapp className="text-[#FDFDFD] text-lg" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 pt-4 text-center text-[#FDFDFD] text-base flex flex-col md:flex-row md:justify-between font-aeonik">
        <p>Warebase 2025. All rights reserved.</p>
        <p >
          Designed & Developed by{" "}
          <Link to="https://yourdesigncompany.com" className="underline text-[#FDFDFD] font-normal font-aeonik text-base">
           Gurugeeks Royalty Limited
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
