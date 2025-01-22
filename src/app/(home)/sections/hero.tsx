import Link from "next/link";
import Image from "next/image";
import { Itim } from "next/font/google";

import Timer from "@/components/timer/timer";
import { RegisterButton } from "@/components/buttons/register-button";
// import { CustomImage } from "@/components/custom-image";
// import { CustomButton } from "@/components/custom-button";

const itim = Itim({ weight: ["400"], subsets: ["latin"] });

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-sky-400 lg:h-screen flex justify-center items-center"
    >
      <div className="lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 w-full flex flex-col lg:flex-row justify-between items-center">
        <aside className="w-full lg:w-1/2 text-center lg:text-start">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl mb-5 text-black">
            {/* <small className="text-xl font-semibold">Season Two</small> */}
            <br />
            <span className={itim.className}>Nairobi International Cup</span>
          </h1>

          <h2 className="text-black text-lg lg:text-xl">
            Kenya&apos;s Premier Grassroot Sports Festival.
            {/* <span className="bg-white py-1 px-2 font-semibold rounded shadow-md"> */}
            {/* </span>{" "} */}
          </h2>

          {/* <h3 className="bg-white text-xl lg:text-2xl text-black uppercase font-semibold px-2 py-1 inline-block rounded shadow-md mt-5">
            Stay Tuned!
          </h3> */}

          <div className="flex justify-center lg:justify-start gap-8 mt-8">
            <button className="bg-lime-400 hover:bg-white text-black px-4 py-2 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex">
              <Link href={"/guidelines"}>Registration Guidelines</Link>
            </button>

            <RegisterButton />
          </div>

          <Timer launchDate="2025-08-01T07:00:00" />
        </aside>

        <aside className="w-full lg:w-1/2 flex justify-center pl-4 mt-5 lg:mt-0">
          <Image
            src={"/kenya-flag.webp"}
            alt={"player"}
            width={650}
            height={400}
            className="w-full max-w-[650px] h-auto"
          />
        </aside>
      </div>
    </section>
  );
};
