import PSEBanner from "@/components/landing/PSEBanner";
import Principles from "@/components/landing/Principles";
import OurMission from "@/components/landing/OurMission";

const Home = () => {
  return (
    <div className="h-screen w-screen flex-col">
      <PSEBanner />
      <div className="m-8">
        <OurMission />
      </div>
      <Principles />
    </div>
  );
};

export default Home;
