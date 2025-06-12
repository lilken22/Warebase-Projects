import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import ListModal from "../components/ListModal";
import { useDispatch, useSelector } from "react-redux";
import { selectDashboardSlice } from "../redux/selectors/dashboard.selector";
import { fetchLatestProperties, fetchAllTotalProperties, fetchLeaseProperties, fetchSaleProperties, fetchSharedProperties } from "../redux/slices/dashboard.slice";
// import { toast } from "react-toastify";
// import { getItemFromLocalStorage } from "../utitlity/storage";

{
  /* // StatCard component for cleaner code */
}
const StatCard = ({ title, value, icon }) => (
  <div className="flex items-center p-5 rounded-3xl bg-white shadow-lg">
    <span className="text-3xl mr-4">{icon}</span>
    <div>
      <p className="text-xs text-[#1D3F3F] font-aeonik font-normal">{title}</p>
      <h3 className="text-xl font-bold text-[#1D3F3F]">{value}</h3>
    </div>
  </div>
);

const OverviewDesktop = () => {
  const { totalProperties, totalLeaseProperties, totalSharedProperties, totalSaleProperties, latestProperties} = useSelector(selectDashboardSlice);
  const dispatch = useDispatch();
  const [listModalOpen, setListModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("total");

   //   const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
   //   const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  //  const navigate = useNavigate();
  //  const listModalRef = useRef(null);

  useEffect(()=>{
    dispatch(fetchLatestProperties())
    dispatch(fetchAllTotalProperties())
    dispatch(fetchSaleProperties())
    dispatch(fetchLeaseProperties())
    dispatch(fetchSharedProperties())
  },[dispatch])
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

            {/* Property Stats - TABBED VERSION */}
            {/* Property Stats Section */}
            <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-md mt-6">
              {/* Tab Selectors - Hidden on desktop */}
              <div className="lg:hidden grid grid-cols-2 gap-3 mb-6">
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

              {/* Stat Cards - Different behavior based on screen size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* On mobile: Show only active tab */}
                <div className="lg:hidden">
                  {
                    {
                      total: (
                        <StatCard
                          title="Total Properties"
                          value={totalProperties ?? 0}
                          icon={
                            <CgNotes className="text-[#00E5FF] text-5xl bg-[#FFEDE5] shadow-lg p-4 rounded-full" />
                          }
                        />
                      ),
                      sale: (
                        <StatCard
                          title="Properties For Sale"
                          value={totalSaleProperties ?? 0}
                          icon={
                            <CgNotes className="text-[#17F9B9] text-5xl bg-[#DEFFF6] shadow-lg p-4 rounded-full" />
                          }
                        />
                      ),
                      lease: (
                        <StatCard
                          title="Properties For Lease"
                          value={totalLeaseProperties ?? 0}
                          icon={
                            <CgNotes className="text-[#1766F9] text-5xl bg-[#E4EDFF] p-4 rounded-full shadow-lg" />
                          }
                        />
                      ),
                      shared: (
                        <StatCard
                          title="Shared Properties"
                          value={totalSharedProperties ?? 0}
                          icon={
                            <CgNotes className="text-[#F9D717] text-5xl bg-[#FFFADD] p-4 rounded-full shadow-lg" />
                          }
                        />
                      ),
                    }[activeTab]
                  }
                </div>

                {/* On desktop: Show all cards always (hidden on mobile) */}
                <div className="hidden lg:block col-span-1">
                  <StatCard
                    title="Total Properties"
                    value={totalProperties ?? 0}
                    icon={
                      <CgNotes className="text-[#00E5FF] text-5xl bg-[#FFEDE5] shadow-lg p-4 rounded-full" />
                    }
                  />
                </div>
                <div className="hidden lg:block col-span-1">
                  <StatCard
                    title="Properties For Sale"
                    value={totalSaleProperties ?? 0}
                    icon={
                      <CgNotes className="text-[#17F9B9] text-5xl bg-[#DEFFF6] shadow-lg p-4 rounded-full" />
                    }
                  />
                </div>

                <div className="hidden lg:block col-span-1">
                  <StatCard
                    title="Properties For Lease"
                    value={totalLeaseProperties ?? 0}
                    icon={
                      <CgNotes className="text-[#1766F9] text-5xl bg-[#E4EDFF] p-4 rounded-full shadow-lg" />
                    }
                  />
                </div>

                <div className="hidden lg:block col-span-1">
                  <StatCard
                    title="Shared Properties"
                    value={totalSharedProperties ?? 0}
                    icon={
                      <CgNotes className="text-[#F9D717] text-5xl bg-[#FFFADD] p-4 rounded-full shadow-lg" />
                    }
                  />
                </div>

              </div>
            </div>

            {/* Recent Listed Properties */}
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  Recent listed properties
                </h3>
                <Link
                  to="/portfolio"
                  className="text-[#1D3F3FDE] text-sm font-medium hover:underline"
                >
                  View All
                </Link>
              </div>

              {/* Grid for Property Listings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {latestProperties?.length > 0 && latestProperties?.map((property, index) => (
                  <div
                    key={index}
                    className="bg-[#F9F9F9] p-4 rounded-lg shadow-md"
                  >
                    {/* Image Section */}
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={property?.propertyImage[0]}
                        alt={`Property ${index + 1}`}
                        className="w-full h-52 object-cover rounded-2xl"
                      />
                      <span className="absolute top-0 left-0 bg-[#F11414] text-white text-xs px-2 py-1 rounded">
                        {property?.isShared ? 'For lease' : 'For sale'}
                      </span>
                      {property?.isShared && (
                        <span className="absolute top-2 -right-3 bg-white text-[#1C1C1C] text-sm px-4 py-1 rounded shadow-md text-center font-aeonik custom-rotate">
                          Shared
                        </span>
                      )}
                    </div>

                    {/* Property Details */}
                    <div className="bg-white p-4 rounded-2xl shadow-md mt-3">
                      <p className="text-lg font-bold font-aeonik text-[#1D3F3F]">
                        {property?.propertyName}
                      </p>

                      <p className="text-base font-aeonik font-normal text-[#1D3F3F]">
                        {property?.propertyPrice}
                      </p>

                      {/* "See Description" Link */}
                      <div className="mt-2">
                        <Link
                          to={ `/desciption-property/${property?._id}`}
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
                // position={modalPosition}
                // propertyId={selectedPropertyId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewDesktop;