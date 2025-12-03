import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img src="/Logo.png" alt="web logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden lg:flex ml-10 space-x-8 items-center text-lg font-sans">
            <a
              href="#"
              className="cursor-pointer hover:text-[#c7923E] transition duration-200"
              onClick={(e) => {
                e.preventDefault();
                navigate("/home");
              }}
            >
              Home
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-[#c7923E] transition duration-200"
              onClick={(e) => {
                e.preventDefault();
                navigate("/about-us");
              }}
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-[#c7923E] transition duration-200"
            >
              Tour Package
            </a>
            <a
              href="#"
              className="hover:text-[#c7923E] transition duration-200"
            >
              Gallery
            </a>
            <a
              href="#"
              className="hover:text-[#c7923E] transition duration-200"
            >
              Blog
            </a>
            <a
              href="#"
              className="hover:text-[#c7923E] transition duration-200"
            >
              Contact Us
            </a>
          </nav>
        </div>

        <div className="flex items-center">
          <button className="text-sm md:text-lg bg-[#c7923E] text-white border border-black rounded-md px-4 py-2 hover:bg-[#d19a28] transition duration-200 shadow-sm">
            Sign In
          </button>

          <button
            className="lg:hidden ml-4 p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#c7923E]"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
