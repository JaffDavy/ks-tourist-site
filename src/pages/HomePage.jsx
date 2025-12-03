import Header from "../Components/HomePage/Header";
import Hero from "../Components/HomePage/Hero";
import Packages from "../Components/HomePage/Packages";
import Popular from "../Components/HomePage/Popular";
import ClientsSay from "../Components/HomePage/ClientsSay";
import Details from "../Components/HomePage/Details";
import Footer from "../Components/HomePage/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="mb-[-150px]">
        <Hero />
      </div>
      <div className="text-center mt-20 mb-20 flex flex-col gap-5 pt-[150px] md:pt-[150px]">
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
      <div className="text-center my-20 flex flex-col gap-5">
        <h3 className="text-[#d19a28] text-3xl">Our Traveller Say</h3>
        <h1 className="text-6xl">
          What our clients say
          <br /> about us
        </h1>
      </div>
      <ClientsSay />
      <Footer />
    </div>
  );
}
