import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  IoExitOutline,
  IoCloseOutline,
  IoDocumentTextOutline
} from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { PiCirclesFourFill, PiBriefcaseMetalFill } from "react-icons/pi";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowLogoutModal(true);
    closeMenu();
  };

  const handleConfirmLogout = () => {
    console.log("User logged out");
    navigate("/Login");
    setShowLogoutModal(false);
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false);
  };

  return (
    <div>
      {/* Mobile toggle button - only shows on small screens */}
      <button
        className="md:hidden fixed p-2 rounded top-4 left-4 bg-gray-100 border border-gray-200 shadow"
        onClick={toggleMenu}
      >
        {isOpen ? <IoCloseOutline size={24} /> : <CiMenuFries size={24} />}
      </button>

      {/* Sidebar - visible by default on desktop, toggleable on mobile */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-[#F9F9F9] text-[#9C9C9C] py-5 px-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo Section */}
        <div className="pb-4 flex items-center gap-3">
          <img 
            src="/logo.png"
            alt="Dashboard Logo" 
            className="w-16 h-10"
          />
        </div>

        {/* Main Menu */}
        <div className="py-4 border-b border-gray-300 mt-10">
          <div className="text-xs text-[#A8A8A9] uppercase tracking-wider font-aeonik font-medium mb-3">
            MAIN MENU
          </div>
          <ul className="space-y-2">
            <SidebarLink 
              to="/overview" 
              icon={<PiCirclesFourFill size={18} />} 
              label="Overview" 
              active={location.pathname === "/overview"}
            />
            <SidebarLink 
              to="/portfolio" 
              icon={<PiBriefcaseMetalFill size={18}/>} 
              label="Portfolio" 
              active={location.pathname === "/portfolio"}
            />
            <SidebarLink 
              to="/blogs" 
              icon={<IoDocumentTextOutline size={18} />} 
              label="Blogs" 
              active={location.pathname === "/blogs"}
            />
          </ul>
        </div>

        {/* Settings Section */}
        <div className="py-4">
          <ul className="space-y-2">
            <SidebarLink 
              to="/settings" 
              icon={<FiSettings size={18} />} 
              label="Settings" 
              active={location.pathname === "/settings"}
            />
          </ul>
        </div>

        {/* Logout Section */}
        <div className="pt-4">
          <ul className="space-y-2">
            <button
              onClick={handleLogoutClick}
              className="w-full flex items-center gap-3 py-3 px-2 rounded-md text-sm font-aeonik font-bold transition duration-200 text-[#9C9C9C] hover:bg-white hover:text-[#1D3F3F] hover:border hover:border-gray-400"
            >
              <span className="text-[#1D3F3F]">
                <IoExitOutline size={18} />
              </span>
              <span>Logout</span>
            </button>
          </ul>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-25 z-50">
          <div className="bg-white p-6 rounded-3xl shadow-lg w-80 h-72 text-center">
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
                onClick={handleConfirmLogout}
                className="bg-[#1C1C1C] text-white px-12 py-2 rounded-full font-aeonik font-normal"
              >
                Yes
              </button>
              <button
                onClick={handleCloseModal}
                className="text-[#1D3F3F] px-12 py-2 rounded-full font-aeonik font-normal border border-gray-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SidebarLink = ({ to, icon, label, active }) => (
  <Link
    to={to}
    className={`
      flex items-center gap-3 py-3 px-2 rounded-md text-sm 
      font-aeonik font-bold
      transition duration-200
      ${
        active 
          ? "bg-white text-[#1D3F3F]" 
          : "text-[#9C9C9C] hover:bg-white hover:text-[#1D3F3F] hover:border hover:border-gray-400"
      }
    `}
  >
    <span className={`${active ? "text-[#1D3F3F] font-bold" : "text-[#1D3F3F]"}`}>
      {icon}
    </span>
    <span>{label}</span>
  </Link>
);

export default SideBar;
