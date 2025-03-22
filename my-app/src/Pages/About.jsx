import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import WarehouseFormModal from "../components/WarehouseFormModal";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-serif flex flex-col">

       {/* Warehouse Form Modal (only shows when isModalOpen is true) */}
       {isModalOpen && (
        <WarehouseFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      
      {/* Navbar */}
      <Navbar />

      <section className="py-16 px-6 sm:px-12 lg:px-36 text-center mt-16">
   <h2 className="text-base md:text-[57px] font-normal font-yeseva text-[#1D3F3F]">About Us</h2>
  <p className="text-sm md:text-lg text-[#1D3F3F] font-aeonik mt-8 max-w-2xl mx-auto">
    We make it easy for organisations to find warehouses and industrial spaces that meet their exact needs either for the long-term or short-term.
  </p>

  {/* Mission & Vision Section */}
  <div className="mt-12 flex flex-col gap-12 lg:gap-20 items-center">

    {/* Our Mission (Responsive Order Change) */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:text-left mt-8">
      <div className="max-w-xl order-2 md:order-1"> 
        <h3 className="text-3xl font-bold font-aeonik text-left text-[#1D3F3F]">Our Mission</h3>
        <p className="text-[#1D3F3F] mt-2 md:text-base max-w-xl font-aeonik text-left">
          At Warebase, our mission is to connect businesses with the perfect warehouse spaces by providing a seamless, efficient, and data-driven property listing platform. We strive to simplify warehouse leasing and sales by offering a user-friendly experience, comprehensive listings, and valuable insights that empower businesses to make informed decisions.
        </p>
      </div>
      <img
        src="/mission.png" 
        alt="Mission Icon"
        className="w-40 h-32 md:w-[265px] md:h-[300px] order-1 md:order-2"
      />
    </div>

    {/* Our Vision (Responsive Order Change) */}
    <div className="flex flex-col md:flex-row items-center gap-6 md:text-left mt-8">
      <div className="max-w-xl order-2 md:order-1"> 
        <h3 className="text-3xl font-bold font-aeonik text-left text-[#1D3F3F]">Our Vision</h3>
        <p className="text-[#1D3F3F] mt-2 md:text-base max-w-xl font-aeonik text-left">
          Warebase envisions becoming the leading platform for warehouse property listings, revolutionizing the way businesses discover, lease, and manage industrial spaces. We aim to create a seamless marketplace where efficiency, transparency, and innovation drive smarter real estate decisions for businesses worldwide.
        </p>
      </div>
      <img
        src="/vision.png"
        alt="Vision Icon"
        className="w-40 h-32 md:w-[265px] md:h-[300px] order-1 md:order-2"
      />
    </div>

  </div>
</section>






{/* Testimonials Section */}
<section className="py-20 bg-gray-50 flex flex-col items-center">
  <h2 className="text-[20px] md:text-[57px] font-medium text-[#1D3F3F] font-yeseva text-center mb-1">
    What Our Users Say
  </h2>
  <p className="text-xs text-[#1D3F3F] text-center max-w-2xl mb-8  md:text-lg font-aeonik">
    See how others have successfully rented, leased, shared, and listed <br /> 
    warehouse spaces with us!
  </p>

  {/* Testimonials Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-0 justify-items-center">
{/* Testimonial 1 */}
<div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 
  lg:h-[334px] lg:w-[320px]  
  h-[210px] w-[290px] flex flex-col justify-between mx-auto md:mx-5">
  
  <h3 className="text-sm md:text-lg text-[#1D3F3FDE] font-semibold mb-1 md:mb-2 text-start">
    Swift Logistics
  </h3>

  <p className="text-xs md:text-base text-[#627777] text-start leading-tight">
    Finding a warehouse space that met our storage needs used to be a challenge, 
    but this platform made it seamless. The process was fast, and the support 
    team was incredibly helpful!
  </p>

  <div className="flex items-center mt-4 sm:mt-6 gap-2 md:gap-5">
    <img src="/Gbenga.jpeg" alt="" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" />
    <div className="flex flex-col">
      <p className="text-xs md:text-sm font-semibold">Gbenga Osuntokun</p>
      <p className="text-[10px] sm:text-xs text-gray-500">Operation Manager</p>
    </div>
  </div>
</div>



    {/* Testimonial 2 */}
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 lg:h-[334px] lg:w-[320px] h-[210px] w-[290px] flex flex-col justify-between mx-auto md:mx-5">
      <h3 className="text-sm md:text-lg text-[#1D3F3FDE] font-semibold mb-1 md:mb-2 text-start">GreenMart</h3>
      <p className="text-xs md:text-base text-[#627777] text-start leading-tight">
      Listing my extra warehouse space was effortless. Within days, I found a reliable tenant, and the entire transaction was smooth. Highly recommend!
      </p>
      <div className="flex items-center mt-4 md:mt-6 gap-2 md:gap-5">
        <img src="/Philip.jpeg" alt="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <p className="font-semibold">Philip Namibe</p>
          <p className="text-sm text-gray-500">Business Owner</p>
        </div>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 lg:h-[334px] lg:w-[320px] h-[210px] w-[290px] flex flex-col justify-between mx-auto md:mx-5">
      <h3 className="text-sm md:text-lg text-[#1D3F3FDE] font-semibold mb-1 md:mb-2 text-start">FastTrack Distributions</h3>
      <p className="text-xs md:text-base text-[#627777] text-start leading-tight">
      We needed a short-term warehouse solution, and this platform connected us with the perfect space. The transparency and ease of use exceeded our expectations!
      </p>
      <div className="flex items-center mt-4 md:mt-6 gap-2 md:gap-5">
        <img src="/Adebayo.jpeg" alt="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <p className="font-semibold">Adebayo Akinyemi</p>
          <p className="text-sm text-gray-500">Supply Chain Director</p>
        </div>
      </div>
    </div>

    {/* Testimonial 4 */}
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 lg:h-[334px] lg:w-[320px] h-[210px] w-[290px] flex flex-col justify-between mx-auto md:mx-5">
      <h3 className="text-sm md:text-lg text-[#1D3F3FDE] font-semibold mb-1 md:mb-2 text-start">PrimeWarehousing</h3>
      <p className="text-xs md:text-base text-[#627777] text-start leading-tight">
      This service has been a game-changer for our leasing business. The platform attracts serious clients, and the user experience is top-notch!
      </p>
      <div className="flex items-center mt-4 md:mt-6 gap-2 md:gap-5">
        <img src="/Sofia.jpeg" alt="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <p className="font-semibold">Sophia Rachel</p>
          <p className="text-sm text-gray-500">Real Estate Manager</p>
        </div>
      </div>
    </div>
  </div>
</section>



      <section className="py-20 px-4 sm:px-12 lg:px-36">
               {/* Section Title */}
                <h2 className="text-base md:text-[57px] font-normal font-yeseva text-[#1D3F3F] text-center mb-2">Our People</h2>
                <p className="text-center text-[#1D3F3F] text-lg font-yeseva font-normal mt-8">
                 The People Behind Warebase:  Passionate <br /> Experts, Real Solutions.
                 </p>

                 {/* Grid of Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                    {/* Team Member 1 */}
                  <div className="flex flex-col items-center bg-white shadow-md rounded-[4px]   overflow-hidden">
                   <img src="/Gbenga.jpeg" alt="Chidi Okafor" className="w-full md:h-[208px]" />
                    <div className="p-3 text-start">
                      <h3 className="md:text-xl font-normal font-yeseva text-[#1D3F3FDE]">Chidi Okafor</h3>
                      <p className="text-base font-normal font-aeonik text-[#1D3F3F75]">Chief Executive Officer (CEO)</p>
                    </div>
                  </div>

                        {/* Team Member 2 */}
                  <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
                       <img src="/amina.jpg" alt="Amina Balogun" className="w-full md:h-[208px]" />
                    <div className="p-4 text-start">
                      <h3 className="md:text-xl font-normal font-yeseva text-[#1D3F3FDE]">Amina Balogun</h3>
                      <p className="text-base font-normal font-aeonik text-[#1D3F3F75]">Head of Real Estate & Property Listings</p>
                    </div>
                  </div>

              {/* Team Member 3 */}
                <div className="flex flex-col shadow-md rounded-lg bg-white overflow-hidden text-center">
                            <img src="/tunde.jpg" alt="" className="w-full md:h-[208px]" />
                            <div className="p-4 text-start">
                              <h2 className="md:text-xl font-normal font-yeseva text-[#1D3F3FDE]">Tunde Adeyemi</h2>
                              <p className="text-base font-normal font-aeonik text-[#1D3F3F75]">Surveyor</p>
                            </div>
                          </div>


                      {/* Team Member 4 */}
                <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="/kemi.jpg" alt="Kemi Oluwole" className="w-full md:h-[208px]" />
                    <div className="p-3 text-start">
                    <h3 className="md:text-xl font-normal font-yeseva text-[#1D3F3FDE]">Kemi Oluwole</h3>
                    <p className="text-base font-normal font-aeonik text-[#1D3F3F75]">Customer Success Manager</p>
              </div>
             </div>
          </div>
        </section>



        <section className="flex flex-col items-center w-full max-w-screen-lg mx-auto mt-14">
  <h2 className="text-xl md:text-5xl font-medium font-yeseva text-center mb-4 text-[#1D3F3F]">Our Services</h2>
  <p className="text-center text-[#1D3F3F] max-w-xs md:max-w-md font-aeonik font-normal text-lg mb-6">
    Browse through our services gallery and choose one or more that align with your needs.
  </p>

  {/* Services Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
    {/* Need Warehouse Space */}
    <div className="bg-white shadow-lg rounded-lg border flex flex-col items-stretch w-[300px] md:w-[392px] min-h-[150px] md:min-h-[334px]">
  <div className="relative">
    <img src="/service.jpeg" alt="" className="w-full h-16 object-cover rounded-t-lg" />
    <h3 className="absolute inset-x-0 top-4 left-0 text-lg font-semibold text-center text-black px-2">
      <span className="text-[#00E5FF]">Need</span> warehouse space
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
    <img src="/need 2.jpg" alt="" className="w-full h-16 object-cover rounded-t-lg" />
    <h3 className="absolute inset-x-0 top-4 left-0 text-lg font-semibold text-center text-black px-2">
      <span className="text-[#00E5FF]">Have</span> warehouse space
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


      {/* Footer */}
      <Footer />
    </div>
  );
}


