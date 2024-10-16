"use client";

// import { RegisterButton } from "@/components/buttons/register-button";
import { Link } from "react-scroll";

const Cta = () => {
  return (
    <section className="bg-partners bg-cover bg-center h-96 relative flex flex-col space-y-8 items-center justify-center">
      <div className="absolute bg-sky-400 opacity-55 h-full w-full"></div>
      <div className="text-white text-center text-4xl font-bold z-10">
        Kenya&apos;s Premier Grassroot Soccer Tournament.
      </div>

      <button className="bg-lime-400  text-black px-4 py-2 rounded-lg font-bold md:flex z-10">
        <Link
          to="footer"
          spy={true}
          offset={-100}
          smooth={true}
          // className="text-white uppercase font-semibold cursor-pointer rounded-lg hover:bg-lime-400 hover:text-black p-2 text-[15px]"
        >
          Become a Partner
        </Link>
      </button>

      <div className="text-black text-xl font-bold z-10 cursor-pointer bg-lime-400 hover:bg-white p-3 rounded-md transform hover:scale-105 transition-transform duration-300">
        +254 719 422235 | +254 790 659116
      </div>

      {/* <RegisterButton /> */}
    </section>
  );
};

export default Cta;
