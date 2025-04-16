import React from "react";

const PriceModal = ({ isOpen, position }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute w-48 bg-white shadow-lg border border-gray-300 rounded-lg z-50"
      style={{
        top: `${position.top + 12}px`, // Adjust top position (add 8px for spacing)
        left: `${position.left -160}px`,
        borderRadius: "12px", // Custom border radius
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow
      }}
    >
      {/* Modal Content */}
      <div className="p-4">
        <div className="space-y-4">
          {/* Min Price Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Min.Price</label>
            <input
              type="number"
              placeholder="#"
              className="w-full px-3 py-2 border bg-[#F3F3F3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F3F3F3]"
            />
          </div>

            {/* Rotated Border
          <div
            className="absolute top-1/2 left-1/2 w-24 h-px bg-gray-300 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
          ></div> */}

          {/* Max Price Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Max.Price</label>
            <input
              type="number"
              placeholder="#"
              className="w-full px-3 py-2 border bg-[#F3F3F3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F3F3F3]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceModal;