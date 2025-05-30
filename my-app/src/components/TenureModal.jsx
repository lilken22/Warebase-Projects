import React from "react";

const TenureModal = React.forwardRef(({ 
  isOpen,
  position,
  setSortTenureValue,
  onClose,
  onMouseEnter,
}, ref) => {
  if (!isOpen) return null;

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const handleOptionChange = (value) => {
    setSortTenureValue(value);
    // Removed onClose() here - let parent handle closing
  };

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseDown={(e) => e.stopPropagation()} // Add this
      onClick={(e) => {
        e.stopPropagation();
        e.nativeEvent?.stopImmediatePropagation?.();
      }}
      
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
              zIndex: "1000",
            }
          : {}
      }
    >
      <label 
        className="flex items-center space-x-1 p-1 rounded-md font-aeonik font-medium text-base hover:bg-gray-100"
        onClick={(e) => e.stopPropagation()} // Add this to labels too
      >
        <input 
          onChange={() => handleOptionChange("SALE")}
          type="radio" 
          name="property" 
          value="SALE" 
          className="form-radio text-black" 
        />
        <span className="text-[#1D3F3FDE]">For Sale</span>
      </label>

      <label 
        className="flex items-center space-x-1 p-1 rounded-md font-aeonik font-medium text-base hover:bg-gray-100"
        onClick={(e) => e.stopPropagation()} // Add this to labels too
      >
        <input 
          onChange={() => handleOptionChange("LEASE")}
          type="radio" 
          name="property" 
          value="LEASE" 
          className="form-radio text-black" 
        />
        <span className="text-[#1D3F3FDE]">For Lease</span>
      </label>

      <label 
        className="flex items-center space-x-1 p-1 rounded-md font-aeonik font-medium text-base hover:bg-gray-100"
        onClick={(e) => e.stopPropagation()} // Add this to labels too
      >
        <input 
          onChange={() => handleOptionChange("SHARED")}
          type="radio" 
          name="property" 
          value="SHARED" 
          className="form-radio text-black" 
        />
        <span className="text-[#1D3F3FDE]">Shared Space</span>
      </label>
    </div>
  );
});

export default TenureModal;