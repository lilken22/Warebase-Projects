import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import WarehouseFormModal from "../components/WarehouseFormModal";
import { FaArrowRight } from "react-icons/fa6";
import { subscribeNewsletter } from "../redux/slices/message.slice";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../redux/slices/blog.slice";
import { selectBlogSlice } from "../redux/selectors/blog.selector";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // State to track selected radio button
  const navigate = useNavigate();
  const servicesRef = useRef(null);
  const { blogs, featuredPost } = useSelector(selectBlogSlice);
   const [latestBlogs, setLatestBlogs] = useState([]);
  const dispatch = useDispatch();
  const [subscribeForm, setSubscribeForm] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption((prev) =>
      prev === event.target.id ? null : event.target.id
    );
  };

  const handleClick = () => {
    navigate("/about"); // Navigate to the About page
  };
  const handleReadMoreClick = (id) => {
    navigate(`/blogdetails/${id}`);
  };
  const handlePropertyClick = () => {
    navigate("/listing");
  };

  // Function to scroll to the "Our Services" section
  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // To subscribe for news letter=========
  const handleSubscribeNewsletter = async () => {
    if (!subscribeForm)
      return toast.error("Please enter your email to subscribe");
    try {
      setIsLoading(true);
      await dispatch(subscribeNewsletter({ email: subscribeForm }));
      setSubscribeForm("");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(fetchBlogs()).unwrap();
  }, [dispatch]);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const sorted = [...blogs].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      const latestFour = sorted.slice(0, 4);
      setLatestBlogs(latestFour);
    }
  }, [blogs]);

  return (
    <div className="min-h-screen bg-white text-[rgb(26, 24, 24)] font-serif flex flex-col justify-between">
      {/* Navbar */}
      <Navbar scrollToServices={scrollToServices} />

      {/* Warehouse Form Modal (only shows when isModalOpen is true) */}
      {isModalOpen && (
        <WarehouseFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center md:mt-10 px-4 sm:px-8 lg:px-40">
          <div className="text-center">
            <h1 className="mt-15 md:mt-20 text-3xl md:text-6xl font-yeseva font-normal text-[#1D3F3F]">
              List, Discover, & Acquire The Right{" "}
              <span className="inline italic text-[#00E5FF] font-bold font-playfair text-[28px] md:text-6xl md:">
                Space
              </span>{" "}
              for Your Business.
            </h1>
            <div className="flex justify-center">
              <p className="text-xs md:text-xl text-[#1D3F3FDE] mt-6 font-aeonik font-normal text-center max-w-[307px] md:max-w-[847px] min-h-[56px]">
                Looking for warehouses, industrial spaces that meet your needs?
                Do you want to lease a property, share a space with others, list
                your industrial properties with us, buy or sell them?
              </p>
            </div>

            {/* Cards with Radio Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-8">
              {/* Card 1: I want a property */}
              <div className="bg-[#FFFFFF] p-6 rounded-md shadow-lg text-start max-w-[301px] md:max-w-[418px]  min-h-[105px] md:min-h-[195px]">
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="property"
                    id="want-property"
                    className="w-5 h-5"
                    onChange={handleRadioChange} // Handle radio button selection
                    checked={selectedOption === "want-property"} // Ensure controlled state
                  />
                  <label
                    htmlFor="want-property"
                    className="text-sm md:text-2xl font-aeonik font-normal text-[#1D3F3F]"
                  >
                    I want a property
                  </label>
                </div>
                <p className="mt-4 text-sm md:text-[17px] text-[#627777] font-normal max-w-[307px] min-h-[110px] font-aeonik text-start line-clamp-3">
                  We help intending buyers navigate the complexities of the
                  industrial property market to acquire their ideal industrial
                  property.
                </p>
              </div>

              {/* Card 2: I have a property */}
              <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-lg text-left max-w-[301px] md:max-w-[418px] min-h-[105px] md:min-h-[195px]">
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="property"
                    id="have-property"
                    className="w-5 h-5"
                    onChange={handleRadioChange} // Handle radio button selection
                    checked={selectedOption === "have-property"} // Ensure controlled state
                  />
                  <label
                    htmlFor="have-property"
                    className="text-sm md:text-2xl font-aeonik font-normal text-[#1D3F3F]"
                  >
                    I have a property
                  </label>
                </div>
                <p className="mt-4 text-sm md:text-[17px] font-normal text-[#1D3F3FDE] font-aeonik max-w-[307px]">
                  We help organizations and individuals advertise industrial
                  properties they want to sell, share space, rent out, or lease
                  to integrated parties.
                </p>
              </div>
            </div>

            {/* Centered Button Below Cards */}
            <div className="mt-8 ">
              <button
                className={`shadow-md text-[#FFF7F2] px-8 py-3 text-xl rounded-[50px] font-normal transition-all 
                ${
                  selectedOption
                    ? "bg-[#1C1C1C] hover:bg-[#333333]"
                    : "bg-[#BFBFBF40] cursor-not-allowed"
                }
              `}
                onClick={() => setIsModalOpen(true)}
                disabled={!selectedOption} // Disable button if no radio button is selected
              >
                Enquire now
              </button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 px-4 sm:px-4 lg:px-8 bg-[#FFFFFF] border-b border-gray-300">
          <div className="w-full max-w-full mx-auto">
            <h2 className="text-xl md:text-5xl font-medium font-yeseva text-center mb-6 text-[#1D3F3F]">
              About Us
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Text Content */}
              <div className="w-full md:w-1/2 gap-3 text-center md:text-start">
                <h3 className="text-start text-xl md:text-2xl font-bold mb-4 font-aeonik text-[#1D3F3F]">
                  What We Do
                </h3>
                <p className=" min-h-[51px] text-sm md:text-lg mb-4 text-[#1D3F3F] text-center md:text-start font-aeonik">
                  We make it easy for organisations to find{" "}
                  <span className="hidden md:block">
                    warehouses and industrial spaces that meet their
                  </span>
                  <span className="hidden md:block">
                    exact needs either for the long-term or short-term.
                  </span>
                  <span className="block md:hidden">
                    warehouses and industrial spaces that meet their exact needs
                    either for the long-term or short-term.
                  </span>
                </p>
                <button
                  className="bg-[#1C1C1C] text-[#FFF7F2] items-center px-6 py-3 rounded-[50px] font-bold hover:bg-[#1C1C1C]"
                  onClick={handleClick}
                >
                  Learn More
                </button>
              </div>

              {/* Images */}
              <div className="flex flex-nowrap gap-2 w-full">
                <img
                  src="/whitewarehouse.jpg"
                  alt=""
                  className="w-[35%] md:w-[35%] max-w-[350px] h-72 rounded-none shadow-lg object-cover"
                />
                <img
                  src="/insidewarehouse.jpg"
                  alt=""
                  className="w-[65%] md:w-[65%] max-w-[550px] h-72 rounded-none shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Service Section */}
        <section
          ref={servicesRef}
          id="our-services"
          className="flex flex-col items-center w-full max-w-screen-lg mx-auto mt-14"
        >
          <h2 className="text-xl md:text-5xl font-medium font-yeseva text-center mb-4 text-[#1D3F3F]">
            Our Services
          </h2>
          <p className="text-center text-[#1D3F3F] max-w-xs md:max-w-md font-aeonik font-normal text-lg mb-6">
            Browse through our services gallery and choose one or more that
            align with your needs.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {/* Need Warehouse Space */}
            <div className="bg-white shadow-lg rounded-lg border flex flex-col items-stretch w-[300px] md:w-[392px] min-h-[150px] md:min-h-[334px]">
              <div className="relative">
                <img
                  src="/needed2.jpg"
                  alt=""
                  className="w-full h-16 object-cover rounded-t-lg"
                />
                <h3 className="absolute inset-x-0 top-4 left-0 text-lg font-semibold text-center text-black px-2">
                  <span className="text-[#1D3F3F] bg-[#03E5FE] py-2 px-2">
                    Need
                  </span>{" "}
                  warehouse space
                </h3>
              </div>

              <div className="p-5 w-full flex flex-col justify-between items-center">
                <ul className="w-full flex flex-col items-center space-y-6 text-[#627777]">
                  {["To Buy", "To Lease", "To Share"].map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-2 justify-center ${
                        item === "To Buy" ? "mr-[12px]" : ""
                      }`}
                    >
                      <span className="w-3 h-3 bg-[#DDDDDD] rounded-full"></span>
                      <span className="text-base leading-none tracking-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-10 bg-[#1C1C1C] text-[#FFF7F2] py-5 px-6 rounded-full text-xl font-normal font-aeonik w-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  Enquire now
                </button>
              </div>
            </div>

            {/* Have Warehouse Space */}
            <div className="bg-white shadow-lg rounded-lg border flex flex-col items-stretch w-[300px] md:w-[392px] min-h-[150px] md:min-h-[334px]">
              <div className="relative">
                <img
                  src="/needed2.jpg"
                  alt=""
                  className="w-full h-16 object-cover rounded-t-lg"
                />
                <h3 className="absolute inset-x-0 top-4 left-0 text-lg font-semibold text-center text-black px-2">
                  <span className="text-[#1D3F3F] bg-[#03E5FE] py-2 px-2">
                    Have
                  </span>{" "}
                  warehouse space
                </h3>
              </div>

              <div className="p-5 w-full flex flex-col justify-between items-center">
                <ul className="w-full flex flex-col items-center space-y-6 text-[#627777]">
                  {["To Sell", "To Lease", "To Share"].map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-2 justify-center ${
                        item === "To Sell" ? "mr-[12px]" : ""
                      }`}
                    >
                      <span className="w-3 h-3 bg-[#DDDDDD] rounded-full"></span>
                      <span className="text-base leading-none tracking-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-10 bg-[#1C1C1C] text-[#FFF7F2] py-5 px-6 rounded-full text-xl font-normal font-aeonik w-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  Enquire now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-12 w-full max-w-screen-2xl mx-auto px-6 lg:px-12">
          <h3 className="text-sm md:text-3xl font-bold mb-5 text-[#1D3F3F] text-left">
            How Warebase Works
          </h3>

          <div className="bg-white shadow-lg p-10 sm:p-12 rounded-lg border border-gray-200 w-full">
            <ul className="space-y-10">
              {[
                {
                  number: "1",
                  title: "Fill out the required forms",
                  descriptions: [
                    "Fill out the services form on the homepage, and we will identify properties that meet your requirements on our platform.",
                    "OR",
                    <>
                      Browse through available properties on the{" "}
                      <Link
                        to="/listing"
                        className="font-bold text-[#627777] font-aeonik text-sm md:text-lg hover:underline"
                      >
                        listing page
                      </Link>{" "}
                      and fill the enquiry form to inquire about those that
                      interest you.
                    </>,
                  ],
                },
                {
                  number: "2",
                  title: "Landlord and reps. engagement",
                  descriptions: [
                    "We engage numerous landlords and their representatives.",
                  ],
                },
                {
                  number: "3",
                  title: "Joint inspection",
                  descriptions: [
                    <>
                      We arrange joint inspections of the properties with you so
                      you can <br /> assess them in person before making a
                      decision.
                    </>,
                  ],
                },
                {
                  number: "4",
                  title: "Close the deal",
                  descriptions: [
                    <>
                      We provide you with offers for your choice property and{" "}
                      <br /> negotiate favorable terms to ensure the best deal
                      for you.
                    </>,
                  ],
                },
                {
                  number: "5",
                  title: "Unpack and settle-in",
                  descriptions: [
                    <>We ensure you take possession in record time.</>,
                  ],
                },
              ].map((step, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-5"
                >
                  {/* Number Circle */}
                  <div className="w-10 h-10 flex justify-center items-center bg-[#00E5FF] text-white rounded-full text-sm md:text-lg font-bold">
                    {step.number}
                  </div>

                  {/* Step Details */}
                  <div
                    className={`flex-1 ${
                      index !== 4 ? "border-b border-gray-300 pb-3 mt-5" : ""
                    } `}
                  >
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-1 md:gap-6 ">
                      {/* Title */}
                      <h4 className="text-sm md:text-lg font-bold text-[#1D3F3F] font-aeonik min-w-[280px] whitespace-nowrap">
                        {step.title}:
                      </h4>

                      {/* Descriptions - Step 1 has special spacing */}
                      <div
                        className={`flex-1 relative flex ${
                          step.number === "1" ? "gap-8 md:gap-16" : ""
                        }`}
                      >
                        {step.number === "1" ? (
                          <>
                            {/* Mobile: Column layout */}
                            <div className="md:hidden space-y-4">
                              <p className="text-[#627777] text-sm md:text-base">
                                {step.descriptions[0]}
                              </p>
                              <div className="flex justify-start">
                                <span className="font-bold text-[#627777] px-2">
                                  OR
                                </span>
                              </div>
                              <p className="text-[#627777] text-sm md:text-base">
                                {step.descriptions[2]}
                              </p>
                            </div>

                            {/* Desktop: Row layout */}
                            <div className="hidden md:flex relative items-center gap-8">
                              <p className="flex-1 text-[#627777] text-base">
                                {step.descriptions[0]}
                              </p>
                              <span className="font-bold text-[#627777] px-2">
                                OR
                              </span>
                              <p className="flex-1 text-[#627777] text-base">
                                {step.descriptions[2]}
                              </p>
                            </div>
                          </>
                        ) : (
                          // Normal rendering for other steps
                          step.descriptions.map((desc, idx) => (
                            <p
                              key={idx}
                              className="flex-1 text-[#627777] text-sm md:text-base"
                            >
                              {desc}
                            </p>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Call-to-Action */}
            <div className="mt-12 border-t border-gray-300 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-lg md:text-3xl text-[#1D3F3FDE] text-center md:text-start font-yeseva font-normal leading-relaxed">
                Looking for an industrial property tailored to <br /> your
                needs? Let’s get you started.
              </p>
              <button
                className="bg-[#1C1C1C] text-[#FFF7F2] text-lg md:text-xl px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
                onClick={handlePropertyClick}
              >
                Find a property
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50 flex flex-col items-center">
          <h2 className="text-[20px] md:text-[57px] font-medium text-[#1D3F3F] font-yeseva text-center mb-1">
            What Our Users Say
          </h2>
          <p className="text-xs text-[#1D3F3F] text-center max-w-2xl mb-8  md:text-lg font-aeonik">
            See how others have successfully rented, leased, shared, and listed{" "}
            <br />
            warehouse spaces with us!
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-0 justify-items-center">
            {/* Testimonial 1 */}
            <div
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 
  lg:h-[334px] lg:w-[320px]  
  h-[210px] w-[290px] flex flex-col justify-between mx-auto md:mx-5"
            >
              <h3 className="text-sm md:text-lg text-[#1D3F3FDE] font-semibold mb-1 md:mb-2 text-start">
                Swift Logistics
              </h3>

              <p className="text-xs md:text-base text-[#627777] text-start leading-tight">
                Finding a warehouse space that met our storage needs used to be
                a challenge, but this platform made it seamless. The process was
                fast, and the support team was incredibly helpful!
              </p>

              <div className="flex items-center mt-4 sm:mt-6 gap-2 md:gap-5">
                <img
                  src="/Gbenga.jpeg"
                  alt=""
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-xs md:text-sm font-semibold">
                    Gbenga Osuntokun
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    Operation Manager
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 lg:h-[334px] lg:w-[320px] h-[210px] w-[290px] flex flex-col justify-between mx-auto md:mx-5">
              <h3 className="text-sm md:text-lg text-[#1D3F3FDE] font-semibold mb-1 md:mb-2 text-start">
                GreenMart
              </h3>
              <p className="text-xs md:text-base text-[#627777] text-start leading-tight">
                Listing my extra warehouse space was effortless. Within days, I
                found a reliable tenant, and the entire transaction was smooth.
                Highly recommend!
              </p>
              <div className="flex items-center mt-4 md:mt-6 gap-2 md:gap-5">
                <img
                  src="/Philip.jpeg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Philip Namibe</p>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 lg:h-[334px] lg:w-[320px] h-[210px] w-[290px] flex flex-col justify-between mx-auto md:mx-5">
              <h3 className="text-sm md:text-lg text-[#1D3F3FDE] font-semibold mb-1 md:mb-2 text-start">
                FastTrack Distributions
              </h3>
              <p className="text-xs md:text-base text-[#627777] text-start leading-tight">
                We needed a short-term warehouse solution, and this platform
                connected us with the perfect space. The transparency and ease
                of use exceeded our expectations!
              </p>
              <div className="flex items-center mt-4 md:mt-6 gap-2 md:gap-5">
                <img
                  src="/Gbenga.jpeg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Adebayo Akinyemi</p>
                  <p className="text-sm text-gray-500">Supply Chain Director</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 lg:h-[334px] lg:w-[320px] h-[210px] w-[290px] flex flex-col justify-between mx-auto md:mx-5">
              <h3 className="text-sm md:text-lg text-[#1D3F3FDE] font-semibold mb-1 md:mb-2 text-start">
                PrimeWarehousing
              </h3>
              <p className="text-xs md:text-base text-[#627777] text-start leading-tight">
                This service has been a game-changer for our leasing business.
                The platform attracts serious clients, and the user experience
                is top-notch!
              </p>
              <div className="flex items-center mt-4 md:mt-6 gap-2 md:gap-5">
                <img
                  src="/Sofia.jpeg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Sophia Rachel</p>
                  <p className="text-sm text-gray-500">Real Estate Manager</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest insight section */}
        <section className="py-20 px-4 md:px-12 lg:px-16">
          {/* Section Title */}
          <h2 className="text-[20px] md:text-[57px] font-normal font-yeseva text-[#1D3F3F] text-center mb-0">
            Latest Insight
          </h2>
          <p className="text-center text-[#1D3F3F] font-normal font-yeseva text-sm md:text-lg mb-8">
            Stay up-to-date with industry trends.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 mb-12">
            {/* Image Section */}
            <div className="flex-1">
              {featuredPost?.imageUrl?.[0] && (
                <img
                  src={featuredPost?.imageUrl[0]}
                  alt="Warehouse Guide"
                  className="w-full h-[330px] object-cover rounded-l-md"
                />
              )}
            </div>

            {/* Content Section (Joined with Image) */}
            <div
              className="flex-1 flex flex-col bg-[#FFFFFF] shadow-md rounded-r-md 
    w-full h-[330px] flex-shrink-0 justify-between p-6 sm:p-8"
            >
              {/* Title */}
              <h3 className="text-xl md:text-3xl font-medium font-yeseva text-[#1D3F3F]">
                {featuredPost?.title}
              </h3>

              {/* Description */}
              <p className="text-[#627777] text-sm md:text-base font-normal font-aeonik leading-relaxed">
                Finding the right warehouse can be overwhelming.
                <br className="hidden sm:inline" />
                This guide walks you through key factors like location, size,
                <br className="hidden sm:inline" />
                and costs to help you make the best decision.
              </p>

              {/* Date */}
              <p className="text-sm text-[#1D3F3F75] md:text-base font-normal font-aeonik">
                {new Date(featuredPost?.date).toLocaleDateString()}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
                {/* Read More Button */}
                <button
                  className="px-9 py-3 bg-[#1C1C1C] text-white rounded-full text-sm font-semibold hover:bg-[#1D3F3F75] transition"
                  onClick={() => handleReadMoreClick(featuredPost._id)}
                >
                  Read More
                </button>

                {/* View More Insight Link */}
                <Link
                  to="/blog"
                  className="text-[#00E5FF] text-lg font-normal font-aeonik hover:underline"
                >
                  View More Insight →
                </Link>
              </div>
            </div>
          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              latestBlogs?.length > 0 && latestBlogs?.map((item, index) => {
                return (
                  <div className="flex flex-col shadow-lg rounded-lg overflow-hidden h-[190px] md:h-[fit-content] w-[170px] md:w-[330px]">
                    <img
                      src={item?.imageUrl[0]}
                      alt="Maximizing Warehouse Efficiency"
                      className="w-[170px] md:w-full h-[85px] md:h-[200px] object-cover"
                    />

                    <div className="bg-white p-4 pb-4 flex flex-col flex-grow">
                      <p className="text-[10px] md:text-base text-[#1D3F3F75] md:mt-3">
                        {new Date(item?.date).toLocaleDateString()}
                      </p>

                      <p className="font-medium font-yeseva text-[8px] md:text-lg text-[#1D3F3FDE] mt-2">
                        {item.title ||
                          "Maximizing Warehouse Efficiency: Tips for Businesses"}
                      </p>

                      <Link
                        to={`/blogdetails/${item._id}`}
                        className="text-[#1D3F3F] font-aeonik font-bold text-[10px] md:text-lg mt-auto flex text-center items-center justify-start gap-3"
                      >
                        Read More <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                );
              })
            }
           
            
          </div>
        </section>

        {/* stay up to date */}
        <section className="py-16 px-4 text-center bg-white">
          {/* Heading */}
          <h2 className="md:text-[57px] font-normal text-[#1D3F3F] font-yeseva mb-2">
            Stay up to date
          </h2>
          <p className="text-[#1D3F3F] max-w-2xl mx-auto font-aeonik md:text-lg font-normal">
            Subscribe to our newsletter for industry insights, expert tips, and
            exclusive updates on warehouse rentals, leasing, and sharing
            opportunities!
          </p>

          {/* Input and Button Container with Background Image */}
          <div
            className="flex justify-center items-center mt-12 bg-center bg-[length:370px_120px] md:bg-[length:1100px_300px] h-[120px] md:h-[300px]"
            style={{
              backgroundImage: "url(/STAY.jpg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative w-full max-w-[300px] md:max-w-[700px]  px-4">
              {" "}
              {/* Adjusted width for mobile */}
              {/* Input Field */}
              <input
                value={subscribeForm}
                onChange={(e) => setSubscribeForm(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 pr-20 border border-gray-300 rounded-2xl focus:outline-none text-sm md:text-base  h-10 md:h-16" /* Adjusted padding and font size for mobile */
              />
              {/* Subscribe Button Inside Input */}
              <button
                onClick={handleSubscribeNewsletter}
                disabled={isLoading}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition w-[90px] md:w-[190px] text-sm md:text-lg  h-10 md:h-16" /* Adjusted button size and font for mobile */
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer ✅ */}
      <Footer />
    </div>
  );
};

export default LandingPage;
