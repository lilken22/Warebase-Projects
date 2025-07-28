import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function CheckMail() {
  const [isResending, setIsResending] = useState(false); // Track resend state
  const [resendSuccess, setResendSuccess] = useState(false); // Track success state
  const [resendError, setResendError] = useState(false); // Track error state

  // Get the email from location state (passed via navigation)
  const location = useLocation();
  const email = location.state?.email || 'example@email.com'; // Fallback email if not provided

  // Function to handle resending the email
  const handleResendEmail = async () => {
    setIsResending(true); // Start resend process
    setResendSuccess(false); // Reset success state
    setResendError(false); // Reset error state

    try {
      // Simulate an API call (Replace with actual API request when available)
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSuccess = Math.random() > 0.5; // Randomly simulate success or failure
          isSuccess ? resolve() : reject(new Error('Failed to resend email'));
        }, 2000); // Simulated 2-second delay
      });

      setResendSuccess(true); // Email resend successful
    } catch (error) {
      setResendError(true);
      console.log(error) // Email resend failed
    } finally {
      setIsResending(false); // End resend process
    }
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
      <div className="bg-white p-12 rounded-3xl shadow-lg w-full min-h-[512px] max-w-lg flex flex-col justify-center">
        {/* Centered Logo */}
        <div className="flex justify-center">
          <img src="/logo.png" alt="Logo" className="w-16 mb-14" />
        </div>

        <h4 className="text-2xl font-medium mb-4 text-[#1D3F3F] font-aeonik text-center">
          Check your email
        </h4>

        <div className="mb-2 text-center text-[#627777] font-normal font-aeonik text-base">
          <p>A password reset link has been sent to <br /> <strong>{email}</strong></p> {/* Dynamic email */}
        </div>  

        {/* Resend Email Section */}
        <div className="mt-2 text-center text-[#627777] font-aeonik font-normal text-sm">
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

        {/* Back to Login Link */}
        <div className="mt-4 flex justify-center items-center text-center">
          <Link to="/Login" className="text-base font-normal font-aeonik text-[#1D3F3F] hover:underline flex items-center">
            <FaArrowLeft aria-label="Back to Login" className="mr-2" /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckMail;
