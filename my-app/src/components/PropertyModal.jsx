import React from "react";

const PropertyModal = ({ isOpen, position, handleFilter }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute w-[198px] bg-white shadow-lg border border-gray-300 rounded-md p-2 z-50 modal-content"
      style={{
        top: `${position.top + 22}px`,
        left: `${position.left -160}px`,
      }}
    >
      {/* Modal Content */}
      <label className="flex items-center space-x-2 p-2 rounded-md">
        <input onChange={(e)=>handleFilter(e)} type="radio" name="tenureValue" value="SHARED" className="form-radio text-black" />
        <span className="text-gray-800">Shared</span>
      </label>

      <label className="flex items-center space-x-2 p-2 rounded-md ">
        <input onChange={(e)=>handleFilter(e)} type="radio" name="tenureValue" value="LEASE" className="form-radio text-black" />
        <span className="text-gray-800">Unshared</span>
      </label>
    </div>
  );
};

export default PropertyModal;