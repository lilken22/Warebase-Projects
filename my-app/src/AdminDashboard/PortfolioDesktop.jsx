import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
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

export default function PortfolioDesktop() {
  const { properties } = useSelector(selectPropertiesSlice)
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState("Listed");
  const [activeModal, setActiveModal] = useState(null); // 'tenure', 'order', or 'list'
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const closeTimerRef = useRef(null); // For delayed closing
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  // const [isOrderOpen, setIsOrderOpen] = useState(false);
  // const [orderPosition, setOrderPosition] = useState({ top: 0, left: 0 });
  const [sortOrderValue, setSortOrderValue] = useState("DESC");
  const [sortFieldValue, setSortFieldValue] = useState("date");
  const [sortTenureValue, setSortTenureValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [listModalOpen, setListModalOpen] = useState(false);
  // const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const orderButtonRef = useRef(null);
  const tenureButtonRef = useRef(null);
  const orderModalRef = useRef(null);
  const listModalRef = useRef(null);

  

  const handleDropdownToggle = () => {
    if (tenureButtonRef.current) {
      const buttonRect = tenureButtonRef.current.getBoundingClientRect();
      setModalPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
      if (activeModal === "tenure") {
        closeAllModals();
      } else {
        openModal("tenure");
      }
    }
  };

  

  const handleOrderToggle = () => {
    if (orderButtonRef.current) {
      const Rect = orderButtonRef.current.getBoundingClientRect();
      setModalPosition({
        top: Rect.bottom + window.scrollY,
        left: Rect.left + window.scrollX,
      });
      if (activeModal === "order") {
        closeAllModals();
      } else {
        openModal("order");
      }
    }
  };

  

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if we're clicking outside the active modal
      if (activeModal) {
        const isTenureModalClick =
          activeModal === "tenure" &&
          dropdownRef.current &&
          dropdownRef.current.contains(event.target);

        const isOrderModalClick =
          activeModal === "order" &&
          orderModalRef.current &&
          orderModalRef.current.contains(event.target);

        const isListModalClick =
          activeModal === "list" &&
          listModalRef.current &&
          listModalRef.current.contains(event.target);

        const isTriggerClick =
          (activeModal === "tenure" &&
            tenureButtonRef.current?.contains(event.target)) ||
          (activeModal === "order" &&
            orderButtonRef.current?.contains(event.target)) ||
          (activeModal === "list" &&
            event.target.closest(".three-dots-button"));

        if (
          !isTenureModalClick &&
          !isOrderModalClick &&
          !isListModalClick &&
          !isTriggerClick
        ) {
          closeAllModals();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, [activeModal]);

  const handleThreeDotsClick = (e, propertyId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSelectedPropertyId(propertyId);
    setModalPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    if (activeModal === "list" && selectedPropertyId === propertyId) {
      closeAllModals();
    } else {
      openModal("list");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = (modalName) => {
    // Cancel any pending close operations
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveModal(modalName);
  };

  const closeAllModals = () => {
    setActiveModal(null);
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleModalMouseEnter = () => {
    // Cancel close if mouse enters modal
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleOptionSelection = (value) => {
    setSortTenureValue(value);
    // Close after a short delay to allow UI feedback
    setTimeout(() => closeAllModals(), 500);
  };

  

  const filteredProperties = () => {
    if (!searchTerm) setSearchResult(properties);
    const result =
      properties?.length > 0 &&
      // Please i remove the text: index so i can be able to create a PR
      properties?.filter((item) => {
        return (
          item?.propertyName?.includes(searchTerm) ||
          item?.propertyId?.includes(searchTerm)
        );
      });
    if (result) {
      setSearchResult(result);
    }
  };

  // const handleRefresh = () => {
  //   setSortOrderValue("DESC");
  //   setSortTenureValue('')
  //   setIsOrderOpen(false)
  //   setIsDropdownOpen(false)
  // };

  const handleRefresh = () => {
    setSortOrderValue("DESC");
    setSortTenureValue("");
    closeAllModals();
  };

  useEffect(() => {
    filteredProperties();
  }, [searchTerm, properties]);

  useEffect(() => {

    if (String(selectedTab).toLowerCase() === "unlisted") {
      dispatch(
        fetchProperties({
          sortField: sortFieldValue,
          sortOrder: sortOrderValue,
          tenure: sortTenureValue,
          active: "false",
        })
      );
    } else {
      dispatch(
        fetchProperties({
          sortField: sortFieldValue,
          sortOrder: sortOrderValue,
          tenure: sortTenureValue,
          active: "true",
        })
      );
    }
    
  }, [dispatch, sortOrderValue, sortTenureValue, sortFieldValue, selectedTab]);

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-3 md:p-5 bg-[#F8F9FA] min-h-screen relative">
          <div className="absolute inset-1 border-[3px] border-[#E0E0E0] pointer-events-none rounded-lg"></div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full h-full mx-auto my-auto border-[3px] border-[#E0E0E0]">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-medium text-[#1D3F3F] font-aeonik">
                  Property
                </h2>
                <div className="flex bg-gray-100 rounded-full px-2 py-2 overflow-hidden">
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

              <button
                onClick={() => navigate("/add-property")}
                className="bg-[#00E5FF] text-white font-medium font-Poppins px-4 py-4 rounded-lg flex items-center"
              >
                <FaPlus className="mr-2" /> Add Property
              </button>
            </div>

            <div className="w-full rounded-lg flex justify-between items-start mt-10">
              <div className="flex gap-2 bg-[#F9F9F9] rounded-full px-4 py-4">
                <FilterButton
                  ref={tenureButtonRef}
                  onClick={handleDropdownToggle}
                >
                  Tenure <FaChevronDown className="ml-2" />
                </FilterButton>
                <FilterButton ref={orderButtonRef} onClick={handleOrderToggle}>
                  Order <FaChevronDown className="ml-2" />
                </FilterButton>
                <button
                  onClick={() => handleRefresh()}
                  className="px-4 py-2 flex items-center bg-black text-white rounded-full"
                >
                  Reset Filter <FaSyncAlt className="ml-2" />
                </button>
              </div>

              <SearchBar
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
              />

              {/* <TenureModal
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
                position={dropdownPosition}
                setSortTenureValue={setSortTenureValue}
              /> */}

              <TenureModal
                ref={dropdownRef}
                isOpen={activeModal === "tenure"}
                onClose={closeAllModals} // Keep this for manual close if needed
                position={modalPosition}
                setSortTenureValue={handleOptionSelection} // Use the new handler
                onMouseEnter={handleModalMouseEnter}
                // onMouseDown={(e) => e.stopPropagation()}
                 
              />

              {/* <OrderModal
                isOpen={isOrderOpen}
                onClose={() => setIsOrderOpen(false)}
                position={orderPosition}
                setSortOrderValue={setSortOrderValue}
              /> */}

              <OrderModal
                ref={orderModalRef}
                isOpen={activeModal === "order"}
                onClose={closeAllModals}
                position={modalPosition}
                setSortOrderValue={setSortOrderValue}
                onMouseEnter={handleModalMouseEnter}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {searchResult?.length > 0 &&
                searchResult?.map((property, index) => (
                  <PropertyCard
                    key={property._id}
                    id={property._id}
                    image={property.propertyImage}
                    type={property.isShared ? "For lease" : "For sale"}
                    shared={property.sharePropertyNumber}
                    name={property.propertyName}
                    price={property.propertyPrice}
                    onThreeDotsClick={(e) =>
                      handleThreeDotsClick(e, property._id)
                    }
                  />
                ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={50}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      {/* <ListModal
        ref={listModalRef}
        isOpen={listModalOpen}
        onClose={() => setListModalOpen(false)}
        position={modalPosition}
        propertyId={selectedPropertyId}
      /> */}

      <ListModal
        ref={listModalRef}
        isOpen={activeModal === "list"}
        onClose={closeAllModals}
        position={modalPosition}
        propertyId={selectedPropertyId}
        onMouseEnter={handleModalMouseEnter}
      />
    </div>
  );
}

// Reusable Components
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

const FilterButton = React.forwardRef(({ onClick, children }, ref) => (
  <button
    ref={ref}
    className="px-7 py-3 flex items-center bg-[#FFFFFF] text-[#7B7B7B] rounded-full"
    onClick={onClick}
  >
    {children}
  </button>
));

const SearchBar = ({ setSearchTerm, searchTerm }) => (
  <div className="bg-gray-200 p-2 rounded-full w-[400px] flex items-center">
    <div className="flex items-center bg-white px-4 py-3 rounded-full w-full">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        type="text"
        placeholder="Search property by name or ID"
        className="bg-transparent outline-none flex-grow text-gray-700 placeholder-gray-500"
      />
      <button className="text-gray-600">
        <FaSearch onClick={() => setSearchTerm(searchTerm)} />
      </button>
    </div>
  </div>
);

const PropertyCard = ({
  image,
  id,
  type,
  shared,
  name,
  price,
  onThreeDotsClick,
}) => (
  <div className="bg-[#F9F9F9] p-4 rounded-lg shadow-md">
    <div className="relative rounded-xl overflow-hidden bg-gray-100 h-52">
      {/* <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-2xl"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/400x300";
        }}
      /> */}
      <span className="absolute top-0 left-0 bg-[#F11414] text-white text-xs px-2 py-1 rounded">
        {type}
      </span>
      {shared && (
        <span className="absolute top-2 -right-3 bg-white text-[#1C1C1C] text-sm px-4 py-1 rounded shadow-md text-center font-aeonik custom-rotate">
          Shared
        </span>
      )}
    </div>

    <div className="bg-white p-4 rounded-2xl shadow-md mt-3 relative">
      <div className="flex justify-between items-start">
        <p className="text-lg font-bold font-aeonik text-[#1D3F3F]">{name}</p>
        <button
          onClick={onThreeDotsClick}
          className="text-[#1D3F3F] p-1 rounded-full"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="6" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <circle cx="12" cy="18" r="1.5" fill="currentColor" />
          </svg>
        </button>
      </div>
      <p className="text-base font-aeonik font-normal text-[#1D3F3F]">
        {price}
      </p>
      <div className="mt-2">
        <Link
          to={`/desciption-property/${id}`}
          className="text-sm text-[#1D3F3FDE] font-medium font-aeonik underline"
        >
          See Description
        </Link>
      </div>
    </div>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center mt-12 space-x-2">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="p-2 px-4 rounded-md border border-gray-200 bg-[#FFFFFF] hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <FaChevronLeft className="text-[#1D3F3F]" />
    </button>

    {[1, 2, 3].map((page) => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-4 py-1 rounded-md border border-gray-200 shadow-sm ${
          currentPage === page
            ? "bg-[#E2E8F0]"
            : "bg-[#FFFFFF] hover:bg-gray-100"
        }`}
      >
        {page}
      </button>
    ))}

    <span className="text-[#1D3F3F]">....</span>

    <button
      onClick={() => onPageChange(totalPages)}
      className={`px-4 py-1 rounded-md border border-gray-200 shadow-sm ${
        currentPage === totalPages
          ? "bg-[#E2E8F0]"
          : "bg-[#FFFFFF] hover:bg-gray-100"
      }`}
    >
      {totalPages}
    </button>

    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-4 py-2 rounded-md bg-[#FFFFFF] border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <FaChevronRight className="text-[#1D3F3F]" />
    </button>
  </div>
);
