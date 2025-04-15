import React, { useState, useRef, useCallback } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaTimes, FaCloudUploadAlt } from "react-icons/fa";

const CreateBlogDesktop = () => {
  const [previewImages, setPreviewImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageUpload = (files) => {
    const validFiles = Array.from(files).filter(
      (file) => file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024 // 5MB
    );

    if (validFiles.length !== files.length) {
      alert("Some files were invalid. Only images under 5MB are allowed.");
    }

    const imagePreviews = validFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...imagePreviews]);
  };

  const handleFileInputChange = (e) => {
    if (e.target.files.length) {
      handleImageUpload(e.target.files);
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  const removeImage = (index) => {
    const updatedImages = [...previewImages];
    URL.revokeObjectURL(updatedImages[index]); // Clean up memory
    updatedImages.splice(index, 1);
    setPreviewImages(updatedImages);
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
    navigate("/blogs");
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex justify-center items-center p-7 md:p-5 bg-[#FFFFFF] rounded-2xl min-h-screen relative overflow-hidden">
          <div className="absolute inset-1 border-[3px] border-[#E0E0E0] pointer-events-none rounded-lg"></div>

          <button
            className="absolute top-10 left-10 bg-[#FFFFFF] rounded-lg px-2 py-1 flex items-center cursor-pointer border-[2px] shadow-md"
            onClick={handleBackClick}
          >
            <IoMdArrowDropleft className="text-xl text-gray-500 w-8 h-8" />
          </button>

          <div className="bg-[#F9F9F9] px-7 py-7 rounded-3xl w-full max-w-4xl mx-auto mt-16">
            <div className="bg-[#FEFEFE] p-6 rounded-xl shadow-md w-full border-[3px] border-[#FEFEFE]">
              <h2 className="text-lg font-normal text-[#1D3F3F] font-aeonik">
                Share Your Story: Add Your Blog Content Below
              </h2>

              {/* Image Upload Section */}
              <div className="mt-6">
                <label className="block text-sm text-[#627777] font-normal font-aeonik mb-0">
                  Hero Images
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
                      id="image-upload"
                    />
                    <p className="text-xs text-gray-400 mt-2">
                      (Jpeg, PNG. Max File Size: 5MB)
                    </p>
                  </div>
                </div>

                {/* Image Previews */}
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
                  <label className="block text-[] font-normal font-aeonik text-base">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg bg-[#F3F3F3] mt-1"
                    placeholder="Enter Blog Title"
                  />
                </div>
                <div>
                  <label className="block text-[#1C1C1C] font-normal font-aeonik text-base mt-5">
                    Article
                  </label>
                  <textarea
                    className="w-full p-3 border rounded-lg min-h-[120px] bg-[#F3F3F3]"
                    placeholder="Enter your blog content here..."
                  />
                </div>

                {/* Add this right after your form fields */}
                <div className="flex justify-center items-center space-x-4 mt-8">
                  <button
                    onClick={() => {
                      // Handle publish logic here
                      console.log("Publishing blog...");
                      // Add your actual publish logic (API call, etc.)
                    }}
                    className="px-16 py-2 bg-black text-white rounded-3xl hover:bg-gray-800 transition-colors focus:outline-none  focus:ring-black text-lg font-aeonik font-medium"
                  >
                    Publish
                  </button>
                  <button
                    onClick={() => {
                      // Handle cancel action
                      navigate("/blogs"); // Or your desired cancel behavior
                    }}
                    className="px-16 py-2 bg-white text-gray-600 rounded-3xl border border-gray-100 hover:bg-gray-50 transition-colors focus:outline-none font-aeonik font-medium text-lg shadow-lg focus:ring-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogDesktop;