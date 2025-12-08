export default function Packages() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
          <div>
            <img
              src="/geraff.jpg"
              alt="A picture of a giraffe in Akagera National Park"
              className="h-56 w-full object-cover"
            />
          </div>

          <div className="p-6">
            <a
              href="#"
              className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
            >
              Akagera National Park
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              Visitors to Akagera National Park can take part in a range of
              activities, including game drives, boat safaris, bird watching,
              and nature walks.
            </p>

            <div className="mt-4">
              <button className="bg-[#d19a28] text-white font-bold py-2 px-4 rounded hover:bg-[#c7923E] transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
          <div>
            <img
              src="/lake-view.jpg"
              alt="A scenic lake view"
              className="h-56 w-full object-cover"
            />
          </div>

          <div className="p-6">
            <a
              href="#"
              className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
            >
              Bisoke Hike
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              The Bisoke hike is a popular mountain trek in Rwanda, located in
              the Volcanoes National Park. It is one of the most challenging
              hikes in the park.
            </p>

            <div className="mt-4">
              <button className="bg-[#d19a28] text-white font-bold py-2 px-4 rounded hover:bg-[#c7923E] transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
          <div>
            <img
              src="/li-ship.jpg"
              alt="A ship on a lake"
              className="h-56 w-full object-cover"
            />
          </div>

          <div className="p-6">
            <a
              href="#"
              className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
            >
              Lake Kivu trip
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              A trip to Lake Kivu can be a truly unique and memorable
              experience.
            </p>

            <div className="mt-4">
              <button className="bg-[#d19a28] text-white font-bold py-2 px-4 rounded hover:bg-[#c7923E] transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
