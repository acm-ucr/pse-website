import { EventCarousel } from "@/components/overviews/EventCarousel";
import Heading from "@/components/ui/heading";
import { gallery } from "@/data/photos";

const PhotoGallery = () => {
  return (
    <div className="px-8 pb-[14vh] md:px-20">
      <Heading title="Photo Gallery" className="mb-12 text-center" />
      <EventCarousel images={gallery} />
    </div>
  );
};

export default PhotoGallery;
