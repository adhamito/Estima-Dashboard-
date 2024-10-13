// pages/bills.js
import React from "react";

const billData = [
  { title: "Paid Bills", amount: 190.0, color: "#0f766e" },
  { title: "Total Upcoming", amount: 194.98, color: "#f59e0b" },
  { title: "Due Soon", amount: 59.98, color: "#3b82f6" },
];

const Bills = () => {
  return (
    <div className="flex flex-col gap-4 items-start m-6 bg-[#ffffff] p-6 rounded-lg shadow-md w-full">
      <div className="flex justify-between w-full mb-4">
        <h2 className="text-lg font-bold text-gray-800">Recurring Bills</h2>
        <a href="/" className="text-sm text-gray-500 hover:text-gray-700">
          See Details &gt;
        </a>
      </div>
      <div className="w-full bg-white ">
        {billData.map((bill, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 m-2 bg-[#f8f5f0] rounded-lg"
            style={{ borderLeft: `4px solid ${bill.color}` }}
          >
            <p className="text-gray-600">{bill.title}</p>
            <p className="font-semibold text-gray-800">
              ${bill.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bills;
