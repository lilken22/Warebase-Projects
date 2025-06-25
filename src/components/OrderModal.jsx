// import React from "react";

// const OrderModal = React.forwardRef(({
//   isOpen,
//   position,
//   setSortOrderValue,
//   onClose,
//   onMouseEnter
// }, ref) => {
//   if (!isOpen) return null;

//   const handleOptionChange = (e) => {
//     setSortOrderValue(e.target.value);
//     onClose();
//   };

//   return (
//     <div
//       ref={ref}
//       onMouseEnter={onMouseEnter}
//       onTouchStart={onMouseEnter} // Add touch support for mobile
//       className="fixed bg-white shadow-lg border border-gray-300 rounded-lg z-50 min-w-[180px]"
//       style={{
//         top: `${position?.top || 0}px`,
//         left: `${position?.left ? Math.min(position.left, window.innerWidth - 200) : 0}px`, // Ensure it stays on screen
//       }}
//     >
//       <div className="p-2 space-y-2">
//         <label className="flex items-center text-sm font-medium text-[#1D3F3FDE] p-1 space-x-2">
//           <input
//             onChange={handleOptionChange}
//             type="radio"
//             name="Order"
//             value="DESC"
//             className="form-radio text-black"
//           />
//           <span>Newest - Oldest</span>
//         </label>

//         <label className="flex items-center text-sm font-medium text-[#1D3F3FDE] p-1 space-x-2">
//           <input
//             onChange={handleOptionChange}
//             type="radio"
//             name="Order"
//             value="ASC"
//             className="form-radio text-black"
//           />
//           <span>Oldest - Newest</span>
//         </label>
//       </div>
//     </div>
//   );
// });

// export default OrderModal;



  import React from "react";

const OrderModal = React.forwardRef(({
  isOpen,
  position,
  setSortOrderValue,
  onClose,
  onMouseEnter
}, ref) => {
  if (!isOpen || !position) return null;

  const handleOptionChange = (e) => {
    setSortOrderValue(e.target.value);
    // Don't call onClose immediately to prevent race condition
    setTimeout(() => onClose(), 500);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onTouchStart={onMouseEnter}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      className="fixed bg-white shadow-lg border border-gray-300 rounded-lg z-50 min-w-[180px]"
      style={{
        top: `${position.top + 8}px`,
        left: `${Math.min(position.left, window.innerWidth - 200)}px`,
      }}
    >
      <div className="p-2 space-y-2">
        <label className="flex items-center text-sm font-medium text-[#1D3F3FDE] p-1 space-x-2">
          <input
            onChange={handleOptionChange}
            type="radio"
            name="Order"
            value="DESC"
            className="form-radio text-black"
          />
          <span>Newest - Oldest</span>
        </label>

        <label className="flex items-center text-sm font-medium text-[#1D3F3FDE] p-1 space-x-2">
          <input
            onChange={handleOptionChange}
            type="radio"
            name="Order"
            value="ASC"
            className="form-radio text-black"
          />
          <span>Oldest - Newest</span>
        </label>
      </div>
    </div>
  );
});

export default OrderModal;

