import React from "react";
import {Routes, Route}  from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WarehouseFormModal from "./components/WarehouseFormModal"
import ScrollToTop from "./components/ScrollToTop";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Listing from "./Pages/Listing";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import './index.css';
import PropertyDetails from "./components/PropertyDetails";
import Login from "./AdminLogin/Login"
import EmailReset from "./AdminLogin/EmailReset";
import CheckMail from "./AdminLogin/CheckMail";
import PasswordReset from "./AdminLogin/PasswordReset";
import PasswordSuccessful from "./AdminLogin/PasswordSucessful";
import EmailTemplate from "./AdminLogin/EmailTemplate";
import BlogDetails from "./components/BlogDetails";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {/* <Navbar /> */}
      <main className="flex-grow">

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/PropertyDetails/:id" element={<PropertyDetails />} /> 
          <Route path="/Login" element={<Login />} /> 
          <Route path="/EmailReset" element={<EmailReset />} /> 
          <Route path="/CheckMail" element={<CheckMail />} /> 
          <Route path="/PasswordReset" element={<PasswordReset />} /> 
          <Route path="/PasswordSuccessful" element={<PasswordSuccessful />} />
          <Route path="/EmailTemplate" element={<EmailTemplate />} />
          <Route path="/blogdetails" element={<BlogDetails />} />

        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default App;

