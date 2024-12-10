import NairobiSlider from "@/components/home/nairobi-slider";
import Image from "next/image";

const VisitNairobi = () => {
  return (
    <section
      id="about"
      className="w-full h-auto flex flex-col items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse"
    >
      <h2 className="h2 text-center mb-4">VISIT NAIROBI</h2>

      <div className="flex items-center justify-center gap-4">
        <div className="flex-1 lg:-w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
          <NairobiSlider />
        </div>

        <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
          <h1
            className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0
        "
          >
            A Magical City of Wildlife and Urban Energy
          </h1>
          <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
            Nairobi is Kenya’s Capital City. In addition to its urban core,
            Nairobi is the only Capital City in the world with a National Park –
            The Nairobi National Park, Home to Lions, Elephants, Buffalos,
            Giraffes, Rhinos and diverse wildlife species, many of which can
            only be found in the grassy plains, rain forests and wooded savannas
            of Kenya.
          </p>
          <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
            Nairobi also has one of the most diverse landscapes in the entire
            world, which is what makes this small but breath taking city a such
            a magical place to visit!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisitNairobi;
