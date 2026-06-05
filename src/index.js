import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TopBar from "./compont/Topbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./compont/Home";
import About from "./compont/About";
import Skills from "./compont/Skills";
import Services from "./compont/Services";
import Projects from "./compont/Projects";
import Certifications from "./compont/Certifications";
import DSA from "./compont/DSA";
import Contact from "./compont/Contact";
import Footer from "./compont/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <TopBar />
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/services" element={<Services />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/certifications" element={<Certifications />} />
  <Route path="/dsa" element={<DSA />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
< Footer />
    </BrowserRouter>
  </React.StrictMode>
);