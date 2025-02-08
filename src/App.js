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
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>

      {/* <Contact />

      <Notfound />
      <Ecommerce />
      <Blog />
      <Login />
      <Blogsingle />
      <SignUp />
      <Properties />
      <PropertiesSingle />
      <AgentSingle />
      <Ecommercesingle />
      <Faq />
      <FindProperty />
      <SearchResult />
      <Timeline />
      <Commingsoon /> */}
    </>
  );
}

export default App;
