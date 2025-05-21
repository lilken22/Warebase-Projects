import React, {useEffect, useState} from 'react'
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";
import BottomNav from "../components/BottomNav";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogSlice } from "../redux/selectors/blog.selector";
import { getBlog, fetchLatestBlogs } from "../redux/slices/blog.slice";
import { toast } from "react-toastify";
import { getItemFromLocalStorage } from "../utitlity/storage";
import { useParams } from "react-router-dom";

function BlogDetailsMobile () {
  const navigate = useNavigate();
  const { id } = useParams();
    const dispatch = useDispatch();
    const { blog, latest } = useSelector(selectBlogSlice);

  const handleBackClick = () => {
    navigate("/blog-mobile"); 
  };

   useEffect(() => {
       if (id) {
         dispatch(getBlog(id)).unwrap();
         dispatch(fetchLatestBlogs()).unwrap();
       }
     }, [dispatch, id]);
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className='w-full max-w-[500px] pb-0'>
        {/* Top Navbar */}
        <div className="flex items-center justify-between px-4 py-4 mt-7">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          <Menu size={24} className="text-gray-800" />
        </div>

        <button
          onClick={handleBackClick}
          className="mt-2 bg-white rounded-lg px-2 py-1 flex items-center gap-1 ml-3 border border-gray-200 shadow-md hover:bg-gray-50 transition-colors"
        >
          <IoMdArrowDropleft className="text-3xl text-gray-500" />
          {/* <span className="text-sm text-gray-700">Back</span> */}
        </button>

        <section className="mt-2 px-4 py-6 h-auto">
          <div className="flex  flex-row justify-between items-center">
            <h5 className="text-[#1D3F3FDE] font-normal font-yeseva text-xs tracking-normal">
              {blog.title || 'The Ultimate Guide to Renting a Warehouse Space'}
            </h5>
            <p className="text-[#1D3F3F75] font-aeonik font-normal text-sm mt-2">
               {new Date(blog.date).toLocaleDateString() || "January 15, 2025"}
            </p>
          </div>

          <div className="mt-4">
            <img
              src="/Bookshelf.jpeg"
              alt="Warehouse Guide"
              className="w-full h-[174px] object-cover rounded-md"
            />
          </div>

          <div className="w-full mt-6">
            <p className="text-[#1D3F3FDE] font-aeonik font-normal text-sm ">
              Renting a warehouse space is a crucial decision for businesses
              looking to store inventory, streamline logistics, or expand
              operations. The right warehouse can enhance efficiency, reduce
              costs, and support business growth. This guide walks you through
              the key factors to consider when renting a warehouse space.
            </p>

            <ol className="list-decimal pl-6 mt-6 space-y-4">
              <li className="text-[#1D3F3FDE] font-aeonik font-normal text-sm ">
                <h6 className="font-semibold">Determine Your Needs</h6>
                <p className="mt-2">
                  Before searching for a warehouse, assess your business
                  requirements. Consider factors like size, storage capacity,
                  accessibility, and special needs such as refrigeration or high
                  ceilings for stacking inventory.
                </p>
              </li>

              <li className="text-[#1D3F3FDE] font-aeonik font-normal text-sm ">
                <h6 className="font-semibold">Choose the Right Location</h6>
                <p className="mt-2">
                  Location is critical when selecting a warehouse. It should be
                  easily accessible for suppliers, employees, and delivery
                  services. Proximity to highways, ports, or major distribution
                  hubs can reduce transportation costs.
                </p>
              </li>

              <li className="text-[#1D3F3FDE] font-aeonik font-normal text-sm ">
                <h6 className="font-semibold">Understand the Lease Terms</h6>
                <p className="mt-2">
                  Warehouse leases vary in terms of duration, costs, and
                  responsibilities. Look out for details like rent structure,
                  maintenance fees, and lease flexibility to avoid unexpected
                  expenses.
                </p>
              </li>

              <li className="text-[#1D3F3FDE] font-aeonik font-normal text-sm ">
                <h6 className="font-semibold">
                  Check the Facility's Condition
                </h6>
                <p className="mt-2">
                  Inspect the warehouse for structural integrity, security
                  features, lighting, ventilation, and compliance with safety
                  regulations. A well-maintained facility reduces operational
                  risks.
                </p>
              </li>

              <li className="text-[#1D3F3FDE] font-aeonik font-normal text-sm ">
                <h6 className="font-semibold">Consider Future Scalability</h6>
                <p className="mt-2">
                  As your business grows, so will your storage needs. Choose a
                  warehouse that offers room for expansion or flexible lease
                  terms that allow you to upgrade when needed.
                </p>
              </li>
            </ol>

            <div className="mt-6">
              <h6 className="text-[#1D3F3FDE] font-aeonik font-semibold text-sm ">
                Final Thoughts
              </h6>
              <p className="mt-2 text-[#1D3F3FDE] font-aeonik font-normal text-sm ">
                Renting a warehouse is more than just finding a storage
                space—it's about securing a location that aligns with your
                business goals. By considering these factors, you can make an
                informed decision that supports your operations and future
                growth.
              </p>
              <p className="mt-4 text-[#1D3F3FDE] font-aeonik font-normal text-sm">
                Looking for the perfect warehouse space? Explore listings on
                Warebase today!
              </p>
            </div>
             
            <div className="flex justify-evenly items-center px-4 mt-8 ">
              <button className="bg-black text-white px-16 py-2 rounded-full">Edit</button>
              <button className="text-[#1D3F3FDE] font-medium shadow-lg px-16 py-2 rounded-full bg-[#FFFFFF]">Delete</button>
            </div>            

          </div>
        </section>
 
        {/* Bottom Navigation */}
        <BottomNav />

      </div>
    </div>
  );
}

export default BlogDetailsMobile;
