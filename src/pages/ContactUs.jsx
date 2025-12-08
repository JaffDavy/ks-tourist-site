import Header from "../Components/HomePage/Header";
import Hero from "../Components/ContactUs/Hero";
import Main from "../Components/ContactUs/Main";
import Socials from "../Components/ContactUs/socials";
import Footer from "../Components/HomePage/Footer";

export default function ContactUs() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="text-center mt-20 mb-20 flex flex-col gap-8 text-[#515151] pt-[150px] md:pt-2.5">
        <h3 className="text-black text-7xl">Get In Touch</h3>
        <h1 className="text-3xl px-50 text-left">
          We would love to hear from you! If you have any comments or
          suggestions about our website or our tours, please don't hesitate to
          get in touch. We are always looking for ways to improve and make your
          travel experience even better.
        </h1>
      </div>
      <Main />
      <Socials />
      <Footer />
    </div>
  );
}
