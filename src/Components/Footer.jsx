export default function Footer() {
  return (
    <div>
      <div className="bg-[#304F47] text-white py-10 px-20 flex flex-row">
        <div className="flex flex-col gap-6 mb-10 justify-center">
          <h1 className="text-6xl font-bold">
            If you have any question, <br /> Let us help you!
          </h1>
          <p className="text-[25px]">
            If you have any questions or would like to <br /> book a tour with
            us, please don't hesitate <br /> to contact us
          </p>
          <p className="text-[20px]">
            Phone: +250 788 123 456 <br /> Email: info@rwandatourism.com <br />
            Address: Kigali, Rwanda
          </p>
          <h5 className="text-[20px] font-bold">Subscribe to our newspaper</h5>
          <div className="flex flex-row gap-4 w-[30%]">
            <input
              type="text"
              placeholder="Input your email address"
              className="w-100 text-black bg-white p-3 rounded-lg border border-gray-300 flex-grow"
            />
            <button className="bg-[#d19a28] p-3 rounded-lg w-2xl">
              <img src="/sendicon.png" alt="a send icon" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex gap-35">
              <div>
                <img src="/Logo.png" alt="website logo" />
              </div>
              <div className="mt-7">
                <img src="/socials.png" alt="social media platforms" />
              </div>
            </div>
            <p className="text-[20px] w-[80%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              <br />
              industry.
            </p>
          </div>
          <div className="flex flex-row gap-40">
            <div>
              <ul className="flex flex-col gap-4">
                <li>Home</li>
                <li>Testimonials</li>
                <li>Destinations</li>
                <li>Signin</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li>About Us</li>
                <li>Packages</li>
                <li>Events</li>
                <li>Gallery</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li>Our Team</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#304F47] text-white text-center py-5">
          <p>Copyright Africa Wizzy Safari 2022</p>
        </div>
      </div>
    </div>
  );
}
