import Image from "next/image";

const partners: string[] = [
  "/partners/decathlon.png",
  "/partners/fkf.jpeg",
  "/tisini.png",
];

const PartnerSection = () => {
  return (
    <section id="partners" className="py-10 xl:py-28">
      <div className="container mx-auto flex flex-col items-center justify-center mb-4">
        <h2 className="h2 text-center mb-8">Our Partners</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {partners.map((item) => (
            <div key={item} className="flex items-center justify-center">
              <Image src={item} alt={item} width={350} height={250} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
