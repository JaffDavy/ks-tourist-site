import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[75vh] relative overflow-visible">
      <div className="absolute inset-0 bg-[url('/heroic.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 flex flex-col justify-between py-10 px-10">
          <div className="flex flex-col gap-5 p-20">
            <h1 className="text-white text-7xl font-bold leading-tight">
              Experience the beauty
              <br />
              of Rwanda with us
            </h1>
            <p className="text-white text-2xl">
              Discover the Land of a Thousand Hills
            </p>
          </div>

          <div className="flex flex-row justify-between px-10 mt-5">
            <img
              className="w-20 h-20 cursor-pointer"
              src="/arrow-left.svg"
              alt="left arrow"
            />
            <img
              className="w-20 h-20 cursor-pointer"
              src="/arrow-right.svg"
              alt="right arrow"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                   w-[70%] bg-[#304F47] backdrop-blur-md rounded-lg shadow-lg py-4 px-6 
                   flex justify-around gap-4 z-10"
      >
        <input
          type="text"
          placeholder="Search activities or Destinations"
          className="w-150 bg-white p-3 rounded-lg border border-gray-300 flex-grow"
        />

        <div className="flex flex-col text-white">
          <label className="text-sm text-[#808796] font-semibold">Guests</label>
          <select className="bg-transparent border-none">
            <option>2 Adults</option>
            <option>1 Adult</option>
            <option>3 Adults</option>
          </select>
        </div>

        <div className="flex flex-col text-white">
          <label className="text-sm font-semibold text-[#808796]">Date</label>
          <select className="bg-transparent border-none">
            <option>12 - 13 April 2021</option>
            <option>20 - 21 May 2021</option>
          </select>
        </div>

        <div className="flex flex-col text-white">
          <label className="text-sm font-semibold text-[#808796]">
            Package
          </label>
          <select className="bg-transparent border-none">
            <option>All</option>
            <option>Premium</option>
            <option>Basic</option>
          </select>
        </div>

        <button className="bg-[#d19a28] text-white font-semibold px-6 py-3 rounded-lg">
          Book Now
        </button>
      </div>
    </div>
  );
}
