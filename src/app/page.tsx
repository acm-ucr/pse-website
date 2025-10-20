import Navbar from "@/components/ui/navbar";
import JoinUsButton from "@/components/landing/JoinUsButton";
const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Navbar />
      <JoinUsButton
        link="https://docs.google.com/forms/d/e/1FAIpQLSco0HkuBMDgfyNt2JmmyuYf9OYI5aGxlGIkl4B9omNPD74zWw/viewform"
        text="JOIN US!"
        color="bg-pse-yellow-100"
      />
    </div>
  );
};

export default Home;
