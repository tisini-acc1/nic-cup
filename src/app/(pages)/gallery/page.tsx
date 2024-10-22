import Image from "next/image";
import imageData from "./gallery-data";

const GalleryPage = () => {
  return (
    <main className="py-32 container mx-auto">
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
