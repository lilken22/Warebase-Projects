import React, { useState, useRef } from "react";
import { Menu } from "lucide-react";
import { IoMdArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaCloudUploadAlt } from "react-icons/fa";

export default function AddPropertyMobile() {
  const navigate = useNavigate();
  const [previewImages, setPreviewImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (files) => {
    const validFiles = Array.from(files).filter(
      (file) => file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024
    );

    if (validFiles.length !== files.length) {
      alert("Some files were invalid. Only images under 5MB are allowed.");
    }

    const imagePreviews = validFiles.map((file) =>
      URL.createObjectURL(file)
    );
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
    URL.revokeObjectURL(updatedImages[index]);
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
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[500px] pb-0 px-4">
        {/* Navbar */}
        <div className="flex items-center justify-between py-4 mt-7">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          <Menu size={24} className="text-gray-800" />
        </div>

        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="bg-white rounded-lg px-2 py-1 flex items-center gap-1 border border-gray-200 shadow-md hover:bg-gray-50 transition-colors"
        >
          <IoMdArrowDropleft className="text-3xl text-gray-500" />
        </button>

        {/* Header Text */}
        <div className="mt-4 mb-4">
          <h1 className="text-base font-medium text-gray-800">
            Fill in the form below to list your property and make it available to potential renters.
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Check the share box and type in the number of occupant if the warehouse space is a shared property.
          </p>
        </div>

        {/* Share Row */}
        <div className="flex items-center justify-between border-b pb-2 mb-4">
          <div className="flex items-center space-x-2 bg-[#F3F3F3] px-3 py-2">
            <input type="checkbox" id="share" className="w-4 h-4" />
            <label htmlFor="share" className="text-sm text-[#1D3F3FDE] font-aeonik font-normal">Share</label>
          </div>
          <div className="text-base font-bold text-[#1D3F3F]">WB01</div>
        </div>

        {/* Form Inputs */}
        <div className="mt-5 grid grid-cols-1 min-[360px]:grid-cols-2 gap-4">
          <div>
            <label className="text-[#627777] text-xs block mb-1 h-[16px]">
            Property Name <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              className="w-full p-3 border rounded-lg bg-[#F3F3F3]"
              placeholder="#"
            />
          </div>

          <div>
            <label className="text-[#627777] text-xs block mb-1">
              Warehouse Size <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg bg-[#F3F3F3]"
              placeholder="Enter size"
            />
          </div>

          <div className="col-span-2">
            <label className="text-[#627777] text-xs block mb-1 h-[16px]">
              Warehouse Location <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg bg-[#F3F3F3]"
              placeholder="Enter Location"
            />
          </div>

          <div>
            <label className="text-[#627777] text-xs block mb-1 h-[16px]">
            Price <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              className="w-full p-3 border rounded-lg bg-[#F3F3F3]"
              placeholder="#"
            />
          </div>
        

          <div className="col-span-2">
            <label className="text-[#627777] text-sm block mb-1">
              Description <span className="text-red-600">*</span>
            </label>
            <textarea
              className="w-full p-3 border rounded-lg min-h-[100px] bg-[#F3F3F3]"
              placeholder="Enter your description details"
            />
          </div>

          <div className="col-span-2">
            <label className="text-[#627777] text-sm block mb-1">
              Property Type/Description <span className="text-red-600">*</span>
            </label>
            <textarea
              className="w-full p-3 border rounded-lg min-h-[100px] bg-[#F3F3F3]"
              placeholder="Enter Description"
            />
          </div>
        </div>

        {/* Upload Section */}
        <div className="mt-6">
          <label className="text-sm text-[#627777] block mb-2">
            Upload Image <span className="text-xs text-[#9FA0A0]">(max of 4 images)</span>{" "}
            <span className="text-red-600">*</span>
          </label>
          <div
            className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
              isDragging ? "border-[#00E5FF] bg-[#F3F3F3]" : "border-gray-300"
            }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <FaCloudUploadAlt
                className={`text-3xl mb-1 ${isDragging ? "text-[#00E5FF]" : "text-gray-400"}`}
              />
              <p className="text-xs text-gray-500">
                <span
                  className="text-[#00E5FF] underline"
                  onClick={handleClickUpload}
                >
                  Click here to upload
                </span>{" "}
                or drag & drop
              </p>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleFileInputChange}
                accept="image/*"
                className="hidden"
              />
              <p className="text-[10px] text-gray-400 mt-1">
                (Jpeg, PNG. Max File Size: 5MB)
              </p>
            </div>
          </div>

          {previewImages.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-3">
              {previewImages.map((img, index) => (
                <div key={index} className="relative group">
                  <img
                    src={img}
                    alt={`Preview ${index}`}
                    className="w-full h-24 object-cover rounded-md"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-1 text-xs"
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Privacy Checkbox */}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            id="privacy-policy"
            className="w-3 h-3 appearance-none border border-gray-400 checked:bg-[#00E5FF] focus:ring-2 cursor-pointer relative
            after:content-['✔'] after:text-black after:text-[10px] after:font-bold after:absolute after:top-[1px] after:left-1/2 after:-translate-x-1/2 after:opacity-0 checked:after:opacity-100"
          />
          <label htmlFor="privacy-policy" className="text-[#627777] text-sm">
            Phone number visible on website
          </label>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
          <button className="w-full sm:w-auto px-12 py-2 bg-black text-white rounded-3xl text-sm font-medium">
            Submit
          </button>
          <button className="w-full sm:w-auto px-12 py-2 bg-white text-gray-600 rounded-3xl border shadow text-sm font-medium">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
