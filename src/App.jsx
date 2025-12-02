import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/home" Component={HomePage} />
      <Route path="/about-us" Component={AboutUs} />
    </Routes>
  );
}

export default App;
