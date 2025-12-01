export default function Packages() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-20 self-center mb-20">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[90%]">
          <div class="md:shrink-0">
            <img
              src="/geraff.jpg"
              alt="a picture of a giraffe"
              className="h-48 w-full object-cover md:h-100 md:w-full"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Akagera National Park
            </a>
            <p className="mt-2 text-gray-500">
              Visitors to Akagera National Park can take part in a range of
              activities, including game drives, boat safaris, bird watching,
              and nature walks.
            </p>

            <div class="mt-4">
              <button className="bg-[#d19a28] text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[90%]">
          <div class="md:shrink-0">
            <img
              src="/lake-view.jpg"
              alt="a picture of a giraffe"
              className="h-48 w-full object-cover md:h-100 md:w-full"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Bisoke Hike
            </a>
            <p className="mt-2 text-gray-500">
              The Bisoke hike is a popular mountain trek in Rwanda, located in
              the Volcanoes National Park. It is one of the most challenging
              hikes in the park.
            </p>

            <div class="mt-4">
              <button className="bg-[#d19a28] text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[90%]">
          <div class="md:shrink-0">
            <img
              src="/li-ship.jpg"
              alt="a picture of a giraffe"
              className="h-48 w-full object-cover md:h-100 md:w-full"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Lake Kivu trip
            </a>
            <p className="mt-2 text-gray-500">
              A trip to Lake Kivu can be a truly unique and memorable
              experience.
            </p>

            <div class="mt-4">
              <button className="bg-[#d19a28] text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
