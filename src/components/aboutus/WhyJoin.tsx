import Image from "next/image";
import whyjoin from "@/public/about/whyjoin.webp";
import Heading from "@/components/ui/heading";

const WhyJoin = () => {
  return (
    <div className="my-[6vh] flex flex-col items-center justify-center md:my-[12vh] md:flex-row">
      <div className="col-end-2 mx-auto text-center md:ml-[14vh] md:text-left">
        <Heading title="Why Join PSE?" />
        <p className="text-pse-black-100 font-pse-maitree mt-[3vh] w-[85vw] text-xl md:w-[45vw] md:text-2xl">
          At PSE, our mission is to develop the sales and marketing leaders of
          tomorrow. We believe in the power of education, experience, andl
          ethical practice to drive meaningful change in the business world. By
          joining PSE, you're not just becoming a part of a fraternity— you're
          joining a movement that is dedicated to excellence and innovation in
          sales and marketing.
        </p>
      </div>

      <div className="mx-auto mt-[3vh] md:mt-0 md:ml-[6vw]">
        <Image
          src={whyjoin}
          alt="whyjoin"
          className="scale-80 rounded-2xl md:scale-110"
        />
      </div>
    </div>
  );
};

export default WhyJoin;
