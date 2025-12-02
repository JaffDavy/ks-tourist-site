export default function Details() {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 px-20 self-center mb-20">
        <div className="bg-[#304F47] rounded-4xl shadow-lg overflow-hidden h-[80%] w-[70%] flex flex-col items-center p-3">
          <div class="md:shrink-0">
            <img
              src="/Vector.png"
              alt="a picture of a giraffe"
              className="h-24 w-24 object-cover md:h-10 self-center md:w-10"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-white hover:underline text-center"
            >
              100+ tours around Rwanda
            </a>
          </div>
        </div>
        <div className="bg-[#304F47] rounded-4xl shadow-lg overflow-hidden h-[80%] w-[70%] flex flex-col items-center p-3">
          <div class="md:shrink-0">
            <img
              src="/CheckCircleOutlined.png"
              alt="a picture of a giraffe"
              className="h-24 w-24 object-cover md:h-10 self-center md:w-10"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-white hover:underline text-center"
            >
              100% Trusted travel agency
            </a>
          </div>
        </div>
        <div className="bg-[#304F47] rounded-4xl shadow-lg overflow-hidden h-[80%] w-[70%] flex flex-col items-center p-3">
          <div class="md:shrink-0">
            <img
              src="/profileicon.png"
              alt="a picture of a giraffe"
              className="h-24 w-24 object-cover md:h-10 self-center md:w-10"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-white hover:underline text-center"
            >
              10 years of travel experience
            </a>
          </div>
        </div>
        <div className="bg-[#304F47] rounded-4xl shadow-lg overflow-hidden h-[80%] w-[70%] flex flex-col items-center p-3">
          <div class="md:shrink-0">
            <img
              src="/like.png"
              alt="a picture of a giraffe"
              className="h-24 w-24 object-cover md:h-10 self-center md:w-10"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-white hover:underline text-center"
            >
              90% of travelors are happy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
