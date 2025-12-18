import Classes from "@/components/classes/Class";
import TitleComp from "@/components/TitleComp";
import { allClasses } from "@/data/classes";

const ClassView = () => {
  return (
    <>
      <TitleComp title="Classes" />
      <Classes classData={allClasses} />
    </>
  );
};

export default ClassView;
