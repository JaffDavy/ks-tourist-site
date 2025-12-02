export default function ClientsSay() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-20 mb-20">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[90%] w-[90%] flex flex-col items-center p-6">
          <div class="md:shrink-0">
            <img
              src="/profile.png"
              alt="a picture of a giraffe"
              className="h-48 w-full object-cover self-center md:h-30 md:w-30 border-7 border-[#304F47] rounded-full p-1"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center"
            >
              Emma Waston
            </a>
            <p className="mt-2 text-gray-500">
              I recently went on a tour with XYZ Tourism Company and was
              extremely impressed with the level of professionalism and
              organization.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[90%] w-[90%] flex flex-col items-center p-6">
          <div class="md:shrink-0">
            <img
              src="/profile.png"
              alt="a picture of a giraffe"
              className="h-48 w-full object-cover self-center md:h-30 md:w-30 border-7 border-[#304F47] rounded-full p-1"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center"
            >
              Emma Waston
            </a>
            <p className="mt-2 text-gray-500">
              I recently went on a tour with XYZ Tourism Company and was
              extremely impressed with the level of professionalism and
              organization.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[90%] w-[90%] flex flex-col items-center p-6">
          <div class="md:shrink-0">
            <img
              src="/profile.png"
              alt="a picture of a giraffe"
              className="h-48 w-full object-cover self-center md:h-30 md:w-30 border-7 border-[#304F47] rounded-full p-1"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center"
            >
              Emma Waston
            </a>
            <p className="mt-2 text-gray-500">
              I recently went on a tour with XYZ Tourism Company and was
              extremely impressed with the level of professionalism and
              organization.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mb-20">
        <div className="bg-[#d19a28] p-1 w-[4%]"></div>
        <div className="bg-[#304F47] p-1 w-[4%]"></div>
        <div className="bg-[#304F47] p-1 w-[4%]"></div>
      </div>
    </div>
  );
}
