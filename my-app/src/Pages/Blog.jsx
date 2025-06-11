import React,  { useState , useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6"; // Icons for previous and next
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../redux/slices/blog.slice";
import { selectBlogSlice } from "../redux/selectors/blog.selector";
import { IMAGE_URL } from "../redux/actionTypes";

export default function Blog() {
  const { blogs, featuredPost } = useSelector(selectBlogSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page

   const isDev = import.meta.env.DEV; // true in dev, false in production
   function getImageUrl(path) {
     return isDev ? path : `${IMAGE_URL}${path}`;
  }
  
  const handleReadMoreClick = () => {
    navigate("/blogdetails");
  };

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(fetchBlogs()).unwrap();
  }, []);
  return (
    <div className="min-h-screen bg-white text-[rgb(26, 24, 24)] font-serif flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      <section className="py-20 px-4 md:px-12 lg:px-16 mt-16">
        {/* Section Title */}
        <h2 className="text-[20px] md:text-[57px] font-normal font-yeseva text-[#1D3F3F] text-center mb-0">
          Blog
        </h2>
        <p className="text-center text-[#1D3F3F] font-normal font-yeseva text-sm md:text-lg mb-8">
          Stay up-to-date with industry trends.
        </p>

        {/* Featured Blog Post */}
        {featuredPost && (
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-12">
            {/* Image Section */}
            <div className="flex-1">
              <img
                src={featuredPost?.imageUrl[0]}
                alt="Warehouse Guide"
                className="w-full h-[330px] object-cover rounded-l-md"
              />
            </div>

            {/* Content Section (Joined with Image) */}
            <div className="flex-1 flex flex-col bg-[#FFFFFF] shadow-md rounded-r-md w-full h-[330px] flex-shrink-0 justify-between p-6 sm:p-8">
              {/* Title */}
              <h3 className="text-xl md:text-3xl font-medium font-yeseva text-[#1D3F3F]">
                {featuredPost?.title}
                <br className="hidden sm:inline" /> Warehouse Space
              </h3>

              {/* Description */}
              <p className="text-[#627777] text-sm md:text-base font-normal font-aeonik leading-relaxed">
                {featuredPost?.content}
              </p>

              {/* Date */}
              <p className="text-sm text-[#1D3F3F75] md:text-base font-normal font-aeonik">
                {new Date(featuredPost?.date).toLocaleDateString()}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
                {/* Read More Button */}
                <button
                  className="px-10 py-4 bg-[#1C1C1C] text-white rounded-full text-sm font-semibold hover:bg-[#1D3F3F75] transition"
                  onClick={handleReadMoreClick}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        )}

        {/* "Our Stories" Heading */}
        <div className="mb-6">
          <h4 className="text-[#1D3F3F] text-[31px] font-aeonik font-bold">
            Our stories
          </h4>
        </div>

        {/* Grid of Articles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-6 mx-auto ">
          {/* Article Card 1 */}
          {blogs?.length > 0 &&
            blogs?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col shadow-lg rounded-lg overflow-hidden h-full w-full"
                >
                  {/* Image Section */}
                  <img
                    src={item.imageUrl[0]}
                    alt="Maximizing Warehouse Efficiency"
                    className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
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
                    <Link
                      to={`/blogdetails/${item._id}`}
                      className="text-[#1D3F3F] font-aeonik font-bold text-[10px] md:text-lg mt-auto flex text-center items-center justify-start gap-3"
                    >
                      Read More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* Pagination Section */}
      <div className="flex justify-center items-center space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 px-4 rounded-md border border-gray-200 bg-[#FFFFFF] hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaChevronLeft className="text-[#1D3F3F]" />
        </button>

        {/* Page Numbers */}
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-1 rounded-md  border border-gray-200 shadow-sm ${
              currentPage === page
                ? "bg-[#E2E8F0] text-[#021816]"
                : "bg-[#FFFFFF] text-[#021816] hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Ellipsis */}
        <span className="text-[#1D3F3F]">....</span>

        {/* Last Page */}
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

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === 50}
          className="px-4 py-2 rounded-md bg-[#FFFFFF] border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaChevronRight className="text-[#1D3F3F]" />
        </button>
      </div>

      {/* Stay Up to Date Section */}
      <section className="py-16 px-4 text-center bg-white ">
        {/* Heading */}
        <h2 className="md:text-[57px] font-normal text-[#1D3F3F] font-yeseva mb-2">
          Stay up to date
        </h2>
        <p className="text-[#1D3F3F] max-w-xl mx-auto font-aeonik md:text-lg font-normal">
          Subscribe to our newsletter for industry insights, expert tips, and
          exclusive updates on warehouse rentals, leasing, and sharing
          opportunities!
        </p>

        {/* Input and Button Container with Background Image */}
        <div
          className="flex justify-center items-center mt-12 bg-center bg-[length:370px_120px] md:bg-[length:1100px_300px] h-[120px] md:h-[300px]"
          style={{
            backgroundImage: "url(/STAY.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative w-full max-w-[300px] md:max-w-[700px] px-4">
            {/* Input Field */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 pr-20 border border-gray-300 rounded-2xl focus:outline-none text-sm md:text-base h-10 md:h-16"
            />
            {/* Subscribe Button Inside Input */}
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition w-[90px] md:w-[190px] text-sm md:text-lg h-10 md:h-16">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
