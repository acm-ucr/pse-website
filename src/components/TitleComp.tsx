import Image from "next/image";
import titlecomp from "@/public/about/titlecomp.webp"

interface TitleProp {
    title: string
}

const TitleComp = (props : TitleProp) => {
    return (
        <div className="flex flex-col w-full h-full relative">
            <Image 
            src={titlecomp}
            alt="TitleComp"
            className="object-cover object-bottom w-full h-[33vh] absolute z-0"
            />
            <div className="absolute z-10 inset-0 w-full h-[33vh] flex items-center justify-center">
            <p className="text-white font-pse-crimson-text text-8xl text-center whitespace-nowrap">
                {props.title}
            </p>
            </div>
        </div>

    );
};

export default TitleComp;