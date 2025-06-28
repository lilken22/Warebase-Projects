import React, { useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
// note that i remove useSelctor cause it causing an error on git hub
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../redux/slices/auth.slice';
import { toast } from 'react-toastify';

function Login() {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async(e) => {
    e.preventDefault();

    try {
      if (email && password) {
        setError(''); // Clear error if inputs are valid
        const result = await dispatch(authenticateUser({email, password})).unwrap()
        if(result.token){
          navigate('/overview');
        }
      }
    } catch (error) {
      toast(error?.response?.data?.error || "Failed to login, please try again")
      setError(error?.response?.data?.error || "Failed to login, please try again")
    }
     
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/Cloud.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full min-h-[590px] md:max-w-lg flex flex-col justify-center">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/logo.png" alt="Logo" className="w-16 mb-12" />
        </div>

        <h2 className="text-xl font-medium mb-10 text-[#1D3F3F] font-aeonik text-center">Welcome back</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-base font-medium font-aeonik text-[#627777] mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-[#F3F3F3] bg-[#F3F3F3] italic rounded-md focus:outline-none focus:ring-2 focus:ring-[#627777] font-semibold"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[#627777] font-aeonik mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-3 py-2 border border-[#F3F3F3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#627777] bg-[#F3F3F3] font-semibold"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500 hover:text-gray-700"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 1.274-4.057 5.064-7 9.542-7 1.048 0 2.062.18 3 .534M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 2l20 20" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="mb-6 text-right">
            <Link to="/EmailReset" className="text-base font-normal font-aeonik text-[#1D3F3F] hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1C1C1C] text-[#FFF7F2] py-[10px] px-3 rounded-3xl hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-[#1C1C1C]"
          >
            Login
          </button>

          {/* 👇 Inline error message */}
          {error && (
            <p className="text-red-600 text-sm mt-3 text-center">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;

