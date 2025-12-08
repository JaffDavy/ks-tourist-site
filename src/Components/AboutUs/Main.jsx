export default function Main() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10 md:mt-20 gap-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center px-4">
          Welcome to Africa Wizzy Safari
        </h1>
        <p className="bg-black h-1 w-40 md:w-60 self-center"></p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-20 px-4 md:px-20 py-10 md:py-16 w-full">
        <div className="w-full md:w-1/2">
          <img
            src="/woodhouse.jpg"
            alt="Wood House in the forest"
            className="w-full h-auto max-h-[520px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <p className="mt-2 text-[#515151] text-xl md:text-4xl leading-relaxed">
            Welcome to Africa Wizzy Safari, a leading tourism company based in
            Rwanda. We have been in business for over 5 years and are committed
            to providing top-quality tours and services to our clients. Our
            mission is to showcase the beauty and culture of Rwanda to visitors
            from around the world, and to contribute to the sustainable
            development of the country through responsible tourism practices.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-20 px-4 md:px-20 py-10 md:py-16 w-full">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <p className="mt-2 text-[#515151] text-xl md:text-4xl leading-relaxed">
            At Africa Wizzy safari, we offer a wide range of tours and
            activities, including cultural and historical tours, wildlife
            safaris, mountain gorilla trekking, and more. Our experienced and
            knowledgeable guides will ensure that you have a safe and enjoyable
            experience while exploring the stunning landscapes and rich culture
            of Rwanda.
          </p>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img
            src="/ropebridge.png"
            alt="Rope bridge in the forest"
            className="w-full h-auto max-h-[520px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-20 px-4 md:px-20 py-10 md:py-16 w-full">
        <div className="w-full md:w-1/2">
          <img
            src="/lake.jpg"
            alt="Lake in the mountains"
            className="w-full h-auto max-h-[520px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <p className="mt-2 text-[#515151] text-xl md:text-4xl leading-relaxed">
            We are proud to have received numerous awards and accolades for our
            commitment to excellence, including the RDD award and the Excellence
            award. <br /> <br /> <br /> Thank you for choosing Africa Wizzy
            Safari for your travel needs in Rwanda. We look forward to welcoming
            you on one of our tours soon!
          </p>
        </div>
      </div>
    </div>
  );
}
