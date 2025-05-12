import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogSlice } from "../redux/selectors/blog.selector";
import { getBlog } from "../redux/slices/blog.slice";
import { toast } from "react-toastify";
import { getItemFromLocalStorage } from "../utitlity/storage";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog } = useSelector(selectBlogSlice);
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/blogdetails");
  };

  useEffect(() => {
    if (id) {
      dispatch(getBlog(id)).unwrap();
    }
  }, [dispatch, id]);
  return (
    <div className="min-h-screen bg-white text-[rgb(26, 24, 24)] font-serif flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Fixed Back Link - Mobile Optimized */}
      <Link
        to="/blog"
        className="fixed top-20 left-0 md:top-1/4 text-[#00E5FF] p-3 md:p-4 transition-colors duration-300 flex flex-row gap-2 items-center justify-between bg-opacity-90 rounded-r-md md:shadow-none"
        style={{ zIndex: 1000 }}
      >
        <FaLongArrowAltLeft className="w-4 h-4 md:w-5 md:h-5" />
        <span className="font-aeonik font-normal text-sm md:text-lg">Back</span>
      </Link>

      {/* Blog Content Section */}
      <section className="mt-32 md:mt-16 px-4 md:max-w-[1325px] h-auto md:pl-28 py-6 md:py-10">
        <div className="flex  flex-row md:items-center justify-between">
          <h5 className="text-[#1D3F3FDE] font-normal font-yeseva text-xs md:text-[30px] tracking-normal">
            The Ultimate Guide to Renting a <br className="block md:hidden" />{" "}
            Warehouse Space
          </h5>
          <p className="text-[#1D3F3F75] font-aeonik font-normal text-sm md:text-base mt-2 md:mt-0">
            January 15, 2025
          </p>
        </div>

        <div className="mt-4">
          <img
            src="/Bookshelf.jpeg"
            alt="Warehouse Guide"
            className="w-full h-auto md:h-[392px] object-cover rounded-md"
          />
        </div>

        <div className="w-full mt-6">
          <p className="text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base">
            Renting a warehouse space is a crucial decision for businesses
            looking to store inventory, streamline logistics, or expand
            operations. The right warehouse can enhance efficiency, reduce
            costs, and support business growth. This guide walks you through the
            key factors to consider when renting a warehouse space.
          </p>

          <ol className="list-decimal pl-6 mt-6 space-y-4">
            <li className="text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base">
              <h6 className="font-semibold">Determine Your Needs</h6>
              <p className="mt-2">
                Before searching for a warehouse, assess your business
                requirements. Consider factors like size, storage capacity,
                accessibility, and special needs such as refrigeration or high
                ceilings for stacking inventory.
              </p>
            </li>

            <li className="text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base">
              <h6 className="font-semibold">Choose the Right Location</h6>
              <p className="mt-2">
                Location is critical when selecting a warehouse. It should be
                easily accessible for suppliers, employees, and delivery
                services. Proximity to highways, ports, or major distribution
                hubs can reduce transportation costs.
              </p>
            </li>

            <li className="text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base">
              <h6 className="font-semibold">Understand the Lease Terms</h6>
              <p className="mt-2">
                Warehouse leases vary in terms of duration, costs, and
                responsibilities. Look out for details like rent structure,
                maintenance fees, and lease flexibility to avoid unexpected
                expenses.
              </p>
            </li>

            <li className="text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base">
              <h6 className="font-semibold">Check the Facility's Condition</h6>
              <p className="mt-2">
                Inspect the warehouse for structural integrity, security
                features, lighting, ventilation, and compliance with safety
                regulations. A well-maintained facility reduces operational
                risks.
              </p>
            </li>

            <li className="text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base">
              <h6 className="font-semibold">Consider Future Scalability</h6>
              <p className="mt-2">
                As your business grows, so will your storage needs. Choose a
                warehouse that offers room for expansion or flexible lease terms
                that allow you to upgrade when needed.
              </p>
            </li>
          </ol>

          <div className="mt-6">
            <h6 className="text-[#1D3F3FDE] font-aeonik font-semibold text-sm md:text-base">
              Final Thoughts
            </h6>
            <p className="mt-2 text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base">
              Renting a warehouse is more than just finding a storage space—it's
              about securing a location that aligns with your business goals. By
              considering these factors, you can make an informed decision that
              supports your operations and future growth.
            </p>
            <p className="mt-4 text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base">
              Looking for the perfect warehouse space? Explore listings on
              Warebase today!
            </p>
          </div>
        </div>
      </section>

      {/* Recent Stories Section - 2 columns on mobile */}
      <section className="mt-16 md:mt-28 max-w-[1600px] mx-auto px-4 pb-10">
        <div className="mb-4 md:mb-6">
          <h4 className="text-[#1D3F3F] text-2xl md:text-[31px] font-aeonik font-bold">
            Recent stories
          </h4>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {/* Article Card 1 */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
            <img
              src="/max.jpeg"
              alt="Maximizing Warehouse Efficiency"
              className="w-full h-24 sm:h-32 md:h-48 object-cover"
            />
            <div className="bg-white p-3 md:p-4 flex flex-col flex-grow">
              <p className="text-xs md:text-sm text-[#1D3F3F75]">
                February 25, 2024
              </p>
              <p className="font-medium font-yeseva text-xs md:text-base text-[#1D3F3FDE] mt-1 md:mt-2">
                Maximizing Warehouse Efficiency: Tips for Businesses
              </p>
              <Link
                to="/blogdetails"
                className="text-[#1D3F3F] font-aeonik font-bold text-xs md:text-base mt-2 md:mt-4 block"
                onClick={handleReadMoreClick}
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Article Card 2 */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
            <img
              src="/phone.jpeg"
              alt="Shared Warehousing"
              className="w-full h-24 sm:h-32 md:h-48 object-cover"
            />
            <div className="bg-white p-3 md:p-4 flex flex-col flex-grow">
              <p className="text-xs md:text-sm text-[#1D3F3F75]">
                February 25, 2024
              </p>
              <p className="font-medium font-yeseva text-xs md:text-base text-[#1D3F3FDE] mt-1 md:mt-2">
                Shared Warehousing: A Cost-Effective Solution for Small
                Businesses
              </p>
              <Link
                to="/blogdetails"
                className="text-[#1D3F3F] font-aeonik font-bold text-xs md:text-sm mt-2 md:mt-4 block"
                onClick={handleReadMoreClick}
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Article Card 3 */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
            <img
              src="/key.jpeg"
              alt="Listing Your Warehouse"
              className="w-full h-24 sm:h-32 md:h-48 object-cover"
            />
            <div className="bg-white p-3 md:p-4 flex flex-col flex-grow">
              <p className="text-xs md:text-sm text-[#1D3F3F75]">
                February 25, 2024
              </p>
              <p className="font-medium font-yeseva text-xs md:text-base text-[#1D3F3FDE] mt-1 md:mt-2">
                How to List Your Warehouse for Rent and Attract Tenants Quickly
              </p>
              <Link
                to="/blogdetails"
                className="text-[#1D3F3F] font-aeonik font-bold text-xs md:text-sm mt-2 md:mt-4 block"
                onClick={handleReadMoreClick}
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Article Card 4 */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
            <img
              src="/board.jpeg"
              alt="Key Leasing Factors"
              className="w-full h-24 sm:h-32 md:h-48 object-cover"
            />
            <div className="bg-white p-3 md:p-4 flex flex-col flex-grow">
              <p className="text-xs md:text-sm text-[#1D3F3F75]">
                February 25, 2024
              </p>
              <p className="font-medium font-yeseva text-xs md:text-base text-[#1D3F3FDE] mt-1 md:mt-2">
                Key Factors to Consider Before Leasing a Warehouse
              </p>
              <Link
                to="/blogdetails"
                className="text-[#1D3F3F] font-aeonik font-bold text-xs md:text-sm mt-2 md:mt-4 block"
                onClick={handleReadMoreClick}
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
