import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import { CheckCircle2 } from "lucide-react"; // green check icon
import { IoMdArrowDropleft } from "react-icons/io";

export default function SettingsPortfolio() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false); // ✅ new state

  const [userData, setUserData] = useState({
    phone: "+234 0722635533",
    contactEmail: "support@warebase.com.ng",
  });
  

  const toggleEdit = () => {
    if (isEditing) {
      // Simulate save and show checkmark
      setShowCheckmark(true);

      // Hide checkmark and exit edit mode after 1.5s
      setTimeout(() => {
        setShowCheckmark(false);
        setIsEditing(false);
      }, 1500);
    } else {
      setIsEditing(true);
    }
  };

  const handleBackClick = () => {
    navigate("/settings-mobile"); // or navigate("/desired-route");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-[500px] flex flex-col">
        {/* Top Navbar */}
        <div className="bg-[#00000080] px-4 py-4 mt-7 flex items-center justify-between">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          <Menu size={24} className="text-gray-800" />
        </div>

        <div className="bg-white flex-1 flex flex-col px-4 pt-10 pb-6 rounded-t-3xl shadow-lg">
          <button
            onClick={handleBackClick}
            className="mt-2 bg-white rounded-lg px-2 py-1 flex items-center gap-1 border border-gray-200 shadow-md hover:bg-gray-50 transition-colors w-12"
          >
            <IoMdArrowDropleft className="text-3xl text-gray-500" />
            {/* <span className="text-sm text-gray-700">Back</span> */}
          </button>

          {/* Settings Heading */}
          <h2 className="text-center text-base font-semibold text-[#1D3F3F] font-aeonik mt-7">
             Property form settings
          </h2>

          <div className="flex flex-col items-center space-y-6">

            {/* User Info */}
            <div className="space-y-2 mt-20 text-center">
              {isEditing ? (
                <div className="w-[220px] md:w-[350px] space-y-2">
                  <input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData({ ...userData, phone: e.target.value })
                    }
                    className="text-sm text-[#1D3F3F] font-aeonik border rounded px-2 py-2 w-full"
                  />
                  <input
                    type="email"
                    value={userData.contactEmail}
                    onChange={(e) =>
                      setUserData({ ...userData, contactEmail: e.target.value })
                    }
                    className="text-sm bg-[#9C9C9C] text-black font-aeonik border rounded px-2 py-2 w-full"
                  />
                </div>
              ) : (
                <>
                  <h4 className="text-sm font-normal text-[#1D3F3F] font-aeonik">
                    {userData.phone}
                  </h4>
                  <p className="text-sm text-[#9C9C9C] font-normal font-aeonik">
                    {userData.contactEmail}
                  </p>
                </>
              )}
            </div>

            {/* Edit/Save Button */}
            <div>
              <button
                onClick={toggleEdit}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  isEditing
                    ? "bg-black text-white"
                    : "border border-[#E0E0E0] bg-white hover:bg-[#F2F2F2]"
                }`}
              >
                {showCheckmark ? (
                  <>
                    <span className="font-aeonik text-sm font-medium text-green-600">
                      Saved
                    </span>
                    <CheckCircle2 size={18} className="text-green-600" />
                  </>
                ) : (
                  <>
                    <span className="font-aeonik text-sm font-medium">
                      {isEditing ? "Save" : "Edit"}
                    </span>
                    {!isEditing && (
                      <IoMdCreate className="text-[#AAAAAA] w-5 h-5" />
                    )}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
