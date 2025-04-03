import React from "react";

const OrderModal = ({ isOpen, onClose, position }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute w-44 h-20 bg-white shadow-lg border border-gray-300 rounded-lg z-50"
      style={{
        top: `${position.top + 220}px`, // Adjust top position (add 8px for spacing)
        left: `${position.left + 190}px`,
        borderRadius: "12px", // Custom border radius
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow
      }}
    >
      {/* Modal Content */}
      <div className="p-2">
        <div className="space-y-0">
          {/* Min Price Input */}
          <div>
            <label className="block text-base font-medium font-aeonik space-x-3 p-1">
            <input
              type="radio"
              name="Order"
              value="Newest"
              className="form-radio text-black"
            />
            <span className="text-[#1D3F3FDE]">Newest - Oldest</span>
            </label>
          </div>

          {/* Oldest to Newest*/}
          <div>
            <label className="block text-base font-medium font-aeonik space-x-3 p-1">
            <input
              type="radio"
              name="Order"
              value="Oldest"
              className="form-radio text-[#1D3F3FDE]"
            />
            <span className="text-[#1D3F3FDE]">Oldest - Newest</span>
            </label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderModal;