import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProperty } from "../redux/slices/property.slice";
import { selectPropertiesSlice } from "../redux/selectors/property.selector";
import { toast } from "react-toastify";
import { getItemFromLocalStorage } from "../utitlity/storage";
import { useParams } from "react-router-dom";

export default function DescriptionProperty() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { property } = useSelector(selectPropertiesSlice);
  console.log(property)

  const handleBackClick = () => {
    navigate("/portfolio");
  };
  useEffect(() => {
    if (id) {
      dispatch(getSingleProperty(id)).unwrap();
    }
  }, [dispatch, id]);
  return (
    <div className="min-h-screen bg-white flex">
      {/* Fixed Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Fixed Header */}
        <div className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-gray-200 z-10">
          <Header />
        </div>

        {/* Scrollable Content Area */}
        <main className="flex-1 pt-16 overflow-auto bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Content Container */}
            <div className="bg-white rounded-xl shadow-sm relative min-h-[calc(100vh-8rem)] w-full">
              {/* Decorative Border */}
              <div className="absolute inset-1 border border-gray-100 pointer-events-none rounded-lg"></div>

              {/* Back Button */}
              <button
                className="absolute top-5 left-5 bg-white rounded-lg px-2 py-1 flex items-center cursor-pointer border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                onClick={handleBackClick}
              >
                <IoMdArrowDropleft className="text-xl text-gray-500 w-6 h-6" />
              </button>

              {/* Property Content - Constrained Width */}
              <div
                className="px-8 py-12 mx-auto"
                style={{ maxWidth: "1100px" }}
              >
                {/* Images Section - Properly Aligned Width */}
                <div className="flex flex-col md:flex-row gap-4 w-full max-w-[1000px] mx-auto mt-5">
                  {/* Main Image - Properly Constrained */}
                  <div className="w-full md:w-3/4 relative">
                    <img
                      src="/property one.jpg"
                      alt="Main Property"
                      className="w-full h-auto max-h-[380px] object-cover rounded-xl"
                    />
                    {/* Shared Label */}
                    <span className="absolute top-5 right-0 bg-white text-[#1C1C1C] text-sm px-4 py-1 rounded shadow-md text-center font-aeonik custom-rotate font-bold">
                      Shared({property?.sharePropertyNumber})
                    </span>
                    {/* For Lease Label */}
                    <span className="absolute top-0 left-0 bg-[#F00000] h-[50px] w-[150px] text-[#FFFF] text-xl px-8 py-4 rounded font-aeonik font-bold">
                      For Rent
                    </span>
                  </div>

                  {/* Side Images - Properly Constrained */}
                  <div className="w-full md:w-1/4">
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

                {/* Property Details - Centered with Limited Width */}
                <div className="mt-8 mx-auto" style={{ maxWidth: "1000px" }}>
                  <div className="flex flex-wrap items-center justify-between gap-x-4">
                    <h6 className="text-lg font-serif font-normal text-gray-800">
                      {property?.propertyName}{" "}
                      {property.propertyPrice ?? "(₦5,250,000)"}{" "}
                      {property?.propertyId ?? "WB01"}
                    </h6>
                    <p className="text-xs text-gray-400">
                      Date listed:{" "}
                      <span className="text-gray-600">
                        {new Date(property.createdAt).toLocaleDateString() ??
                          "Jan 12, 2025"}
                      </span>
                    </p>
                  </div>

                  {/* Address & Contact */}
                  <div className="flex flex-wrap items-center justify-between gap-x-4 mt-3">
                    <p className="text-sm text-gray-600 max-w-[300px]">
                      {property?.location ??
                        "45 Adeola Odeku Street, Victoria Island, Lagos, Nigeria."}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="text-gray-300 mr-1">📞</span> +234 703
                      888 9412
                    </p>
                  </div>

                  <hr className="my-6 border-gray-200 w-full" />

                  {/* Property Description */}
                  <div className="text-gray-700 space-y-4 text-sm">
                    <p className="max-w-2xl">
                      {property?.description ??
                        "Spacious 10,000 Sqft Warehouse for Rent in Ikeja, Lagos"}
                    </p>
                    {/* <p className="max-w-2xl">
                      Located in the heart of Ikeja's industrial hub, this
                      secure and well-maintained warehouse is perfect for
                      storage, distribution, and logistics operations.
                    </p>
                    <ul className="list-disc list-inside space-y-2 max-w-2xl">
                      <li>High ceilings for efficient storage</li>
                      <li>Wide entrance and loading bay</li>
                      <li>24/7 security and CCTV surveillance</li>
                      <li>Ample parking space</li>
                      <li>Proximity to major roads and ports</li>
                    </ul>
                    <p className="max-w-2xl">
                      Ideal for manufacturers, wholesalers, and logistics
                      companies.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
