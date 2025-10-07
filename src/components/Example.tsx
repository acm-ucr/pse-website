const Example = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-5">
      <div className="text-5xl text-red-600">EXAMPLE COMPONENT</div>

      <div className="flex h-80 w-1/2 border-2 border-black">
        <div className="w-1/2 bg-orange-300" />
        <div className="w-1/2 bg-blue-300" />
      </div>

      <div className="w-1/2 text-left font-bold italic">Example Component</div>
    </div>
  );
};

export default Example;
