const Example = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-7xl text-red-600">EXAMPLE COMPONENT</h1>

      <div className="items-left flex flex-col gap-8">
        <div className="flex border-4 border-black">
          <div className="h-[500px] w-[550px] bg-orange-300" />
          <div className="h-[500px] w-[550px] bg-blue-300" />
        </div>

        <h4 className="text-2xl font-extrabold text-black italic">
          Example Component
        </h4>
      </div>
    </div>
  );
};

export default Example;
