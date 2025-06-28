import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";


const EmailTemplate = ({ userEmail = "user@example.com", resetLink = "/PasswordReset" }) => {
  return (
    <div className="h-screen flex items-center justify-center px-7">
      <div className="bg-white shadow-md rounded-md w-full max-w-xl border border-gray-300 min-h-[660px] flex flex-col justify-between">
        
        {/* Dark Header with Logo */}
        <div className="bg-[#1C1C1C] py-8 px-7 flex justify-start rounded-t-md">
          <img src="/logo.png" alt="Logo" className="w-16" />
        </div>

        {/* Email Content */}
        <div className="p-6 flex-grow">
          <h2 className=" text-sm md:text-2xl font-medium font-aeonik text-[#627777] mt-6">
            Hello, {userEmail ? userEmail.split("@")[0] : "User"}
          </h2>

          <p className="text-[#627777] font-aeonik text-base font-medium w-[454px] mt-4">
            We received a request to reset your password. Click the <br/> button below  to create a new one:
          </p>

          {/* Reset Password Button */}
          <div className="mt-4 text-start">
            <Link
              to={resetLink}
              className="inline-block bg-[#0B97D1] text-[#FFF7F2] py-2 px-4 rounded-full text-sm font-medium hover:bg-[#0B97D1] transition duration-300"
            >
              Reset password
            </Link>
          </div>

          {/* Security Notice */}
          <p className="text-[#627777] text-lg font-aeonik font-medium w-[454px] mt-6">
            If you didn’t request this, please ignore this email—your <br /> account is still secure. 
            For security reasons, this link will expire in{" "}
            <span className="font-medium font-aeonik text-lg text-[#0B97D1]">5 minutes</span>.
          </p>

          <p className="font-aeonik font-normal text-[#627777] text-lg mt-5">If you need help, contact our support team.</p>

          {/* Support Information */}
          <div className="text-gray-600 text-base mt-6">
            
            <p className="mt-4 ">
            Best, <br/> Warabase <br/>
              <a href="mailto:support@warebase.com.ng" className="text-[#627777] text-base font-aeonik font-medium underline hover:underline">
                support@warebase.com.ng
              </a> {" "}
              | {" "}
              <a href="https://warebase.com.ng" className="text-[#627777] text-lg font-aeonik font-medium hover:underline">
                warebase.com.ng
              </a>
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t px-6 py-3 text-center flex justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-3 mt-2 ">
            <BsTwitterX className="text-[#1C1C1C] hover:text-[#1C1C1C] cursor-pointer w-[24px] h-[24px]"/>
            <FaLinkedin className="text-[#1C1C1C] hover:text-[#1C1C1C] cursor-pointer w-[24px] h-[24px]"/>
            <AiFillInstagram className="text-[#1C1C1C] hover:text-[#1C1C1C] cursor-pointer w-[24px] h-[24px]"/>
            <IoLogoWhatsapp className="text-[#1C1C1C] hover:text-[#1C1C1C] cursor-pointer w-[24px] h-[24px]"/>
          </div>

          <p className="font-medium text-base font-aeonik text-[#627777]">© 2025 Warebase. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;


