import TitleComp from "@/components/TitleComp";
import AboutUs2 from "@/components/aboutpage/AboutUs2";
import Description from "@/components/aboutpage/Description";
import WhyJoin from "@/components/aboutpage/WhyJoin";

const AboutUs = () => {
  return (
    <>
      <TitleComp title="About Us" />
      <WhyJoin />
      <AboutUs2 />
      <Description />
    </>
  );
};

export default AboutUs;
