import React from "react";
import Header from "./Header";
import Pots from "./Pots";
import Budget from "./Budget";
type Props = {
  isMinimized?: boolean;
};

const Section: React.FC<Props> = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-16 px-14 rounded-e-2xl ml-1">
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-black font-bold text-2xl m-4">Overview</h1>
      </div>
      <div className="">
        <Header />
      </div>
      <div className="flex flex-row justify-center items-center mt-6 px-20 py-4 w-full">
        <Pots />
        <Budget />
      </div>
    </div>
  );
};

export default Section;
