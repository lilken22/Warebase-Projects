import React from "react";

const TenureModal = ({ isOpen, onClose, position }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute w-[148px] h-[110px] bg-white shadow-lg border border-gray-300 rounded-lg p-2 z-50"
      style={{
        top: `${position.top + 212}px`,
        left: `${position.left + 35}px`,
      }}
    >
      {/* Modal Content */}
      <label className="flex items-center space-x-1 p-1 rounded-md font-aeonik font-medium text-base">
        <input type="radio" name="property" value="Shared" className="form-radio text-black" />
        <span className="text-[#1D3F3FDE]">For Sale</span>
      </label>

      <label className="flex items-center space-x-1 p-1 rounded-md  font-aeonik font-medium text-base">
        <input type="radio" name="property" value="Unshared" className="form-radio text-black" />
        <span className="text-[#1D3F3FDE]">For Lease</span>
      </label>

      <label className="flex items-center space-x-1 p-1  rounded-md font-aeonik font-medium text-base">
        <input type="radio" name="property" value="Unshared" className="form-radio text-black" />
        <span className="text-[#1D3F3FDE]">Shared Space</span>
      </label>




    </div>
  );
};

export default TenureModal;