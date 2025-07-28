import React from "react";
import { Menu } from "lucide-react";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";

const PropertyDetailsMobile = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // or navigate("/desired-route");
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[500px] pb-0">
        {/* Top Navbar */}
        <div className="flex items-center justify-between px-4 py-4 mt-7">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          <Menu size={24} className="text-gray-800" />
        </div>

        {/* Image Section */}
        <div className="px-4 mt-5">
          {/* Back Button - Now placed above the image */}
          <button
            onClick={handleBackClick}
            className="mt-2 bg-white rounded-lg px-2 py-1 flex items-center gap-1 border border-gray-200 shadow-md hover:bg-gray-50 transition-colors"
          >
            <IoMdArrowDropleft className="text-3xl text-gray-500" />
            {/* <span className="text-sm text-gray-700">Back</span> */}
          </button>

          {/* Main Image */}
          <div className="w-full relative">
            <img
              src="/property one.jpg"
              alt="Main Property"
              className="w-full h-auto max-h-[300px] object-cover rounded-xl"
            />
            <span className="absolute top-3 right-3 bg-white text-[#1C1C1C] text-xs px-3 py-1 rounded shadow-md font-semibold custom-rotate">
              Shared(4)
            </span>
            <span className="absolute top-0 left-0 bg-[#F00000] h-[40px] w-[120px] text-white text-sm px-4 py-2 rounded-bl-xl font-semibold">
              For Rent
            </span>
          </div>
        </div>

        {/* Property Details */}
        <div className="mt-8 px-4">
          <div className="flex flex-wrap items-center justify-between gap-x-4">
            <h6 className="text-lg font-serif font-normal text-gray-800">
              Fidel Warehouse (₦5,250,000) WB01
            </h6>
            <p className="text-xs text-gray-400">
              Date listed: <span className="text-gray-600">Jan 12, 2025</span>
            </p>
          </div>

          {/* Address & Contact */}
          {/* Address & Contact */}
          <div className="flex flex-wrap items-center justify-between gap-x-4 mt-3">
            <p className="text-sm text-gray-600 max-w-[300px]">
              45 Adeola Odeku Street, Victoria Island, Lagos, Nigeria.
            </p>
            <p className="text-sm text-gray-600">
              <span className="text-gray-300 mr-1">📞</span> +234 703 888 9412
            </p>
          </div>

          <hr className="my-6 border-gray-200 w-full" />

          {/* Description */}
          <div className="text-gray-700 space-y-4 text-sm">
            <p>Spacious 10,000 Sqft Warehouse for Rent in Ikeja, Lagos</p>
            <p>
              Located in the heart of Ikeja's industrial hub, this secure and
              well-maintained warehouse is perfect for storage, distribution,
              and logistics operations.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>High ceilings for efficient storage</li>
              <li>Wide entrance and loading bay</li>
              <li>24/7 security and CCTV surveillance</li>
              <li>Ample parking space</li>
              <li>Proximity to major roads and ports</li>
            </ul>
            <p>
              Ideal for manufacturers, wholesalers, and logistics companies.
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
};

export default PropertyDetailsMobile;
