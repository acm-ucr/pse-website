import TestimonialCard, {
  TestimonialProps,
} from "@/components/joinus/testimonialcard";
import Lisa from "@/../public/testimonies/Lisa_Patel.webp";
import Jaydon from "@/../public/testimonies/Jaydon_Yuki.webp";
const testimonials: TestimonialProps[] = [
  {
    name: "Lisa Patel",
    classInfo: "Class Alpha, Class of 2026",
    quote:
      "Being part of PSE has been such a rewarding experience. I’ve worked alongside my fellow Alpha class members to help build PSE into what it is now. PSE has also given me the opportunity to meet so many people that I don’t think I would’ve met otherwise.",
    image: Lisa,
    reverse: true,
  },
  {
    name: "Jaydon Yuki",
    classInfo: "Class Gamma, Class of 2027",
    quote:
      "Before joining PSE, I was doing fine navigating classes on my own, but being part of this community took things to a whole new level. Now, I always have people I can count on—whether it’s for study sessions, sharing resources, or just having familiar faces in lecture.",
    image: Jaydon,
  },
];

const Testimonials = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-pse-crimson-text text-pse-purple-500 mb-16 text-center text-5xl">
        Testimonials
      </h2>

      <div className="flex flex-col gap-20">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
