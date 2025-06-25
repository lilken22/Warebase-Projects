import React, { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import { PiSlidersHorizontalFill } from "react-icons/pi";
import BottomNav from "../components/BottomNav";
import { useNavigate, Link } from "react-router-dom";
import {
  FaSyncAlt,
  FaChevronDown,
  FaPlus,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";
import TenureModal from "../components/TenureModal";
import OrderModal from "../components/OrderModal";
import ListModal from "../components/ListModal";
import { useSelector, useDispatch } from "react-redux";
import { selectPropertiesSlice } from "../redux/selectors/property.selector";
import { fetchProperties } from "../redux/slices/property.slice";
import { IMAGE_URL } from "../redux/actionTypes";

const PortfolioMobile = () => {
  const { properties } = useSelector(selectPropertiesSlice);
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("Listed");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeModal, setActiveModal] = useState(null); // 'tenure', 'order', 'list'
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [sortOrderValue, setSortOrderValue] = useState("DESC");
  const [sortTenureValue, setSortTenureValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const orderButtonRef = useRef(null);
  const tenureButtonRef = useRef(null);
  const orderModalRef = useRef(null);
  const listModalRef = useRef(null);

  // Unified modal handlers
  const openModal = (modalName) => setActiveModal(modalName);
  const closeAllModals = () => setActiveModal(null);

  const handleDropdownToggle = (e) => {
    e.stopPropagation();
    if (tenureButtonRef.current) {
      const buttonRect = tenureButtonRef.current.getBoundingClientRect();
      setModalPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
      openModal(activeModal === "tenure" ? null : "tenure");
    }
  };

  const handleOrderToggle = (e) => {
    e.stopPropagation();
    if (orderButtonRef.current) {
      const buttonRect = orderButtonRef.current.getBoundingClientRect();
      setModalPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
      openModal(activeModal === "order" ? null : "order");
    }
  };

  const handleThreeDotsClick = (e, propertyId) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setSelectedPropertyId(propertyId);
    openModal("list");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRefresh = () => {
    setSortOrderValue("DESC");
    setSortTenureValue("");
    closeAllModals();
  };

  const filteredProperties = () => {
    if (!searchTerm) return properties;
    return properties.filter((item) => 
      item?.propertyName?.includes(searchTerm) || 
      item?.id?.includes(searchTerm)
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeModal) {
        const isTenureModalClick = 
          activeModal === "tenure" && 
          dropdownRef.current?.contains(event.target);
        
        const isOrderModalClick = 
          activeModal === "order" && 
          orderModalRef.current?.contains(event.target);
        
        const isListModalClick = 
          activeModal === "list" && 
          listModalRef.current?.contains(event.target);

        const isTriggerClick =
          (activeModal === "tenure" && tenureButtonRef.current?.contains(event.target)) ||
          (activeModal === "order" && orderButtonRef.current?.contains(event.target)) ||
          (activeModal === "list" && event.target.closest(".three-dots-button"));

        if (!isTenureModalClick && !isOrderModalClick && !isListModalClick && !isTriggerClick) {
          closeAllModals();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeModal]);

  useEffect(() => {
    setSearchResult(filteredProperties());
  }, [searchTerm, properties]);

  useEffect(() => {
    dispatch(fetchProperties({ sortOrderValue, sortTenureValue }));
  }, [dispatch, sortOrderValue, sortTenureValue]);

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
            <h2 className="text-xl font-semibold text-gray-800">Properties</h2>
            <button
              onClick={() => navigate("/addproperty-mobile")}
              className="bg-[#00E5FF] text-white font-medium font-Poppins px-3 py-3 rounded-lg flex items-center"
            >
              <FaPlus className="mr-2" /> Add Property
            </button>
          </div>

          <div className="bg-[#F9F9F9] rounded-3xl px-3 py-4 mt-3">
            {/* Tabs */}
            <div className="flex items-center justify-between">
              <div className="flex bg-[#FFFFFF] border border-gray-200 rounded-full px-2 py-2 overflow-hidden">
                <TabButton
                  active={selectedTab === "Listed"}
                  onClick={() => setSelectedTab("Listed")}
                  count={160}
                >
                  Listed
                </TabButton>
                <TabButton
                  active={selectedTab === "Unlisted"}
                  onClick={() => setSelectedTab("Unlisted")}
                  count={40}
                >
                  Unlisted
                </TabButton>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-2 mt-5">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <button className="bg-[#FFFFFF] shadow-sm border border-gray-50 p-3 rounded-full">
                <PiSlidersHorizontalFill size={25} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 grid grid-cols-2 gap-4 mt-3">
          {searchResult?.map((property) => (
            <div key={property.id} className="bg-gray-100 p-2 rounded-xl relative">
              {/* Image Block */}
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={property.propertyImage || "/property-placeholder.jpg"}
                  alt={property.propertyName}
                  className="h-36 w-full object-cover rounded-xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/property-placeholder.jpg";
                  }}
                />
                <span className="absolute top-0 left-0 bg-red-500 text-white text-[10px] font-medium px-2 py-1 rounded-bl-md">
                  {property.isShared ? "For Lease" : "For Sale"}
                </span>
                {property.isShared && (
                  <span className="absolute top-2 right-0 bg-white text-[#1C1C1C] text-[10px] px-2 py-1 rounded-l-md shadow-sm">
                    Shared
                  </span>
                )}
              </div>

              {/* White Card Block */}
              <div className="bg-white rounded-xl shadow-[#D3D3D340] p-3 mt-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-bold text-[#1D3F3F] font-aeonik">
                    {property.propertyName}
                  </h3>
                  <button
                    onClick={(e) => handleThreeDotsClick(e, property.id)}
                    className="text-[#1D3F3F] p-1 rounded-full three-dots-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1D3F3F">
                      <circle cx="12" cy="6" r="1.5" />
                      <circle cx="12" cy="12" r="1.5" />
                      <circle cx="12" cy="18" r="1.5" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-[#1D3F3F] font-aeonik font-normal mt-1">
                  {property.propertyPrice}
                </p>
                <Link
                  to="/desciption-property"
                  className="text-[10px] text-[#1D3F3FDE] mt-1 font-normal font-aeonik underline block"
                >
                  See Description
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={50}
          onPageChange={handlePageChange}
        />

        <div className="flex justify-center items-center mt-4 rounded-lg relative">
          <div className="flex gap-2 bg-[#F9F9F9] rounded-full p-1 w-full max-w-[80%] border border-1">
            <FilterButton
              ref={tenureButtonRef}
              onClick={handleDropdownToggle}
              className="flex-1 flex justify-between items-center px-4"
            >
              Tenure <FaChevronDown className="ml-2" />
            </FilterButton>

            <FilterButton
              ref={orderButtonRef}
              onClick={handleOrderToggle}
              className="flex-1 flex justify-between items-center px-4"
            >
              Order <FaChevronDown className="ml-2" />
            </FilterButton>

            <button 
              onClick={handleRefresh}
              className="flex items-center justify-center bg-black text-white rounded-full px-4 py-2"
            >
              <FaSyncAlt />
            </button>
          </div>

          {/* Modals */}
          <TenureModal
            ref={dropdownRef}
            isOpen={activeModal === "tenure"}
            onClose={closeAllModals}
            position={modalPosition}
            setSortTenureValue={(value) => {
              setSortTenureValue(value);
              closeAllModals();
            }}
          />

          <OrderModal
            ref={orderModalRef}
            isOpen={activeModal === "order"}
            onClose={closeAllModals}
            position={modalPosition}
            setSortOrderValue={(value) => {
              setSortOrderValue(value);
              closeAllModals();
            }}
          />

          <ListModal
            ref={listModalRef}
            isOpen={activeModal === "list"}
            onClose={closeAllModals}
            position={modalPosition}
            propertyId={selectedPropertyId}
          />
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
};

// the reusable component

// Updated SearchBar component
const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="p-2 rounded-full flex-1 flex items-center">
    <div className="flex items-center bg-[#FFFFfF] shadow-sm px-3 py-3 border border-gray-100 rounded-full w-full">
      <input
        type="text"
        placeholder="Search property by name or ID"
        className="bg-transparent outline-none flex-grow text-[#CCCCCC] placeholder-[#CCCCCC] font-Poppins text-[10px]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="text-gray-600">
        <FaSearch />
      </button>
    </div>
  </div>
);

const TabButton = ({ active, onClick, count, children }) => (
  <button
    className={`px-3 py-3 text-sm font-bold font-aeonik rounded-full ${
      active ? "bg-[#1C1C1C] text-[#FFFFFF]" : "text-[#7B7B7B]"
    }`}
    onClick={onClick}
  >
    {children} {count}
  </button>
);

const FilterButton = React.forwardRef(
  ({ onClick, children, className = "", ...rest }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className={`py-3 flex items-center bg-[#FFFFFF] text-[#7B7B7B] rounded-full ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center mt-6 gap-1 text-[12px]">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="p-2 px-2 rounded-md border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <FaChevronLeft className="text-[#1D3F3F]" size={12} />
    </button>

    {[1, 2, 3].map((page) => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-2 py-1 rounded-md border text-sm ${
          currentPage === page
            ? "bg-[#E2E8F0] text-[#1D3F3F]"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        {page}
      </button>
    ))}

    <span className="text-[#1D3F3F] px-1">...</span>

    <button
      onClick={() => onPageChange(totalPages)}
      className={`px-2 py-1 rounded-md border text-sm ${
        currentPage === totalPages
          ? "bg-[#E2E8F0] text-[#1D3F3F]"
          : "bg-white text-gray-600 hover:bg-gray-100"
      }`}
    >
      {totalPages}
    </button>

    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="p-2 px-2 rounded-md border bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <FaChevronRight className="text-[#1D3F3F]" size={12} />
    </button>
  </div>
);



export default PortfolioMobile;