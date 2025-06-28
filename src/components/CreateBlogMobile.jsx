import React, { useState, useRef } from "react";
import { Menu } from "lucide-react";
import { IoMdArrowDropleft } from "react-icons/io";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { createBlog } from "../redux/slices/blog.slice";
import { toast } from "react-toastify";
import { getItemFromLocalStorage } from "../utitlity/storage";

export default function CreateBlogMobile() {
  const [previewImages, setPreviewImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getItemFromLocalStorage("wb_token");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    article: "",
    image: "",
  });

  const handleImageUpload = (files) => {
    const validFiles = Array.from(files).filter(
      (file) => file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024
    );
    if (validFiles.length !== files.length) {
      alert("Some files were invalid. Only images under 5MB are allowed.");
    }

    const imagePreviews = validFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...imagePreviews]);
  };

  const handleFileInputChange = (e) => {
    if (e.target.files.length) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
      handleImageUpload(newFiles);
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  const removeImage = (index) => {
    const updatedImages = [...previewImages];
    URL.revokeObjectURL(updatedImages[index]);
    updatedImages.splice(index, 1);
    setPreviewImages(updatedImages);
  };

  const createNewBlog = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("article", formData.article);
    selectedFiles.forEach((file) => {
      formDataToSend.append("images", file);
    });

    try {
      await dispatch(createBlog({ token, body: formDataToSend })).unwrap();
      setFormData({
        title: "",
        article: "",
        image: "",
      });
      setPreviewImages([]);
      setSelectedFiles([]);
      toast.success("Blog created successfully");
      navigate("/blog-mobile");
    } catch (error) {
      toast.error(error.message || "An error occurred while creating blog");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files.length) {
      handleImageUpload(e.dataTransfer.files);
    }
  };

  const handleBackClick = () => {
    navigate("/blog-mobile");
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[500px]">
        {/* Top Navbar */}
        <div className="flex items-center justify-between px-4 py-4 mt-7">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          <Menu size={24} className="text-gray-800" />
        </div>

        <button
          onClick={handleBackClick}
          className="mt-2 bg-white rounded-lg px-2 py-1 flex items-center gap-1 border border-gray-200 shadow-md hover:bg-gray-50 transition-colors"
        >
          <IoMdArrowDropleft className="text-3xl text-gray-500" />
        </button>

        <div className=" mt-4">
          <div className="bg-[#FEFEFE] p-6 rounded-xl shadow-md w-full border-[3px] border-[#FEFEFE]">
            <h2 className="text-lg font-normal text-[#1D3F3F] font-aeonik">
              Share Your Story: Add Your Blog Content Below
            </h2>
            <p className="text-[#627777] font-aeonik font-normal text-xs mt-4">
              Check the share box and type in the number of occupant if the
              warehouse space is a shared property
            </p>

            {/* Image Upload Section */}
            <div className="mt-6">
              <label className="block text-sm text-[#627777] font-normal font-aeonik mb-0">
                Hero Image
              </label>
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                  isDragging
                    ? "border-[#00E5FF] bg-[#F3F3F3]"
                    : "border-gray-300"
                }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <FaCloudUploadAlt
                    className={`text-4xl mb-2 ${
                      isDragging ? "text-[#00E5FF]" : "text-gray-400"
                    }`}
                  />
                  <p className="text-gray-500 mb-0 font-Poppins font-normal text-xs">
                    <span
                      className="text-[#00E5FF] font-Poppins font-normal text-xs"
                      onClick={handleClickUpload}
                    >
                      Click here to upload
                    </span>{" "}
                    or Drag & drop
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileInputChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    (Jpeg, PNG. Max File Size: 5MB)
                  </p>
                </div>
              </div>

              {previewImages.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {previewImages.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img}
                        alt={`Preview ${index}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage(index);
                        }}
                        className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Form Fields */}
            <div className="mt-5">
              <div>
                <label className="block text-[#1C1C1C] font-normal font-aeonik text-base">
                  Title
                </label>
                <input
                  onChange={(e) => handleInputChange(e)}
                  value={formData.title}
                  name="title"
                  type="text"
                  className="w-full p-3 border rounded-lg bg-[#F3F3F3] mt-1"
                  placeholder="Enter Blog Title"
                />
              </div>
              <div>
                <label className="block text-[#1C1C1C] font-normal font-aeonik text-base mt-5">
                  Article
                </label>
                <ReactQuill
                  theme="snow"
                  value={formData.article}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, article: value }))
                  }
                  className="bg-white mt-2 rounded-lg"
                  placeholder="Write your blog content here..."
                />
              </div>

              <div className="flex justify-center items-center space-x-4 mt-8">
                <button
                  onClick={createNewBlog}
                  className="px-10 py-2 bg-black text-white rounded-3xl hover:bg-gray-800 transition-colors focus:outline-none focus:ring-black text-lg font-aeonik font-medium"
                >
                  Publish
                </button>
                <button
                  onClick={() => {
                    navigate("/blog-mobile");
                  }}
                  className="px-10 py-2 bg-white text-gray-600 rounded-3xl border border-gray-100 hover:bg-gray-50 transition-colors focus:outline-none font-aeonik font-medium text-lg shadow-lg focus:ring-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
