import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar"; 
import Header from "../components/Header"; 
import { Link, useNavigate } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import ListModal from '../components/ListModal';

const Overview = () => {
   const [listModalOpen, setListModalOpen] = useState(false);
   const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
   const [selectedPropertyId, setSelectedPropertyId] = useState(null);

   const navigate = useNavigate();
   const listModalRef = useRef(null);




   useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          listModalOpen && 
          !event.target.closest(".list-modal") && // Add this class to ListModal
          !event.target.closest(".Un-list-modal") && // Add this class to ListModal
          !event.target.closest(".three-dots-button") // Ignore the button that opens the modal
        ) {
          setListModalOpen(false);
        }
      };
    
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    
  
    const handleThreeDotsClick = (e, propertyId) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setSelectedPropertyId(propertyId);
      setModalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
      setListModalOpen(true);
    };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="p-3 md:p-5 bg-[#F8F9FA] min-h-screen relative">
          {/* Outer Border Effect */}
          <div className="absolute inset-1 border-[3px] border-[#E0E0E0] pointer-events-none rounded-lg"></div>

          {/* Content Wrapper - Extremely Close to the Outer Border */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-[100%] h-[100%] mx-auto my-auto border-[3px] border-[#E0E0E0]">
            {/* Header */}
            <h2 className="text-xl font-medium text-[#1D3F3F]">Overview</h2>

            {/* Property Stats (UNCHANGED AS PER YOUR REQUEST) */}
            <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-md mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Total Properties",
                    value: "120",
                    color: "bg-white",
                    icon: (
                      <CgNotes className="text-[#00E5FF] text-5xl bg-[#FFEDE5] shadow-lg p-4 rounded-full" />
                    ),
                  },
                  {
                    title: "Properties For Sale",
                    value: "21",
                    color: "bg-white",
                    icon: (
                      <CgNotes className="text-[#17F9B9] text-5xl bg-[#DEFFF6] shadow-lg p-4 rounded-full" />
                    ),
                  },
                  {
                    title: "Properties For Lease",
                    value: "68",
                    color: "bg-white",
                    icon: (
                      <CgNotes className="text-[#1766F9] text-5xl bg-[#E4EDFF] p-4 rounded-full shadow-lg" />
                    ),
                  },
                  {
                    title: "Shared Properties",
                    value: "31",
                    color: "bg-white",
                    icon: (
                      <CgNotes className="text-[#F9D717] text-5xl bg-[#FFFADD] p-4 rounded-full shadow-lg font-extrabold"/>
                    ),
                  },
                ].map((item, index) => (
                  <div key={index} className={`flex items-center p-5 rounded-3xl ${item.color} shadow-lg`}>
                    <span className="text-3xl mr-4">{item.icon}</span>
                    <div>
                      <p className="text-xs text-[#1D3F3F] font-aeonik font-normal">{item.title}</p>
                      <h3 className="text-xl font-bold text-[#1D3F3F]">{item.value}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Listed Properties */}
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Recent listed properties</h3>
                <Link to="/portfolio" className="text-[#1D3F3FDE] text-sm font-medium hover:underline">
                  View All
                </Link>
              </div>

            {/* Grid for Property Listings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              { image: "/property four.jpg", type: "For Sale", shared: false },
              { image: "/property five.jpg", type: "For Rent", shared: false },
              { image: "/property three.jpg", type: "For Lease", shared: true },
              { image: "/property six.jpg", type: "For Sale", shared: false },
            ].map((property, index) => (
            <div key={index} className="bg-[#F9F9F9] p-4 rounded-lg shadow-md">
            {/* Image Section */}
            <div className="relative rounded-xl overflow-hidden">
            <img
              src={property.image}
              alt={`Property ${index + 1}`}
              className="w-full h-52 object-cover rounded-2xl"
            />
            <span className="absolute top-0 left-0 bg-[#F11414] text-white text-xs px-2 py-1 rounded">
              {property.type}
            </span>
            {property.shared && (
            <span className="absolute top-2 -right-3 bg-white text-[#1C1C1C] text-sm px-4 py-1 rounded shadow-md text-center font-aeonik custom-rotate">
               Shared
            </span>
            )}
          </div>

              {/* Property Details */}
            <div className="bg-white p-4 rounded-2xl shadow-md mt-3">
             <div className="flex justify-between items-start">
             <div>
             <p className="text-lg font-bold font-aeonik text-[#1D3F3F]">Fidel Warehouse</p>
             </div>
               {/* Three Dots Button - Now aligned with text */}
              <button 
               className="text-[#1D3F3F] p-1 rounded-full"
               onClick={handleThreeDotsClick}
               >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
               </svg>
              </button>
             </div>
             <p className="text-base font-aeonik font-normal text-[#1D3F3F]">₦5,250,000/Month</p>

              {/* "See Description" Link */}
             <div className="mt-2">
              <Link
                to="/desciption-property"
                className="text-sm text-[#1D3F3FDE] font-medium font-aeonik underline"
              >
               See Description
              </Link>
            </div>
           </div>
           </div>
           ))}
           </div>
           <ListModal
             isOpen={listModalOpen}
             onClose={() => setListModalOpen(false)}
             position={modalPosition}
             propertyId={selectedPropertyId}
            />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
