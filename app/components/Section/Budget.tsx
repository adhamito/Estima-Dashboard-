"use client";

import * as React from "react";
import Link from "next/link";
import { Label, Pie, PieChart, Cell } from "recharts";
import { Card, CardContent } from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

export const description = "A donut chart with text";

// Data for the chart
const chartData = [
  { category: "Entertainment", amount: 50, fill: "#6a9b98" },
  { category: "Dining Out", amount: 75, fill: "#f0ddcc" },
  { category: "Personal Care", amount: 100, fill: "#625f70" },
  { category: "Bills", amount: 750, fill: "#8fc3d0" },
];

// Configuration for the chart
const chartConfig = {
  amount: {
    label: "Amount",
  },
  entertainment: {
    label: "Entertainment",
    color: "#6a9b98",
  },
  bills: {
    label: "Bills",
    color: "hsl(var(--chart-1))",
  },
  diningOut: {
    label: "Dining Out",
    color: "hsl(var(--chart-2))",
  },
  personalCare: {
    label: "Personal Care",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const Budget = () => {
  const totalAmount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-start m-6 bg-[#ffffff] p-6  w-full">
      <Card className="w-full max-w-md mx-auto">
        <div className="flex justify-between items-center m-4">
          <h2 className="text-xl font-bold text-gray-800">Budget </h2>
          <Link href="/*" className="text-sm text-gray-500 hover:text-gray-700">
            See Details &gt;
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
          <div className="w-full md:w-full">
            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square "
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="amount"
                    nameKey="category"
                    innerRadius={80}
                    outerRadius={110}
                    strokeWidth={5}
                    stroke="#ffffff"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}

                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                              fill="currentColor"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="text-gray-800 text-3xl font-bold"
                              >
                                {totalAmount.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="text-gray-500 text-base"
                              >
                                Total Amount
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </div>

          <div className="w-full md:w-1/4 mb-4 mr-1 py-14">
            <div className="flex flex-col gap-4">
              {chartData.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg border-l-4"
                  style={{ borderColor: data.fill }}
                >
                  <div className="flex flex-col">
                    <h2 className="text-xs font-semibold text-gray-700">
                      {data.category}
                    </h2>
                    <p className="text-base font-bold text-gray-800">
                      ${data.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Budget;
