import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendContactMessage } from "../redux/slices/message.slice";
import { selectMessageSlice } from "../redux/selectors/message.selector";
import { toast } from "react-toastify";

const Contact = () => {

  const dispatch = useDispatch();
  // i remove the word error for now so i can be able to create a PR
  const { isLoading } = useSelector(selectMessageSlice);
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

  const handleSubmit = async(e) => {
    if(!formData) return toast.error('Please fill the required form details')
    e.preventDefault();
    try {
      await dispatch(sendContactMessage(formData));
       setFormData({
         fullName: "",
         email: "",
         phone: "",
         companyName: "",
         warehouseLocation: "",
         warehouseSize: "",
         price: "",
         intendedUsage: "",
       });
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="h-full flex flex-col bg-white mt-20">
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="flex-grow flex items-center justify-center px-6 md:px-16">
        <div className="w-[1200px] h-[100%] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="w-full mt-16">
            <img
              src="/contactimage.jpg"
              alt="Contact Us"
              className="w-full h-auto md:w-[700px] md:h-[800px] object-cover rounded text-[#E6DFDF]"
            />
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white">
            <div className="hidden md:block w-[271px] h-[102px] gap-[20px]  space-y-4">
              <h2 className="text-[57px] h-[57px] font-yeseva font-medium text-[#1D3F3F] mt-8">
                Contact
              </h2>
              <p className="text-[#1D3F3F] text-base font-normal font-aeonik mt-2">
                Get in Touch – We're Here to Help
              </p>
            </div>
            <div className="hidden md:block mt-0">
              <p className="font-aeonik font-normal text-sm text-[#627777]">
                Need a warehouse to Buy, Lease or Share, Warebase is the partner
                you can trust Or Have a warehouse to Sell, Lease or Share,
                Warebase is the partner you can trust
              </p>
            </div>

            {/* Contact Form */}
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              {/* Name & Email */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm md:text-base font-aeonik font-normal text-[#627777]">
                    Full Name<span className="text-[#F00000]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2  bg-[#F3F3F3]"
                    aria-label="Full Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-aeonik font-normal text-[#627777]">
                    Email<span className="text-[#F00000]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#F3F3F3]"
                    aria-label="Email"
                    required
                  />
                </div>
              </div>

              {/* Phone & Company Name */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm md:text-base font-aeonik font-normal text-[#627777]">
                    Phone<span className="text-[#F00000]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#F3F3F3]"
                    aria-label="Phone"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-aeonik font-normal text-[#627777]">
                    Company Name<span className="text-[#F00000]">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#F3F3F3]"
                    aria-label="Company Name"
                    required
                  />
                </div>
              </div>

              {/* Warehouse Location & Size */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
  {/* Warehouse Location */}
  <div>
    <label className="block text-sm md:text-base font-aeonik font-normal text-[#627777]">
      Warehouse Location<span className="text-[#F00000]">*</span>
    </label>
    <input
      type="text"
      name="warehouseLocation"
      value={formData.warehouseLocation}
      onChange={handleChange}
      className="mt-1 w-full px-4 py-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#F3F3F3]"
      aria-label="Warehouse Location"
      required
    />
  </div>

  {/* Warehouse Size */}
  <div>
    <label className="block text-sm md:text-base font-aeonik font-normal text-[#627777]">
      Warehouse Size<span className="text-[#F00000]">*</span>
    </label>
    <div className="mt-1 w-full flex items-center border rounded-md bg-[#F3F3F3] focus-within:ring-2 focus-within:ring-gray-500">
      <input
        type="text"
        name="warehouseSize"
        value={formData.warehouseSize}
        onChange={handleChange}
        className="flex-grow px-3 py-2 bg-[#F3F3F3] text-sm md:text-base focus:outline-none"
        required
      />
      <span className="text-[#627777] text-sm md:text-base px-3">sq.ft</span>
    </div>
  </div>
</div>


              {/* Rent/Price */}
              <div>
                <label className="block text-sm md:text-base font-aeonik font-normal text-[#627777]">
                  Rent/Price<span className="text-[#F00000]">*</span>
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#F3F3F3]"
                  aria-label="Price"
                  required
                />
              </div>

              {/* Intended Usage */}
              <label className="block text-sm md:text-base font-aeonik font-normal text-[#627777]">
                Intended Usage<span className="text-[#F00000]">*</span>
              </label>
              <textarea
                name="intendedUsage"
                value={formData.intendedUsage}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                className="border border-gray-300 rounded-md px-3 py-0 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#F3F3F3]"
                aria-label="Message"
                required
              ></textarea>

              {/* Checkbox with Text */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  className="w-8 h-5 appearance-none border border-gray-400 checked:bg-[#00E5FF] checked:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF] cursor-pointer relative 
      after:content-['✔'] after:text-black after:text-[10px] after:font-bold after:absolute after:top-[1px] after:left-1/2 after:-translate-x-1/2 after:opacity-0 checked:after:opacity-100"
                />
                <label
                  htmlFor="privacy-policy"
                  className="text-[#627777] text-sm"
                >
                  By ticking the box, I confirm that the information provided
                  above is accurate and that I have read, understood, and agreed
                  to the{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-[#00E5FF] hover:underline"
                  >
                    privacy policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/terms-and-conditions"
                    className="text-[#00E5FF] hover:underline"
                  >
                    terms and conditions
                  </Link>
                  .
                </label>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-[152px] md:w-[322px] h-[34px] text-center bg-[#1C1C1C] text-[#FFF7F2] flex items-center justify-center rounded-full font-aeonik md:px-[24px] md:py-[18px] text-sm hover:bg-gray-800 transition"
                >
                  Send Message
                </button>

                <button
                  type="button"
                  className=" md:hidden w-[152px] h-[34px] bg-[#FFFFFF] text-[#1D3F3F] flex items-center justify-center rounded-full text-sm font-aeonik shadow-md transition"
                >
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;


