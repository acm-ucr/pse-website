import Image from "next/image";
import titlecomp from "@/public/about/titlecomp.webp";

interface TitleProp {
  title: string;
}

const TitleComp = (props: TitleProp) => {
  return (
    <div className="relative flex h-full w-full flex-col">
      <Image
        src={titlecomp}
        alt="TitleComp"
        className="absolute z-0 h-[33vh] w-full object-cover object-bottom"
      />
      <div className="absolute inset-0 z-10 flex h-[33vh] w-full items-center justify-center">
        <p className="font-pse-crimson-text text-center text-8xl whitespace-nowrap text-white">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default TitleComp;
