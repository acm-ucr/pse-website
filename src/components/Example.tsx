const Example = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <p className="mb-5 text-4xl text-red-500">Example Component</p>
      <div className="flex outline-3">
        <div className="h-64 w-64 bg-orange-300"></div>
        <div className="h-64 w-64 bg-blue-300"></div>
      </div>
      <p className="mt-4 font-bold italic">Example Component</p>
    </div>
  );
};

export default Example;
