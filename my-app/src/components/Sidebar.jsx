import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  IoExitOutline,
  IoCloseOutline,
  IoDocumentTextOutline
} from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { PiCirclesFourFill, PiBriefcaseMetalFill} from "react-icons/pi";


const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <main>
      {/* Mobile toggle button */}
      <button
        className="md:hidden p-2 rounded top-4 left-4 fixed z-50 bg-gray-500 border border-[#DEDEDE] text-[] shadow"
        onClick={toggleMenu}
      >
        {isOpen ? <IoCloseOutline size={24} /> : <CiMenuFries size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 md:hidden z-40"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-[#F9F9F9] text-[#9C9C9C] py-5 px-4 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block overflow-y-auto z-50`}
      >
        {/* Logo Section */}
        <div className="pb-4 flex items-center gap-3">
          <img 
            src="/logo.png" // Replace with your logo path
            alt="Dashboard Logo" 
            className="w-16 h-10"
          />
         
        </div>

        

        {/* Main Menu */}
        <div className="py-4 border-b border-gray-300 mt-10">
          <div className="text-xs  text-[#A8A8A9] uppercase tracking-wider font-aeonik font-medium mb-3">MAIN MENU</div>
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


        {/* System Section */}
        <div className="pt-4">
          <ul className="space-y-2">
            <SidebarLink 
              to="/settings" 
              icon={<FiSettings size={18} />} 
              label="Settings" 
              active={location.pathname === "/settings"}
            />
            <SidebarLink 
              to="/logout" 
              icon={<IoExitOutline size={18} />} 
              label="Logout" 
            />
          </ul>
        </div>

      

      </div>
    </main>
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

export default Sidebar;
