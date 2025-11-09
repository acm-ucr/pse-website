import Card from "@/components/board/Card";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {/*<JoinUsButton
        link="https://docs.google.com/forms/d/e/1FAIpQLSco0HkuBMDgfyNt2JmmyuYf9OYI5aGxlGIkl4B9omNPD74zWw/viewform"
        text="JOIN US!"
        color="bg-pse-yellow-100"
      />*/}
      <Card
        image="@/public/aboutus/linkedin.webp"
        role="President"
        name="Cassidy Yin"
        linkedin="https://www.linkedin.com/in/gurjotsingh0307/"
      />
    </div>
  );
};

export default Home;
