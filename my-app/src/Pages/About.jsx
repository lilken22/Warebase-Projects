import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif flex flex-col">
      {/* Navbar */}
      <Navbar />

      <section className="py-16 px-6 sm:px-12 lg:px-36 text-center mt-6">
  <h2 className="text-3xl font-bold">About Us</h2>
  <p className="text-md text-gray-600 mt-2 max-w-3xl mx-auto">
    We make it easy for organisations to find warehouses and industrial spaces that meet their exact needs either for the long-term or short-term.
  </p>

  {/* Mission & Vision Section */}
  <div className="mt-12 flex flex-col gap-12 lg:gap-20 items-center">

    {/* Our Mission (Responsive Order Change) */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:text-left">
      <div className="max-w-md order-2 md:order-1"> 
        <h3 className="text-2xl font-semibold text-left">Our Mission</h3>
        <p className="text-gray-600 mt-2 max-w-lg text-left">
          At Warebase, our mission is to connect businesses with the perfect warehouse spaces by providing a seamless, efficient, and data-driven property listing platform. We strive to simplify warehouse leasing and sales by offering a user-friendly experience, comprehensive listings, and valuable insights that empower businesses to make informed decisions.
        </p>
      </div>
      <img
        src="/mission.png" 
        alt="Mission Icon"
        className="w-40 h-32 md:w-40 md:h-40 order-1 md:order-2"
      />
    </div>

    {/* Our Vision (Responsive Order Change) */}
    <div className="flex flex-col md:flex-row items-center gap-6 md:text-left">
      <div className="max-w-md order-2 md:order-1"> 
        <h3 className="text-2xl font-semibold text-left">Our Vision</h3>
        <p className="text-gray-600 mt-2 max-w-lg text-left">
          Warebase envisions becoming the leading platform for warehouse property listings, revolutionizing the way businesses discover, lease, and manage industrial spaces. We aim to create a seamless marketplace where efficiency, transparency, and innovation drive smarter real estate decisions for businesses worldwide.
        </p>
      </div>
      <img
        src="/vision.png"
        alt="Vision Icon"
        className="w-40 h-32 md:w-40 md:h-40 order-1 md:order-2"
      />
    </div>

  </div>
</section>






    {/* Testimonials Section */}
<section className="py-20 bg-gray-50 flex flex-col items-center px-4 sm:px-8 lg:px-0">
  <h2 className="text-3xl font-bold text-center mb-4">What Our Users Say</h2>
  <p className="text-gray-600 text-center max-w-2xl mb-8">
    See how others have successfully rented, leased, shared, and listed warehouse spaces with us!
  </p>

  {/* Testimonials Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

    {/* Testimonial 1 */}
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold mb-2 text-left">Swift Logistics</h3>
      <p className="text-gray-600 mb-4 text-sm text-left">
        Finding a warehouse space that meets our storage needs was a challenge. The process was fast, and the support team was very helpful.
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
      <h3 className="text-xl font-semibold mb-2 text-left">GreenMart</h3>
      <p className="text-gray-600 mb-4 text-sm text-left">
        Listing my entire warehouse space was effortless. Within days, I found a suitable tenant. Highly recommend!
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
      <h3 className="text-xl font-semibold mb-2 text-left">FastTrack Distributions</h3>
      <p className="text-gray-600 mb-4 text-sm text-left">
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
      <h3 className="text-xl font-semibold mb-2 text-left">PrimeWarehousing</h3>
      <p className="text-gray-600 mb-4 text-sm text-left">
        This service has been a game-changer for our business. The platform attracts unique clients, and its user experience is top-notch!
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



      <section className="py-20 px-4 sm:px-12 lg:px-36">
               {/* Section Title */}
                <h2 className="text-3xl font-bold text-center mb-2">Our People</h2>
                <p className="text-center text-gray-600 mb-8">
                 The People Behind Warebase: <br /> Passionate Experts, Real Solutions.
                 </p>

                 {/* Grid of Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Team Member 1 */}
                  <div className="flex flex-col items-center bg-white shadow-md rounded-lg   overflow-hidden">
                   <img src="/Gbenga.jpeg" alt="Chidi Okafor" className="w-full h-36 object-fill" />
                    <div className="p-3 text-start">
                      <h3 className="text-lg font-bold text-gray-800">Chidi Okafor</h3>
                      <p className="text-xs text-gray-500">Chief Executive Officer (CEO)</p>
                    </div>
                  </div>

                        {/* Team Member 2 */}
                  <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
                       <img src="/amina.jpg" alt="Amina Balogun" className="w-full h-36 object-fill" />
                    <div className="p-3 text-start">
                      <h3 className="text-lg font-bold text-gray-800">Amina Balogun</h3>
                      <p className="text-xs text-gray-500">Head of Real Estate & Property Listings</p>
                    </div>
                  </div>

              {/* Team Member 3 */}
                <div className="flex flex-col shadow-md rounded-lg bg-white overflow-hidden text-center">
                            <img src="/tunde.jpg" alt="" className="w-full h-36 object-fill" />
                            <div className="p-3 text-start">
                              <h2 className="text-lg font-bold text-gray-800 font-Yeseva One">Tunde Adeyemi</h2>
                              <p className="text-sm  text-gray-500 ">Surveyor</p>
                            </div>
                          </div>


                      {/* Team Member 4 */}
                <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="/kemi.jpg" alt="Kemi Oluwole" className="w-full h-36 object-fill" />
                    <div className="p-3 text-start">
                    <h3 className="text-lg font-bold text-gray-800">Kemi Oluwole</h3>
                    <p className="text-sm text-gray-500">Customer Success Manager</p>
              </div>
             </div>
          </div>
        </section>



      <section className="py-20 px-4 sm:px-12 lg:px-36 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
      <p className="text-lg text-center mb-12 text-gray-600">
        Browse through our services gallery and choose one or more that aligns with your needs.
      </p>

      {/* Service Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-xs sm:max-w-md md:max-w-lg mx-auto justify-center">
  
  {/* Need Warehouse Space */}
  <div className="bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col items-center w-11/12 sm:w-full">
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
      <button className="mt-3 bg-black text-white py-1.5 px-4 rounded-full text-sm font-semibold w-full">
        Enquire now
      </button>
    </div>
  </div>

  {/* Have Warehouse Space */}
  <div className="bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col items-center w-11/12 sm:w-full">
    <div className="relative w-full">
      <img 
        src="/service.jpeg" 
        alt="" 
        className="w-full h-12 object-cover" 
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
      <button className="mt-3 bg-black text-white py-1.5 px-4 rounded-full text-sm font-semibold w-full">
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


