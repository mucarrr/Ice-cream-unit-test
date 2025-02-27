import {IoIosSearch} from "react-icons/io";
import {CgMenuRightAlt} from "react-icons/cg";

const Header = () => {
  return (
    <header className="flex justify-between fs-5">
      <div className="flex gap-[18px] items-center">
        <img src="/logo.svg" alt="" className="size-[45px] lg:size-[55px] 2xl:size-[78px]" />

        <h2 className="font-black max-sm:hidden tracking-widest text-[20px]">
          Drop<br/>Cream
        </h2>
      </div>

      <nav className="flex items-center gap-[10px] sm:gap-[20px] lg:gap-[30px] 2xl:gap-[50px] font-bold md:text-[20px]">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Nearby Stores</a>
        <a href="/">
          <IoIosSearch className="text-[24px] 2xl:text-[30px] font-bold" />
        </a>
      </nav>

      <button>
        <CgMenuRightAlt className="text-[28px] md:text-[35px] 2xl:text-[40px]" />
      </button>
    </header>
  );
};

export default Header;