import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

function PasswordReset() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
    } else if (newPassword !== confirmPassword) {
      setError('Passwords do not match. Try again');
    } else {
      navigate('/PasswordSuccessful');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/Cloud.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md" style={{ minHeight: '600px' }}>
        <div className="flex justify-center">
          <img src="/logo.png" alt="Logo" className="w-14 mb-8" />
        </div>

        <h2 className="text-xl font-medium mb-3 text-[#1D3F3F] font-aeonik text-center">
          Set New Password
        </h2>

        <p className="mb-8 text-center text-[#627777] font-normal font-aeonik text-sm">
          Your new password must be different from the previous one.
        </p>

        <form onSubmit={handleSubmit}>
          {/* New Password Field */}
          <div className="mb-6">
            <label className="block text-base font-medium font-aeonik text-[#627777] mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                className="w-full px-4 py-3 border border-gray-300 bg-gray-100 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#627777]"
                placeholder="*********"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                onClick={toggleNewPasswordVisibility}
              >
                {showNewPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label className="block text-base font-medium text-[#627777] mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full px-4 py-3 border border-gray-300 bg-gray-100 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#627777]"
                placeholder="*********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-6">{error}</p>}

          <button 
            type="submit" 
            className="w-full bg-[#1C1C1C] text-white py-3 rounded-xl hover:bg-[#333333] mb-6"
          >
            Reset Password
          </button>

          <div className="text-center">
            <Link 
              to="/Login" 
              className="text-base font-medium text-[#1D3F3F] hover:underline flex justify-center items-center"
            >
              <FaArrowLeft className="mr-2" /> Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;