import { CustomImage } from "@/components/custom-image";
// import { CustomButton } from "@/components/custom-button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section id="home" className="bg-sky-400 lg:h-[95vh] py-20 sm:px-20">
      <div className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 ">
        <div className="flex flex-col justify-center items-start gap-8 ">
          <h1 className="text-black font-semibold lg:text-[90px] text-[55px] lg:leading-[100px] leading-[80px]">
            Nairobi International Cup
          </h1>

          <p className="text-[20px] text-slate-700 font-playpen">
            A soccer festival in a vibrant city!
          </p>

          {/* <CustomButton /> */}
          <button className="bg-lime-400 hover:bg-white text-black px-4 py-2 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex">
            <Link href={"/fixtures"}>Fixtures</Link>
          </button>
        </div>

        <div>
          <CustomImage src={"/soccer.png"} alt={"about"} />
        </div>
      </div>
    </section>
  );
};
