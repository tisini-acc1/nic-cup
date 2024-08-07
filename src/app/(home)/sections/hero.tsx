import { CustomButton } from "@/components/custom-button";
import { CustomImage } from "@/components/custom-image";
import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="bg-sky-400">
      <div className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20">
        <div className="flex flex-col justify-center items-start gap-8">
          <h1 className="text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px]">
            Nairobi International Cup
          </h1>

          <p className="text-[20px] text-slate-700 font-playpen">
            A soccer festival in a vibrant city!
          </p>

          <CustomButton />
        </div>

        <div>
          <Image
            src={"/soccer.jpg"}
            alt={"hero"}
            sizes="100vw"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

{
  /* <div className="">
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl tracking-wider mb-2">
            Nairobi International Cup
          </h1>
          <p className="text-xl mb-4 font-playpen">
            A soccer festival in a vibrant city!
          </p>
          
        </div> */
}

{
  /* <div>
          <CustomImage src={"/hero.jpg"} alt={"about"} />
        </div> */
}
{
  /* </div> */
}
