import React from "react";

const StatesModal = ({ isOpen, position, handleFilter }) => {
  if (!isOpen) return null;

  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const handleClick = (state) => {
    handleFilter({ target: { name: "location", value: state } });
  };

  return (
    <div
      className="absolute w-40 bg-white shadow-lg border border-gray-300 rounded-lg z-50 modal-content"
      style={{
        top: `${position.top + 21}px`,
        left: `${position.left - 130}px`,
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="p-4 max-h-64 overflow-y-auto">
        <ul className="space-y-1">
          {states.map((state, index) => (
            <li
              key={index}
              className="text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
              onClick={() => handleClick(state)}
            >
              {state}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatesModal;
