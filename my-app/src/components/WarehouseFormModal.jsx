import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendExploreMessage } from "../redux/slices/message.slice";
import { selectMessageSlice } from "../redux/selectors/message.selector";
import { toast } from "react-toastify";

const WarehouseFormModal = ({ isOpen, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef();
  const dispatch = useDispatch();
  // i removed the text error
  const { isLoading } = useSelector(selectMessageSlice);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    warehouseLocation: "",
    warehouseSize: "",
    price: "",
    intendedUsage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    onClose();
  };

  const handleSubmit = async (e) => {
    if (!formData) return toast.error("Please fill the required form details");
    e.preventDefault();
    try {
      const response = await dispatch(sendExploreMessage(formData));
      if (response === 200) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          warehouseLocation: "",
          warehouseSize: "",
          price: "",
          intendedUsage: "",
        });

        setShowConfirmation(true);
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        isOpen
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // useEffect(() => {
  //   if (showConfirmation) {
  //     const timer = setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [showConfirmation]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4 pt-20 z-40">
      {/* Form Container */}
      {!showConfirmation ? (
        <div
          ref={modalRef}
          className="bg-white p-8 rounded-3xl shadow-lg w-full md:max-w-[751px] max-h-[80vh] relative overflow-hidden"
        >
          <div className="h-[70vh] overflow-y-auto pr-3">
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-lg"
            >
              ✖
            </button>

            <div className="md:max-w-[666px] min-h-[84px] gap-[4px] mt-4">
              <h2 className="text-2xl font-medium text-[#1D3F3F] font-yeseva text-start">
                Get Started with Your Warehouse Space
              </h2>
              <p className="text-[#627777] text-base text-start mt-2">
                Need a warehouse to Buy, Lease or Share? Warebase is the partner
                you can trust. Or have a warehouse to Sell, Lease or Share?
                Warebase is the partner you can trust.
              </p>
            </div>

            <form className="mt-4 space-y-2" onSubmit={handleSubmit}>
              {/* Full Name & Email */}
              <div className="grid grid-cols-2 md:max-w-[674px] gap-[39px]">
                <div className="md:max-w-[324px]">
                  <label className="block text-base font-medium font-aeonik text-[#627777]">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border bg-[#F3F3F3] rounded-md text-base"
                    required
                  />
                </div>

                <div className="md:max-w-[324px]">
                  <label className="block text-base font-medium font-aeonik text-[#627777]">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border bg-[#F3F3F3] rounded-md text-base"
                    required
                  />
                </div>
              </div>

              {/* Phone & Company Name */}
              <div className="grid grid-cols-2 md:max-w-[674px] gap-[39px]">
                <div className="md:max-w-[324px]">
                  <label className="block text-base font-medium font-aeonik text-[#627777]">
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border bg-[#F3F3F3] rounded-md text-base"
                    required
                  />
                </div>

                <div className="md:max-w-[324px]">
                  <label className="block text-base font-medium font-aeonik text-[#627777]">
                    Company Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border bg-[#F3F3F3] rounded-md text-base"
                    required
                  />
                </div>
              </div>

              {/* Warehouse Location & Size */}
              <div className="grid grid-cols-2 md:max-w-[674px] gap-[39px]">
                {/* Warehouse Location */}
                <div className="md:max-w-[324px]">
                  <label className="block text-base font-medium font-aeonik text-[#627777]">
                    Warehouse Location<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="warehouseLocation"
                    value={formData.warehouseLocation}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 bg-[#F3F3F3] rounded-md text-base"
                    required
                  />
                </div>

                {/* Warehouse Size */}
                <div>
                  <label className="block text-[#627777] font-normal font-aeonik text-base">
                    Warehouse Size
                    <span className="text-red-600">*</span>
                  </label>
                  <div className="flex items-center mt-1 rounded-md bg-[#F3F3F3] overflow-hidden border border-gray-300">
                    <input
                      onChange={handleChange}
                      name="warehouseSize"
                      value={formData.warehouseSize}
                      type="text"
                      className="w-full px-3 py-2 bg-[#F3F3F3] text-base focus:outline-none"
                      placeholder="Enter size"
                      required
                    />
                    <span className="text-[#627777] text-base p-2">
                      sq.ft
                    </span>
                  </div>
                </div>
              </div>

              {/* Rent Price */}
              <div className="md:max-w-[674px]">
                <label className="block text-base font-medium font-aeonik text-[#627777]">
                  Rent/Price<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border bg-[#F3F3F3] rounded-md text-base"
                  required
                />
              </div>

              {/* Intended Usage */}
              <div className="md:max-w-[674px]">
                <label className="block text-base font-medium font-aeonik text-[#627777]">
                  Intended Usage<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="intendedUsage"
                  value={formData.intendedUsage}
                  onChange={handleChange}
                  className="mt-1 w-full min-h-[110px] p-2 border bg-[#F3F3F3] rounded-md text-base resize-y"
                  required
                />
              </div>

              {/* Checkbox with Text */}
              <div className="flex items-start gap-2 mt-5">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                />
                <label
                  htmlFor="privacy-policy"
                  className="text-[#627777] text-sm"
                >
                  By ticking the box, I confirm that the information provided is
                  accurate and I agree to the{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-[#00E5FF] hover:underline"
                  >
                    privacy policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/terms-and-conditions"
                    className="text-[#00E5FF] hover:underline"
                  >
                    terms and conditions
                  </Link>
                  .
                </label>
              </div>

              {/* Buttons Section */}
              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-[322px] py-6 flex items-center justify-center h-[34px] bg-[#1C1C1C] text-[#FFF7F2] rounded-full text-sm hover:bg-gray-800 transition"
                >
                  Send Message
                </button>

                <button
                  type="button"
                  onClick={closeConfirmation}
                  className="w-full md:w-[322px] h-[34px] bg-[#FFFFFF] text-[#1D3F3F] flex justify-center items-center py-6 rounded-full text-sm shadow-md hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        /* Confirmation Modal (also gets the outside-click close) */
        <div
          ref={modalRef}
          className="bg-white p-6 rounded-3xl shadow-lg w-[100%] max-w-lg min-h-[442px] flex flex-col items-center justify-center"
        >
          {isLoading ? (
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
          ) : (
            <div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-white animate-checkmark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          )}
          <h2 className="text-lg font-semibold text-gray-900 text-center">
            Successfully submitted
          </h2>
          <p className="text-gray-600 text-sm text-center mt-2">
            Thank you for contacting us, we will be in touch shortly.
          </p>
          <button
            onClick={() => {
              closeConfirmation(); // Close the modal first
              navigate("/listing");
            }}
            className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 text-sm"
          >
            See available properties
          </button>
        </div>
      )}
    </div>
  );
};

export default WarehouseFormModal;
