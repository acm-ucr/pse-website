import Briefcase from "@/public/about/Briefcase.webp";
import Customer from "@/public/about/Customer.webp";
import Leadership from "@/public/about/Leadership.webp";
import PersonalGrowth from "@/public/about/PersonalGrowth.webp";
import AboutUs2Card from "@/components/aboutus/AboutUs2Card";

const AboutUs2 = () => {
  return (
    <div className="mx-auto grid grid-cols-2 gap-x-[18vh] gap-y-[6vh]">
      <AboutUs2Card
        title="Real-World Experience"
        description="Gain hands-on experience through projects, competitions, and internships that will set you apart in the job market."
        image={Briefcase}
      />

      <AboutUs2Card
        title="Networking Opportunities"
        description="Connect with industry leaders, alumni, and like-minded peers who share your passion for sales and marketing. "
        image={Customer}
      />

      <AboutUs2Card
        title="Leadership Growth"
        description="Step into leadership roles within your chapter and develop the confidence and abilities that employers are looking for."
        image={Leadership}
      />

      <AboutUs2Card
        title="Professional Development"
        description="Access to exclusive workshops, certifications, and mentoring programs designed to hone your skills and prepare you for success."
        image={PersonalGrowth}
      />
    </div>
  );
};

export default AboutUs2;
