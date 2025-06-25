import React, { useState } from "react";
import { Menu } from "lucide-react";
import BottomNav from "../components/BottomNav";
// import { useNavigate } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

// StatCard component definition
const StatCard = ({ title, value, icon }) => (
  <div className="flex items-center p-5 rounded-3xl bg-white shadow-lg">
    <span className="text-3xl mr-4">{icon}</span>
    <div>
      <p className="text-xs text-[#1D3F3F] font-aeonik font-normal">{title}</p>
      <h3 className="text-xl font-bold text-[#1D3F3F]">{value}</h3>
    </div>
  </div>
);

const properties = [
  {
    id: "WB01",
    image: "/property four.jpg",
    title: "Fidel Warehouse",
    price: "₦5,250,000/Month",
    status: "For Sale",
  },
  {
    id: "WB02",
    image: "/property five.jpg",
    title: "Fidel Warehouse",
    price: "₦5,250,000/Month",
    status: "For Rent",
  },
  {
    id: "WB03",
    image: "/property four.jpg",
    title: "Fidel Warehouse",
    price: "₦5,250,000/Month",
    status: "For Sale",
  },
  {
    id: "WB04",
    image: "/property five.jpg",
    title: "Fidel Warehouse",
    price: "₦5,250,000/Month",
    status: "For Rent",
  },
];

const OverviewMobile = () => {
  const [activeTab, setActiveTab] = useState("total");
  // const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[500px] pb-0">
        {/* Top Navbar */}
        <div className="flex items-center justify-between px-4 py-4 mt-7">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          <Menu size={24} className="text-gray-800" />
        </div>

        {/* Header and Tabs */}
        <div className="px-4">
          <div className="flex justify-between items-center mt-7">
            <h2 className="text-xl font-medium text-[#1D3F3F]">Overview</h2>
          </div>

          <div className="bg-[] rounded-3xl px-3 py-4 mt-3">
            {/* Property Stats Section */}
            <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-md mt-6">
              {/* Tab Selectors */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { key: "total", label: "Total Properties" },
                  { key: "sale", label: "Properties For Sale" },
                  { key: "lease", label: "Properties For Lease" },
                  { key: "shared", label: "Shared Properties" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-2 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === tab.key
                        ? "bg-black text-white text-xs"
                        : "bg-white text-[#1D3F3F] border border-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Stat Card - Shows only active tab */}
              <div>
                {{
                  total: (
                    <StatCard
                      title="Total Properties"
                      value="120"
                      icon={
                        <CgNotes className="text-[#00E5FF] text-5xl bg-[#FFEDE5] shadow-lg p-4 rounded-full" />
                      }
                    />
                  ),
                  sale: (
                    <StatCard
                      title="Properties For Sale"
                      value="21"
                      icon={
                        <CgNotes className="text-[#17F9B9] text-5xl bg-[#DEFFF6] shadow-lg p-4 rounded-full" />
                      }
                    />
                  ),
                  lease: (
                    <StatCard
                      title="Properties For Lease"
                      value="68"
                      icon={
                        <CgNotes className="text-[#1766F9] text-5xl bg-[#E4EDFF] p-4 rounded-full shadow-lg" />
                      }
                    />
                  ),
                  shared: (
                    <StatCard
                      title="Shared Properties"
                      value="31"
                      icon={
                        <CgNotes className="text-[#F9D717] text-5xl bg-[#FFFADD] p-4 rounded-full shadow-lg" />
                      }
                    />
                  ),
                }[activeTab]}
              </div>
            </div>
          </div>

          {/* Property Cards */}
          <div className="px-4 grid grid-cols-2 gap-4 mt-3">
            {properties.map((property) => (
              <div key={property.id} className="bg-gray-100 p-2 rounded-xl">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-36 w-full object-cover rounded-xl"
                    onError={(e) => {
                      e.target.src = '/fallback-image.jpg';
                    }}
                  />
                  <span className="absolute top-0 left-0 bg-red-500 text-white text-[10px] font-medium px-3 py-1 rounded-bl-md">
                    {property.status}
                  </span>
                </div>

                <div className="bg-white rounded-xl shadow-[#D3D3D340] p-3 mt-3">
                  <h3 className="text-sm font-bold text-[#1D3F3F] font-aeonik">
                    {property.title}
                  </h3>
                  <p className="text-xs text-[#1D3F3F] font-aeonik font-normal mt-1">
                    {property.price}
                  </p>
                  <button className="text-[10px] text-[#1D3F3FDE] mt-1 font-normal font-aeonik underline">
                    See Description
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Navigation */}
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default OverviewMobile;
