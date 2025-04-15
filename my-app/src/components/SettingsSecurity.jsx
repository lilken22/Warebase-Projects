import React, { useState } from "react";
import { Menu, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IoMdCreate, IoMdArrowDropleft } from "react-icons/io";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function SettingsSecurity() {
  const navigate = useNavigate();
  const [showCheckmark, setShowCheckmark] = useState(false);

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleBackClick = () => {
    navigate("/settings-mobile");
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Add your password change logic here

    setShowCheckmark(true);

    setTimeout(() => {
      setShowCheckmark(false);
      setIsChangingPassword(false);
      setPasswordData({ newPassword: "", confirmPassword: "" });
    }, 1500);
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
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="mt-2 bg-white rounded-lg px-2 py-1 flex items-center gap-1 border border-gray-200 shadow-md hover:bg-gray-50 transition-colors w-12"
          >
            <IoMdArrowDropleft className="text-3xl text-gray-500" />
          </button>

          {/* Heading */}
          <h2 className="text-center text-base font-semibold text-[#1D3F3F] font-aeonik mt-7">
            Password
          </h2>

          {/* Password Section */}
          <div className="flex flex-col items-center space-y-6 mt-10">
            {!isChangingPassword ? (
              <>
                <p className="text-sm text-[#9C9C9C]">Password</p>
                <p className="text-sm text-[#9C9C9C]">••••••••••</p>

                <button
                  onClick={() => setIsChangingPassword(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E0E0E0] bg-white hover:bg-[#F2F2F2] transition-all"
                >
                  <span className="font-aeonik text-sm font-medium text-[#1D3F3FDE]">
                    Change Password
                  </span>
                  <IoMdCreate className="text-[#AAAAAA] w-5 h-5" />
                </button>
              </>
            ) : (
                <form onSubmit={handlePasswordSubmit} className="w-full space-y-6 flex flex-col items-center">
                {/* New Password */}
                <div className="relative w-[70%]">
                  <label className="text-sm text-[#1D3F3F] font-medium mb-1 block">
                    New Password
                  </label>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-sm bg-[#F3F3F3]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-9 text-gray-500"
                  >
                    {showNewPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              
                {/* Confirm Password */}
                <div className="relative w-[70%]">
                  <label className="text-sm text-[#1D3F3F] font-medium mb-1 block">
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-sm bg-[#F3F3F3]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-9 text-gray-500"
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              
                {/* Save Button */}
                <button
                  type="submit"
                  className="w-[40%] flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition-all"
                >
                  {showCheckmark ? (
                    <>
                      <span className="text-sm font-medium text-green-500">Saved</span>
                      <CheckCircle2 size={18} className="text-green-500" />
                    </>
                  ) : (
                    <span className="text-sm font-medium">Save Password</span>
                  )}
                </button>
              </form>
              
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

