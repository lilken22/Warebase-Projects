import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WarehouseFormModal from "./components/WarehouseFormModal"
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Listing from "./Pages/Listing";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import './index.css';
import PropertyDetails from "./components/PropertyDetails";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/PropertyDetails/:id" element={<PropertyDetails />} /> 
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
