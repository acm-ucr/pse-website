const Example = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="mb-12 text-7xl text-red-600">EXAMPLE COMPONENT</h1>

      <div className="space-y-12">
        <div className="flex border-4 border-black">
          <div className="h-[450px] w-[550px] bg-orange-300" />
          <div className="h-[450px] w-[550px] bg-blue-300" />
        </div>

        <h4 className="text-3xl font-extrabold text-black italic">
          Example Component
        </h4>
      </div>
    </div>
  );
};

export default Example;
