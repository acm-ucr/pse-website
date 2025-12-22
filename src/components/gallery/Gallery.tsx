import Image from "next/image";
import { images } from "@/data/gallery";

const Gallery = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {images.map((img, i) => (
            <div
              key={i}
              className="mb-4 overflow-hidden rounded-2xl transition duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:brightness-110"
            >
              <Image
                src={img}
                alt={`PSE Gallery ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
