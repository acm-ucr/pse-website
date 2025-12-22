import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ClassItem {
  letter: string;
  names: string[];
}

interface ClassProps {
  classData: ClassItem[];
}

const Class = ({ classData }: ClassProps) => {
  return (
    <div className="mt-[6vh] mb-[6vh]">
      <Accordion type="single" collapsible className="mx-auto w-3/4">
        {classData.map((item, listIndex) => (
          <AccordionItem
            key={listIndex}
            value={`item-${listIndex + 1}`}
            className="border-pse-purple-200"
          >
            <AccordionTrigger className="text-pse-purple-400 font-pse-crimson-text my-6 text-4xl">
              {item.letter}
            </AccordionTrigger>
            <AccordionContent className="font-pse-crimson-text text-pse-purple-250 mb-4 text-3xl">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {item.names.map((str, nameIndex) => (
                  <div key={nameIndex} className="p-8">
                    {str}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Class;
