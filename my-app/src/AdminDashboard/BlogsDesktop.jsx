import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import SortModal from "../components/SortModal";
import {
  FaSyncAlt,
  FaChevronDown,
  FaPlus,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";

export default function BlogsDesktop() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortPosition, setSortPosition] = useState({ top: 0, left: 0 });
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const sortModalRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSortToggle = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setSortPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }
    setIsSortOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortModalRef.current &&
        !sortModalRef.current.contains(event.target)
      ) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-3 md:p-5 bg-[#F8F9FA] min-h-screen relative">
          <div className="absolute inset-1 border-[3px] border-[#E0E0E0] pointer-events-none rounded-lg"></div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full h-full mx-auto my-auto border-[3px] border-[#E0E0E0]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-medium text-[#1D3F3F] font-aeonik">
                  Blog
                </h2>
              </div>
              <button
                onClick={() => navigate("/create-blog")}
                className="bg-[#00E5FF] text-white font-medium font-Poppins px-4 py-4 rounded-lg flex items-center"
              >
                <FaPlus className="mr-2" /> Create Blog
              </button>
            </div>

            <div className="w-full rounded-lg flex justify-between items-start mt-6">
              <div className="flex gap-2 bg-[#F9F9F9] rounded-full px-3 py-4">
                <FilterButton ref={buttonRef} onClick={handleSortToggle}>
                  Sort <FaChevronDown className="ml-2" />
                </FilterButton>
                <button className="px-4 py-2 flex items-center bg-black text-white rounded-full">
                  Reset Filter <FaSyncAlt className="ml-2" />
                </button>
              </div>

              <SearchBar />

              <SortModal
                isOpen={isSortOpen}
                onClose={() => setIsSortOpen(false)}
                position={sortPosition}
              />
            </div>

            {/* next code in here  which will appear before pagination*/}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 w-full mt-8">
              {/* Article Card 1 */}
              <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-full w-full">
                {/* Image Section */}
                <img
                  src="/max.jpeg"
                  alt="Maximizing Warehouse Efficiency"
                  className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
                />

                {/* Content Section */}
                <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
                  {/* Date */}
                  <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-0">
                    February 25, 2024
                  </p>

                  {/* Title */}
                  <p className="font-medium font-yeseva text-[8px] md:text-base text-[#1D3F3FDE] mt-1">
                    Maximizing Warehouse Efficiency: Tips for Businesses
                  </p>

                  {/* Read More Link */}
                  <Link
                    to="/see-details"
                    className="text-[#1D3F3F] font-aeonik font-normal text-[10px] md:text-sm mt-6 flex text-center items-center justify-start gap-3 underline"
                  >
                    See Details
                  </Link>
                </div>
              </div>

              {/* Article Card 2 */}
              <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-full w-full">
                <img
                  src="/phone.jpeg"
                  alt="Shared Warehousing"
                  className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
                />
                <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
                  {/* Date */}
                  <p className="text-[10px] md:text-sm text-[#1D3F3F75] md:mt-0">
                    February 25, 2024
                  </p>

                  {/* Title */}
                  <p className="font-medium font-yeseva text-[8px] md:text-base text-[#1D3F3FDE] mt-1">
                    Shared Warehousing: A Cost-Effective Solution for Small
                    Businesses
                  </p>

                  {/* Read More Link */}
                  <Link
                    to="/see-details"
                    className="text-[#1D3F3F] font-aeonik font-normal text-[10px] md:text-sm mt-auto flex text-center items-center justify-start gap-3 underline"
                  >
                    See Details
                  </Link>
                </div>
              </div>

              {/* Article Card 3 */}
              <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-full w-full">
                <img
                  src="/key.jpeg"
                  alt="Listing Your Warehouse"
                  className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
                />
                <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
                  {/* Date */}
                  <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-0">
                    February 25, 2024
                  </p>

                  {/* Title */}
                  <p className="font-medium font-yeseva text-[8px] md:text-base text-[#1D3F3FDE] mt-1">
                    How to List Your Warehouse for Rent and Attract Tenants
                    Quickly
                  </p>

                  {/* Read More Link */}
                  <Link
                    to="/see-details"
                    className="text-[#1D3F3F] font-aeonik font-normal text-[10px] md:text-sm mt-auto flex text-center items-center justify-start gap-3 underline"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
            {/* ends here */}

            <Pagination
              currentPage={currentPage}
              totalPages={50}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Components

const FilterButton = React.forwardRef(({ onClick, children }, ref) => (
  <button
    ref={ref}
    className="px-7 py-3 flex items-center bg-[#FFFFFF] text-[#7B7B7B] rounded-full"
    onClick={onClick}
  >
    {children}
  </button>
));

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

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center mt-12 space-x-2">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="p-2 px-4 rounded-md border border-gray-200 bg-[#FFFFFF] hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <FaChevronLeft className="text-[#1D3F3F]" />
    </button>

    {[1, 2, 3].map((page) => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-4 py-1 rounded-md border border-gray-200 shadow-sm ${
          currentPage === page
            ? "bg-[#E2E8F0]"
            : "bg-[#FFFFFF] hover:bg-gray-100"
        }`}
      >
        {page}
      </button>
    ))}

    <span className="text-[#1D3F3F]">....</span>

    <button
      onClick={() => onPageChange(totalPages)}
      className={`px-4 py-1 rounded-md border border-gray-200 shadow-sm ${
        currentPage === totalPages
          ? "bg-[#E2E8F0]"
          : "bg-[#FFFFFF] hover:bg-gray-100"
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
