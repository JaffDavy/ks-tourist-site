import React from "react";
import Header from "../Components/HomePage/Header.jsx";
import Hero from "../Components/TourPackage/Hero.jsx";
import Packages from "../Components/HomePage/Packages.jsx";
import Footer from "../Components/HomePage/Footer.jsx";

export default function tourPackage() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="text-center mt-20 mb-20 flex flex-col gap-5 pt-[150px] md:pt-[10px]">
        <h3 className="text-[#d19a28] text-3xl">Choose Your Package</h3>
        <h1 className="text-6xl">
          Select your Best Package <br /> for your Travel
        </h1>
      </div>
      <Packages />
      <Packages />
      <Packages />
      <Packages />
      <div className="flex flex-row justify-between gap-10 mb-20 px-45">
        <div className="border border-[#d19a28] rounded-lg p-4 cursor-pointer">
          <img src="/arrow-left.png" alt="arrow left" />
        </div>
        <div className="border border-[#d19a28] rounded-lg p-4 cursor-pointer bg-[#d19a28]">
          <img src="/arrow-right.png" alt="arrow-left" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
