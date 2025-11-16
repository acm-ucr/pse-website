import Image from "next/image";
import whyjoin from "@/public/about/whyjoin.webp";

const WhyJoin = () => {
  return (
    <div className="mt-[15vh] grid grid-cols-1 items-center justify-center md:grid-cols-2">
      <div className="col-end-2 mx-auto text-center md:ml-[14vh] md:text-left">
        <p className="text-pse-purple-400 font-pse-crimson-text text-5xl md:text-7xl">
          Why Join PSE?
        </p>
        <p className="text-pse-black-100 font-pse-maitree mt-[3vh] w-[85vh] text-xl leading-normal md:text-3xl">
          At PSE, our mission is to develop the sales and marketing leaders of
          tomorrow. We believe in the power of education, experience, and
          ethical practice to drive meaningful change in the business world. By
          joining PSE, you're not just becoming a part of a fraternity— you're
          joining a movement that is dedicated to excellence and innovation in
          sales and marketing.
        </p>
      </div>

      <div className="mx-auto md:mt-[13vh] md:ml-[24vh]">
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
