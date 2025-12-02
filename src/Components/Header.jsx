import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5">
      <div className=" flex flex-row justify-between items-center">
        <div className="flex flex-row gap-20 items-center">
          <div>
            <img src="/Logo.png" alt="web logo" />
          </div>
          <div className="flex flex-row gap-20 items-center text-lg font-Muli">
            <nav
              className="cursor-pointer"
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </nav>
            <nav
              className="cursor-pointer"
              onClick={() => {
                navigate("/about-us");
              }}
            >
              About
            </nav>
            <nav>Tour Package</nav>
            <nav>Gallery</nav>
            <nav>Blog</nav>
            <nav>Contact Us</nav>
          </div>
        </div>
        <div>
          <button className="text-lg bg-[#c7923E] text-white border border-black rounded-md w-48 py-2 px-4">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
