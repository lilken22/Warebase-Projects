import React from "react";

const StatesModal = ({ isOpen, onClose, position }) => {
  if (!isOpen) return null;

  // List of the 36 states in Nigeria
  const states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
    "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
    "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna",
    "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];

  return (
    <div
      className="absolute w-40 bg-white shadow-lg border border-gray-300 rounded-lg z-50"
      style={{
        top: `${position.top + 21}px`, // Adjust top position (add 8px for spacing)
        left: `${position.left -130}px`,
        borderRadius: "12px", // Custom border radius
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow
      }}
    >
      {/* Modal Content */}
      <div className="p-4 max-h-64 overflow-y-auto"> {/* Added max-h-64 and overflow-y-auto for scrollable content */}
        {/* <h3 className="text-lg font-semibold mb-4 text-gray-800">States of Nigeria</h3> */}
        <ul className="space-y-1">
          {states.map((state, index) => (
            <li key={index} className="text-gray-700 hover:bg-gray-100 p-2 rounded-md">
              {state}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatesModal;