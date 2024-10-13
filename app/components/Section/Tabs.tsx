import React from "react";
import Image from "next/image";
import { Tabs as UITabs, TabsList, TabsContent } from "../ui/tabs";

const TransactionsTabs = () => {
  const transactions = [
    {
      name: "Emma Richardson",
      imageUrl: "https://via.placeholder.com/40",
      amount: "+$75.50",
      date: "19 Aug 2024",
      type: "credit",
    },
    {
      name: "Savory Bites Bistro",
      imageUrl: "https://via.placeholder.com/40",
      amount: "-$55.50",
      date: "19 Aug 2024",
      type: "debit",
    },
    {
      name: "Daniel Carter",
      imageUrl: "https://via.placeholder.com/40",
      amount: "-$42.30",
      date: "18 Aug 2024",
      type: "debit",
    },
    {
      name: "Sun Park",
      imageUrl: "https://via.placeholder.com/40",
      amount: "+$120.00",
      date: "17 Aug 2024",
      type: "credit",
    },
    {
      name: "Urban Services Hub",
      imageUrl: "https://via.placeholder.com/40",
      amount: "-$65.00",
      date: "17 Aug 2024",
      type: "debit",
    },
  ];

  return (
    <UITabs defaultValue="transactions" className="space-y-4">
      <TabsList className="flex"></TabsList>
      <TabsContent value="transactions">
        <div className="flex flex-col space-y-4 bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h1>Transactions</h1>
            <p>
              <a
                href="/"
                className="text-gray-500 hover:text-gray-700 transition duration-300 text-lg font-medium"
              >
                View all &gt;
              </a>
            </p>
          </div>
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <Image
                  className="w-10 h-10 rounded-full"
                  src={transaction.imageUrl}
                  alt={transaction.name}
                />
                <div>
                  <p className="text-gray-900 font-semibold">
                    {transaction.name}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p
                  className={`${
                    transaction.type === "credit"
                      ? "text-green-500"
                      : "text-red-500"
                  } font-semibold`}
                >
                  {transaction.amount}
                </p>
                <p className="text-gray-500 text-sm">{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </UITabs>
  );
};

export default TransactionsTabs;
