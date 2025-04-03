import React, { useState, useRef, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { 
  FaSyncAlt, 
  FaChevronDown, 
  FaPlus, 
  FaChevronLeft, 
  FaChevronRight, 
  FaSearch 
} from "react-icons/fa";
import TenureModal from "../components/TenureModal";
import OrderModal from "../components/OrderModal";


export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState("Listed");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [orderPosition, setOrderPosition] = useState({ top: 0, left: 0 });
  
  
  // Router hooks
  const navigate = useNavigate();
   const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const orderModalRef = useRef(null);
  
   // Function to toggle dropdown and set its position
  const handleDropdownToggle = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: buttonRect.bottom + window.scrollY, // Position below the button
        left: buttonRect.left + window.scrollX, // Align with the button
      });
    }
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOrderToggle = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setOrderPosition({
        top: buttonRect.bottom + window.scrollY, // Position below the button
        left: buttonRect.left + window.scrollX, // Align with the button
      });
    }
    setIsOrderOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
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

  // Handler functions
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Mock data for properties
  const properties = [
    { id: 1, image: "/property four.jpg", type: "For Sale", shared: false, name: "Fidel Warehouse", price: "₦5,250,000/Month" },
    { id: 2, image: "/property five.jpg", type: "For Rent", shared: false, name: "Fidel Warehouse", price: "₦5,250,000/Month" },
    { id: 3, image: "/property three.jpg", type: "For Lease", shared: true, name: "Fidel Warehouse", price: "₦5,250,000/Month" },
    { id: 4, image: "/property six.jpg", type: "For Sale", shared: false, name: "Fidel Warehouse", price: "₦5,250,000/Month" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Persistent Sidebar */}
      <Sidebar />

      <div className='flex-1 flex flex-col'>
        {/* Persistent Header */}
        <Header />

        {/* Main Content Area */}
        <div className='p-3 md:p-5 bg-[#F8F9FA] min-h-screen relative'>
          {/* Decorative Border */}
          <div className="absolute inset-1 border-[3px] border-[#E0E0E0] pointer-events-none rounded-lg"></div>
        
          {/* {showAddProperty ? (
            <AddProperty onClose={() => setShowAddProperty(false)} />
          ) : ( */}
            <div className='bg-white p-6 md:p-8 rounded-lg shadow-md w-full h-full mx-auto my-auto border-[3px] border-[#E0E0E0]'>
              {/* Action Bar Section */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-medium text-[#1D3F3F] font-aeonik">Property</h2>
                  <div className='flex bg-gray-100 rounded-full px-2 py-2 overflow-hidden'>
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

                <button
                 onClick={() => navigate('/add-property')}
                  className="bg-[#00E5FF] text-white font-medium font-Poppins px-4 py-4 rounded-lg flex items-center"
                >
                  <FaPlus className="mr-2" /> Add Property
                </button>
              </div>

              {/* Filter Controls */}
              <div className="w-full rounded-lg flex justify-between items-start mt-10">
                <div className="flex gap-2 bg-[#F9F9F9] rounded-full px-4 py-4">
                  <FilterButton ref={buttonRef} onClick={handleDropdownToggle}>
                    Tenure <FaChevronDown className="ml-2" />
                  </FilterButton>
                  <FilterButton ref={buttonRef} onClick={handleOrderToggle}>
                    Order <FaChevronDown className="ml-2" />
                  </FilterButton>
                  <button className="px-4 py-2 flex items-center bg-black text-white rounded-full">
                    Reset Filter <FaSyncAlt className="ml-2" />
                  </button>
                </div>

                <SearchBar />

                {/* Tenure Modal (Imported) */}
                <TenureModal
                  isOpen={isDropdownOpen}
                  onClose={() => setIsDropdownOpen(false)}
                  position={dropdownPosition} // Pass position to TenureModal
                />
                {/* Order Modal (Imported) */}
                <OrderModal
                  isOpen={isOrderOpen}
                  onClose={() => setIsOrderOpen(false)}
                  position={orderPosition} // Pass position to OrderModal
                />

              </div>

              {/* Property Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {properties.map(property => (
                  <PropertyCard 
                    key={property.id}
                    image={property.image}
                    type={property.type}
                    shared={property.shared}
                    name={property.name}
                    price={property.price}
                  />
                ))}
              </div>

              {/* Pagination */}
              <Pagination 
                currentPage={currentPage}
                totalPages={50}
                onPageChange={handlePageChange}
              />
            </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

// Reusable Components (keep these the same as in your original code)
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

const FilterButton = ({ onClick, children }) => (
  <button
    className="px-7 py-3 flex items-center bg-[#FFFFFF] text-[#7B7B7B] rounded-full"
    onClick={onClick}
  >
    {children}
  </button>
);

const SearchBar = () => (
  <div className="bg-gray-200 p-2 rounded-full w-[400px] flex items-center">
    <div className="flex items-center bg-white px-4 py-3 rounded-full w-full">
      <input
        type="text"
        placeholder="Search property by name or ID"
        className="bg-transparent outline-none flex-grow text-gray-700 placeholder-gray-500"
      />
      <button className="text-gray-600">
        <FaSearch />
      </button>
    </div>
  </div>
);

const PropertyCard = ({ image, type, shared, name, price }) => (
  <div className="bg-[#F9F9F9] p-4 rounded-lg shadow-md">
    <div className="relative rounded-xl overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover rounded-2xl"
      />
      <span className="absolute top-0 left-0 bg-[#F11414] text-white text-xs px-2 py-1 rounded">
        {type}
      </span>
      {shared && (
        <span className="absolute top-2 -right-3 bg-white text-[#1C1C1C] text-sm px-4 py-1 rounded shadow-md text-center font-aeonik custom-rotate">
          Shared
        </span>
      )}
    </div>

    <div className="bg-white p-4 rounded-2xl shadow-md mt-3">
      <p className="text-lg font-bold font-aeonik text-[#1D3F3F]">{name}</p>
      <p className="text-base font-aeonik font-normal text-[#1D3F3F]">{price}</p>
      <div className="mt-2">
        <Link to="#" className="text-sm text-[#1D3F3FDE] font-medium font-aeonik underline">
          See Description
        </Link>
      </div>
    </div>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center mt-12 space-x-2">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="p-2 px-4 rounded-md border border-gray-200 bg-[#FFFFFF] hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <FaChevronLeft className="text-[#1D3F3F]" />
    </button>

    {[1, 2, 3].map(page => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-4 py-1 rounded-md border border-gray-200 shadow-sm ${
          currentPage === page ? "bg-[#E2E8F0]" : "bg-[#FFFFFF] hover:bg-gray-100"
        }`}
      >
        {page}
      </button>
    ))}

    <span className="text-[#1D3F3F]">....</span>

    <button
      onClick={() => onPageChange(totalPages)}
      className={`px-4 py-1 rounded-md border border-gray-200 shadow-sm ${
        currentPage === totalPages ? "bg-[#E2E8F0]" : "bg-[#FFFFFF] hover:bg-gray-100"
      }`}
    >
      {totalPages}
    </button>

    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-4 py-2 rounded-md bg-[#FFFFFF] border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <FaChevronRight className="text-[#1D3F3F]" />
    </button>
  </div>
);


