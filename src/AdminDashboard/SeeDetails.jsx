import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { IoMdArrowDropleft } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogSlice } from "../redux/selectors/blog.selector";
import { getBlog, fetchLatestBlogs } from "../redux/slices/blog.slice";
// import { toast } from "react-toastify";
// import { getItemFromLocalStorage } from "../utitlity/storage";
import { useParams } from "react-router-dom";

export default function SeeDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // i remove the word : latest because it causing me from creating a PR
  const { blog } = useSelector(selectBlogSlice);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/blogs");
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
        <div className="flex min-h-screen bg-[#F8F9FA]">
          {/* Persistent Sidebar */}
          <Sidebar />

          <div className="flex-1 flex flex-col">
            {/* Persistent Header */}
            <Header />

            <div className="flex justify-center items-center p-7 md:p-5 bg-[#FFFFFF] rounded-2xl min-h-screen relative overflow-hidden">
              {/* Decorative Border */}
              <div className="absolute inset-1 border-[3px] border-[#E0E0E0] pointer-events-none rounded-lg"></div>

              {/* Back Button Box (Outside the form) */}
              <button
                className="absolute top-10 left-10 bg-[#FFFFFF] rounded-lg px-2 py-1 flex items-center cursor-pointer border-[2px] shadow-md"
                onClick={handleBackClick}
              >
                <IoMdArrowDropleft className="text-xl text-gray-500 w-8 h-8" />
              </button>

              {/* Blog Content Section - Now aligned with back button */}
              <section className="mt-32 md:mt-16 w-full pl-10 pr-4 md:pl-20 md:pr-20 py-6 md:py-10">
                <div className="flex flex-row md:items-center justify-between">
                  <h5 className="text-[#1D3F3FDE] font-normal font-yeseva text-xs md:text-[30px] tracking-normal">
                    {blog.title ||
                      "The Ultimate Guide to Renting a Warehouse Space"}
                  </h5>
                  <p className="text-[#1D3F3F75] font-aeonik font-normal text-sm md:text-base mt-2 md:mt-0">
                    {new Date(blog.date).toLocaleDateString() ||
                      "January 15, 2025"}
                  </p>
                </div>

                {/* Full-width image container */}
                <div className="mt-4 w-full ">
                  {blog.imageUrl?.[0] && (
                    <img
                      src={blog.imageUrl[0]}
                      alt="Warehouse Guide"
                      className="w-full h-auto md:h-[392px] object-cover rounded-md"
                    />
                  )}
                </div>

                {/* Content container */}
                <div className="w-full mt-6">
                  <p className="text-[#1D3F3FDE] font-aeonik font-normal text-sm md:text-base">
                    {blog.content}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
