import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const PasswordSuccessful = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/Cloud.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg min-h-[451px] flex flex-col justify-center text-center">
        {/* Logo */}
        <div className="flex justify-center mb-16">
          <img src="/logo.png" alt="Logo" className="w-20" />
        </div>

        {/* Success Message */}
        <h2 className="text-xl font-medium text-[#1D3F3F] font-aeonik mb-2">
          Password reset
        </h2>
        <p className="text-sm text-[#627777] font-aeonik mb-6">
          Your password has been successfully updated. You <br /> can now log in with your new password.
        </p>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-4xl" />
        </div>

        {/* Continue Button */}
        <button
          className="w-full bg-[#1C1C1C] text-[#FFF7F2] py-3 px-3 rounded-3xl hover:bg-[#333] focus:outline-none"
          onClick={() => navigate("/Login")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PasswordSuccessful;
