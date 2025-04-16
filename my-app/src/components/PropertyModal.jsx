import React from "react";

const PropertyModal = ({ isOpen, position }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute w-[198px] bg-white shadow-lg border border-gray-300 rounded-md p-2 z-50"
      style={{
        top: `${position.top + 22}px`,
        left: `${position.left -160}px`,
      }}
    >
      {/* Modal Content */}
      <label className="flex items-center space-x-2 p-2 rounded-md">
        <input type="radio" name="property" value="Shared" className="form-radio text-black" />
        <span className="text-gray-800">Shared</span>
      </label>

      <label className="flex items-center space-x-2 p-2 rounded-md ">
        <input type="radio" name="property" value="Unshared" className="form-radio text-black" />
        <span className="text-gray-800">Unshared</span>
      </label>
    </div>
  );
};

export default PropertyModal;