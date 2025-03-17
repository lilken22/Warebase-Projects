import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif flex flex-col">
       {/* Navbar */}
            <Navbar />

    <div className="max-w-4xl mx-auto px-4 py-24">

      {/* Images Section */}
<div className="">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
    {/* Main Image */}
    <div className="w-full md:col-span-3 relative">
      <img
        src="/property one.jpg"
        alt="Main Property"
        className="w-full h-[380px] object-cover rounded-lg"
      />
      {/* Shared Label - Now Properly Positioned */}
      <span className="absolute top-4 -right-0 bg-white text-black text-xs px-2 py-1 rounded font-aeonik shadow-md rotate-[37deg] overflow-hidden">
        Shared (4)
      </span>
      {/* For Lease Label */}
      <span className="absolute top-0 left-0 bg-red-600 text-white text-xs px-3 py-2 rounded">
        For Lease
      </span>
    </div>

    {/* Side Images */}
    <div className="hidden sm:block">
    <div className="flex flex-col gap-3">
      <img
        src="/sideimage1.jpg"
        alt="Property 1"
        className="w-full h-[120px] object-cover rounded-lg"
      />
      <img
        src="/sideimage2.jpg"
        alt="Property 2"
        className="w-full h-[120px] object-cover rounded-lg"
      />
      <img
        src="/sideimage3.jpg"
        alt="Property 3"
        className="w-full h-[120px] object-cover rounded-lg"
      />
    </div>
  </div>
  </div>
</div>


      {/* Property Details */}
      <div className="mt-4">
      <div className="flex flex-wrap items-center justify-between gap-x-2 min-w-0">
        <h6 className="text-sm sm:text-xl font-yeseva font-normal text-[#1D3F3FDE] truncate">
          Fidel Warehouse (₦5,250,000) WB01
        </h6>
        <p className="text-sm text-gray-300 font-normal font-aeonik truncate">
         Date listed: <span className="font-normal font-aeonik text-gray-600">Jan 12, 2025</span>
        </p>
        </div>

            {/* Address & Contact */}
             <div className="flex items-center justify-between gap-x-3 w-full overflow-hidden mt-3">
             <p className="text-xs sm:text-sm text-[#627777DE] font-Aeonik font-normal whitespace-nowrap truncate shrink-0">
             45 Adeola Odeku Street, Victoria Island, Lagos, Nigeria.
             </p>
             <p className="text-xs sm:text-sm text-[#627777DE] whitespace-nowrap truncate shrink-0">
             <span className="text-[#6277774D] text-bg-primary">📞</span> +234 703 888 9412
             </p>
            </div>

        <hr className="my-4 border-gray-300" />
         
        <div>
        {/* Property Description */}
        <p className="text-[#627777DE]">
        Spacious 10,000 Sqft Warehouse for Rent in Ikeja, Lagos
        </p>
        <p className="text-[#627777DE]">
        Located in the heart of Ikeja’s industrial hub, this secure and well-maintained 10,000 sqft warehouse is perfect for storage, distribution, and logistics operations. The facility features:
        </p>
        <div className="mt-2">
          <ul className="list-disc list-inside text-[#627777DE] mt-2">
            <li>High ceilings for efficient storage</li>
            <li>Wide entrance and loading bay for easy truck access</li>
            <li>24/7 security and CCTV surveillance</li>
            <li>Ample parking space for trucks and staff</li>
            <li>Proximity to major roads and ports for seamless transportation</li>
          </ul>
        </div>
        <p className="text-[#627777DE]">
        Ideal for manufacturers, wholesalers, and logistics companies. Flexible lease terms available.
        </p>
        </div>
        {/* Action Button */}
        <div className="mt-12 flex justify-center md:justify-start">
        <button className="bg-black gap-[26px] text-white px-8 py-4 rounded-full hover:bg-gray-800">
          Get in touch
        </button>  
      </div>
      </div>
     </div>

     {/* Footer */}
          <Footer />
    </div>
  );
};

export default PropertyDetails;

