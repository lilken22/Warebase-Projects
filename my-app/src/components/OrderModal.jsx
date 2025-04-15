import React from "react";

const OrderModal = ({ isOpen, onClose, position }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed w-44 h-20 bg-white shadow-lg border border-gray-300 rounded-lg z-50"
      style={{
        top: `${position.top + 8}px`, // small gap between button and modal
        left: `${position.left}px`,
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