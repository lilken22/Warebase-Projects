import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaArrowLeft } from "react-icons/fa6";

function EmailReset() {
  const [isResending, setIsResending] = useState(false); // Track resend state
  const [resendSuccess, setResendSuccess] = useState(false); // Track success state
  const [resendError, setResendError] = useState(false); // Track error state
  const [email, setEmail] = useState(''); // State to store user's email
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleResendEmail = async () => {
    setIsResending(true); // Start resend process
    setResendSuccess(false); // Reset success state
    setResendError(false); // Reset error state

    try {
      // Simulate an API call with a 2-second delay
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSuccess = Math.random() > 0.5; // Randomly simulate success or failure
          if (isSuccess) {
            resolve();
          } else {
            reject(new Error('Failed to resend email'));
          }
        }, 2000); // 2-second delay
      });

      setResendSuccess(true); // Email resend successful
    } catch (error) {
      setResendError(true);
      console.log(error) // Email resend failed
    } finally {
      setIsResending(false); // End resend process
    }
  };

  const handleResetPassword = (event) => {
    event.preventDefault(); // Prevent default form submission
    navigate('/checkmail', { state: { email } }); // Navigate to the CheckMail page
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/Cloud.jpg')", // Path to the image in the public folder
        backgroundSize: 'cover', // Ensure the image covers the entire screen
        backgroundPosition: 'center', // Center the background image
      }}
    >
      <div className="bg-[#FFFFFF] p-8 rounded-3xl shadow-lg min-h-[512px] w-full md:max-w-lg flex flex-col justify-center">
        {/* Centered Logo */}
        <div className="flex justify-center">
          <img src="/logo.png" alt="Logo" className="w-16 mb-8" />
        </div>

        <h2 className="text-xl font-medium mb-6 text-[#1D3F3F] font-aeonik text-center">Reset your password</h2>
        <form onSubmit={handleResetPassword}> {/* Add onSubmit handler */}
          <div className="mb-6">
            <label className="block text-base font-medium font-aeonik text-[#627777] mb-2">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)} // Capture user input
              className="w-full px-3 py-2 border border-[#F3F3F3] bg-[#F3F3F3] italic rounded-md focus:outline-none focus:ring-2 focus:ring-[#627777] font-semibold"
              placeholder="example@email.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1C1C1C] text-[#FFF7F2] py-[10px] px-3 rounded-3xl hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-[#1C1C1C] mt-4"
          >
            Reset password
          </button>

          <div className="mt-6 text-center text-[#627777] font-aeonik font-normal text-sm">
            Didn’t receive the email?
            <button
              onClick={handleResendEmail}
              disabled={isResending}
              className="text-sm font-normal font-aeonik text-[#0B97D1] hover:underline focus:outline-none ml-1"
            >
              {isResending ? 'Resending...' : 'Click to resend'}
            </button>
            {resendSuccess && (
              <p className="text-green-600 text-sm mt-2">Email resent successfully!</p>
            )}
            {resendError && (
              <p className="text-red-600 text-sm mt-2">Failed to resend email. Please try again.</p>
            )}
          </div>

          <div className="mt-8 flex justify-center items-center text-center">
            <Link to="/Login" className="text-base font-normal font-aeonik text-[#1D3F3F] hover:underline flex items-center">
              <FaArrowLeft aria-label="Back to Login" className="mr-2" /> Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailReset;