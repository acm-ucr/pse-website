const ExampleComponent = () => {
  return (
    <div className="flex h-screen w-screen flex-col justify-center p-8">
      <h1 className="pd-4 mx-auto text-5xl text-red-600">EXAMPLE COMPONENT</h1>
      <div className="mx-auto mt-8 flex h-75 w-full max-w-179 border-2">
        <p className="flex-1 bg-orange-300" />
        <p className="flex-1 bg-blue-300" />
      </div>
      <div className="mx-auto mt-7 flex w-full max-w-178 text-left">
        <p className="flex text-lg font-extrabold text-black italic">
          Example Component
        </p>
      </div>
    </div>
  );
};

export default ExampleComponent;
