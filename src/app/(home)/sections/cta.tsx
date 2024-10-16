"use client";

import Link from "next/link";

// import { RegisterButton } from "@/components/buttons/register-button";

const Cta = () => {
  return (
    <section className="bg-partners bg-cover bg-center h-96 relative flex flex-col space-y-8 items-center justify-center">
      <div className="absolute bg-sky-400 opacity-55 h-full w-full"></div>
      <div className="text-white text-center text-4xl font-bold z-10">
        Kenya&apos;s Premier Grassroot Soccer Tournament.
      </div>

      <button className="bg-lime-400 hover:bg-white  text-black px-4 py-2 rounded-lg font-bold md:flex z-10">
        <Link href="/partners">Become a Partner</Link>
      </button>
      {/* <RegisterButton /> */}
    </section>
  );
};

export default Cta;
