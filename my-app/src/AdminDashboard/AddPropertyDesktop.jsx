import React, { useState, useRef } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaTimes, FaCloudUploadAlt } from "react-icons/fa";
// note that i removes useSelctor cause it causing an error on git hub
import { useDispatch  } from "react-redux";
import { createProperty } from "../redux/slices/property.slice";
import { toast } from "react-toastify";
import { getItemFromLocalStorage } from "../utitlity/storage";

const AddPropertyDesktop = () => {
  const dispatch = useDispatch();
  // const token = getItemFromLocalStorage("access_token");
  const token = getItemFromLocalStorage("wb_token");
  const navigate = useNavigate();
  const [previewImages, setPreviewImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    isShared: isChecked,
    sharePropertyNumber: 0,
    propertyName: "",
    propertyId: "",
    propertyPrice: 0,
    description: "",
    location: "",
    propertySize: "",
  });

  
  const handleImageUpload = (files) => {
    const validFiles = Array.from(files).filter(
      (file) => file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024 // 5MB
    );
  
    if (validFiles.length !== files.length) {
      alert("Some files were invalid. Only images under 5MB are allowed.");
    }
  
    const imagePreviews = validFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages((prev) => [...prev, ...imagePreviews]);
    setSelectedFiles((prev) => [...prev, ...validFiles]);
  };

  const handleFileInputChange = (e) => {
    if (e.target.files.length) {
      const newFiles = Array.from(e.target.files);

      // Append the new files to the already existing ones in selectedFiles
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);

      // Optionally, you can handle the file upload here as well
      handleImageUpload(newFiles);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };


  const handleBackClick = () => {
    navigate("/portfolio");
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


  const createNewProperty = async () => {
    if (!formData.propertyName || !formData.propertyPrice) return;

    const formDataToSend = new FormData();
    formDataToSend.append("isShared", formData.isShared);
    formDataToSend.append("sharePropertyNumber", formData.sharePropertyNumber);
    formDataToSend.append("propertyName", formData.propertyName);
    formDataToSend.append("propertySize", formData.propertySize);
    formDataToSend.append("propertyPrice", formData.propertyPrice);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("location", formData.location);
    selectedFiles?.forEach((file, index) => {
      formDataToSend.append("images", file);
    });


    try {
      await dispatch(createProperty({ token, body: formDataToSend })).unwrap();
      setFormData({
        isShared: false,
        sharePropertyNumber: "",
        propertyName: "",
        propertyId: "",
        propertyPrice: "",
        description: "",
        location: "",
        propertySize: "",
      });
    setSelectedFiles([]);
    setPreviewImages([]);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "An error occured while creating property");
      return;
    }
  };

  return (
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

          {/* Parent Container (Wraps only the form) */}
          <div className="bg-[#F9F9F9] px-7 py-7 rounded-3xl">
            <div className="bg-[#FEFEFE] p-6 rounded-xl shadow-md w-full max-w-5xl border-[3px] border-[#FEFEFE]">
              <h2 className="text-lg font-normal text-[#1D3F3F]">
                Fill in the form below to list your property and make it
                available to potential renters.
              </h2>
              <p className="text-[#627777] text-sm font-aeonik font-normal mt-8">
                Check the share box and type in the number of occupant if the
                warehouse space is a shared property
              </p>

              {/* Share Checkbox + Warehouse ID - Fixed at start */}
              <div className="flex justify-between items-center mt-5 border-b border-gray-200 py-3 w-full">
                <div className="flex items-center bg-gray-100 px-6 py-3 rounded-md">
                  <input
                    type="checkbox"
                    id="share"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 border-[#AAAAAA] accent-red-700"
                  />
                  <label
                    htmlFor="share"
                    className="ml-2 text-[#1D3F3FDE] font-normal font-aeonik text-sm"
                  >
                    Share
                  </label>

                  {/* Conditionally show input when checkbox is checked */}
                  {isChecked && (
                    <input
                      onChange={(e) => handleInputChange(e)}
                      name="sharePropertyNumber"
                      value={formData.sharePropertyNumber}
                      type="number"
                      placeholder="Enter digit"
                      className="ml-4 px-3 w-28 py-2 border border-gray-300 rounded-md text-[#1D3F3FDE] placeholder:text-gray-400 focus:outline-none"
                    />
                  )}
                </div>

                <div className="text-2xl font-bold text-[#1D3F3F] font-aeonik">
                  WB01
                </div>
              </div>

              {/* Form Fields */}
              <div className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#627777] font-normal font-aeonik text-base mb-1">
                      Property Name{" "}
                      <span className=" font-aeonik font-normal text-red-600 text-lg">
                        *
                      </span>
                    </label>
                    <input
                      onChange={(e) => handleInputChange(e)}
                      name="propertyName"
                      value={formData.propertyName}
                      type="text"
                      className="w-full p-3 border rounded-lg bg-[#F3F3F3]"
                      placeholder="Enter property name"
                    />
                  </div>

                  <div>
                    <label className="block text-[#627777] font-normal font-aeonik text-base mb-1">
                      Warehouse Location{" "}
                      <span className=" font-aeonik font-normal text-red-600 text-lg">
                        *
                      </span>
                    </label>
                    <input
                      onChange={(e) => handleInputChange(e)}
                      name="location"
                      value={formData.location}
                      type="text"
                      className="w-full p-3 border rounded-lg bg-[#F3F3F3]"
                      placeholder="Enter Location"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#627777] font-normal font-aeonik text-base">
                        Warehouse Size{" "}
                        <span className="text-center font-aeonik font-normal text-red-600 text-lg">
                          *
                        </span>
                      </label>
                      <div className="flex items-center border rounded-lg bg-[#F3F3F3] mt-1 overflow-hidden">
                        <input
                          onChange={(e) => handleInputChange(e)}
                          name="propertySize"
                          value={formData.propertySize}
                          type="text"
                          className="flex-1 p-3 bg-transparent border-none outline-none"
                          placeholder="Enter Size"
                        />
                        <span className="px-3 text-[#627777]">sq.ft</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#627777] font-normal font-aeonik text-base mb-1">
                        Price{" "}
                        <span className=" font-aeonik font-normal text-red-600 text-lg">
                          *
                        </span>
                      </label>
                      <input
                        onChange={(e) => handleInputChange(e)}
                        name="propertyPrice"
                        value={formData.propertyPrice}
                        type="number"
                        className="w-full p-3 border rounded-lg bg-[#F3F3F3]"
                        placeholder="#"
                      />
                    </div>
                  </div>

                  {/* intended usage */}
                  <div>
                    <label className="block text-[#627777] font-normal font-aeonik text-base mt-5">
                      Property Type/Description{" "}
                      <span className=" font-aeonik font-normal text-red-600 text-lg text-center">
                        *
                      </span>
                    </label>
                    <textarea
                      onChange={(e) => handleInputChange(e)}
                      name="description"
                      value={formData.description}
                      className="w-full p-3 border rounded-lg min-h-[120px] bg-[#F3F3F3]"
                      placeholder="Enter your description details"
                    />
                  </div>
                </div>
              </div>

              {/* Image Upload Section */}
              <div className="mt-6">
                <label className="block text-base text-[#627777] font-normal font-aeonik mb-0">
                  Upload Image{" "}
                  <span className="font-aeonik text-sm font-normal text-[#9FA0A0]">
                    {" "}
                    (max of 4 images)
                  </span>{" "}
                  <span className=" font-aeonik font-normal text-red-600 text-lg text-center">
                    *
                  </span>
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
                      <label
                        htmlFor="image-upload"
                        className="text-[#00E5FF] font-Poppins font-normal text-xs"
                      >
                        Click here to upload
                      </label>{" "}
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

              <div className="flex items-center gap-2 mt-4 ">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  className="w-3 h-3 appearance-none border border-gray-400 checked:bg-[#00E5FF]  focus:ring-2  cursor-pointer relative 
                 after:content-['✔'] after:text-black after:text-[10px] after:font-bold after:absolute after:top-[1px] after:left-1/2 after:-translate-x-1/2 after:opacity-0 checked:after:opacity-100"
                />
                <label
                  htmlFor="privacy-policy"
                  className="text-[#627777] text-sm font-medium text-center"
                >
                  Phone number visible on website
                </label>
              </div>

              {/* Buttons */}
              <div className="flex justify-center space-x-4 mt-8">
                <button
                  onClick={createNewProperty}
                  className="px-16 py-2 bg-black text-white rounded-3xl hover:bg-gray-800 transition-colors focus:outline-none  focus:ring-black text-lg font-aeonik font-medium"
                >
                  Submit
                </button>
                <button className="px-16 py-2 bg-white text-gray-600 rounded-3xl border border-gray-100 hover:bg-gray-50 transition-colors focus:outline-none font-aeonik font-medium text-lg shadow-lg focus:ring-gray-300 ">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyDesktop;
