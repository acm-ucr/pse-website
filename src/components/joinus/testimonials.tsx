import Image from "next/image";
import testimonial1 from "@/public/join/testimonial1.webp";
import testimonial2 from "@/public/join/testimonial2.webp";
import Heading from "@/components/ui/heading";

const Testimonials = () => {
  return (
    <div className="bg-pse-purple-150 flex h-full w-full flex-col py-[10vh]">
      <Heading
        title="Testimonials"
        className="mb-[8vh] text-center md:ml-[19vw] md:text-left"
      />

      <div className="mx-auto mb-[10vh] grid grid-cols-1 md:mb-[15vh] md:grid-cols-2">
        <div className="order-1 mx-auto w-[60vw] text-center md:order-2 md:w-[30.5vw] md:text-left">
          <p className="text-pse-purple-250 font-pse-crimson-text mb-[2vh] text-2xl font-medium">
            Lisa Patel, Class Alpha, Class of 2026{" "}
          </p>
          <p className="text-pse-black-100 font-pse-maitree mb-[4vh] text-xl font-light">
            “Being part of PSE has been such a rewarding experience. I’ve worked
            alongside my fellow Alpha class members to help build PSE into what
            it is now. PSE has also given me the opportunity to meet so many
            people that I don’t think I would’ve met otherwise.”
          </p>
        </div>

        <div className="order-2 mx-auto md:order-1 md:mx-[0vw] md:mt-[0vh]">
          <Image
            src={testimonial1}
            alt="testimonial1"
            className="h-[32vh] w-[32vh] rounded-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="order-1 mx-auto w-[60vw] text-center md:mx-0 md:w-[30.5vw] md:pl-0 md:text-left">
          <p className="text-pse-purple-250 font-pse-crimson-text mb-[2vh] text-2xl font-medium">
            Jaydon Yuki, Class Gamma, Class of 2027
          </p>
          <p className="text-pse-black-100 font-pse-maitree mb-[4vh] text-xl font-light">
            “Before joining PSE, I was doing fine navigating classes on my own,
            but being part of this community took things to a whole new level.
            Now, I always have people I can count on—whether it’s for study
            sessions, sharing resources, or just having familiar faces in
            lecture.
          </p>
          <p className="text-pse-black-100 font-pse-maitree mb-[4vh] text-xl font-light">
            And it doesn’t stop in the classroom. This summer, I got a job
            repackaging matcha at Maeda-En and worked alongside Preston, Eddie,
            John, and Matt Nakano. Working with people I already had a bond with
            through PSE made the experience a lot more fun and comfortable.
          </p>
          <p className="text-pse-black-100 font-pse-maitree mb-[4vh] text-xl font-light">
            PSE has been more than just a professional org—it’s a tight-knit
            community that’s helped me grow both academically and personally.”
          </p>
        </div>

        <div className="order-2 mx-auto md:mx-[0] md:ml-[13vw]">
          <Image
            src={testimonial2}
            alt="testimonial2"
            className="h-[32vh] w-[32vh] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
