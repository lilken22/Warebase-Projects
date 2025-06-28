import React, {useEffect} from 'react'
import BottomNav from "./BottomNav";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { selectBlogSlice } from "../redux/selectors/blog.selector";
import { getBlog, fetchLatestBlogs } from "../redux/slices/blog.slice";
// import { toast } from "react-toastify";
// import { getItemFromLocalStorage } from "../utitlity/storage";
import { useParams } from "react-router-dom";

export default function SeeDetailsMobile() {
   const { id } = useParams();
    const dispatch = useDispatch();
    // const { blog, latest } = useSelector(selectBlogSlice);
    const navigate = useNavigate();
  
    const handleBackClick = () => {
      navigate("/blog-mobile");
    };
  
    useEffect(() => {
      if (id) {
        dispatch(getBlog(id)).unwrap();
        dispatch(fetchLatestBlogs()).unwrap();
      }
    }, [dispatch, id]);

  return (
    <div className='min-h-screen bg-white flex justify-center'>
        <div className='w-full max-w-[500px] pb-0'>
           {/* Top Navbar */}
        <div className="flex items-center justify-between px-4 py-4 mt-7">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          <Menu size={24} className="text-gray-800" />
        </div> 
           {/* Back Button Box (Outside the form) */}
                   <button
                     className="absolute top-10 left-10 bg-[#FFFFFF] rounded-lg px-2 py-1 flex items-center cursor-pointer border-[2px] shadow-md"
                     onClick={handleBackClick}
                   >
                     <IoMdArrowDropleft className="text-xl text-gray-500 w-8 h-8" />
                   </button>








          {/* Bottom Navigation */}
         <BottomNav />
        </div>
    </div>
  )
}
