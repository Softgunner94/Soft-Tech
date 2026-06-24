import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteNavbar from "./components/SiteNavbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>


      <SiteNavbar />


      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/contact"          element={<ContactPage />} />
        <Route path="/portfolio"          element={<PortfolioPage />} />
        <Route path="/about"          element={<AboutPage />} />
        
      </Routes>

      <Footer />


    </BrowserRouter>
  );
}
