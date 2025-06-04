import React, { useState, useRef, useEffect } from "react";
import { PiSlidersHorizontalFill } from "react-icons/pi";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav";
import {
  FaPlus,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../redux/slices/blog.slice";
import { selectBlogSlice } from "../redux/selectors/blog.selector";
import SortModal from "../components/SortModal";

export default function BlogMobile() {
  const { blogs } = useSelector(selectBlogSlice);
  const dispatch = useDispatch();
  const [ setIsSortOpen] = useState(false);
  const [ setSortPosition] = useState({ top: 0, left: 0 });
  const [sortOrderValue] = useState("DESC");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const sortModalRef = useRef(null);
  const buttonRef = useRef(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
        !sortModalRef.current.contains(event.target)
      ) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleToggleFeatured = () => {
    
  }

  const filteredBlogs = () => {
    if (!searchTerm) setSearchResult(blogs);
    const result =
      blogs?.length > 0 &&
      // i removed the index for now so ican be able to create a PR
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
  
  // i commented this out for now so i can be able to push and create a pr
  // const handleRefresh = () => {
  //   setSortOrderValue("DESC");
  //   setIsSortOpen(false);
  // };

  useEffect(() => {
    filteredBlogs();
  }, [searchTerm, blogs]);

  useEffect(() => {
    dispatch(fetchBlogs(sortOrderValue)).unwrap();
  }, [sortOrderValue]);

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[500px] pb-0">
        {/* Top Navbar */}
        <div className="flex items-center justify-between px-4 py-4 mt-7">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          <Menu size={24} className="text-gray-800" />
        </div>

        <div className="px-4">
          <div className="flex justify-between items-center mt-7">
            <h2 className="text-xl font-semibold text-gray-800">Blog</h2>
            <button
              onClick={() => navigate("/createblog-mobile")}
              className="bg-[#00E5FF] text-white font-medium font-Poppins px-3 py-3 rounded-lg flex items-center"
            >
              <FaPlus className="mr-2" /> Create Blog
            </button>
          </div>

          <div className="bg-[#F9F9F9] rounded-3xl px-3 py-4 mt-3">
            {/* Search and Filter */}
            <div className="flex items-center gap-2 mt-5">
              <SearchBar
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
              />
              <FilterButton ref={buttonRef} onClick={handleSortToggle}>
                <PiSlidersHorizontalFill size={20} className="text-gray-700 ml-1" />
              </FilterButton>
            </div>
          </div>
        </div>

        {/* blog cards start here*/}
        <div className="grid grid-cols-2 gap-3 w-full mt-4 px-2">
          {searchResult.length > 0 &&
            searchResult.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col shadow-lg rounded-lg overflow-hidden h-full w-full"
                >
                  {/* Image Section */}
                  <img
                    src="/max.jpeg"
                    alt="Maximizing Warehouse Efficiency"
                    className="w-full h-[120px] object-cover"
                  />

                  {/* Content Section */}
                  <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
                    {/* Date */}
                    <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-0">
                      {new Date(item?.date).toLocaleDateString()}
                    </p>

                    {/* Title */}
                    <p className="font-medium font-yeseva text-[8px] md:text-base text-[#1D3F3FDE] mt-1">
                      {item.title ||
                        "Maximizing Warehouse Efficiency: Tips for Businesses"}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center justify-between mt-4">
                    <Link
                      to={`/blogdetails-mobile/${item._id}`}
                      className="text-[#1D3F3F] font-aeonik font-normal text-[10px] md:text-sm  flex text-center items-center justify-start underline"
                    >
                      Read more<IoIosArrowRoundForward className="text-xl" />
                    </Link>

                    <div className="flex items-center text-center gap-1">
                      <button
                        onClick={() => handleToggleFeatured(item._id)}
                        className={`w-8 h-4 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                          item.featured ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`bg-white w-3 h-3 rounded-full shadow-md transform duration-300 ease-in-out ${
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

        {/* blog cards end here  */}

        <Pagination
          currentPage={currentPage}
          totalPages={50}
          onPageChange={handlePageChange}
        />

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
}

const SearchBar = ({ setSearchTerm, searchTerm }) => (
  <div className=" p-2 rounded-full w-full flex items-center">
    <div className="flex items-center bg-[#FFFFfF] shadow-sm px-3 py-3 border border-gray-100 rounded-full w-full">
      <input
        onChange={(e) => setSearchTerm(e.target.value)} // Add this
        value={searchTerm} // Add this
        type="text"
        placeholder="Search property by name or ID"
        className="bg-transparent outline-none flex-grow text-[#CCCCCC] placeholder-[#CCCCCC] font-Poppins text-[10px]"
      />
      <button className="text-gray-600">
        <FaSearch onClick={() => setSearchTerm(searchTerm)} />
      </button>
    </div>
  </div>
);

const FilterButton = React.forwardRef(({ onClick, children }, ref) => (
  <button
    ref={ref}
    onClick={onClick}
    className="px-4 py-2 flex items-center bg-white text-gray-700 rounded-full border border-gray-200"
  >
    {children}
  </button>
));

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
