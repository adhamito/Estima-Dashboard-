import React from "react";
type Props = {
    isMinimized: boolean;
    };

const Section:React.FC<Props> = ({ isMinimized }) => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-16 px-14 rounded-e-2xl ml-1">
      <div>
        <h1 className="text-black font-bold text-2xl">Dashboard</h1>
      </div>
    </div>
  );
};

export default Section;
