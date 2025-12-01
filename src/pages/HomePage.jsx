import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Packages from "../Components/Packages";

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
    </div>
  );
}
