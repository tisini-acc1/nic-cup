import Image from "next/image";

import imageData from "@/app/(pages)/gallery/gallery-data";
import Link from "next/link";

export const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
    >
      <h2 className="h2 text-center mb-8">2024 Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {imageData.slice(0, 8).map((image) => (
          <div key={image} className="">
            <Image
              src={image}
              alt={image}
              width={450}
              height={300}
              className="w-full h-full rounded-sm"
            />
          </div>
        ))}
      </div>

      <button className="bg-lime-400 hover:bg-white text-black px-4 py-2 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex mt-10">
        <Link href={"/gallery"}>View more</Link>
      </button>
    </section>
  );
};
