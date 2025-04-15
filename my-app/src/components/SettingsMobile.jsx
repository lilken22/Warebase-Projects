import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";

export default function SettingsMobile() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
    // Add your logout logic here
    // For example: clear auth tokens, redirect to login, etc.
    navigate("/overview-mobile");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-[500px] flex flex-col">
        {/* Top Navbar */}
        <div className="bg-[#00000080] px-4 py-4 mt-7 flex items-center justify-between">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          <Menu size={24} className="text-gray-800" />
        </div>

        {/* White Section for Settings Content */}
        <div className="bg-white flex-1 flex flex-col px-4 pt-10 pb-6 rounded-t-3xl shadow-lg">
          {/* Settings Heading */}
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-8">
            Settings
          </h2>

          {/* Tabs List */}
          <div className="flex flex-col items-start space-y-6">
            <button
              onClick={() => navigate("/settings/profile")}
              className="text-gray-700 text-base font-medium"
            >
              Profile
            </button>
            <button
              onClick={() => navigate("/settings/portfolio")}
              className="text-gray-700 text-base font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => navigate("/settings/security")}
              className="text-gray-700 text-base font-medium"
            >
              Security
            </button>
          </div>

          {/* Logout */}
          <div className="flex justify-center  mt-auto pt-20">
            <button
              onClick={() => setShowLogoutModal(true)}
              className="text-[#1D3F3F] font-medium text-sm underline-none font-aeonik flex gap-1"
            >
              <span className="text-[#1D3F3F]"> <IoExitOutline size={18} /> </span> Logout
            </button>
          </div>
        </div>

        {/* Logout Confirmation Modal */}
        {showLogoutModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white p-6 rounded-3xl shadow-lg w-96 h-72 text-center">
              <img
                src="/avatar2.png"
                alt="Warning"
                className="w-20 h-20 mx-auto bg-[#F96017] border border-[#FFC3A6] rounded-full"
              />
              <p className="text-[#1D3F3F] mt-4 font-aeonik font-normal text-xl">
                Are you sure you want to logout?
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => {
                    handleLogout();
                    setShowLogoutModal(false);
                  }}
                  className="bg-[#1C1C1C] text-[#FFF7F2] px-12 py-2 rounded-full font-aeonik font-normal hover:bg-opacity-90 transition"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="text-[#1D3F3F] text-lg shadow-lg px-12 py-2 rounded-full font-aeonik font-normal hover:bg-gray-100 transition"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
