import Image from "next/image";

const partners: string[] = [
  "/tisini.png",
  "/partners/decathlon.png",
  "/partners/fkf.jpeg",
  "/partners/sofascore.jpeg",
  "/partners/skeiya.png",
  "/partners/BornforGreatness.png",
  "/partners/Lifesong.png",
  "/partners/kq.jpg",
];

const PartnerSection = () => {
  return (
    <section id="partners" className="py-10 xl:py-28">
      <div className="container mx-auto flex flex-col items-center justify-center mb-4">
        <h2 className="h2 text-center mb-8">Our Partners</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {partners.map((item) => (
            <div key={item} className="flex items-center justify-center">
              {/* <div className="relative w-full h-28 aspect-square border rounded-lg">
                <Image
                  src={item}
                  alt={item}
                  layout="fill"
                  objectFit="contain"
                  className="h-full w-full p-1"
                />
              </div> */}
              <Image src={item} alt={item} width={350} height={250} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
