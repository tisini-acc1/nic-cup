import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse"
    >
      <div className="flex-1 lg:-w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
        <Image
          src={"/about.jpeg"}
          alt="about"
          width={800}
          height={800}
          className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover"
        />
      </div>

      <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
        <h6 className="text-lg font-medium flex items-center lg:justify-start md:justify-start sm:justify-start justify-center gap-x-2 mb-3">
          About Us
        </h6>
        <h1
          className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0
        "
        >
          Celebrating the community that made us and one that we owe a lifetime
          of service
        </h1>
        <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
          The Nairobi International Cup, is a program that aims to celebrate the
          beautiful game annually while leaving behind a legacy that will
          connect this game we all love to the community creating an impact
          which will inspire hope and create incredible stories of great sports
          men and women.
        </p>
        <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
          The main objective is to reach kids, youth and coaches at the
          grassroot level who struggle everyday to get footballs, basic training
          equipment, kits and soccer boots. This is a program that comes in as a
          partner, as a well wisher and as a friend that will always be around
          to give them a hand. From Nairobi to Isiolo, From Lamu to Sindo, From
          Lodwar to Busia, From Siaya to Eldoret, we will endeavor to reach the
          kids and grassroot coaches who do so much to make these kids happy and
          show them a way out of their present life situations through sports.
          Football kit, soccer boots, footballs, and cones will be donated. All
          in the spirit of elevating the game that has given us so much while
          lending a helping hand to the community that made all of us.
        </p>

        <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
          This is the Ultimate NaiCupKe Promise and will be delivered. The game
          needs us. All of us. Together we will achieve it.
        </p>
      </div>
    </section>
  );
};
