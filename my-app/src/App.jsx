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
import DashBoard from "./AdminDashboard/DashBoard";
import Overview from "./AdminDashboard/Overview";
import Blogs from "./AdminDashboard/Blogs";
import Portfolio from "./AdminDashboard/Portfolio";
import AddProperty from "./AdminDashboard/AddProperty"; 
import Settings from "./AdminDashboard/Settings";
import Logout from "./AdminDashboard/Logout";
import DesciptionProperty from "./AdminDashboard/DesciptionProperty";



const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {/* <Navbar /> */}
      <main className="flex-grow">

        <Routes>
           {/* Public Routes */}
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

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashBoard />} />
            {/* <Route index element={<Overview />} /> */}
            <Route path="/overview" element={<Overview/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/desciption-property" element={<DesciptionProperty />} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/logout" element={<Logout/>} />
          {/* </Route> */}
        </Routes>

        
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default App;

