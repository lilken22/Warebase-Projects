import React, { useState } from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import { Link } from "react-router-dom";
import WarehouseFormModal from "../components/WarehouseFormModal"; 


const LandingPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[rgb(26, 24, 24)] font-serif flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

          {/* Warehouse Form Modal (only shows when isModalOpen is true) */}
       {isModalOpen && <WarehouseFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      {/* Main Content */}
      <main className="flex-grow">
       
        {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-40">
         <div className="text-center">
    <h1 className="mt-20 md:mt-0 text-2xl md:text-5xl font-yeseva font-normal text-[#1D3F3F]">
      List, Discover, & Acquire The Right <br/> <span className="italic text-[#0B97D1] font-semibold">Space</span> for Your Business.
    </h1>
    <p className="text-md mb-8 mt-4">
      Looking for warehouses, industrial spaces that meet your needs? Do you want to <span className="italic text-[#0B97D1]"> lease</span> a <br/> property, <span className="italic text-[#0B97D1]">Share</span> a space with others, <span className="italic text-[#0B97D1]">list</span> your industrial properties work for you, <span className="italic text-[#0B97D1]">but</span> or <span className="italic text-[#0B97D1]">Sell</span> them?
    </p>

    {/* Cards with Radio Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Card 1: I want a property */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md text-left max-w-sm">
            <div className="flex items-center gap-4">
              <input type="radio" name="property" id="want-property" className="w-5 h-5" />
              <label htmlFor="want-property" className="text-sm md:text-xl font-normal text-[#1D3F3F]">
                I want a property
              </label>
            </div>
            <p className="mt-4 text-sm md:text-base text-[#627777] font-aeonik">
              We help intending buyers navigate the complexities of the industrial property market to acquire their ideal industrial property.
            </p>
          </div>

          {/* Card 2: I have a property */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md text-left max-w-sm">
            <div className="flex items-center gap-4">
              <input type="radio" name="property" id="have-property" className="w-5 h-5" />
              <label htmlFor="have-property" className="text-sm md:text-xl font-normal text-[#1D3F3F]">
                I have a property
              </label>
            </div>
            <p className="mt-4 text-sm md:text-base text-[#1D3F3FDE] font-aeonik">
              We help organizations and individuals advertise industrial properties they want to sell, share space, rent out, or lease to integrated parties.
            </p>
          </div>
        </div>

        {/* Centered Button Below Cards */}
        <div className="mt-8 ">
            <button
              className="bg-[#1C1C1C] shadow-md text-[#FFF7F2] px-8 py-3 rounded-[50px] font-medium hover:bg-[#1C1C1C]"
              onClick={() => setIsModalOpen(true)}
              >
              Enquire now
            </button>
        </div>
      </div>
    </section>

        {/* About Us Section */}
        <section className="py-20 px-4 sm:px-12 lg:px-36 bg-[#FFFFFF] flex justify-center">
          <div className="w-full max-w-5xl ">
         <h2 className="text-xl md:text-5xl font-medium font-yeseva text-center mb-6 text-[#1D3F3F]">About Us</h2>
         <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 gap-3">
          <h3 className="text-xl md:text-2xl font-bold mb-4 font-aeonik text-[#1D3F3F]">What We Do</h3>
          <p className="text:sm md:text-lg mb-4 text-[#1D3F3F] text-center md:text-start font-aeonik">
          We make it easy for organisations to find <br/> warehouses and industrial spaces that meet their  exact needs either for the long-term or short-term.
          </p>
          <button className="bg-[#1C1C1C] text-[#FFF7F2] px-6 py-3 rounded-[50px] font-bold hover:bg-[#1C1C1C]">
            Learn More
          </button>
        </div>

        {/* Images */}
        <div className="flex flex-wrap md:flex-nowrap  md:gap-4 w-full">
          <img
            src="/About1.jpeg"
            alt=""
            className="w-[48%] md:w-[35%] max-w-[250px] h-72 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/About2.jpeg"
            alt=""
            className="w-[48%] md:w-[60%] max-w-[500px] h-72  rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      </div>
    </section>



      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-12 lg:px-36 bg-[#FFFFFF]">
      {/* Heading */}
      <h2 className="text-xl md:text-5xl font-medium font-yeseva text-center mb-6 text-[#1D3F3F]">Our Services</h2>
      <p className="text-xs md:text-lg text-center mb-6 text-[#1D3F3F] font-aeonik font-medium">
        Browse through our services gallery and  choose <br/>  one or more that aligns with your needs.
      </p>

      {/* Service Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-lg mx-auto">
          {/* Need Warehouse Space */}
        <div className="bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col items-center 
          w-full max-w-[90%] sm:max-w-[80%] md:max-w-[350px]">
  
          <div className="relative w-full">
         <img 
           src="/service.jpeg" 
           alt="" 
           className="w-full h-12 object-cover" 
          />
         <h3 className="absolute inset-x-0 bottom-3 text-lg font-semibold text-center text-black px-2">
          <span className="text-blue-500">Need</span> warehouse space
          </h3>
        </div>

  {/* White Background for Text */}
  <div className="p-3 w-full flex flex-col items-center">
    <ul className="space-y-1 text-gray-600 flex flex-col justify-center">
      <li className="flex items-center gap-2">
        <input type="radio" className="w-3 h-3" />
        <span className="text-sm">To Set</span>
      </li>
      <li className="flex items-center gap-2">
        <input type="radio" className="w-3 h-3" />
        <span className="text-sm">To Lease</span>
      </li>
      <li className="flex items-center gap-2">
        <input type="radio" className="w-3 h-3" />
        <span className="text-sm">To Share</span>
      </li>
    </ul>

    {/* Button */}
    <button className="mt-3 bg-black text-white py-1.5 px-4 rounded-full text-sm font-semibold w-full"
      onClick={() => setIsModalOpen(true)}
    >
      Enquire now
    </button>
  </div>
</div>
{/* </div> */}

  {/* Have Warehouse Space */}
  <div className="bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col items-center 
  w-full max-w-[90%] sm:max-w-[80%] md:max-w-[350px]">
  
  <div className="relative w-full">
    <img 
      src="/service.jpeg" 
      alt="" 
      className="w-full h-12 object-cover -z-999" 
    />
    <h3 className="absolute inset-x-0 bottom-3 text-lg font-semibold text-center text-black px-2">
      <span className="text-blue-500">Have</span> warehouse space
    </h3>
  </div>

  {/* White Background for Text */}
  <div className="p-3 w-full flex flex-col items-center">
    <ul className="space-y-1 text-gray-600 flex flex-col justify-center">
      <li className="flex items-center gap-2">
        <input type="radio" className="w-3 h-3" />
        <span className="text-sm">To Set</span>
      </li>
      <li className="flex items-center gap-2">
        <input type="radio" className="w-3 h-3" />
        <span className="text-sm">To Lease</span>
      </li>
      <li className="flex items-center gap-2">
        <input type="radio" className="w-3 h-3" />
        <span className="text-sm">To Share</span>
      </li>
    </ul>

    {/* Button */}
    <button className="mt-3 bg-black text-white py-1.5 px-4 rounded-full text-sm font-semibold w-full"
      onClick={() => setIsModalOpen(true)}
    >
      Enquire now
    </button>
  </div>
</div>


</div>

      {/* How It Works Section */}
{/* How It Works Section */}
<h3 className="text-base md:text-2xl md:font-bold mb-6 text-[#1D3F3F] text-center md:text-left font-aeonik">How Warebase Works</h3>

<div className="bg-white shadow-lg p-6 sm:p-8 rounded-lg border border-gray-200 w-full">
  <ul className="space-y-6">
    {[
      {
        number: "1",
        title: "Fill out the required forms",
        descriptions: [
          "Fill out the services form on the homepage, and we will identify properties that meet your requirements on our platform.",
          "Browse through available properties on the listing page and fill the enquiry form to inquire about those that interest you.",
        ],
      },
      {
        number: "2",
        title: "Landlord and reps. engagement",
        descriptions: ["We engage numerous landlords and their representatives."],
      },
      {
        number: "3",
        title: "Joint inspection",
        descriptions: [
          "We arrange joint inspections of key properties with you to provide an effective in-person follow-up.",
        ],
      },
      {
        number: "4",
        title: "Close the deal",
        descriptions: [
          "We provide you with a detailed list and choice property files while ensuring a secure process that benefits you.",
        ],
      },
      {
        number: "5",
        title: "Unpack and settle-in",
        descriptions: [
          "We assist you with necessary documentation and ensure a smooth transition.",
        ],
      },
    ].map((step) => (
      <li key={step.number} className="flex items-start gap-4">
        {/* Step Number */}
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
          {step.number}
        </div>

        {/* Step Content (Large Screen: Grid Layout | Small Screen: Stacked Layout) */}
        <div className="w-full grid md:grid-cols-[250px_1fr] gap-6 items-start">
          <h4 className=" md:font-bold text-lg md:text-xl text-[#1D3F3F]">{step.title}:</h4>

          <div className="flex flex-col gap-2 md:gap-4">
            {step.descriptions.map((desc, index) => (
              <p key={index} className="text-center text-sm md:text-lg font-normal font-aeonik text-[#627777]">{desc}</p>
            ))}
          </div>
        </div>
      </li>
    ))}
  </ul>

  {/* Call-to-Action */}
  <div className="mt-12 border-t border-gray-300 pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-lg md:text-2xl font-medium text-[#1D3F3FDE] text-center md:text-left">
      Looking for an industrial property tailored to your needs? <br className="hidden md:block"/> Let’s get you started.
    </p>
    <button className="bg-[#1C1C1C] text-[#FFF7F2] text-lg px-6 md:px-8 py-3 rounded-full font-medium hover:bg-[#1C1C1C] transition w-full md:w-auto">
      Find a property
    </button>
  </div>
</div>




    </section>


        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50 flex flex-col items-center">
  <h2 className="md:text-4xl font-medium text-[#1D3F3F] font-yeseva text-center mb-4">
    What Our Users Say
  </h2>
  <p className="text-[#1D3F3F] text-center max-w-2xl mb-8 text-base font-aeonik">
    See how others have successfully rented, leased, shared, and listed <br /> 
    warehouse spaces with us!
  </p>

  {/* Testimonials Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 sm:px-10 md:px-0">
    {/* Testimonial 1 */}
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold mb-2 text-center">Swift Logistics</h3>
      <p className="text-gray-600 mb-4 text-sm text-center">
        Finding a warehouse space that meets our storage needs was a challenge. 
        The process was fast, and the support team was very helpful.
      </p>
      <div className="flex items-center gap-3">
        <img src="/Gbenga.jpeg" alt="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <p className="font-semibold">Gbenga Osuntokun</p>
          <p className="text-sm text-gray-500">Operation Manager</p>
        </div>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold mb-2 text-center">GreenMart</h3>
      <p className="text-gray-600 mb-4 text-sm text-center">
        Listing my entire warehouse space was effortless. Within days, I found a suitable tenant. 
        Highly recommend!
      </p>
      <div className="flex items-center gap-3">
        <img src="/Philip.jpeg" alt="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <p className="font-semibold">Philip Namibe</p>
          <p className="text-sm text-gray-500">Business Owner</p>
        </div>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold mb-2 text-center">FastTrack Distributions</h3>
      <p className="text-gray-600 mb-4 text-sm text-center">
        We needed a short-term warehouse, and the platform connected us to the perfect one.
      </p>
      <div className="flex items-center gap-3">
        <img src="/Adebayo.jpeg" alt="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <p className="font-semibold">Adebayo Akinyemi</p>
          <p className="text-sm text-gray-500">Supply Chain Director</p>
        </div>
      </div>
    </div>

    {/* Testimonial 4 */}
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold mb-2 text-center">PrimeWarehousing</h3>
      <p className="text-gray-600 mb-4 text-sm text-center">
        This service has been a game-changer for our business. The platform attracts unique 
        clients, and its user experience is top-notch!
      </p>
      <div className="flex items-center gap-3">
        <img src="/Sofia.jpeg" alt="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <p className="font-semibold">Sophia Rachel</p>
          <p className="text-sm text-gray-500">Real Estate Manager</p>
        </div>
      </div>
    </div>
  </div>
</section>



       

       {/* Latest insight section */}
      <section className="py-20 px-4 sm:px-12 lg:px-36 bg-gray-50">
          {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-2">Latest Insight</h2>
        <p className="text-center text-gray-600 mb-8">Stay up-to-date with industry trends.</p>

          {/* Featured Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <img
            src="/Bookshelf.jpeg" // Replace with actual image URL
            alt=""
            className="w-[872px] h-[292px] object-cover"
          />
          <div className="flex flex-col justify-center">
           <h3 className="text-xl font-bold font-Yeseva One">The Ultimate Guide to Renting a Warehouse Space</h3>
           <p className="text-gray-600 mt-2">
           Finding the right warehouse can be overwhelming. This guide walks you through key factors like location, size, and costs to help you make the best decision.
           </p>
            <p className="text-sm text-gray-500 mt-1">February 25, 2024</p>
            <div className="flex items-center justify-between gap-6 mt-4">
             <button className="px-6 py-2 bg-black text-white rounded-full">Read More</button>
             <Link to="#" className="text-blue-600 text-sm font-semibold">View More Insight →</Link>
            </div>
          </div>
        </div>

               {/* Grid of Articles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                     {/* Article Card 1 */}
                   <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
                    <img src="/max.jpeg" alt="" className="w-[392px] h-[108px]" />
                    <div className="bg-white p-4 shadow-lg">
                      <p className="text-sm text-gray-500">February 25, 2024</p>
                      <p className="font-medium">Maximizing Warehouse Efficiency: Tips for Businesses</p>
                    <Link to="#" className="text-black text-sm mt-12 block">Read More →</Link>
                    </div>
                  </div>


                 {/* Article Card 2 */}
                  <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
                     <img src="/phone.jpeg" alt="" className="w-[392px] h-[108px]" />
                     <div className="bg-white p-4 shadow-lg">
                     <p className="text-sm text-gray-500">February 25, 2024</p>
                     <p className=" font-medium">Shared Warehousing: A Cost-Effective Solution for Small Businesses</p>
                    <Link to="#" className="text-black text-sm mt-6 block">Read More →</Link>
                    </div>
                  </div>

              {/* Article Card 3 */}
              <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
               <img src="/key.jpeg" alt="" className="w-[392px] h-[108px] object-full" />
               <div className="bg-white p-4 shadow-lg">
                 <p className="text-sm text-gray-500">February 25, 2024</p>
                 <p className=" font-medium">How to List Your Warehouse for Rent and Attract Tenants Quickly</p>
                 <Link to="#" className="text-black text-sm mt-6 block">Read More →</Link>
               </div>
              </div>
                      {/* Article Card 4 */}
              <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
                <img src="/board.jpeg" alt="" className="w-[392px] h-[108px]" />
                <div className="bg-white p-4 shadow-lg">
                <p className="text-sm text-gray-500">February 25, 2024</p>
                <p className=" font-medium">Key Factors to Consider Before Leasing a Warehouse</p>
                <Link to="#" className="text-black text-sm mt-12 block">Read More →</Link>
                </div>
              </div>
            </div>
          </section>

       {/* stay up to date */}
       <section className="py-16 px-4 text-center bg-white">
  {/* Heading */}
  <h2 className="text-3xl font-bold mb-2">Stay up to date</h2>
  <p className="text-gray-600 max-w-lg mx-auto">
    Subscribe to our newsletter for industry insights, expert tips, and exclusive updates on warehouse rentals, leasing, and sharing opportunities!
  </p>

  {/* Input and Button Container */}
     <div className="flex justify-center items-center ">
      <div className="relative w-96 mt-12">
          {/* Input Field */}
           <input
           type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 pr-24 border border-gray-300 rounded-2xl focus:outline-none"
          />
          
            {/* Subscribe Button Inside Input */}
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
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