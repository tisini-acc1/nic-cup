import Image from "next/image";
import imageData from "./gallery-data";

const GalleryPage = () => {
  return (
    <main className="py-36 lg:px-24 md:px-16 sm:px-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageData.map((image) => (
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
    </main>
  );
};

export default GalleryPage;
