import BoardGrid from "@/components/board/BoardGrid";
import Cassidy from "@/public/board/cassidy.webp";
import Card from "@/components/board/Card";

const ExecutiveBoardPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start">
      <BoardGrid />
      <Card
        image={Cassidy}
        role="President"
        name="Cassidy Yin"
        linkedin="https://www.linkedin.com/in/cassidy-yin-91ab67217"
      />
    </div>
  );
};
export default ExecutiveBoardPage;
