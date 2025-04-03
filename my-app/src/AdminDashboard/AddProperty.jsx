import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AddProperty = () => {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/portfolio'); 
  };



  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Persistent Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Persistent Header */}
        <Header />  

        <div className="flex justify-center items-center p-7 md:p-5 bg-[#FFFFFF] rounded-2xl min-h-screen relative overflow-hidden">
    
        {/* Decorative Border */}
         <div className="absolute inset-1 border-[3px] border-[#E0E0E0] pointer-events-none rounded-lg"></div>

      {/* Back Button Box (Outside the form) */}
      <button className="absolute top-10 left-10 bg-[#FFFFFF] rounded-lg px-2 py-1 flex items-center cursor-pointer border-[2px] shadow-md"
      onClick={handleBackClick}
      > 
        <IoMdArrowDropleft className="text-xl text-gray-500 w-8 h-8" />
      </button>

      {/* Parent Container (Wraps only the form) */}
      <div className="bg-[#F9F9F9] px-7 py-7 rounded-3xl">
      <div className="bg-[#FEFEFE] p-6 rounded-xl shadow-md w-full max-w-5xl border-[3px] border-[#FEFEFE]">
        <h2 className="text-lg font-normal text-[#1D3F3F]">
          Fill in the form below to list your property and make it available to potential renters.
        </h2>
        <p className="text-[#627777] text-sm font-aeonik font-normal mt-8">
        Check the share box and type in the number of occupant if the warehouse space is a shared property
        </p>

        {/* Share Checkbox + Warehouse ID - Fixed at start */}
        <div className="flex justify-between items-center mt-5 border-b border-gray-200 py-3 w-full">
          <div className="flex items-center bg-gray-100 px-6 py-3">
           <input type="checkbox" id="share" className="w-5 h-5 border-[#AAAAAA]" />
           <label htmlFor="share" className="ml-2 text-[#1D3F3FDE] font-normal font-aeonik text-sm">Share</label>
          </div>
          <div className="text-2xl font-bold text-[#1D3F3F] font-aeonik">WB01</div>
        </div>

        {/* Form Fields */}
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-[#627777] font-normal font-aeonik text-base mb-1">Rent/Price <span className=" font-aeonik font-normal text-red-600 text-lg">*</span></label>
              <input type='number'
               className="w-full p-3 border rounded-lg bg-[#F3F3F3]"
               placeholder="#" />
            </div>

            <div>
              <label className="block text-[#627777] font-normal font-aeonik text-base mb-1">Warehouse Location <span className=" font-aeonik font-normal text-red-600 text-lg">*</span></label>
              <input type="text"
               className="w-full p-3 border rounded-lg bg-[#F3F3F3]" 
               placeholder="Enter Location" />
            </div>
          </div>

          <div className="mt-5">
            <div>
              <label className="block text-[#627777] font-normal font-aeonik text-base">Warehouse Size</label>
              <input 
               type="text"
               className="w-full p-3 border rounded-lg bg-[#F3F3F3] mt-1" 
               placeholder="Enter Size" />
            </div>
            <div>
              <label className="block text-[#627777] font-normal font-aeonik text-base mt-5">Intended Usage <span className=" font-aeonik font-normal text-red-600 text-lg text-center">*</span></label>
              <textarea 
              className="w-full p-3 border rounded-lg min-h-[120px] bg-[#F3F3F3]" 
              placeholder="Enter Usage" />
            </div>
          </div>
        </div>

        {/* Buttons */}
        {/* <div className="flex justify-end space-x-4 mt-8">
          <button className="px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-200">Cancel</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Property</button>
        </div> */}
      </div>
      </div>
    </div>
    </div>
  </div>
  );
};

export default AddProperty;
