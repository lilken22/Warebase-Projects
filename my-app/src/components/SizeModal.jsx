import React from "react";

const SizeModal = ({ isOpen, onClose, position }) => {
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
            <label className="block text-sm font-medium text-gray-700">Min.Size</label>
            <input
              type="number"
              placeholder="#"
              className="w-full px-3 py-2 border bg-[#F3F3F3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F3F3F3]"
            />
          </div>

          {/* Max Price Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Max.Size</label>
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

export default SizeModal;