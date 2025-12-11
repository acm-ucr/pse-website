import React from "react";

interface HeadingProps {
  title: string;
  className?: string;
}

const Heading = ({ title, className = "" }: HeadingProps) => {
  return (
    <div className={className}>
      <p className="font-pse-crimson-text text-pse-purple-400 text-5xl md:text-6xl lg:text-7xl">
        {title}
      </p>
    </div>
  );
};

export default Heading;
