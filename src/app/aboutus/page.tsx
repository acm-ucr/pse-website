import TitleComp from "@/components/TitleComp";
import AboutUs2 from "@/components/aboutus/AboutUs2";
import Description from "@/components/aboutus/Description";
import WhyJoin from "@/components/aboutus/WhyJoin";
import OurPartners from "@/components/aboutus/OurPartners";

const AboutUs = () => {
  return (
    <>
      <TitleComp>About Us</TitleComp>
      <Description />
      <OurPartners />
      <WhyJoin />
      <AboutUs2 />
    </>
  );
};

export default AboutUs;
