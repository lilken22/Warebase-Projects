import React,  { useState } from "react";
import { PiSlidersHorizontalFill } from "react-icons/pi";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav";
import { FaPlus, FaChevronLeft, FaChevronRight, FaSearch} from "react-icons/fa";


export default function BlogMobile() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[500px] pb-0">
        {/* Top Navbar */}
        <div className="flex items-center justify-between px-4 py-4 mt-7">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          <Menu size={24} className="text-gray-800" />
        </div>

        <div className="px-4">
          <div className="flex justify-between items-center mt-7">
            <h2 className="text-xl font-semibold text-gray-800">Blog</h2>
            <button
              onClick={() => navigate("/createblog-mobile")}
              className="bg-[#00E5FF] text-white font-medium font-Poppins px-3 py-3 rounded-lg flex items-center"
            >
              <FaPlus className="mr-2" /> Create Blog
            </button>
          </div>

          <div className="bg-[#F9F9F9] rounded-3xl px-3 py-4 mt-3">
            {/* Search and Filter */}
            <div className="flex items-center gap-2 mt-5">
              <SearchBar />
              <button className="bg-[#FFFFFF] shadow-sm border border-gray-50 p-3 rounded-full">
                <PiSlidersHorizontalFill size={25} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* blog cards start here*/}
        <div className="grid grid-cols-2 gap-3 w-full mt-4 px-2">
          {/* Article Card 1 */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-full w-full">
            {/* Image Section */}
            <img
              src="/max.jpeg"
              alt="Maximizing Warehouse Efficiency"
              className="w-full h-[120px] object-cover"
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
              className="w-full h-[120px] object-cover"
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
              className="w-full h-[120px] object-cover"
            />
            <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
              {/* Date */}
              <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-0">
                February 25, 2024
              </p>

              {/* Title */}
              <p className="font-medium font-yeseva text-[8px] md:text-base text-[#1D3F3FDE] mt-1">
                How to List Your Warehouse for Rent and Attract Tenants Quickly
              </p>

              {/* Read More Link */}
              <Link
                to="/see-details"
                className="text-[#1D3F3F] font-aeonik font-normal text-[10px] md:text-sm flex text-center items-center justify-start gap-3 underline mt-6"
              >
                See Details
              </Link>
            </div>
            </div>

          {/* Article Card 4 */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-full w-full">
            <img
              src="/board.jpeg"
              alt="Listing Your Warehouse"
              className="w-full h-[120px] object-cover"
            />
            <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
              {/* Date */}
              <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-0">
                February 25, 2024
              </p>

              {/* Title */}
              <p className="font-medium font-yeseva text-[8px] md:text-base text-[#1D3F3FDE] mt-1">
              Key Factors to Consider Before Leasing a Warehouse
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

        {/* blog cards end here  */}

        <Pagination
          currentPage={currentPage}
          totalPages={50}
          onPageChange={handlePageChange}
        />

          {/* Bottom Navigation */}
        <BottomNav />

      </div>
    </div>
  );
}

const SearchBar = () => (
  <div className=" p-2 rounded-full w-full flex items-center">
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

