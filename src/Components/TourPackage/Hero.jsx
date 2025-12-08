import React from "react";

export default function Hero() {
  return (
    <div className=" w-full h-[60vh] relative overflow-visible">
      <div className="absolute inset-0 bg-[url('/heroic.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col justify-center my-50 self-center items-center ">
          <h1 className="text-white text-8xl">Tour Package</h1>
          <div className="flex flex-row items-center gap-10 mt-4">
            <h2 className="text-white text-4xl">Home</h2>
            <div className="flex flex-row items-center gap-2">
              <img src="/yellowarrow.png" alt="" />
              <h2 className="text-[#c7923E] text-4xl">Tour Package</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
