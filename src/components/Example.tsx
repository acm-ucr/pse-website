const ExampleComponent = () => {
  return (
    <div className="flex h-screen w-screen flex-col justify-center p-8">
      <h1 className="pd-4 mx-auto text-4xl text-red-600">EXAMPLE COMPONENT</h1>
      <div className="mx-auto mt-6 flex h-58 w-full max-w-lg border-2">
        <p className="flex-1 bg-orange-300" />
        <p className="flex-1 bg-blue-300" />
      </div>
      <div className="mx-auto mt-4 flex w-full max-w-lg text-left">
        <p className="flex text-lg font-bold italic">Example Component</p>
      </div>
    </div>
  );
};

export default ExampleComponent;
