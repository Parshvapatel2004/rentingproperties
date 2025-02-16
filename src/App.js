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
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
import Blogsingle from "./Pages/Blogsingle";
import SignUp from "./Pages/SignUp";
import Properties from "./Pages/Properties";
import PropertiesSingle from "./Pages/PropertiesSingle";
import AgentSingle from "./Pages/AgentSingle";
import Ecommercesingle from "./Pages/Ecommercedsingle";
import Faq from "./Pages/Faq";
import FindProperty from "./Pages/FindProperty";
import SearchResult from "./Pages/SearchResult";
import Timeline from "./Pages/Timeline";
import Commingsoon from "./Pages/Commingsoon";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/ecommercesingle" element={<Ecommercesingle />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/propertiessingle" element={<PropertiesSingle />} />
          <Route path="/findproperty" element={<FindProperty />} />
          <Route path="/agentsingle" element={<AgentSingle />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/comingsoon" element={<Commingsoon />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogsingle" element={<Blogsingle />} />
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
