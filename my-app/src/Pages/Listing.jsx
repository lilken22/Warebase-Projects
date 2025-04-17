import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyModal from "../components/PropertyModal";
import StateModal from "../components/StateModal";
import PriceModal from "../components/PriceModal";
import SizeModal from "../components/SizeModal";
import WarehouseFormModal from "../components/WarehouseFormModal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { selectPropertiesSlice } from "../redux/selectors/property.selector";
import { fetchProperties } from "../redux/slices/property.slice";


  // data array moved here 
  const data = [
    {
      imageUrl: "/property one.jpg",
      propertyType: "unshared",
      location: "delta",
      priceRange: [30000, 40000],
      sizeRange: "",
      isForSale: true,
    },
    {
      imageUrl: "/property two.jpg",
      propertyType: "shared",
      location: "delta",
      priceRange: [30000, 40000],
      sizeRange: "",
      isForSale: false,
    },
    {
      imageUrl: "/property three.jpg",
      propertyType: "shared",
      location: "delta",
      priceRange: [30000, 40000],
      sizeRange: "",
      isForSale: false,
    },
    {
      imageUrl: "/property one.jpg",
      propertyType: "unshared",
      location: "delta",
      priceRange: [30000, 40000],
      sizeRange: "",
      isForSale: true,
    },
    {
      imageUrl: "/property two.jpg",
      propertyType: "shared",
      location: "delta",
      priceRange: [30000, 40000],
      sizeRange: "",
      isForSale: false,
    },
    {
      imageUrl: "/property one.jpg",
      propertyType: "unshared",
      location: "delta",
      priceRange: [30000, 40000],
      sizeRange: "",
      isForSale: true,
    },
    {
      imageUrl: "/property three.jpg",
      propertyType: "unshared",
      location: "delta",
      priceRange: [30000, 40000],
      sizeRange: "",
      isForSale: true,
    },
    {
      imageUrl: "/property two.jpg",
      propertyType: "shared",
      location: "delta",
      priceRange: [30000, 40000],
      sizeRange: "",
      isForSale: false,
    },
    {
      imageUrl: "/property three.jpg",
      propertyType: "shared",
      location: "delta",
      priceRange: [30000, 40000],
      sizeRange: "",
      isForSale: false,
    },
    {
      imageUrl: "/property two.jpg",
      propertyType: "unshared",
      location: "delta",
      priceRange: [30000, 40000],
      sizeRange: "",
      isForSale: true,
    },
    {
      imageUrl: "/property two.jpg",
      propertyType: "unshared",
      location: "delta",
      priceRange: [30000, 40000],
      sizeRange: "",
      isForSale: true,
    },
    {
      imageUrl: "/property three.jpg",
      propertyType: "shared",
      location: "delta",
      priceRange: [30000, 40000],
      sizeRange: "",
      isForSale: false,
    },
  ];

export default function Listing() {
  const {properties} = useSelector(selectPropertiesSlice)
  const dispatch = useDispatch()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isStateModalOpen, setIsStateModalOpen] = useState(false);
  const [stateModalPosition, setStateModalPosition] = useState({
    top: 0,
    left: 0,
  });
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const [priceModalPosition, setPriceModalPosition] = useState({
    top: 0,
    left: 0,
  });
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
  const [sizeModalPosition, setSizeModalPosition] = useState({
    top: 0,
    left: 0,
  });
  const [isWarehouseFormModalOpen, setIsWarehouseFormModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const stateModalRef = useRef(null);
  // const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [toggleData, setToggleData] = useState(true);
  const [propertyImages, setPropertyImages] = useState(properties ?? []);

  const handleDropdownToggle = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }
    setIsDropdownOpen((prev) => !prev);
  };

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
    setIsWarehouseFormModalOpen((prev) => !prev);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  

  const filterData = useCallback(() => {
    const result = properties?.filter((item) => item.isShared === toggleData);
    if (!result) return;
    setPropertyImages(result);
  }, [toggleData]); // include dependencies here

  useEffect(() => {
    filterData();
  }, [filterData]);

  useEffect(() => {
    setPropertyImages(properties);
  }, []);

  useEffect(() => {
    dispatch(fetchProperties()).unwrap();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900 font-serif flex flex-col">
        <Navbar />

        <div className="w-full mx-auto p-4 rounded-md mt-20">
          <div className="h-[131px] flex flex-col items-center">
            <div className="w-full max-w-[1200px]">
              <div className="h-[48px] w-[200px] flex items-center justify-between">
                <button
                  onClick={() => setToggleData(true)}
                  className={`${toggleData ? 'bg-[#FFFFFF]' : 'bg-[#ECECEC]'} w-[95px] h-[48px] rounded-tl-xl rounded-tr-xl py-[10px] px-[20px] gap-[10px] font-medium font-aeonik text-sm text-[#1D3F3F] shadow-sm`}
                >
                  {"For Sale"}
                </button>
                <button
                  onClick={() => setToggleData(false)}
                  className={`w-[105px] h-[48px] rounded-tr-xl rounded-r-[1px] py-[10px] px-[20px] gap-[10px] ${!toggleData ? 'bg-[#FFFFFF]' : 'bg-[#ECECEC]'} text-[#A6A6A6] text-sm font-aeonik font-normal`}
                >
                  {"For Lease"}
                </button>
              </div>

              <div className="h-fit md:h-[80px] bg-[#FFFFFF] rounded-xl shadow-lg inner-bar">
                <div className="grid grid-cols-2 md:flex md:flex-nowrap text-center justify-start flex-wrap gap-1 md:gap-0">
                  <div className="h-[80px] w-full md:w-[210px] pr-4 bg-[#FFFFFF] shadow-md md:bg-[#FFFFFF] relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 border-r border-gray-400"></div>
                    <p className="text-base font-aeonik font-medium text-[#1D3F3FDE] mt-4">
                      Property Type
                    </p>
                    <div className="flex justify-around items-center text-start w-full">
                      <div className="max-w-[90%] sm:max-w-full truncate text-xs md:text-sm text-[#CDCDCD] italic text-start">
                        Select Property Type
                      </div>
                      <button
                        ref={buttonRef}
                        onClick={handleDropdownToggle}
                        className="w-[24px] h-[24px] flex justify-center items-center"
                      >
                        <p className="text-[#9F9F9F]">▼</p>
                      </button>
                    </div>
                  </div>

                  <div className="h-[80px] w-full md:w-[210px] pr-4 bg-[#FFFFFF] shadow-md md:bg-[#FFFFFF] relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 border-r border-gray-400"></div>
                    <p className="text-base font-aeonik font-medium text-[#1D3F3FDE] mt-4">
                      Location
                    </p>
                    <div className="flex justify-around">
                      <div className="max-w-[90%] sm:max-w-full truncate text-sm text-[#CDCDCD] italic">
                        e.g Lagos, Abuja
                      </div>
                      <button
                        onClick={handleStateModalToggle}
                        className="w-[24px] h-[24px] flex justify-center items-center"
                      >
                        <p className="text-[#9F9F9F]">▼</p>
                      </button>
                    </div>
                  </div>

                  <div className="h-[80px] w-full md:w-[210px] pr-4 bg-[#FFFFFF] shadow-md md:bg-[#FFFFFF] relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 border-r border-gray-400"></div>
                    <p className="text-base font-aeonik font-medium text-[#1D3F3FDE] mt-4">
                      Price Range
                    </p>
                    <div className="flex justify-around">
                      <div className="max-w-[90%] sm:max-w-full truncate text-sm text-[#CDCDCD] italic">
                        Min.Price - Max.Price
                      </div>
                      <button
                        onClick={handlePriceModalToggle}
                        className="w-[24px] h-[24px] flex justify-center items-center"
                      >
                        <p className="text-[#9F9F9F]">▼</p>
                      </button>
                    </div>
                  </div>

                  <div className="h-[80px] w-full md:w-[210px] pr-4 bg-[#FFFFFF] shadow-md md:bg-[#FFFFFF] relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 border-r border-gray-400"></div>
                    <p className="text-base font-aeonik font-medium text-[#1D3F3FDE] mt-4">
                      Size Range
                    </p>
                    <div className="flex justify-around items-baseline">
                      <div className="max-w-[90%] sm:max-w-full truncate text-sm text-[#CDCDCD] italic">
                        Min.Size - Max.Size
                      </div>
                      <button
                        onClick={handleSizeModalToggle}
                        className="w-[24px] h-[24px] flex justify-center items-center"
                      >
                        <p className="text-[#9F9F9F]">▼</p>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 h-[50px] md:h-[100%] md:gap-1 md:flex md:flex-grow-0 md:w-[full] md:pl-2 md:px-4 mt-2 md:mt-4">
                    <div>
                      <button className="bg-[#1C1C1C] text-[#FFFFFF] h-[45px] w-[85px] md:w-[120px] text-xs md:text-sm rounded-lg">
                        Reset Filter ↺
                      </button>
                    </div>

                    <div>
                      <button className="bg-[#0B97D1] text-[#FFFFFF] h-[45px] w-[80px] md:w-[120px] text-xs md:text-sm rounded-lg">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <PropertyModal
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
                position={dropdownPosition}
              />

              <StateModal
                ref={stateModalRef}
                isOpen={isStateModalOpen}
                onClose={() => setIsStateModalOpen(false)}
                position={stateModalPosition}
              />

              <PriceModal
                isOpen={isPriceModalOpen}
                onClose={() => setIsPriceModalOpen(false)}
                position={priceModalPosition}
              />

              <SizeModal
                isOpen={isSizeModalOpen}
                onClose={() => setIsSizeModalOpen(false)}
                position={sizeModalPosition}
              />
            </div>
          </div>

          <div className="bg-[#F4F4F4] px-3 mx-auto rounded-md max-w-[1320px] items-center">
            <div className="max-w-[1300px]">
              <div className="grid grid-cols-1 gap-4 mt-16 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-start">
                {propertyImages.map((item, index) => (
                  <div
                    key={index}
                    className="md:w-[320px] border rounded-lg bg-[#FFFFFF] shadow-md overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={item.imageUrl}
                        alt={`Property ${index + 1}`}
                        className="w-full h-40 object-cover"
                      />
                      <span className="absolute top-0 left-0 bg-[#F11414] text-white text-xs px-2 py-1 rounded">
                        {item.isForSale ? "For Sale" : "For Lease"}
                      </span>
                      {item.propertyType === "shared" && (
                        <span className="absolute top-2 -right-3 bg-white text-[#1C1C1C] text-sm px-4 py-1 rounded shadow-md text-center font-aeonik custom-rotate">
                          Shared(4)
                        </span>
                      )}
                    </div>
                    <div className="p-4 leading-relaxed">
                      <p className="text-sm text-[#627777DE]">
                        Property Name:{" "}
                        <span className="font-yeseva font-light text-sm">
                          Property Name
                        </span>
                      </p>
                      <p className="text-sm text-[#627777DE]">
                        Property ID:{" "}
                        <span className="font-yeseva font-light text-sm">
                          WB01
                        </span>
                      </p>
                      <p className="text-sm text-[#627777DE]">
                        Location:{" "}
                        <span className="font-yeseva font-light text-sm">
                          Lagos
                        </span>
                      </p>
                      <p className="text-sm text-[#627777DE]">
                        Price:{" "}
                        <span className="font-yeseva font-light text-sm">
                          ₦5,250,000/Month
                        </span>
                      </p>
                      <div className="mt-4 flex justify-between">
                        <Link
                          to={`/PropertyDetails/${index}`}
                          className="text-sm py-2 text-start text-[#627777DE] hover:underline rounded"
                        >
                          See Description
                        </Link>
                        <button
                          className="text-sm px-3 py-2 bg-[#1C1C1C] text-[#FFFFFF] rounded-full"
                          onClick={handleWarehouseFormModalToggle}
                        >
                          Get in touch
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 px-4 rounded-md border border-gray-200 bg-[#FFFFFF] hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="text-[#1D3F3F]" />
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-1 rounded-md border border-gray-200 shadow-sm ${
                  currentPage === page
                    ? "bg-[#E2E8F0] text-[#021816]"
                    : "bg-[#FFFFFF] text-[#021816] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <span className="text-[#1D3F3F]">....</span>

            <button
              onClick={() => handlePageChange(50)}
              className={`px-4 py-1 rounded-md border border-gray-200 shadow-sm ${
                currentPage === 50
                  ? "bg-[#E2E8F0] text-[#021816]"
                  : "bg-[#FFFFFF] text-[#021816] hover:bg-gray-100"
              }`}
            >
              50
            </button>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === 50}
              className="px-4 py-2 rounded-md bg-[#FFFFFF] border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="text-[#1D3F3F]" />
            </button>
          </div>
        </div>

        <Footer />

        <WarehouseFormModal
          isOpen={isWarehouseFormModalOpen}
          onClose={handleWarehouseFormModalToggle}
        />
      </div>
    </>
  );
}