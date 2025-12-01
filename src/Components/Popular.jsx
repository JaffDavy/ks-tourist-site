export default function Popular() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 px-20 self-center mb-20">
        <div className="bg-white overflow-hidden w-[90%]">
          <div class="md:shrink-0">
            <img
              src="/citty-view.jpg"
              alt="a picture of a giraffe"
              className="h-48 rounded-4xl object-cover border-8 border-[#304F47] md:h-100 md:w-full"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Kigali
            </a>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>
        <div className="bg-white overflow-hidden w-[90%]">
          <div class="md:shrink-0">
            <img
              src="/stone-house.jpg"
              alt="a picture of a giraffe"
              className="h-48 w-full rounded-4xl object-cover border-8 border-[#304F47] md:h-100 md:w-full"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Huye
            </a>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>

            <div class="mt-4"></div>
          </div>
        </div>
        <div className="bg-white overflow-hidden w-[90%]">
          <div class="md:shrink-0">
            <img
              src="/beach-side.png"
              alt="a picture of a giraffe"
              className="h-48 w-full object-cover border-8 border-[#304F47] rounded-4xl md:h-100 md:w-full"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Rubavu
            </a>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>
        <div className="bg-white overflow-hidden w-[90%]">
          <div class="md:shrink-0">
            <img
              src="/mount-view.jpg"
              alt="a picture of a giraffe"
              className="h-48 w-full object-cover rounded-4xl border-8 border-[#304F47] md:h-100 md:w-full"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Musanze
            </a>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
