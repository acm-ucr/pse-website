import Image from "next/image";
import pseLogo from "@/public/Nav_Icon.webp";

const Navbar = () => (
  <nav className="bg-pse-purple-300 fixed top-0 right-0 left-0 z-50 border-b">
    <div className="flex items-center justify-between gap-4 px-6 py-2">
      <div className="flex items-center gap-8">
        <Image
          src={pseLogo}
          alt="Pi Sigma Epsilon Logo"
          width={50}
          height={50}
          className="rounded-md"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-2xl font-bold tracking-wide text-white">
            ΠΣΕ
          </span>
          <span className="text-base text-white">Pi Sigma Epsilon</span>
        </div>
      </div>

      <div className="flex space-x-6 text-white">
        <a href="#" className="">
          ABOUT US
        </a>

        <div className="group relative">
          <button>MEMBERS</button>
          <div className="bg-pse-purple-200 absolute hidden rounded p-2 text-white shadow-lg group-hover:block">
            <div>E-BOARD</div>
            <div>CLASSES</div>
          </div>
        </div>

        <div className="group relative">
          <button>EVENTS</button>
          <div className="bg-pse-purple-200 absolute hidden rounded p-2 text-white shadow-lg group-hover:block">
            <div>CALENDAR</div>
            <div>OVERVIEWS</div>
          </div>
        </div>

        <div>GALLERY</div>
        <div>NEWS LETTER</div>
        <div>JOIN US</div>
      </div>
    </div>
  </nav>
);

export default Navbar;
