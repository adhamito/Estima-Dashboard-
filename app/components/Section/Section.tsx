import React from "react";
import Header from "./Header";
type Props = {
  isMinimized?: boolean;
};

const Section: React.FC<Props> = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-16 px-14 rounded-e-2xl ml-1">
      <div>
        <h1 className="text-black font-bold text-2xl m-4">Overview</h1>
      </div>
      <div className="m-4">
        <Header />
      </div>
    </div>
  );
};

export default Section;
