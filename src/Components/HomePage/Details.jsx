export default function Details() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-[#304F47] rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <div className="mb-4">
            <img
              src="/Vector.png"
              alt="Map icon"
              className="h-16 w-16 object-cover"
            />
          </div>
          <div className="p-4">
            <a
              href="#"
              className="block text-lg leading-tight font-medium text-white hover:underline"
            >
              100+ tours around Rwanda
            </a>
          </div>
        </div>

        <div className="bg-[#304F47] rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <div className="mb-4">
            <img
              src="/CheckCircleOutlined.png"
              alt="Check icon"
              className="h-16 w-16 object-cover"
            />
          </div>
          <div className="p-4">
            <a
              href="#"
              className="block text-lg leading-tight font-medium text-white hover:underline"
            >
              100% Trusted travel agency
            </a>
          </div>
        </div>

        <div className="bg-[#304F47] rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <div className="mb-4">
            <img
              src="/profileicon.png"
              alt="Profile icon"
              className="h-16 w-16 object-cover"
            />
          </div>
          <div className="p-4">
            <a
              href="#"
              className="block text-lg leading-tight font-medium text-white hover:underline"
            >
              10 years of travel experience
            </a>
          </div>
        </div>

        <div className="bg-[#304F47] rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <div className="mb-4">
            <img
              src="/like.png"
              alt="Like icon"
              className="h-16 w-16 object-cover"
            />
          </div>
          <div className="p-4">
            <a
              href="#"
              className="block text-lg leading-tight font-medium text-white hover:underline"
            >
              90% of travelors are happy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
