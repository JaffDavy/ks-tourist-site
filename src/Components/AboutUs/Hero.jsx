export default function Hero() {
  return (
    <section className="w-full relative bg-white min-h-[75vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="flex flex-col justify-center px-6 lg:px-20 py-10 lg:py-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            We are dedicated to <br />
            providing the best <br />
            travel experience.
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Discover the Land of a Thousand Hills
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-between bg-white p-6 md:p-7 rounded-lg shadow-xl lg:w-[120%] relative lg:left-5 z-10">
            <div className="flex flex-col w-full sm:w-auto">
              <label className="text-sm text-[#808796] font-semibold">
                Guests
              </label>
              <select className="bg-transparent border-b border-gray-300 text-black py-2 focus:outline-none focus:border-blue-500">
                <option>2 Adults</option>
                <option>1 Adult</option>
                <option>3 Adults</option>
              </select>
            </div>

            <div className="flex flex-col w-full sm:w-auto">
              <label className="text-sm font-semibold text-[#808796]">
                Date
              </label>
              <select className="bg-transparent border-b border-gray-300 text-black py-2 focus:outline-none focus:border-blue-500">
                <option>12 - 13 April 2021</option>
                <option>20 - 21 May 2021</option>
              </select>
            </div>

            <div className="flex flex-col w-full sm:w-auto">
              <label className="text-sm font-semibold text-[#808796]">
                Package
              </label>
              <select className="bg-transparent border-b border-gray-300 text-black py-2 focus:outline-none focus:border-blue-500">
                <option>All</option>
                <option>Premium</option>
                <option>Basic</option>
              </select>
            </div>

            <button className="bg-[#304F47] text-white font-semibold px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-[#4a6b63] transition duration-300">
              Book Now
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <img
            src="/about-hero.jpg"
            className="w-full h-full object-cover"
            alt="Tour"
          />
        </div>
      </div>
    </section>
  );
}
