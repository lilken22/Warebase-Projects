import React, { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import { PiSlidersHorizontalFill } from "react-icons/pi";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";
import {
  FaSyncAlt,
  FaChevronDown,
  FaPlus,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";
import TenureModal from "../components/TenureModal";
import OrderModal from "../components/OrderModal";

const properties = [
  {
    id: "WB01",
    image: "/property four.jpg",
    title: "Fidel Warehouse",
    price: "₦5,250,000/Month",
    status: "For Sale",
  },
  {
    id: "WB02",
    image: "/property five.jpg",
    title: "Fidel Warehouse",
    price: "₦5,250,000/Month",
    status: "For Rent",
  },
  {
    id: "WB03",
    image: "/property four.jpg",
    title: "Fidel Warehouse",
    price: "₦5,250,000/Month",
    status: "For Sale",
  },
  {
    id: "WB04",
    image: "/property five.jpg",
    title: "Fidel Warehouse",
    price: "₦5,250,000/Month",
    status: "For Rent",
  },
];

const PortfolioMobile = () => {
  const [selectedTab, setSelectedTab] = useState("listed");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [orderPosition, setOrderPosition] = useState({ top: 0, left: 0 });

  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const orderButtonRef = useRef(null);
  const tenureButtonRef = useRef(null);
  const orderModalRef = useRef(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDropdownToggle = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (tenureButtonRef.current) {
      const buttonRect = tenureButtonRef.current.getBoundingClientRect();
      console.log("Tenure button position:", buttonRect);
      setDropdownPosition({
        top: buttonRect.bottom + window.scrollY + 5, // Added small offset
        left: buttonRect.left + window.scrollX,
      });
    }
    setIsDropdownOpen(!isDropdownOpen);
    setIsOrderOpen(false); // Close order modal if open
  };

  const handleOrderToggle = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (orderButtonRef.current) {
      const buttonRect = orderButtonRef.current.getBoundingClientRect();
      console.log("Order button position:", buttonRect);
      setOrderPosition({
        top: buttonRect.bottom + window.scrollY + 5, // Added small offset
        left: buttonRect.left + window.scrollX,
      });
    }
    setIsOrderOpen(!isOrderOpen);
    setIsDropdownOpen(false); // Close tenure modal if open
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (orderModalRef.current && !orderModalRef.current.contains(event.target)) {
        setIsOrderOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[500px] pb-0">
        {/* Top Navbar */}
        <div className="flex items-center justify-between px-4 py-4 mt-7">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          <Menu size={24} className="text-gray-800" />
        </div>

        {/* Header and Tabs */}
        <div className="px-4">
          <div className="flex justify-between items-center mt-7">
            <h2 className="text-xl font-semibold text-gray-800">Properties</h2>
            <button
              onClick={() => navigate("/addproperty-mobile")}
              className="bg-[#00E5FF] text-white font-medium font-Poppins px-3 py-3 rounded-lg flex items-center"
            >
              <FaPlus className="mr-2" /> Add Property
            </button>
          </div>

          <div className="bg-[#F9F9F9] rounded-3xl px-3 py-4 mt-3">
            {/* Tabs */}
            <div className="flex items-center justify-between">
              <div className="flex bg-[#FFFFFF] border border-gray-200 rounded-full px-2 py-2 overflow-hidden">
                <TabButton
                  active={selectedTab === "Listed"}
                  onClick={() => setSelectedTab("Listed")}
                  count={160}
                >
                  Listed
                </TabButton>
                <TabButton
                  active={selectedTab === "Unlisted"}
                  onClick={() => setSelectedTab("Unlisted")}
                  count={40}
                >
                  Unlisted
                </TabButton>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-2 mt-5">
              <SearchBar />
              <button className="bg-[#FFFFFF] shadow-sm border border-gray-50 p-3 rounded-full">
                <PiSlidersHorizontalFill size={25} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 grid grid-cols-2 gap-4 mt-3">
          {properties.map((property) => (
            <div key={property.id} className="bg-gray-100 p-2 rounded-xl">
              {/* Image Block */}
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-36 w-full object-cover rounded-xl"
                />
                <span className="absolute top-0 left-0 bg-red-500 text-white text-[10px] font-medium px-3 py-1 rounded-bl-md">
                  {property.status}
                </span>
              </div>

              {/* White Card Block */}
              <div className="bg-white rounded-xl shadow-[#D3D3D340] p-3 mt-3">
                <h3 className="text-sm font-bold text-[#1D3F3F] font-aeonik">
                  {property.title}
                </h3>
                <p className="text-xs text-[#1D3F3F] font-aeonik font-normal mt-1">
                  {property.price}
                </p>
                <button className="text-[10px] text-[#1D3F3FDE] mt-1 font-normal font-aeonik underline">
                  See Description
                </button>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={50}
          onPageChange={handlePageChange}
        />

        <div className="flex justify-center items-center mt-4 rounded-lg relative">
          <div className="flex gap-2 bg-[#F9F9F9] rounded-full p-1 w-full max-w-[80%] border border-1">
            <FilterButton
              ref={tenureButtonRef}
              onClick={handleDropdownToggle}
              className="flex-1 flex justify-between items-center px-4"
            >
              Tenure <FaChevronDown className="ml-2" />
            </FilterButton>

            <FilterButton
              ref={orderButtonRef}
              onClick={handleOrderToggle}
              className="flex-1 flex justify-between items-center px-4"
            >
              Order <FaChevronDown className="ml-2" />
            </FilterButton>

            <button className="flex items-center justify-center bg-black text-white rounded-full px-4 py-2">
              <FaSyncAlt />
            </button>
          </div>

          {/* Modals */}
          {isDropdownOpen && (
            <TenureModal
              isOpen={isDropdownOpen}
              onClose={() => setIsDropdownOpen(false)}
              position={dropdownPosition || {} }
              ref={dropdownRef}
            />
          )}

          {isOrderOpen && (
            <OrderModal
              isOpen={isOrderOpen}
              onClose={() => setIsOrderOpen(false)}
              position={orderPosition}
              ref={orderModalRef}
            />
          )}
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
};

// Reusable Components
const TabButton = ({ active, onClick, count, children }) => (
  <button
    className={`px-3 py-3 text-sm font-bold font-aeonik rounded-full ${
      active ? "bg-[#1C1C1C] text-[#FFFFFF]" : "text-[#7B7B7B]"
    }`}
    onClick={onClick}
  >
    {children} {count}
  </button>
);

const FilterButton = React.forwardRef(
  ({ onClick, children, className = "", ...rest }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className={`py-3 flex items-center bg-[#FFFFFF] text-[#7B7B7B] rounded-full ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
);

const SearchBar = () => (
  <div className="p-2 rounded-full w-[400px] flex items-center">
    <div className="flex items-center bg-[#FFFFfF] shadow-sm px-3 py-3 border border-gray-100 rounded-full w-full">
      <input
        type="text"
        placeholder="Search property by name or ID"
        className="bg-transparent outline-none flex-grow text-[#CCCCCC] placeholder-[#CCCCCC] font-Poppins text-[10px]"
      />
      <button className="text-gray-600">
        <FaSearch />
      </button>
    </div>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center mt-6 gap-1 text-[12px]">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="p-2 px-2 rounded-md border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <FaChevronLeft className="text-[#1D3F3F]" size={12} />
    </button>

    {[1, 2, 3].map((page) => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-2 py-1 rounded-md border text-sm ${
          currentPage === page
            ? "bg-[#E2E8F0] text-[#1D3F3F]"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        {page}
      </button>
    ))}

    <span className="text-[#1D3F3F] px-1">...</span>

    <button
      onClick={() => onPageChange(totalPages)}
      className={`px-2 py-1 rounded-md border text-sm ${
        currentPage === totalPages
          ? "bg-[#E2E8F0] text-[#1D3F3F]"
          : "bg-white text-gray-600 hover:bg-gray-100"
      }`}
    >
      {totalPages}
    </button>

    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="p-2 px-2 rounded-md border bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <FaChevronRight className="text-[#1D3F3F]" size={12} />
    </button>
  </div>
);

export default PortfolioMobile;