import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";
import NotFound from "./Pages/NotFound";
import Ecommerce from "./Pages/Ecommerce";
import EcommerceSingle from "./Pages/EcommerceSingle";
import Faq from "./Pages/Faq";
import FindProperty from "./Pages/FindProperty";
import Login from "./Pages/Login";
import SignUP from "./Pages/SignUP";
import Properties from "./Pages/Properties";
import PropertiesSingle from "./Pages/PropertiesSingle";
import SearchResults from "./Pages/SearchResults";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile";
import OwnerProfile from "./Pages/OwnerProfile";
import UploadProperty from "./Pages/UploadProperty";
import ManagePayments from "./Pages/ManagePayments";
import ManageBooking from "./Pages/ManageBooking";
import ManageRequest from "./Pages/ManageRequest";
import MyBookings from "./Pages/MyBookings";
import Booking from "./Pages/Booking";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/ecommerce-single" element={<EcommerceSingle />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties-single" element={<PropertiesSingle />} />
          <Route path="/find-property" element={<FindProperty />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/owner_profile" element={<OwnerProfile />} />
          <Route path="/upload_property" element={<UploadProperty />} />
          <Route path="/manage_payments" element={<ManagePayments />} />
          <Route path="/manage_booking" element={<ManageBooking />} />
          <Route path="/manage_request" element={<ManageRequest />} />
          <Route path="/my_bookings" element={<MyBookings />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
