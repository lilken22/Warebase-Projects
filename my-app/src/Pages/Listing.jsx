import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyModal from "../components/PropertyModal";
import StateModal from "../components/StateModal";
import PriceModal from "../components/PriceModal";
import SizeModal from "../components/SizeModal";
import WarehouseFormModal from "../components/WarehouseFormModal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { selectPropertiesSlice } from "../redux/selectors/property.selector";
import { fetchProperties } from "../redux/slices/property.slice";
import { IMAGE_URL } from "../redux/actionTypes";

export default function Listing() {
  const { properties } = useSelector(selectPropertiesSlice);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOrderValue, setSortOrderValue] = useState("DESC");
  const [sortFieldValue, setSortFieldValue] = useState("date");
  const [sortTenureValue, setSortTenureValue] = useState("");
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isStateModalOpen, setIsStateModalOpen] = useState(false);
  const [stateModalPosition, setStateModalPosition] = useState({
    top: 0,
    left: 0,
  });
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const [priceModalPosition, setPriceModalPosition] = useState({
    top: 0,
    left: 0,
  });
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
  const [sizeModalPosition, setSizeModalPosition] = useState({
    top: 0,
    left: 0,
  });
  const [isWarehouseFormModalOpen, setIsWarehouseFormModalOpen] =
    useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const stateModalRef = useRef(null);
  // const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [toggleData, setToggleData] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  const [activeModal, setActiveModal] = useState(null);
  const modalPositions = useRef({});

  const [filters, setFilters] = useState({
    location: "",
    minSize: "",
    maxSize: "",
    minPrice: "",
    maxPrice: "",
    sortField: "tenure",
    tenureValue: "",
  });

  const handleFilterInputChange = (e) => {
    const { name, value } = e.target;
    if (!value || !name) return;
    setFilters((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFilterSearch = async () => {
    // if (!filters) return;
    try {
      await dispatch(
        fetchProperties({
          sortField: filters.sortField,
          sortOrder: sortOrderValue,
          tenure: filters.tenureValue,
          propertySizeMin: filters.minSize,
          propertySizeMax: filters.maxSize,
          propertyPriceMin: filters.minPrice,
          propertyPriceMax: filters.maxPrice,
          location: filters.location,
        })
      ).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  const closeAllModals = () => setActiveModal(null);

  const openModal = (modalName, event) => {
    if (event?.target) {
      const buttonRect = event.target.getBoundingClientRect();
      modalPositions.current[modalName] = {
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      };
    }
    setActiveModal(modalName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if we're clicking outside ALL modals and not on a trigger
      const clickedOutsideAllModals = !event.target.closest(".modal-content");
      const clickedOnTrigger = event.target.closest(".modal-trigger");

      if (activeModal && clickedOutsideAllModals && !clickedOnTrigger) {
        closeAllModals();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeModal]);

  const handlePropertyModal = (e) => openModal("property", e);
  const handleStateModal = (e) => openModal("state", e);
  const handlePriceModal = (e) => openModal("price", e);
  const handleSizeModal = (e) => openModal("size", e);
  const handleWarehouseModal = () => openModal("warehouse");

  // const isDev = import.meta.env.DEV; // true in dev, false in production
  // function getImageUrl(path) {
  //   return isDev ? path : `${IMAGE_URL}${path}`;
  // }

  const handleRefresh = async() => {
    setSortOrderValue("DESC");
    setSortFieldValue("data");
    setSortTenureValue("");
    setFilters({
      location: "",
      minSize: "",
      maxSize: "",
      minPrice: "",
      maxPrice: "",
      sortField: "tenure",
      tenureValue: "",
    });

    await handleFilterSearch()
  };

  const handleTenureChange = (value, toggleValue = true) => {
    if (!value) {
      handleRefresh();
    }
    setToggleData(toggleValue);
    setSortFieldValue("tenure");
    setSortTenureValue(value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filterData = () => {
    const result =
      properties?.length > 0 &&
      properties?.filter((item) => item.isShared == toggleData);
    if (!result) return;
    setFilteredData(result);
  };

  useEffect(() => {
    filterData();
  }, [properties, dispatch]);

  useEffect(() => {
    dispatch(
      fetchProperties({
        sortField: sortFieldValue,
        sortOrder: sortOrderValue,
        tenure: sortTenureValue,
      })
    ).unwrap();
  }, [dispatch, sortFieldValue, sortOrderValue, sortTenureValue]);

  const displayData = filteredData.length > 0 ? filteredData : properties;
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900 font-serif flex flex-col">
        <Navbar />

        <div className="w-full mx-auto p-4 rounded-md mt-20">
          <div className="h-[131px] flex flex-col items-center">
            <div className="w-full max-w-[1200px]">
              <div className="w-[240px] h-[48px] bg-[#ECECEC] rounded-xl flex p-[4px]">
                <button
                  onClick={() => handleTenureChange("SALE", true)}
                  className={`w-1/2 h-full rounded-lg text-sm font-aeonik transition-all duration-200 ${
                    toggleData
                      ? "bg-white text-[#1D3F3F] font-medium"
                      : "bg-transparent text-[#A6A6A6] font-normal"
                  }`}
                >
                  For Sale
                </button>
                <button
                  onClick={() => handleTenureChange("LEASE", false)}
                  className={`w-1/2 h-full rounded-lg text-sm font-aeonik transition-all duration-200 ${
                    !toggleData
                      ? "bg-white text-[#1D3F3F] font-medium"
                      : "bg-transparent text-[#A6A6A6] font-normal"
                  }`}
                >
                  For Lease
                </button>
              </div>

              <div className="h-fit md:h-[80px] bg-[#FFFFFF] rounded-xl shadow-lg inner-bar">
                <div className="grid grid-cols-2 md:flex md:flex-nowrap text-center justify-start flex-wrap gap-1 md:gap-0">
                  <div className="h-[80px] w-full md:w-[210px] pr-4 bg-[#FFFFFF] shadow-md md:bg-[#FFFFFF] relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 border-r border-gray-400"></div>
                    <p className="text-base font-aeonik font-medium text-[#1D3F3FDE] mt-4">
                      Property Type
                    </p>
                    <div className="flex justify-around items-center text-start w-full">
                      <div className="max-w-[90%] sm:max-w-full truncate text-xs md:text-sm text-[#CDCDCD] italic text-start">
                        Select Property Type
                      </div>
                      <button
                        ref={buttonRef}
                        onClick={handlePropertyModal}
                        className="w-[24px] h-[24px] flex justify-center items-center modal-trigger"
                      >
                        <p className="text-[#9F9F9F]">▼</p>
                      </button>
                    </div>
                  </div>

                  <div className="h-[80px] w-full md:w-[210px] pr-4 bg-[#FFFFFF] shadow-md md:bg-[#FFFFFF] relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 border-r border-gray-400"></div>
                    <p className="text-base font-aeonik font-medium text-[#1D3F3FDE] mt-4">
                      Location
                    </p>
                    <div className="flex justify-around">
                      <div className="max-w-[90%] sm:max-w-full truncate text-sm text-[#CDCDCD] italic">
                        e.g Lagos, Abuja
                      </div>
                      <button
                        onClick={handleStateModal}
                        className="w-[24px] h-[24px] flex justify-center items-center"
                      >
                        <p className="text-[#9F9F9F] modal-trigger">▼</p>
                      </button>
                    </div>
                  </div>

                  <div className="h-[80px] w-full md:w-[210px] pr-4 bg-[#FFFFFF] shadow-md md:bg-[#FFFFFF] relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 border-r border-gray-400"></div>
                    <p className="text-base font-aeonik font-medium text-[#1D3F3FDE] mt-4">
                      Price Range
                    </p>
                    <div className="flex justify-around">
                      <div className="max-w-[90%] sm:max-w-full truncate text-sm text-[#CDCDCD] italic">
                        Min.Price - Max.Price
                      </div>
                      <button
                        onClick={handlePriceModal}
                        className="w-[24px] h-[24px] flex justify-center items-center"
                      >
                        <p className="text-[#9F9F9F] modal-trigger">▼</p>
                      </button>
                    </div>
                  </div>

                  <div className="h-[80px] w-full md:w-[210px] pr-4 bg-[#FFFFFF] shadow-md md:bg-[#FFFFFF] relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 border-r border-gray-400"></div>
                    <p className="text-base font-aeonik font-medium text-[#1D3F3FDE] mt-4">
                      Size Range
                    </p>
                    <div className="flex justify-around items-baseline">
                      <div className="max-w-[90%] sm:max-w-full truncate text-sm text-[#CDCDCD] italic">
                        Min.Size - Max.Size
                      </div>
                      <button
                        onClick={handleSizeModal}
                        className="w-[24px] h-[24px] flex justify-center items-center"
                      >
                        <p className="text-[#9F9F9F] modal-trigger">▼</p>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 h-[50px] md:h-[100%] md:gap-1 md:flex md:flex-grow-0 md:w-[full] md:pl-2 md:px-4 mt-2 md:mt-4">
                    <div>
                      <button
                        onClick={() => handleRefresh()}
                        className="bg-[rgb(28,28,28)] text-[#FFFFFF] h-[45px] w-[85px] md:w-[120px] text-xs md:text-sm rounded-lg"
                      >
                        Reset Filter ↺
                      </button>
                    </div>

                    <div>
                      <button
                        onClick={() => handleFilterSearch()}
                        className="bg-[#0B97D1] text-[#FFFFFF] h-[45px] w-[80px] md:w-[120px] text-xs md:text-sm rounded-lg"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <PropertyModal
                isOpen={activeModal === "property"}
                onClose={closeAllModals}
                position={modalPositions.current.property}
                handleFilter={handleFilterInputChange}
              />

              <StateModal
                ref={stateModalRef}
                isOpen={activeModal === "state"}
                onClose={closeAllModals}
                position={modalPositions.current.state}
                handleFilter={handleFilterInputChange}
              />

              <PriceModal
                isOpen={activeModal === "price"}
                onClose={closeAllModals}
                position={modalPositions.current.price}
                handleFilter={handleFilterInputChange}
              />

              <SizeModal
                isOpen={activeModal === "size"}
                onClose={closeAllModals}
                position={modalPositions.current.size}
                handleFilter={handleFilterInputChange}
              />

              <WarehouseFormModal
                isOpen={activeModal === "warehouse"}
                onClose={closeAllModals}
              />
            </div>
          </div>

          <div className="bg-[#F4F4F4] px-3 mx-auto rounded-md max-w-[1320px] items-center">
            <div className="max-w-[1300px]">
              <div className="grid grid-cols-1 gap-4 mt-16 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-start">
                {displayData?.length > 0 ? (
                  displayData?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="md:w-[320px] border rounded-lg bg-[#FFFFFF] shadow-md overflow-hidden"
                      >
                        <div className="relative">
                          <img
                            src={`${item.propertyImage[0]}`}
                            alt={`Property ${index + 1}`}
                            className="w-full h-40 object-cover"
                          />
                          <span className="absolute top-0 left-0 bg-[#F11414] text-white text-xs px-2 py-1 rounded">
                            {!item.isShared ? "For Sale" : "For Lease"}
                          </span>
                          {item.isShared && (
                            <span className="absolute top-2 -right-3 bg-white text-[#1C1C1C] text-sm px-4 py-1 rounded shadow-md text-center font-aeonik custom-rotate">
                              Shared({item.sharePropertyNumber})
                            </span>
                          )}
                        </div>
                        <div className="p-4 leading-relaxed">
                          <p className="text-sm text-[#627777DE]">
                            Property Name:{" "}
                            <span className="font-yeseva font-light text-sm">
                              {item?.propertyName}
                            </span>
                          </p>
                          <p className="text-sm text-[#627777DE]">
                            Property ID:{" "}
                            <span className="font-yeseva font-light text-sm">
                              {item?.propertyId}
                            </span>
                          </p>
                          <p className="text-sm text-[#627777DE]">
                            Location:{" "}
                            <span className="font-yeseva font-light text-sm">
                              {item.location}
                            </span>
                          </p>
                          <p className="text-sm text-[#627777DE]">
                            Price:{" "}
                            <span className="font-yeseva font-light text-sm">
                              {item?.propertyPrice}/Month
                            </span>
                          </p>
                          <p className="text-sm text-[#627777DE]">
                            Size:{" "}
                            <span className="font-yeseva font-light text-sm">
                              {item?.propertySize}
                            </span>
                          </p>
                          <div className="mt-4 flex justify-between">
                            <Link
                              to={`/PropertyDetails/${item._id}`}
                              className="text-sm py-2 text-start text-[#627777DE] hover:underline rounded"
                            >
                              See Description
                            </Link>
                            <button
                              className="text-sm px-3 py-2 bg-[#1C1C1C] text-[#FFFFFF] rounded-full"
                              onClick={handleWarehouseModal}
                            >
                              Get in touch
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <p>No properties currently</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 px-4 rounded-md border border-gray-200 bg-[#FFFFFF] hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="text-[#1D3F3F]" />
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-1 rounded-md border border-gray-200 shadow-sm ${
                  currentPage === page
                    ? "bg-[#E2E8F0] text-[#021816]"
                    : "bg-[#FFFFFF] text-[#021816] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <span className="text-[#1D3F3F]">....</span>

            <button
              onClick={() => handlePageChange(50)}
              className={`px-4 py-1 rounded-md border border-gray-200 shadow-sm ${
                currentPage === 50
                  ? "bg-[#E2E8F0] text-[#021816]"
                  : "bg-[#FFFFFF] text-[#021816] hover:bg-gray-100"
              }`}
            >
              50
            </button>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === 50}
              className="px-4 py-2 rounded-md bg-[#FFFFFF] border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="text-[#1D3F3F]" />
            </button>
          </div>
        </div>

        <Footer />

        <WarehouseFormModal
          isOpen={activeModal === "warehouse"}
          onClose={closeAllModals}
        />
      </div>
    </>
  );
}
