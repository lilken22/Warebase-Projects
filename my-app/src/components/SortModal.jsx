import React from "react";

const SortModal = ({ isOpen, onClose, position }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed w-44 h-16 bg-white border border-gray-200 shadow-lg rounded-xl z-50"
      style={{
        top: `${position.top + 8}px`, // small gap between button and modal
        left: `${position.left}px`,
      }}
    >
      {/* Modal Content */}
      <div className="p-3">
        <div className="space-y-2">
          {/* Newest - Oldest */}
          <label className="flex items-center space-x-2 cursor-pointer font-aeonik text-sm text-[#1D3F3FDE]">
            <input
              type="radio"
              name="Order"
              value="Newest"
              className="form-radio text-black"
            />
            <span>Newest - Oldest</span>
          </label>

          {/* Oldest - Newest */}
          <label className="flex items-center space-x-2 cursor-pointer font-aeonik text-sm text-[#1D3F3FDE]">
            <input
              type="radio"
              name="Order"
              value="Oldest"
              className="form-radio text-black"
            />
            <span>Oldest - Newest</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SortModal;