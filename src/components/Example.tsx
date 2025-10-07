const ExampleComponent = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-8">
      <h1 className="pd-4 text-4xl text-red-600">EXAMPLE COMPONENT</h1>
      <div className="mt-6 flex h-58 w-128 border-2">
        <p className="flex-1 bg-orange-300" />
        <p className="flex-1 bg-blue-300" />
      </div>
      <div className="mt-4 ml-172 w-full text-left">
        <p className="flex text-lg font-bold italic">Example Component</p>
      </div>
    </div>
  );
};

export default ExampleComponent;
