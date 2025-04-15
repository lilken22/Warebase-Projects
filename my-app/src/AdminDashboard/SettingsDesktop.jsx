import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { IoMdCreate } from "react-icons/io";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SettingsDesktop = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Adebayo Oguntoju",
    role: "Admin",
    email: "adebayooguntoju@gmail.com",
    phone: "+234 0722635533",
    contactEmail: "support@warebase.com.ng",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [avatar, setAvatar] = useState("/avatar1.png");
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  const toggleEdit = () => {
    if (isEditing) {
      // Optionally: handle form submit logic here
    }
    setIsEditing(!isEditing);
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
    // Add password change logic here
    setIsChangingPassword(false);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-3 md:p-5 bg-[#F8F9FA] min-h-screen relative">
          {/* Decorative Border */}
          <div className="absolute inset-1 border-[3px] border-[#E0E0E0] pointer-events-none rounded-lg"></div>

          {/* Main Content */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full h-full mx-auto my-auto border-[3px] border-[#E0E0E0]">
            <div className="p-6 text-[#1D3F3F] font-aeonik font-normal text-lg">
              <p>Settings</p>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Sidebar Tabs */}
              <div className="w-full md:w-1/4 px-4 relative">
                <div className="flex flex-col space-y-4">
                  {["profile", "portfolio", "security"].map((tab) => (
                    <div
                      key={tab}
                      className={`py-3 px-6 inline-block cursor-pointer text-sm font-medium text-center transition-all duration-200 ${
                        activeTab === tab
                          ? "bg-[#EAF9FF] text-[#00E5FF] rounded-full border border-[#00E5FF]"
                          : "text-[#9C9C9C] rounded-full"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      <h2 className="font-medium capitalize">{tab}</h2>
                    </div>
                  ))}
                </div>

                {/* Vertical Divider */}
                <div className="absolute top-0 right-0 h-[100%] w-[1px] bg-gray-300"></div>
              </div>

              {/* Content Area */}
              <div className="w-full md:w-3/4 p-4">
                {activeTab === "profile" && (
                  <div className="w-full md:w-4/4">
                    <h3 className="text-xl font-semibold text-[#1D3F3F] mb-6">
                      My Profile
                    </h3>

                    <div className="border-[3px] border-[#E0E0E0] rounded-xl p-6 flex justify-between gap-6 bg-white shadow-md ">
                      <div className="flex items-center gap-4">
                        {/* Avatar Image (clickable upload) */}
                        <div className="relative w-20 h-20">
                          <label
                            htmlFor="avatar-upload"
                            className="cursor-pointer"
                          >
                            <img
                              src={avatar}
                              alt="Avatar"
                              className="w-20 h-20 rounded-full border-[1px] bg-[#B4E5BC] shadow-sm object-cover"
                            />
                          </label>
                          <input
                            id="avatar-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="hidden"
                          />
                        </div>

                        {/* User Info */}
                        <div className="space-y-2">
                          {isEditing ? (
                            <div className="w-[220px] md:w-[350px] space-y-2">
                              <input
                                type="text"
                                value={userData.name}
                                onChange={(e) =>
                                  setUserData({
                                    ...userData,
                                    name: e.target.value,
                                  })
                                }
                                className="text-sm text-[#1D3F3F] font-aeonik border rounded px-2 py-2 w-full"
                              />
                              <input
                                type="text"
                                value={userData.role}
                                onChange={(e) =>
                                  setUserData({
                                    ...userData,
                                    role: e.target.value,
                                  })
                                }
                                className="text-sm text-[#9C9C9C] font-aeonik border rounded px-2 py-2 w-full"
                              />
                              <input
                                type="email"
                                value={userData.email}
                                onChange={(e) =>
                                  setUserData({
                                    ...userData,
                                    email: e.target.value,
                                  })
                                }
                                className="text-sm text-[#9C9C9C] font-aeonik border rounded px-2 py-2 w-full"
                              />
                            </div>
                          ) : (
                            <>
                              <h4 className="text-sm font-normal text-[#1D3F3F] font-aeonik">
                                {userData.name}
                              </h4>
                              <p className="text-sm text-[#9C9C9C] font-normal font-aeonik">
                                {userData.role}
                              </p>
                              <p className="text-sm text-[#9C9C9C] font-normal font-aeonik">
                                {userData.email}
                              </p>
                            </>
                          )}
                        </div>
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
                          <span className="font-aeonik text-sm font-medium">
                            {isEditing ? "Save" : "Edit"}
                          </span>
                          {!isEditing && (
                            <IoMdCreate className="text-[#AAAAAA] w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* profile ends here */}

                {/* portfolio start here */}
                {activeTab === "portfolio" && (
                  <div className="w-full md:w-4/4">
                    <h3 className="text-xl font-semibold text-[#1D3F3F] mb-6">
                      Property Form Settings
                    </h3>

                    <div className="border-[3px] border-[#E0E0E0] rounded-xl p-6 bg-white shadow-md flex justify-between items-start">
                      {/* Contact Details */}
                      <div className="space-y-4">
                        {isEditing ? (
                          <div>
                            <input
                              type="text"
                              value={userData.phone || ""}
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  phone: e.target.value,
                                })
                              }
                              className="text-sm text-[#1D3F3F] font-aeonik border rounded px-2 py-2 w-full"
                            />
                            <input
                              type="email"
                              value={userData.contactEmail || ""}
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  contactEmail: e.target.value,
                                })
                              }
                              className="text-sm text-[#1D3F3F] font-aeonik border rounded px-2 py-2 w-full"
                            />
                          </div>
                        ) : (
                          <div>
                            <p className="text-sm text-[#1D3F3F] font-aeonik">
                              {userData.phone || "+234 0722635533"}
                            </p>
                            <p className="text-sm text-[#1D3F3F] font-aeonik">
                              {userData.contactEmail ||
                                "support@warebase.com.ng"}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Edit Button */}
                      <div>
                        <button
                          onClick={toggleEdit}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                            isEditing
                              ? "bg-black text-white"
                              : "border border-[#E0E0E0] bg-white hover:bg-[#F2F2F2]"
                          }`}
                        >
                          <span className="font-aeonik text-sm font-medium">
                            {isEditing ? "Save" : "Edit"}
                          </span>
                          {!isEditing && (
                            <IoMdCreate className="text-[#AAAAAA] w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* portfolio ends here */}

                {/* security start here */}
                {activeTab === "security" && (
                  <div className="w-full md:w-4/4">
                    <h3 className="text-xl font-semibold text-[#1D3F3F] mb-6">
                      Security
                    </h3>

                    {!isChangingPassword ? (
                      <div className="border-[3px] border-[#E0E0E0] rounded-xl p-6 bg-white shadow-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-[#1D3F3F] mb-1">
                              Password
                            </h4>
                            <p className="text-sm text-[#9C9C9C]">••••••••••</p>
                          </div>
                          <button
                            onClick={() => setIsChangingPassword(true)}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E0E0E0] bg-white hover:bg-[#F2F2F2] transition-all"
                          >
                            <span className="font-aeonik text-sm font-medium text-[#1D3F3FDE]">
                              Change
                            </span>
                            <IoMdCreate className="text-[#AAAAAA] w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="relative border-[3px] border-[#E0E0E0] rounded-xl p-6 bg-white shadow-md">
                        {/* Save Password Button at Top Right */}
                        <div className="absolute top-4 right-4">
                          <button
                            type="submit"
                            onClick={handlePasswordSubmit}
                            className="px-6 py-2 bg-[#1C1C1C] text-white text-sm font-medium rounded-full"
                          >
                            Save Password
                          </button>
                        </div>

                        <h4 className="text-sm font-medium text-[#1D3F3F] mb-6">
                          Change Password
                        </h4>

                        <form className="space-y-6">
                          <div className="flex flex-col md:flex-row gap-6">
                            {/* New Password */}
                            <div className="w-full relative">
                              <label className="block text-sm text-[#1D3F3F] font-medium mb-2">
                                New Password
                              </label>
                              <input
                                type={showNewPassword ? "text" : "password"}
                                name="newPassword"
                                value={passwordData.newPassword}
                                onChange={handlePasswordChange}
                                className="w-full p-3 pr-10 border border-[#E0E0E0] rounded-lg text-sm placeholder:text-[#BDBDBD]"
                                placeholder="Enter new password"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setShowNewPassword(!showNewPassword)
                                }
                                className="absolute right-3 top-[38px] text-[#AAAAAA]"
                              >
                                {showNewPassword ? <FiEyeOff /> : <FiEye />}
                              </button>
                            </div>

                            {/* Confirm Password */}
                            <div className="w-full relative">
                              <label className="block text-sm text-[#1D3F3F] font-medium mb-2">
                                Confirm Password
                              </label>
                              <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={passwordData.confirmPassword}
                                onChange={handlePasswordChange}
                                className="w-full p-3 pr-10 border border-[#E0E0E0] rounded-lg text-sm placeholder:text-[#BDBDBD]"
                                placeholder="Confirm new password"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="absolute right-3 top-[38px] text-[#AAAAAA]"
                              >
                                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                )}
                {/* security ends here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDesktop;
