export default function Footer() {
  return (
    <div>
      <div className="bg-[#304F47] text-white py-10 px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              If you have any question, <br /> Let us help you!
            </h1>
            <p className="text-lg">
              If you have any questions or would like to{" "}
              <br className="hidden md:inline" /> book a tour with us, please
              don't hesitate <br className="hidden md:inline" /> to contact us
            </p>
            <p className="text-base">
              Phone: +250 788 123 456 <br /> Email: info@rwandatourism.com{" "}
              <br />
              Address: Kigali, Rwanda
            </p>
            <h5 className="text-lg font-bold">Subscribe to our newsletter</h5>

            <div className="flex flex-row gap-4 w-full md:w-3/4">
              <input
                type="text"
                placeholder="Input your email address"
                className="w-full text-black bg-white p-3 rounded-lg border border-gray-300 flex-grow"
              />
              <button className="bg-[#d19a28] p-3 rounded-lg flex items-center justify-center h-10 w-10">
                <img src="/sendicon.png" alt="a send icon" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-start">
              <div>
                <img src="/Logo.png" alt="website logo" />
              </div>
              <div className="mt-4 md:mt-7">
                <img src="/socials.png" alt="social media platforms" />
              </div>
            </div>

            <p className="text-base max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              <br className="hidden md:inline" />
              industry.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <ul className="flex flex-col gap-4 text-sm">
                  <li>Home</li>
                  <li>Testimonials</li>
                  <li>Destinations</li>
                  <li>Signin</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-4 text-sm">
                  <li>About Us</li>
                  <li>Packages</li>
                  <li>Events</li>
                  <li>Gallery</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-4 text-sm">
                  <li>Our Team</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#304F47] text-white text-center py-5 border-t border-gray-700">
          <p className="text-sm">
            &copy; Copyright Africa Wizzy Safari 2022. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
