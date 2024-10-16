import React from "react";
import { Link } from "react-scroll";

const PartnerSection = () => {
  return (
    <section
      id="partners"
      className="bg-partners bg-cover bg-center h-96 relative flex flex-col space-y-8 items-center justify-center"
    >
      <div className="absolute bg-sky-400 opacity-55 h-full w-full"></div>
      <div className="text-white text-center text-4xl font-bold z-10">
        Kenya's Premier Grassroot Soccer Tournament.
      </div>
      <button className="bg-lime-400 hover:bg-white text-black px-4 py-2 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex">
        {/* <Link
          to="footer"
          spy={true}
          offset={-100}
          smooth={true}
          className="text-white uppercase font-semibold cursor-pointer rounded-lg hover:bg-lime-400 hover:text-black p-2 text-[15px]"
        >
          Fixtures
        </Link> */}
        Become a Partner
      </button>
    </section>
  );
};

export default PartnerSection;
