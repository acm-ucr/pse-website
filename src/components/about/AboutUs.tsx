import Image from "next/image";
import Briefcase from "@/public/about/Briefcase.webp";
import Customer from "@/public/about/Customer.webp";
import Leadership from "@/public/about/Leadership.webp";
import PersonalGrowth from "@/public/about/PersonalGrowth.webp";

const AboutUs = () => {
  return (
    <div className="mx-auto grid grid-cols-2 gap-x-[18vh] gap-y-[6vh]">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-pse-purple-400 font-pse-crimson-text text-4xl">
          Real-World Experience
        </p>
        <Image
          src={Briefcase}
          alt="BriefCase"
          className="mt-[4vh] mb-[4vh] h-[18vh] w-[18vh] object-cover"
        />
        <p className="text-pse-black-100 font-pse-maitree w-[53vh] text-xl">
          Gain hands-on experience through projects, competitions, and
          internships that will set you apart in the job market.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-pse-purple-400 font-pse-crimson-text text-4xl">
          Networking Opportunities
        </p>
        <Image
          src={Customer}
          alt="Customer"
          className="mt-[4vh] mb-[4vh] h-[18vh] w-[18vh] object-cover"
        />
        <p className="text-pse-black-100 font-pse-maitree w-[53vh] text-xl">
          Connect with industry leaders, alumni, and like-minded peers who share
          your passion for sales and marketing.{" "}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-pse-purple-400 font-pse-crimson-text text-4xl">
          Leadership Growth{" "}
        </p>
        <Image
          src={Leadership}
          alt="Leadership"
          className="mt-[4vh] mb-[4vh] h-[18vh] w-[18vh] object-cover"
        />
        <p className="text-pse-black-100 font-pse-maitree w-[55vh] text-xl">
          Step into leadership roles within your chapter and develop the
          confidence and abilities that employers are looking for.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-pse-purple-400 font-pse-crimson-text text-4xl">
          Professional Development
        </p>
        <Image
          src={PersonalGrowth}
          alt="PersonalGrowth"
          className="mt-[4vh] mb-[4vh] h-[18vh] w-[18vh] object-cover"
        />
        <p className="text-pse-black-100 font-pse-maitree w-[58vh] text-xl">
          Access to exclusive workshops, certifications, and mentoring programs
          designed to hone your skills and prepare you for success.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
