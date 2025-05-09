# Project-Warebase-Frontend



<!-- USE THE NAMES HERE FOR THE CONTACT US AND EXPLORE FORMS SINCE THEY THE SAME -->


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendContactMessage } from "../store/messageSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.message);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    warehouseLocation: "",
    warehouseSize: "",
    price: "",
    intendedUsage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContactMessage(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" onChange={handleChange} placeholder="Full Name" required />
      <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
      <input name="phone" onChange={handleChange} placeholder="Phone" />
      <input name="companyName" onChange={handleChange} placeholder="Company Name" />
      <input name="warehouseLocation" onChange={handleChange} placeholder="Warehouse Location" />
      <input name="warehouseSize" onChange={handleChange} placeholder="Warehouse Size" />
      <input name="price" onChange={handleChange} placeholder="Price" />
      <input name="intendedUsage" onChange={handleChange} placeholder="Intended Usage" />
      <button type="submit" disabled={loading}>Send</button>
      {success && <p>Message sent!</p>}
      {error && <p>{error.error}</p>}
    </form>
  );
};

export default ContactForm;


{/* 
            <form className="mt-4 space-y-2" onSubmit={handleSubmit}>
              {/* Full Name & Email */}
              <div className="grid grid-cols-2 md:max-w-[674px] gap-[39px]">
                <div className="md:max-w-[324px]">
                  <label className="block text-base font-medium font-aeonik text-[#627777]">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="mt-1 w-full p-2 border bg-[#F3F3F3] rounded-md text-base" required />
                </div>

                <div className="md:max-w-[324px]">
                  <label className="block text-base font-medium font-aeonik text-[#627777]">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input type="email" className="mt-1 w-full p-2 border bg-[#F3F3F3] rounded-md text-base" required />
                </div>
              </div>

              {/* Phone & Company Name */}
              <div className="grid grid-cols-2 md:max-w-[674px] gap-[39px]">
                <div className="md:max-w-[324px]">
                  <label className="block text-base font-medium font-aeonik text-[#627777]">
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <input type="tel" className="mt-1 w-full p-2 border bg-[#F3F3F3] rounded-md text-base" required />
                </div>

                <div className="md:max-w-[324px]">
                  <label className="block text-base font-medium font-aeonik text-[#627777]">
                    Company Name<span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="mt-1 w-full p-2 border bg-[#F3F3F3] rounded-md text-base" required />
                </div>
              </div>

              {/* Warehouse Location & Size */}
              <div className="grid grid-cols-2 md:max-w-[674px] gap-[39px]">
                <div className="md:max-w-[324px]">
                  <label className="block text-base font-medium font-aeonik text-[#627777]">
                    Warehouse Location<span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="mt-1 w-full p-2 border bg-[#F3F3F3] rounded-md text-base" required />
                </div>

                <div className="md:max-w-[324px]">
                  <label className="block text-base font-medium font-aeonik text-[#627777]">
                    Warehouse Size<span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="mt-1 w-full p-2 border bg-[#F3F3F3] rounded-md text-base" required />
                </div>
              </div>

              {/* Rent Price */}
              <div className="md:max-w-[674px]">
                <label className="block text-base font-medium font-aeonik text-[#627777]">
                  Rent/Price<span className="text-red-500">*</span>
                </label>
                <input type="text" className="mt-1 w-full p-2 border bg-[#F3F3F3] rounded-md text-base" required />
              </div>

              {/* Intended Usage */}
              <div className="md:max-w-[674px]">
                <label className="block text-base font-medium font-aeonik text-[#627777]">
                  Intended Usage<span className="text-red-500">*</span>
                </label>
                <textarea
                  className="mt-1 w-full min-h-[110px] p-2 border bg-[#F3F3F3] rounded-md text-base resize-y"
                  required
                />
              </div>

              {/* Checkbox with Text */}
              <div className="flex items-start gap-2 mt-5">
                <input 
                  type="checkbox" 
                  id="privacy-policy" 
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                />
                <label htmlFor="privacy-policy" className="text-[#627777] text-sm">
                  By ticking the box, I confirm that the information provided is accurate and I agree to the{" "}
                  <Link to="/privacy-policy" className="text-[#00E5FF] hover:underline">privacy policy</Link> and{" "}
                  <Link to="/terms-and-conditions" className="text-[#00E5FF] hover:underline">terms and conditions</Link>.
                </label>
              </div>

              {/* Buttons Section */}
              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="w-full md:w-[322px] py-6 flex items-center justify-center h-[34px] bg-[#1C1C1C] text-[#FFF7F2] rounded-full text-sm hover:bg-gray-800 transition"
                >
                  Send Message
                </button>

                <button
                  type="button"
                  onClick={closeConfirmation}
                  className="w-full md:w-[322px] h-[34px] bg-[#FFFFFF] text-[#1D3F3F] flex justify-center items-center py-6 rounded-full text-sm shadow-md hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
              </div>
            </form> */}
