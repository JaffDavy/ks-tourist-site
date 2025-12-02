import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Packages from "../Components/Packages";
import Popular from "../Components/Popular";
import ClientsSay from "../Components/ClientsSay";
import Details from "../Components/Details";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="text-center my-20 flex flex-col gap-5">
        <h3 className="text-[#d19a28] text-3xl">Choose Your Package</h3>
        <h1 className="text-6xl">
          Select your Best Package <br /> for your Travel
        </h1>
      </div>
      <Packages />
      <Packages />
      <div className="text-center my-20 flex flex-col gap-5">
        <h3 className="text-[#d19a28] text-3xl">Popular Destinations</h3>
        <h1 className="text-6xl">
          Select Our Best Popular <br /> Destinations
        </h1>
      </div>
      <div className="flex flex-row justify-end gap-10 mb-20 px-35">
        <div className="border border-[#d19a28] rounded-lg p-4 cursor-pointer">
          <img src="/arrow-left.png" alt="arrow left" />
        </div>
        <div className="border border-[#d19a28] rounded-lg p-4 cursor-pointer bg-[#d19a28]">
          <img src="/arrow-right.png" alt="arrow-left" />
        </div>
      </div>
      <Popular />
      <div className="text-center my-20 flex flex-col gap-5">
        <h3 className="text-[#d19a28] text-3xl">Why us?</h3>
        <h1 className="text-6xl">
          Why Travel with Africa <br /> wizzy Safari
        </h1>
      </div>
      <Details />
      <ClientsSay />
    </div>
  );
}
