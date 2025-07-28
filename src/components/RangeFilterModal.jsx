import React from "react";

const RangeFilterModal = ({
  isOpen,
  position,
  handleFilter,
  minName,
  maxName,
  label, // "Size" or "Price"
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute w-48 bg-white shadow-lg border border-gray-300 rounded-lg z-50 modal-content"
      style={{
        top: `${position.top + 12}px`,
        left: `${position.left - 160}px`,
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="p-4">
        <div className="space-y-4">
          {/* Min Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Min. {label}
            </label>
            <input
              type="number"
              name={minName}
              placeholder="#"
              onChange={handleFilter}
              className="w-full px-3 py-2 border bg-[#F3F3F3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F3F3F3]"
            />
          </div>

          {/* Max Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Max. {label}
            </label>
            <input
              type="number"
              name={maxName}
              placeholder="#"
              onChange={handleFilter}
              className="w-full px-3 py-2 border bg-[#F3F3F3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F3F3F3]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeFilterModal;
