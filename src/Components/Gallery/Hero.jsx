import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[60vh] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/heroic.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold">
            Gallery
          </h1>

          <div className="flex flex-row items-center gap-4 md:gap-10 mt-4">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl">Home</h2>

            <div className="flex flex-row items-center gap-2">
              <img
                src="/yellowarrow.png"
                alt=""
                className="w-4 h-auto md:w-6"
              />

              <h2 className="text-[#c7923E] text-lg md:text-xl lg:text-2xl">
                Gallery
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
