import Image from "next/image";
import testimonial2 from "@/public/join/testimonial2.webp";

const Testimonials = () => {
  return (
    <div className="mt-[10vh] mb-[10vh] grid grid-cols-2 gap-x-[70vh]">
      <div className="mb-[2vh] ml-[30vh] w-[80vh]">
        <p className="text-pse-purple-250 font-pse-crimson-text mb-[2vh] text-2xl font-medium">
          Jaydon Yuki, Class Gamma, Class of 2027
        </p>
        <p className="text-pse-black-100 font-pse-maitree mb-[4vh] text-xl font-light">
          “Before joining PSE, I was doing fine navigating classes on my own,
          but being part of this community took things to a whole new level.
          Now, I always have people I can count on—whether it’s for study
          sessions, sharing resources, or just having familiar faces in lecture.
        </p>
        <p className="text-pse-black-100 font-pse-maitree mb-[4vh] text-xl font-light">
          And it doesn’t stop in the classroom. This summer, I got a job
          repackaging matcha at Maeda-En and worked alongside Preston, Eddie,
          John, and Matt Nakano. Working with people I already had a bond with
          through PSE made the experience a lot more fun and comfortable.
        </p>
        <p className="text-pse-black-100 font-pse-maitree text-xl font-light">
          PSE has been more than just a professional org—it’s a tight-knit
          community that’s helped me grow both academically and personally.”
        </p>
      </div>

      <div className="">
        <Image
          src={testimonial2}
          alt="testimonial2"
          className="h[-32vh] w-[32vh] object-cover"
        />
      </div>
    </div>
  );
};

export default Testimonials;
