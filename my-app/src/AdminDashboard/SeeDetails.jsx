import React from 'react'
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { IoMdArrowDropleft } from "react-icons/io";

export default function SeeDetails() {
    const navigate = useNavigate(); 
   
     const handleBackClick = () => {
       navigate('/blogs'); 
    };

  return (
    <div className='flex min-h-screen bg-[#F8F9FA]'>
      {/* Persistent Sidebar */}
      <Sidebar />

      <div className='flex-1 flex flex-col'>
        {/* Persistent Header */}
        <Header /> 

        <div className='flex justify-center items-center p-7 md:p-5 bg-[#FFFFFF] rounded-2xl min-h-screen relative overflow-hidden'>
          {/* Decorative Border */}
          <div className="absolute inset-1 border-[3px] border-[#E0E0E0] pointer-events-none rounded-lg"></div>
          
          {/* Back Button Box (Outside the form) */}
          <button 
            className="absolute top-10 left-10 bg-[#FFFFFF] rounded-lg px-2 py-1 flex items-center cursor-pointer border-[2px] shadow-md"
            onClick={handleBackClick}
          > 
            <IoMdArrowDropleft className="text-xl text-gray-500 w-8 h-8" />
          </button>

          {/* Blog Content Section - Now aligned with back button */}
          <section className='mt-32 md:mt-16 w-full pl-10 pr-4 md:pl-20 md:pr-20 py-6 md:py-10'>
            <div className='flex flex-row md:items-center justify-between'>
              <h5 className='text-[#1D3F3FDE] font-normal font-yeseva text-xs md:text-[30px] tracking-normal'>
                Maximizing Warehouse Efficiency: Tips for Businesses
              </h5>
              <p className='text-[#1D3F3F75] font-aeonik font-normal text-sm md:text-base mt-2 md:mt-0'>
                January 15, 2025
              </p>
            </div>

            {/* Full-width image container */}
            <div className="mt-4 w-full ">
              <img
                src="/max.jpeg"
                alt="Warehouse Guide"
                className="w-full h-auto md:h-[392px] object-cover rounded-md"
              />
            </div>

            {/* Content container */}
            <div className='w-full mt-6'>
              <p className='text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base'>
                Renting a warehouse space is a crucial decision for businesses looking to store inventory, streamline logistics, or expand operations. The right warehouse can enhance efficiency, reduce costs, and support business growth. This guide walks you through the key factors to consider when renting a warehouse space.
              </p>

              <ol className='list-decimal pl-6 mt-6 space-y-4'>
                <li className='text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base'>
                  <h6 className='font-semibold'>Determine Your Needs</h6>
                  <p className='mt-2'>
                    Before searching for a warehouse, assess your business requirements. Consider factors like size, storage capacity, accessibility, and special needs such as refrigeration or high ceilings for stacking inventory.
                  </p>
                </li>

                <li className='text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base'>
                  <h6 className='font-semibold'>Choose the Right Location</h6>
                  <p className='mt-2'>
                    Location is critical when selecting a warehouse. It should be easily accessible for suppliers, employees, and delivery services. Proximity to highways, ports, or major distribution hubs can reduce transportation costs.
                  </p>
                </li>

                <li className='text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base'>
                  <h6 className='font-semibold'>Understand the Lease Terms</h6>
                  <p className='mt-2'>
                    Warehouse leases vary in terms of duration, costs, and responsibilities. Look out for details like rent structure, maintenance fees, and lease flexibility to avoid unexpected expenses.
                  </p>
                </li>

                <li className='text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base'>
                  <h6 className='font-semibold'>Check the Facility's Condition</h6>
                  <p className='mt-2'>
                    Inspect the warehouse for structural integrity, security features, lighting, ventilation, and compliance with safety regulations. A well-maintained facility reduces operational risks.
                  </p>
                </li>

                <li className='text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base'>
                  <h6 className='font-semibold'>Consider Future Scalability</h6>
                  <p className='mt-2'>
                    As your business grows, so will your storage needs. Choose a warehouse that offers room for expansion or flexible lease terms that allow you to upgrade when needed.
                  </p>
                </li>
              </ol>

              <div className='mt-6'>
                <h6 className='text-[#1D3F3FDE] font-aeonik font-semibold text-sm md:text-base'>
                  Final Thoughts
                </h6>
                <p className='mt-2 text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base'>
                  Renting a warehouse is more than just finding a storage space—it's about securing a location that aligns with your business goals. By considering these factors, you can make an informed decision that supports your operations and future growth.
                </p>
                <p className='mt-4 text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base'>
                  Looking for the perfect warehouse space? Explore listings on Warebase today!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
