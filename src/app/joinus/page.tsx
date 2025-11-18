import TitleComp from "@/components/TitleComp";
import Testimonials from "@/components/joinus/testimonials";

const JoinUs = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <TitleComp title="Join Us" />

      <div className="mt-16">
        <Testimonials />
      </div>
    </div>
  );
};

export default JoinUs;
