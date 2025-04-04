import React, { useState } from "react";
import { IoMdCreate } from "react-icons/io";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
 import UnlistModal from "../components/UnlistModal";

const ListModal = ({ isOpen, onClose, position, propertyId }) => {
  const navigate = useNavigate();
  const [isUnlistModalOpen, setIsUnlistModalOpen] = useState(false);

  if (!isOpen) return null;

  const handleEdit = (e) => {
    e.stopPropagation(); // Prevent bubbling to parent
    navigate('/add-property');
    setTimeout(onClose, 10); // 10ms delay
    onClose();
  };

  const handleUnlist = (e) => {
    e.stopPropagation();
    setIsUnlistModalOpen(true); // Open Unlist Modal
  };

  return (
    <div
      className="absolute w-[92px] h-20 bg-white shadow-lg  border rounded-lg z-50"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="p-2">
        <div className="space-y-0">
          {/* Edit Button */}
          <button
            onClick={handleEdit}
            className="flex items-center w-full p-1 rounded text-left"
          >
            <IoMdCreate className="text-[#AAAAAA] w-5 h-6" />
            <span className="text-[#1D3F3FDE] font-aeonik text-base font-medium ml-2 ">Edit</span>
          </button>

          {/* Unlist Button */}
          <button
            onClick={handleUnlist}
            className="flex items-center w-full p-1  rounded text-left"
          >
            <RiDeleteBack2Fill className="text-[#AAAAAA] w-6 h-6" />
            <span className="text-[#1D3F3FDE] font-aeonik text-base font-medium ml-2 ">Unlist</span>
          </button>
        </div>
      </div>

       {/* Unlist Modal */}
        <UnlistModal
        isOpen={isUnlistModalOpen}
        onClose={() => setIsUnlistModalOpen(false)}
        propertyId={propertyId}
        onConfirm={() => console.log(`Unlisting property ${propertyId}`)}
      />
    </div>
  );
};

export default ListModal;
