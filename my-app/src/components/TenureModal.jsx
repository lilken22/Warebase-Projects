import React from "react";

const TenureModal = ({ isOpen, position, setSortTenureValue}) => {
  if (!isOpen) return null;

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <div
      className={`
        fixed bg-white shadow-lg border border-gray-300 rounded-lg p-2 z-50
        w-[148px] h-[110px]
        left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2
        md:translate-x-0 md:translate-y-0
        md:w-[148px] md:h-[110px] 
      `}
      style={
        isDesktop && position
          ? {
              top: `${position.top + 8}px`,
              left: `${position.left}px`,
              transform: "none",
              zIndex:"1000",
            }
          : {}
      }
    >
      {/* Modal Content */}
      <label className="flex items-center space-x-1 p-1 rounded-md font-aeonik font-medium text-base">
        <input  onChange={(e) => setSortTenureValue(e.target.value)} type="radio" name="property" value="SALE" className="form-radio text-black" />
        <span className="text-[#1D3F3FDE]">For Sale</span>
      </label>


      {/* <label className="flex items-center space-x-1 p-1 rounded-md font-aeonik font-medium text-base">
        <input type="radio" name="property" value="Unshared" className="form-radio text-black" />
        <span className="text-[#1D3F3FDE]">For Lease</span>
      </label> */}

      {/* <label className="flex items-center space-x-1 p-1 rounded-md font-aeonik font-medium text-base">
        <input type="radio" name="property" value="Unshared" className="form-radio text-black" />
      </label>   */}

      <label className="flex items-center space-x-1 p-1 rounded-md  font-aeonik font-medium text-base">
        <input onChange={(e) => setSortTenureValue(e.target.value)} type="radio" name="property" value="LEASE" className="form-radio text-black" />
        <span className="text-[#1D3F3FDE]">For Lease</span>
      </label>

      <label className="flex items-center space-x-1 p-1  rounded-md font-aeonik font-medium text-base">
        <input onChange={(e) => setSortTenureValue(e.target.value)} type="radio" name="property" value="SHARED" className="form-radio text-black" />

        <span className="text-[#1D3F3FDE]">Shared Space</span>
      </label>
    </div>
  );
};

export default TenureModal;
