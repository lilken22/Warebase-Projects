import React from 'react';

const LogoutModal = ({ onConfirm, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-6 rounded-3xl shadow-lg w-96 h-72 text-center">
        <img
          src="/avatar2.png"
          alt="Warning"
          className="w-20 h-20 mx-auto bg-[#F96017] border border-[#FFC3A6] rounded-full"
        />
        <p className="text-[#1D3F3F] mt-4 font-aeonik font-normal text-xl">
          Are you sure you want to logout?
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onConfirm}
            className="bg-[#1C1C1C] text-[#FFF7F2] px-12 py-2 rounded-full font-aeonik font-normal hover:bg-opacity-90 transition"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="text-[#1D3F3F] text-lg shadow-lg px-12 py-2 rounded-full font-aeonik font-normal hover:bg-gray-100 transition"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
