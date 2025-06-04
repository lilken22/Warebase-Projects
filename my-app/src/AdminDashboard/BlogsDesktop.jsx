import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import SortModal from "../components/SortModal";
import {
  FaSyncAlt,
  FaChevronDown,
  FaPlus,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../redux/slices/blog.slice";
import { selectBlogSlice } from "../redux/selectors/blog.selector";

export default function BlogsDesktop() {
  const { blogs } = useSelector(selectBlogSlice);
  const dispatch = useDispatch();
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortPosition, setSortPosition] = useState({ top: 0, left: 0 });
  const [sortOrderValue, setSortOrderValue] = useState("DESC");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const sortModalRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSortToggle = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setSortPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }
    setIsSortOpen((prev) => !prev);
  };

 useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      sortModalRef.current &&
      !sortModalRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsSortOpen(false);
    }
  };

  if (isSortOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isSortOpen]);

  const handleToggleFeatured = () =>{
    
  }

  const filteredBlogs = () => {
    if (!searchTerm) setSearchResult(blogs);
    const result =
      blogs?.length > 0 &&
      // i removed the text : index for now that it not being called cause it preventing me from creating a PR
      blogs?.filter((item) => {
        return (
          item?.title?.includes(searchTerm) ||
          item?.subtitle?.includes(searchTerm)
        );
      });
    if (result) {
      setSearchResult(result);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRefresh = () => {
    setSortOrderValue("DESC");
    setIsSortOpen(false);
  };

  useEffect(() => {
    filteredBlogs();
  }, [searchTerm, blogs]);

  useEffect(() => {
    dispatch(fetchBlogs(sortOrderValue)).unwrap();
  }, [sortOrderValue]);

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-3 md:p-5 bg-[#F8F9FA] min-h-screen relative">
          <div className="absolute inset-1 border-[3px] border-[#E0E0E0] pointer-events-none rounded-lg"></div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full h-full mx-auto my-auto border-[3px] border-[#E0E0E0]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-medium text-[#1D3F3F] font-aeonik">
                  Blog
                </h2>
              </div>
              <button
                onClick={() => navigate("/create-blog")}
                className="bg-[#00E5FF] text-white font-medium font-Poppins px-4 py-4 rounded-lg flex items-center"
              >
                <FaPlus className="mr-2" /> Create Blog
              </button>
            </div>

            <div className="w-full rounded-lg flex justify-between items-start mt-6">
              <div className="flex gap-2 bg-[#F9F9F9] rounded-full px-3 py-4">
                <FilterButton ref={buttonRef} onClick={handleSortToggle}>
                  Sort <FaChevronDown className="ml-2" />
                </FilterButton>
                <button className="px-4 py-2 flex items-center bg-black text-white rounded-full">
                  Reset Filter{" "}
                  <FaSyncAlt onClick={() => handleRefresh()} className="ml-2" />
                </button>
              </div>

              <SearchBar
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
              />

              {isSortOpen && (
                <SortModal
                  isOpen={isSortOpen}
                  onClose={() => setIsSortOpen(false)}
                  position={sortPosition}
                  setSortOrderValue={setSortOrderValue}
                  ref={sortModalRef}
                />
              )}
            </div>

            {/* next code in here  which will appear before pagination*/}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 w-full mt-8">
              {/* Article Card 1 */}
              {searchResult.length > 0 &&
                searchResult.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col shadow-lg rounded-lg overflow-hidden h-full w-full"
                    >
                      {/* Image */}
                      <img
                        src="/max.jpeg"
                        alt="Maximizing Warehouse Efficiency"
                        className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
                      />

                      {/* Content Section */}
                      <div className="bg-white p-4 pb-4 flex flex-col flex-grow justify-between">
                        {/* Date */}
                        <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-0">
                          {new Date(item?.date).toLocaleDateString()}
                        </p>

                        {/* Title */}
                        <p className="font-medium font-yeseva text-[8px] md:text-base text-[#1D3F3FDE] mt-1">
                          {item.title ||
                            "Maximizing Warehouse Efficiency: Tips for Businesses"}
                        </p>

                        {/* Read More + Featured Toggle */}
                        <div className="mt-6 flex items-center justify-between">
                          <Link
                            to={`/see-details/${item._id}`}
                            className="text-[#1D3F3F] font-aeonik font-normal text-[10px] md:text-sm flex items-center gap-1 underline"
                          >
                            Read more{" "}
                            <IoIosArrowRoundForward className="text-2xl" />
                          </Link>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleToggleFeatured(item._id)}
                              className={`w-10 h-5 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                                item.featured ? "bg-green-500" : "bg-gray-300"
                              }`}
                            >
                              <div
                                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                                  item.featured ? "translate-x-5" : ""
                                }`}
                              ></div>
                            </button>

                            <span className="text-[10px] md:text-sm text-[#1D3F3F]">
                              Featured
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* ends here */}

            <Pagination
              currentPage={currentPage}
              totalPages={50}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Components

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
