// import { AspectRatio } from "@/components/ui/aspect-ratio";
import AboutSlider from "@/components/home/about-slider";
// import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap"
    >
      <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
        <h6 className="text-lg font-medium flex items-center lg:justify-start md:justify-start sm:justify-start justify-center gap-x-2 mb-3">
          About Us
        </h6>
        <h1
          className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0
        "
        >
          A Sporting Festival In A Special City and A Magical Country
        </h1>
        <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
          An International Inclusive Annual Sporting Festival Held in Kenya
          every August at the heart of Kenya’s Capital. The Inaugural Edition
          saw over 272 Teams take part in the event with over 9000 participants
          taking to the field to display their talents and really exercise their
          love for the game.
        </p>
        <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
          Nairobi International Cup took the game to where it belongs – The
          community. To connect communities and the game is our ultimate goal
          and main objective.
        </p>
      </div>

      <div className="flex-1 lg:-w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
        <AboutSlider />
        {/* <Image
            src={"/about.jpeg"}
            alt="about"
            width={600}
            height={600}
            className="w-full lg:h-[60vh] md:h-[50vh] sm:h-[40vh] h-[35vh] object-cover"
          /> */}
        {/* <AspectRatio ratio={16 / 9}>
            <iframe
              width="853"
              height="480"
              src="https://youtu.be/NTxUvXa350A?si=KhunT4rCMvSTYG4h"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </AspectRatio> */}
      </div>
    </section>
  );
};
