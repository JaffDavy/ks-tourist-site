export default function Popular() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="bg-white overflow-hidden">
          <div className="mb-4">
            <img
              src="/citty-view.jpg"
              alt="A city view of Kigali"
              className="h-56 w-full rounded-3xl object-cover border-4 border-[#304F47] transition duration-300 hover:scale-105"
            />
          </div>

          <div className="p-4">
            <a
              href="#"
              className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
            >
              Kigali
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="mb-4">
            <img
              src="/stone-house.jpg"
              alt="A stone house in Huye"
              className="h-56 w-full rounded-3xl object-cover border-4 border-[#304F47] transition duration-300 hover:scale-105"
            />
          </div>

          <div className="p-4">
            <a
              href="#"
              className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
            >
              Huye
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="mb-4">
            <img
              src="/beach-side.png"
              alt="A beach side view in Rubavu"
              className="h-56 w-full rounded-3xl object-cover border-4 border-[#304F47] transition duration-300 hover:scale-105"
            />
          </div>

          <div className="p-4">
            <a
              href="#"
              className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
            >
              Rubavu
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="mb-4">
            <img
              src="/mount-view.jpg"
              alt="A mountain view in Musanze"
              className="h-56 w-full rounded-3xl object-cover border-4 border-[#304F47] transition duration-300 hover:scale-105"
            />
          </div>

          <div className="p-4">
            <a
              href="#"
              className="block mt-1 text-xl leading-tight font-medium text-black hover:underline"
            >
              Musanze
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
