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
          <Route path="/ownerprofile" element={<OwnerProfile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
