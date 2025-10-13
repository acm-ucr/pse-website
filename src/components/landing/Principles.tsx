const principles = [
    "Competition",
    "Sincerity",
    "Belief",
    "Character",
    "Ethics",
    "Confidence",
    "Faith",
    "Knowledge",
    "Work",
    "Skill",
    "Wisdom",
    "Honor"
];

const Principles = () => {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen px-20 py-10">
      <img src="/home/Our Principles.svg" 
      alt ="Our Principles" 
      className = "w-72"/>  
    
    <div className = "grid grid-cols-3 -space-y-12">
    {principles.map((name) => (
        <div 
        key={name} 
        className="relative w-72 h-36 flex items-center justify-center">

        <img src= "/home/Rectangle.svg"  
        alt="Rectangle Background" 
        className="absolute inset-0 w-full h-full"/>

        <img src={`/home/${name}.svg`}
        alt={name}
        className="scale-75 object-contain block "
        />

    </div>
    ))}
    </div>
    </div>
  );
};

export default Principles;
