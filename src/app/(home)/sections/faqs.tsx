import Accordion from "@/components/accordion";
import Image from "next/image";
import React from "react";

export const FaqsSection = () => {
  return (
    <section className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
      <h6 className="text-lg font-medium flex items-center gap-x-2 mb-6">
        FAQS
      </h6>

      <div className="w-full h-auto flex items-center justify-center gap-x-2 gap-y-5 flex-wrap mb-10">
        <Accordion />

        {/* <div className="flex-1 lg:-w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
          <Image
            src={"/faqs.jpg"}
            alt="about"
            width={0}
            height={0}
            className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover"
          />
        </div> */}
      </div>
    </section>
  );
};
