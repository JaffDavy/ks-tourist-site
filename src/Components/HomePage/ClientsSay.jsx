export default function ClientsSay() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-6">
          <div className="flex justify-center mb-4">
            <img
              src="/profile.png"
              alt="A picture of a client"
              className="h-32 w-32 object-cover border-4 border-[#304F47] rounded-full p-1"
            />
          </div>

          <div className="p-4 text-center">
            <a
              href="#"
              className="block text-lg leading-tight font-medium text-black hover:underline"
            >
              Emma Waston
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              I recently went on a tour with XYZ Tourism Company and was
              extremely impressed with the level of professionalism and
              organization.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-6">
          <div className="flex justify-center mb-4">
            <img
              src="/profile.png"
              alt="A picture of a client"
              className="h-32 w-32 object-cover border-4 border-[#304F47] rounded-full p-1"
            />
          </div>

          <div className="p-4 text-center">
            <a
              href="#"
              className="block text-lg leading-tight font-medium text-black hover:underline"
            >
              Emma Waston
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              I recently went on a tour with XYZ Tourism Company and was
              extremely impressed with the level of professionalism and
              organization.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-6">
          <div className="flex justify-center mb-4">
            <img
              src="/profile.png"
              alt="A picture of a client"
              className="h-32 w-32 object-cover border-4 border-[#304F47] rounded-full p-1"
            />
          </div>

          <div className="p-4 text-center">
            <a
              href="#"
              className="block text-lg leading-tight font-medium text-black hover:underline"
            >
              Emma Waston
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              I recently went on a tour with XYZ Tourism Company and was
              extremely impressed with the level of professionalism and
              organization.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        <div className="bg-[#d19a28] h-2 w-10 rounded-full"></div>
        <div className="bg-[#304F47] h-2 w-10 rounded-full opacity-50"></div>
        <div className="bg-[#304F47] h-2 w-10 rounded-full opacity-50"></div>
      </div>
    </div>
  );
}
