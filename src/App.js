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
import ManageProperty from "./Pages/ManageProperty";

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
          <Route path="/ecommerce_single" element={<EcommerceSingle />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties_single" element={<PropertiesSingle />} />
          <Route path="/find_property" element={<FindProperty />} />
          <Route path="/search_results" element={<SearchResults />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/owner_profile" element={<OwnerProfile />} />
          <Route path="/upload_property" element={<UploadProperty />} />
          <Route path="/view_payments" element={<ManagePayments />} />
          <Route path="/manage_booking" element={<ManageBooking />} />
          <Route path="/manage_request" element={<ManageRequest />} />
          <Route path="/my_bookings" element={<MyBookings />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/manage_property" element={<ManageProperty />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
