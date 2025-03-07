import React, { useState } from "react";

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 pt-20">
      {/* Form Container */}
      {!showConfirmation && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-[100%] max-w-md h-[500px] relative">
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
            {/* Full Name & Email (Same Row) */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-black text-white w-full py-2 rounded-md hover:bg-gray-700 text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Confirmation Modal (Styled like your image) */}
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
