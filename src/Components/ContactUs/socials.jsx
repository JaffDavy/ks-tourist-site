export default function Socials() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-4 md:px-10 lg:px-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col border border-gray-300 h-40">
          <div className="p-2">
            <a
              href="#"
              className="block text-2xl leading-tight font-medium text-[#304F47] hover:underline"
            >
              Social Media
            </a>
          </div>
          <div className="mb-4">
            <img
              src="/socialicons.png"
              alt="Map icon"
              className="h-16 object-fit"
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col border border-gray-300 h-40">
          <div className="p-2">
            <a
              href="#"
              className="block text-2xl leading-tight font-medium text-[#304F47] hover:underline"
            >
              Email & Phone
            </a>
          </div>
          <div className="mb-4">
            <div className="flex flex-row items-center gap-4">
              <img src="/phoneicon.png" alt="" />
              <p className="text-[#304F47]">+250 784 688 641</p>
            </div>
            <div className="flex flex-row items-center gap-4 mt-4">
              <img src="/mailicon.png" alt="" />
              <p className="text-[#304F47]">bbonteemma@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col border border-gray-300 h-40">
          <div className="p-2">
            <a
              href="#"
              className="block text-2xl leading-tight font-medium text-[#304F47] hover:underline"
            >
              Location
            </a>
          </div>
          <div className="mb-4 text-[#304F47]">
            <p>kk 600 st</p>
            <p>Kigali, Rwanda</p>
          </div>
        </div>
      </div>
    </div>
  );
}
