import React from "react";
import Link from "next/link";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const potsData = [
  { title: "Savings", amount: 250, color: "#37746d" },
  { title: "Gift", amount: 200, color: "#8ec3d1" },
  { title: "Concert Ticket", amount: 150, color: "#64636b" },
  { title: "New Laptop", amount: 250, color: "#e9ceb3" },
];

const Pots = () => {
  const totalSaved = potsData.reduce((total, pot) => total + pot.amount, 0);

  return (
    <div className="bg-[#ffffff] shadow-md rounded-lg w-full ">
      <div className="flex justify-between items-center m-4">
        <h2 className="text-lg font-bold text-[#4c4c4c]">Pots</h2>
        <Link href="/*" className="text-[#8d8d8d]">
          See Details &gt;
        </Link>
      </div>
      <div className="flex justify-between items-center mx-auto px-6 py-6">
        <div className="flex justify-between items-center  rounded-lg p-4 mb-4">
          <div className="flex items-center bg-[#f8f5f0] w-72 h-36 rounded-2xl">
            <RiMoneyDollarBoxLine
              size={40}
              className="mr-3 text-[#2d7e79] m-3"
            />
            <div>
              <h3 className="text-sm font-semibold text-[#ada9a6]">
                Total Saved
              </h3>
              <p className="text-2xl font-bold text-black">${totalSaved}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {potsData.map((pot, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 rounded-lg bg-white border-l-4"
              style={{ borderColor: pot.color }}
            >
              <div className="flex flex-col">
                <h2 className="text-sm font-semibold">{pot.title}</h2>
                <p className="text-lg">${pot.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pots;
