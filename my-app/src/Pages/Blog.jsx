import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for previous and next

export default function Blog() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page

  const handleReadMoreClick = () => {
    navigate("/blogdetails");
  };

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white text-[rgb(26, 24, 24)] font-serif flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      <section className="py-20 px-4 md:px-12 lg:px-16 mt-16">
        {/* Section Title */}
        <h2 className="text-[20px] md:text-[57px] font-normal font-yeseva text-[#1D3F3F] text-center mb-0">
          Blog
        </h2>
        <p className="text-center text-[#1D3F3F] font-normal font-yeseva text-sm md:text-lg mb-8">
          Stay up-to-date with industry trends.
        </p>

        {/* Featured Blog Post */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-12">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src="/Bookshelf.jpeg"
              alt="Warehouse Guide"
              className="w-full h-[330px] object-cover rounded-l-md"
            />
          </div>

          {/* Content Section (Joined with Image) */}
          <div className="flex-1 flex flex-col bg-[#FFFFFF] shadow-md rounded-r-md w-full h-[330px] flex-shrink-0 justify-between p-6 sm:p-8">
            {/* Title */}
            <h3 className="text-xl md:text-3xl font-medium font-yeseva text-[#1D3F3F]">
              The Ultimate Guide to Renting a
              <br className="hidden sm:inline" /> Warehouse Space
            </h3>

            {/* Description */}
            <p className="text-[#627777] text-sm md:text-base font-normal font-aeonik leading-relaxed">
              Finding the right warehouse can be overwhelming.
              <br className="hidden sm:inline" />
              This guide walks you through key factors like location, size,
              <br className="hidden sm:inline" />
              and costs to help you make the best decision.
            </p>

            {/* Date */}
            <p className="text-sm text-[#1D3F3F75] md:text-base font-normal font-aeonik">
              January 15, 2025
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
              {/* Read More Button */}
              <button
                className="px-10 py-4 bg-[#1C1C1C] text-white rounded-full text-sm font-semibold hover:bg-[#1D3F3F75] transition"
                onClick={handleReadMoreClick}
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* "Our Stories" Heading */}
        <div className="mb-6">
          <h4 className="text-[#1D3F3F] text-[31px] font-aeonik font-bold">
            Our stories
          </h4>
        </div>

        {/* Grid of Articles */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Article Card 1 */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-[190px] md:h-[440px] w-[170px] md:w-[330px]">
            {/* Image Section */}
            <img
              src="/max.jpeg"
              alt="Maximizing Warehouse Efficiency"
              className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
            />

            {/* Content Section */}
            <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
              {/* Date */}
              <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-3">
                February 25, 2024
              </p>

              {/* Title */}
              <p className="font-medium font-yeseva text-[8px] md:text-lg text-[#1D3F3FDE] mt-2">
                Maximizing Warehouse Efficiency: Tips for Businesses
              </p>

              {/* Read More Link */}
              <Link
                to="/blogdetails"
                className="text-[#1D3F3F] font-aeonik font-bold text-[10px] md:text-lg mt-auto block"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Article Card 2 */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-[190px] md:h-[440px] w-[170px] md:w-[330px]">
            <img
              src="/phone.jpeg"
              alt="Shared Warehousing"
              className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
            />
            <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
              {/* Date */}
              <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-3">
                February 25, 2024
              </p>

              {/* Title */}
              <p className="font-medium font-yeseva text-[8px] md:text-lg text-[#1D3F3FDE] mt-2">
                Shared Warehousing: A Cost-Effective Solution for Small
                Businesses
              </p>

              {/* Read More Link */}
              <Link
                to="/blogdetails"
                className="text-[#1D3F3F] font-aeonik font-bold text-[10px] md:text-lg mt-auto block"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Article Card 3 */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-[190px] md:h-[440px] w-[170px] md:w-[330px]">
            <img
              src="/key.jpeg"
              alt="Listing Your Warehouse"
              className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
            />
            <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
              {/* Date */}
              <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-3">
                February 25, 2024
              </p>

              {/* Title */}
              <p className="font-medium font-yeseva text-[8px] md:text-lg text-[#1D3F3FDE] mt-2">
                How to List Your Warehouse for Rent and Attract Tenants Quickly
              </p>

              {/* Read More Link */}
              <Link
                to="/blogdetails"
                className="text-[#1D3F3F] font-aeonik font-bold text-[10px] md:text-lg mt-auto block"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Article Card 4 */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-[190px] md:h-[440px] w-[170px] md:w-[330px]">
            <img
              src="/board.jpeg"
              alt="Key Factors for Leasing"
              className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
            />
            <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
              {/* Date */}
              <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-3">
                February 25, 2024
              </p>

              {/* Title */}
              <p className="font-medium font-yeseva text-[8px] md:text-lg text-[#1D3F3FDE] mt-2">
                Key Factors to Consider Before Leasing a Warehouse
              </p>

              {/* Read More Link */}
              <Link
                to="/blogdetails"
                className="text-[#1D3F3F] font-aeonik font-bold text-[10px] md:text-lg mt-auto block"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Article Card 5 */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-[190px] md:h-[440px] w-[170px] md:w-[330px]">
            {/* Image Section */}
            <img
              src="/max.jpeg"
              alt="Maximizing Warehouse Efficiency"
              className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
            />

            {/* Content Section */}
            <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
              {/* Date */}
              <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-3">
                February 25, 2024
              </p>

              {/* Title */}
              <p className="font-medium font-yeseva text-[8px] md:text-lg text-[#1D3F3FDE] mt-2">
                Maximizing Warehouse Efficiency: Tips for Businesses
              </p>

              {/* Read More Link */}
              <Link
                to="/blogdetails"
                className="text-[#1D3F3F] font-aeonik font-bold text-[10px] md:text-lg mt-auto block"
              >
                Read More →
              </Link>
            </div>
          </div>

           {/* Article Card 6 */}
           <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-[190px] md:h-[440px] w-[170px] md:w-[330px]">
            <img
              src="/phone.jpeg"
              alt="Shared Warehousing"
              className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
            />
            <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
              {/* Date */}
              <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-3">
                February 25, 2024
              </p>

              {/* Title */}
              <p className="font-medium font-yeseva text-[8px] md:text-lg text-[#1D3F3FDE] mt-2">
                Shared Warehousing: A Cost-Effective Solution for Small
                Businesses
              </p>

              {/* Read More Link */}
              <Link
                to="/blogdetails"
                className="text-[#1D3F3F] font-aeonik font-bold text-[10px] md:text-lg mt-auto block"
              >
                Read More →
              </Link>
            </div>
          </div>

                  {/* Article Card 7 */}
                  <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-[190px] md:h-[440px] w-[170px] md:w-[330px]">
            <img
              src="/key.jpeg"
              alt="Listing Your Warehouse"
              className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
            />
            <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
              {/* Date */}
              <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-3">
                February 25, 2024
              </p>

              {/* Title */}
              <p className="font-medium font-yeseva text-[8px] md:text-lg text-[#1D3F3FDE] mt-2">
                How to List Your Warehouse for Rent and Attract Tenants Quickly
              </p>

              {/* Read More Link */}
              <Link
                to="/blogdetails"
                className="text-[#1D3F3F] font-aeonik font-bold text-[10px] md:text-lg mt-auto block"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Article Card 8 */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-[190px] md:h-[440px] w-[170px] md:w-[330px]">
            <img
              src="/board.jpeg"
              alt="Key Factors for Leasing"
              className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
            />
            <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
              {/* Date */}
              <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-3">
                February 25, 2024
              </p>

              {/* Title */}
              <p className="font-medium font-yeseva text-[8px] md:text-lg text-[#1D3F3FDE] mt-2">
                Key Factors to Consider Before Leasing a Warehouse
              </p>

              {/* Read More Link */}
              <Link
                to="/blogdetails"
                className="text-[#1D3F3F] font-aeonik font-bold text-[10px] md:text-lg mt-auto block"
              >
                Read More →
              </Link>
            </div>
          </div>

        </div>

        {/* Pagination Section */}
        <div className="flex justify-center items-center mt-12 space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 px-4 rounded-md border border-gray-200 bg-[#FFFFFF] hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronLeft className="text-[#1D3F3F]" />
          </button>

          {/* Page Numbers */}
          {[1, 2, 3 ].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-1 rounded-md  border border-gray-200 shadow-sm ${
                currentPage === page
                  ? "bg-[#E2E8F0] text-[#021816]"
                  : "bg-[#FFFFFF] text-[#021816] hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Ellipsis */}
          <span className="text-[#1D3F3F]">....</span>

          {/* Last Page */}
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

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === 50}
            className="px-4 py-2 rounded-md bg-[#FFFFFF] border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronRight className="text-[#1D3F3F]" />
          </button>
        </div>


      </section>

      {/* Stay Up to Date Section */}
      <section className="py-16 px-4 text-center bg-white">
        {/* Heading */}
        <h2 className="md:text-[57px] font-normal text-[#1D3F3F] font-yeseva mb-2">
          Stay up to date
        </h2>
        <p className="text-[#1D3F3F] max-w-xl mx-auto font-aeonik md:text-lg font-normal">
          Subscribe to our newsletter for industry insights, expert tips, and
          exclusive updates on warehouse rentals, leasing, and sharing
          opportunities!
        </p>

        {/* Input and Button Container with Background Image */}
        <div
          className="flex justify-center items-center mt-12 bg-center bg-[length:370px_120px] md:bg-[length:1100px_300px] h-[120px] md:h-[300px]"
          style={{
            backgroundImage: "url(/STAY.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative w-full max-w-[300px] md:max-w-[700px] px-4">
            {/* Input Field */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 pr-20 border border-gray-300 rounded-2xl focus:outline-none text-sm md:text-base h-10 md:h-16"
            />
            {/* Subscribe Button Inside Input */}
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition w-[90px] md:w-[190px] text-sm md:text-lg h-10 md:h-16"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}