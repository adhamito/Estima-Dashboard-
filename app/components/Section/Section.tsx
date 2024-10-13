import React from "react";
import Header from "./Header";
import Pots from "./Pots";
import Budget from "./Budget";
import TransactionsTabs from "./Tabs";
import Biils from "./Bills";
type Props = {
  isMinimized?: boolean;
};

const Section: React.FC<Props> = () => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen py-2 px-10 rounded-e-2xl ml-1">
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-2 gap-0 items-start w-full">
        <div>
          <Pots />
          <TransactionsTabs />
        </div>
        <div>
          <Budget />
          <Biils />
        </div>
      </div>
    </div>
  );
};

export default Section;
