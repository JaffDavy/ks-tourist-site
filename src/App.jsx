import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import tourPackage from "./pages/tourPackage";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/home" Component={HomePage} />
      <Route path="/about-us" Component={AboutUs} />
      <Route path="/tour-package" Component={tourPackage} />
      <Route path="/gallery" Component={Gallery} />
      <Route path="/contact-us" Component={ContactUs} />
    </Routes>
  );
}

export default App;
