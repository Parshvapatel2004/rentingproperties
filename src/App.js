import logo from "./logo.svg";
import "./App.css";
import Header from "./Common/Header";
import Home from "./Pages/Home";
import Slider from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Notfound from "./Pages/Notfound";
import Ecommerce from "./Pages/Ecommerce";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Properties from "./Pages/Properties";
import PropertiesSingle from "./Pages/PropertiesSingle";
import Ecommercesingle from "./Pages/Ecommercedsingle";
import Faq from "./Pages/Faq";
import OwnerProfile from "./Pages/OwnerProfile";
import FindProperty from "./Pages/FindProperty";
import SearchResult from "./Pages/SearchResult";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ownerprofile" element={<OwnerProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/ecommercesingle" element={<Ecommercesingle />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/propertiessingle" element={<PropertiesSingle />} />
          <Route path="/find-property" element={<FindProperty />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
