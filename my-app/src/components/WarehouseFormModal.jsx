import React, { useState } from "react";
import { Link } from "react-router-dom";

const WarehouseFormModal = ({ isOpen, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 pt-20 z-40">
      {/* Form Container */}
      {!showConfirmation && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-[100%] max-w-md h-[500px] relative overflow-hidden">
          {/* Scrollable Content */}
          <div className="h-full overflow-y-auto pr-3">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-lg"
            >
              ✖
            </button>

            {/* Header Section */}
            <h2 className="text-lg font-semibold text-gray-900 text-center">
              Get Started with Your Warehouse Space
            </h2>
            <p className="text-gray-600 text-sm text-center mt-2">
              Need a warehouse to Buy, Lease, or Share? Warabase is the partner you can trust.
            </p>

            {/* Form Section */}
            <form className="mt-4 space-y-2" onSubmit={handleSubmit}>
              {/* Full Name & Email */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="mt-1 w-full p-2 border rounded-md text-sm" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input type="email" className="mt-1 w-full p-2 border rounded-md text-sm" required />
                </div>
              </div>

              {/* Phone & Company Name */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <input type="tel" className="mt-1 w-full p-2 border rounded-md text-sm" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Company Name<span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="mt-1 w-full p-2 border rounded-md text-sm" required />
                </div>
              </div>

              {/* Warehouse Location & Size */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Warehouse Location<span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="mt-1 w-full p-2 border rounded-md text-sm" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Warehouse Size<span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="mt-1 w-full p-2 border rounded-md text-sm" required />
                </div>
              </div>

              {/* Rent Price */}
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Rent/Price<span className="text-red-500">*</span>
                </label>
                <input type="text" className="mt-1 w-full p-2 border rounded-md text-sm" required />
              </div>

              {/* Intended Usage */}
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Intended Usage<span className="text-red-500">*</span>
                </label>
                <input type="text" className="mt-1 w-full p-2 border rounded-md text-sm" required />
              </div>

              {/* Checkbox with Text */}
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="privacy-policy" 
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                />
                <label htmlFor="privacy-policy" className="text-[#627777] text-sm">
                  By ticking the box, I confirm that the information provided above is accurate and that I have read, understood, and agreed to the{" "}
                  <Link to="/privacy-policy" className="text-[#0B97D1] hover:underline">privacy policy</Link> and{" "}
                  <Link to="/terms-and-conditions" className="text-[#0B97D1] hover:underline">terms and conditions</Link>.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 bg-black text-white w-full py-2 rounded-md hover:bg-gray-700 text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md flex flex-col items-center">
          {/* Loading Spinner */}
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
          {/* Success Message */}
          <h2 className="text-lg font-semibold text-gray-900 text-center">
            Successfully submitted
          </h2>
          <p className="text-gray-600 text-sm text-center mt-2">
            Thank you for contacting us, we will be in touch shortly.
          </p>
          {/* Button */}
          <button
            onClick={closeConfirmation}
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
