import Headers from "../Components/HomePage/Header.jsx";
import Hero from "../Components/Gallery/Hero.jsx";
import Main from "../Components/Gallery/Main.jsx";
import Footer from "../Components/HomePage/Footer.jsx";

export default function Gallery() {
  return (
    <div>
      <Headers />
      <Hero />
      <div className="flex flex-row justify-end mt-20 px-75">
        <button className="border bg-[#d19a28] text-white border-[#d19a28] rounded-lg p-4 cursor-pointer">
          Open Instagram
        </button>
      </div>
      <Main />
      <Footer />
    </div>
  );
}
