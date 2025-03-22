import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyModal from "../components/PropertyModal";
import StateModal from "../components/StateModal";
import PriceModal from "../components/PriceModal";
import SizeModal from "../components/SizeModal";
import WarehouseFormModal from "../components/WarehouseFormModal"

import "../index.css";

export default function Listing() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isStateModalOpen, setIsStateModalOpen] = useState(false);
  const [stateModalPosition, setStateModalPosition] = useState({ top: 0, left: 0 });
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const [priceModalPosition, setPriceModalPosition] = useState({ top: 0, left: 0 });
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
  const [sizeModalPosition, setSizeModalPosition] = useState({ top: 0, left: 0 });
  const [isWarehouseFormModalOpen, setIsWarehouseFormModalOpen] = useState(false); // Corrected 
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const stateModalRef = useRef(null); // Define stateModalRef
  // const navigate = useNavigate();

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (stateModalRef.current && !stateModalRef.current.contains(event.target)) {
        setIsStateModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleStateModalToggle = (event) => {
    if (event.target) {
      const buttonRect = event.target.getBoundingClientRect();
      setStateModalPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }
    setIsStateModalOpen((prev) => !prev);
  };

  const handlePriceModalToggle = (event) => {
    if (event.target) {
      const buttonRect = event.target.getBoundingClientRect();
      setPriceModalPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }
    setIsPriceModalOpen((prev) => !prev);
  };

  const handleSizeModalToggle = (event) => {
    if (event.target) {
      const buttonRect = event.target.getBoundingClientRect();
      setSizeModalPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }
    setIsSizeModalOpen((prev) => !prev);
  };
  const handleWarehouseFormModalToggle = () => {
    setIsWarehouseFormModalOpen((prev) => !prev); // Corrected function name
  };

  // List of property images
  const propertyImages = [
    "/property one.jpg",
    "/property two.jpg",
    "/property three.jpg",
    "/property two.jpg",
    "/property three.jpg",
    "/property two.jpg",
    "/property one.jpg",
    "/property one.jpg",
    "/property one.jpg",
    "/property two.jpg",
    "/property three.jpg",
    "/property three.jpg",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="w-full max-w-6xl mx-auto p-4 rounded-md mt-20">
        {/* Filter Bar */}
        <div className="h-[131px] flex flex-col bg-orange-">
          <div className="h-[48px] w-[200px] flex items-center justify-between">
            <button className="bg-[#FFFFFF] w-[95px] h-[48px] rounded-tl-xl rounded-tr-xl py-[10px] px-[20px] gap-[10px] font-medium font-aeonik text-sm text-[#1D3F3F] shadow-sm">
              For Sale
            </button>
            <button className="w-[105px] h-[48px] rounded-tr-xl rounded-r-[1px] py-[10px] px-[20px] gap-[10px] bg-[#ECECEC] text-[#A6A6A6] text-sm font-aeonik font-normal">
              For Lease
            </button>
          </div>

          <div className="h-fit md:h-[83px] md:px-[25px] pr-[] bg-[#FFFFFF] shadow-lg inner-bar">
            <div className="grid grid-cols-2 md:flex md:flex-nowrap text-center justify-center flex-wrap gap-1 md:gap-0">
              {/* Property Type Dropdown */}
              <div className="h-[50px] w-full md:w-[210px] pr-4 bg-[#FFFFFF] shadow-md md:bg-[#FFFFFF] border-r border-gray-400 cards">
                <p className="text-base font-aeonik font-medium text-[#1D3F3FDE]">Property Type</p>
                <div className="flex justify-around items-center text-start w-full">
                  <div className="max-w-[90%] sm:max-w-full truncate text-xs md:text-sm text-[#CDCDCD] italic text-start">
                    Select Property Type
                  </div>
                  <button ref={buttonRef} onClick={handleDropdownToggle} className="w-[24px] h-[24px] flex justify-center items-center">
                    <p className="text-[#9F9F9F]">▼</p>
                  </button>
                </div>
              </div>

              {/* Location Dropdown */}
              <div className="h-[50px] w-full md:w-[210px] pr-4 bg-[#FFFFFF] shadow-md md:bg-[#FFFFFF] border-r border-gray-400 cards">
                <p className="text-base font-aeonik font-medium text-[#1D3F3FDE]">Location</p>
                <div className="flex justify-around">
                  <div className="max-w-[90%] sm:max-w-full truncate text-sm text-[#CDCDCD] italic">e.g Lagos, Abuja</div>
                  <button onClick={handleStateModalToggle} className="w-[24px] h-[24px] flex justify-center items-center">
                    <p className="text-[#9F9F9F]">▼</p>
                  </button>
                </div>
              </div>

              {/* Price Range Dropdown */}
              <div className="h-[50px] w-full md:w-[210px] pr-4 bg-[#FFFFFF] shadow-md md:bg-[#FFFFFF] border-r border-gray-400 cards">
                <p className="text-base font-aeonik font-medium text-[#1D3F3FDE]">Price Range</p>
                <div className="flex justify-around">
                  <div className="max-w-[90%] sm:max-w-full truncate text-sm text-[#CDCDCD] italic">Min.Price - Max.Price</div>
                  <button onClick={handlePriceModalToggle} className="w-[24px] h-[24px] flex justify-center items-center">
                    <p className="text-[#9F9F9F]">▼</p>
                  </button>
                </div>
              </div>

              {/* Size Range Dropdown */}
              <div className="h-[50px] w-full md:w-[210px] pr-4 bg-[#FFFFFF] shadow-md md:bg-[#FFFFFF] border-r border-gray-400 cards">
                <p className="text-base font-aeonik font-medium text-[#1D3F3FDE]">Size Range</p>
                <div className="flex justify-around items-baseline">
                  <div className="max-w-[90%] sm:max-w-full truncate text-sm text-[#CDCDCD] italic">Min.Size - Max.Size</div>
                  <button onClick={handleSizeModalToggle} className="w-[24px] h-[24px] flex justify-center items-center">
                    <p className="text-[#9F9F9F]">▼</p>
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 h-[50px] md:h-[100%] md:gap-1 md:flex md:flex-grow-0 md:w-[full] md:pl-2 md:px-4 mt-2 md:mt-2">
                <div>
                  <button className="bg-[#1C1C1C] text-[#FFFFFF] h-[35px] w-[85px] md:w-[120px] text-xs md:text-sm rounded-lg">
                    Reset Filter ↺
                  </button>
                </div>

                <div>
                  <button className="bg-[#0B97D1] text-[#FFFFFF] h-[35px] w-[80px] md:w-[120px] text-xs md:text-sm rounded-lg">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Property Modal (Imported) */}
          <PropertyModal
            isOpen={isDropdownOpen}
            onClose={() => setIsDropdownOpen(false)}
            position={dropdownPosition} // Pass position to PropertyModal
          />

          {/* States Modal (Imported) */}
          <StateModal
            ref={stateModalRef}
            isOpen={isStateModalOpen}
            onClose={() => setIsStateModalOpen(false)}
            position={stateModalPosition} // Pass position to StatesModal
          />

          {/* Price Modal (Imported) */}
          <PriceModal
            isOpen={isPriceModalOpen}
            onClose={() => setIsPriceModalOpen(false)}
            position={priceModalPosition}
          />

          {/* Size Modal (Imported) */}
          <SizeModal
            isOpen={isSizeModalOpen}
            onClose={() => setIsSizeModalOpen(false)}
            position={sizeModalPosition}
          />
        </div>

        {/* Grid Section */}
        <div className="bg-[#F4F4F4] px-5 rounded-md">
          <div className="grid grid-cols-1 gap-4 mt-24 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {propertyImages.map((image, index) => {
              const isFeatured = image.includes("property one.jpg") || image.includes("property two.jpg");

              return (
                <div key={index} className="border rounded-lg bg-[#FFFFFF] shadow-md overflow-hidden">
                  <div className="relative">
                    <img src={image} alt={`Property ${index + 1}`} className="w-full h-40 object-cover" />
                    {/* Red Button */}
                    <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {isFeatured ? "For Lease" : "For Sale"}
                    </span>
                    {/* Shared Badge - Fixed Position with Rotation */}
                    {isFeatured && (
                      <span className="absolute top-2 -right-3 bg-white text-[#1C1C1C] text-sm px-4 py-1 rounded shadow-md text-center font-aeonik custom-rotate">
                        Shared(4)
                      </span>
                    )}
                  </div>
                  <div className="p-4 leading-relaxed">
                    <p className="text-sm text-gray-600">
                      Property Name: <span className="font-yeseva font-normal text-sm">Property Name</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Property ID: <span className="font-yeseva font-normal text-sm">WB01</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Location: <span className="font-yeseva font-normal text-sm">Lagos</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Price: <span className="font-yeseva font-normal text-sm">₦5,250,000/Month</span>
                    </p>
                    <div className="mt-4 flex justify-between">
                      <Link
                        to={`/PropertyDetails/${index}`}
                        className="text-sm py-2 text-start text-gray-600 hover:underline rounded"
                      >
                        See Description
                      </Link>
                      <button
                        className="text-sm px-3 py-2 bg-black text-white rounded-full"
                        onClick={handleWarehouseFormModalToggle} // Open the modal
                      >
                        Get in touch
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
        {/* Warehouse Form Modal */}
      <WarehouseFormModal
        isOpen={isWarehouseFormModalOpen}
        onClose={handleWarehouseFormModalToggle}
      />
    </div>
  );
}