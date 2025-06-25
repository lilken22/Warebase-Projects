import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogSlice } from "../redux/selectors/blog.selector";
import { getBlog, fetchLatestBlogs } from "../redux/slices/blog.slice";
// import { toast } from "react-toastify";
// import { getItemFromLocalStorage } from "../utitlity/storage";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog, latest } = useSelector(selectBlogSlice);
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/blogdetails");
  };

  useEffect(() => {
    if (id) {
      dispatch(getBlog(id)).unwrap();
      dispatch(fetchLatestBlogs()).unwrap();
    }
  }, [dispatch, id]);
  return (
    <>
      {blog && (
        <div className="min-h-screen bg-white text-[rgb(26, 24, 24)] font-serif flex flex-col justify-between">
          {/* Navbar */}
          <Navbar />

          {/* Fixed Back Link - Mobile Optimized */}
          <Link
            to="/blog"
            className="fixed top-20 left-0 md:top-1/4 text-[#00E5FF] p-3 md:p-4 transition-colors duration-300 flex flex-row gap-2 items-center justify-between bg-opacity-90 rounded-r-md md:shadow-none"
            style={{ zIndex: 1000 }}
          >
            <FaLongArrowAltLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-aeonik font-normal text-sm md:text-lg">
              Back
            </span>
          </Link>

          {/* Blog Content Section */}
          <section className="mt-32 md:mt-16 px-4 md:max-w-[1325px] h-auto md:pl-28 py-6 md:py-10">
            <div className="flex  flex-row md:items-center justify-between">
              <h5 className="text-[#1D3F3FDE] font-normal font-yeseva text-xs md:text-[30px] tracking-normal">
                {blog.title ||
                  "The Ultimate Guide to Renting a Warehouse Space"}
              </h5>
              <p className="text-[#1D3F3F75] font-aeonik font-normal text-sm md:text-base mt-2 md:mt-0">
                {new Date(blog.date).toLocaleDateString() || "January 15, 2025"}
              </p>
            </div>

            <div className="mt-4">
              {blog.imageUrl?.[0] && (
                <img
                  src={blog.imageUrl[0]}
                  alt="Warehouse Guide"
                  className="w-full h-auto md:h-[392px] object-cover rounded-md"
                />
              )}
            </div>

            <div className="w-full mt-6">
              <p className="text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base">
                {blog.subtitle || ""}
              </p>

              <p>{blog.content}</p>
            </div>
          </section>

          {/* Recent Stories Section - 2 columns on mobile */}
          <section className="mt-16 md:mt-28 max-w-[1600px] mx-auto px-4 pb-10">
            <div className="mb-4 md:mb-6">
              <h4 className="text-[#1D3F3F] text-2xl md:text-[31px] font-aeonik font-bold">
                Recent stories
              </h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {/* Article Card 1 */}
              {latest?.length > 0 &&
                // i removed the word index cause it causing an issue when am creating a PR
                latest?.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-col shadow-lg rounded-lg overflow-hidden">
                      {item.imageUrl?.[0] && (
                        <img
                          src={item?.imageUrl[0]}
                          alt="Maximizing Warehouse Efficiency"
                          className="w-full h-24 sm:h-32 md:h-48 object-cover"
                        />
                      )}
                      <div className="bg-white p-3 md:p-4 flex flex-col flex-grow">
                        <p className="text-xs md:text-sm text-[#1D3F3F75]">
                          {new Date(item.date).toLocaleDateString() ||
                            "January 15, 2025"}
                        </p>
                        <p className="font-medium font-yeseva text-xs md:text-base text-[#1D3F3FDE] mt-1 md:mt-2">
                          {item.title}
                        </p>
                        <Link
                          to={`/blogdetails/${item._id}`}
                          className="text-[#1D3F3F] font-aeonik font-bold text-xs md:text-base mt-2 md:mt-4 block"
                          // onClick={handleReadMoreClick}
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
