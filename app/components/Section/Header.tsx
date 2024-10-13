import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Header = () => {
  return (
    <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3 rounded-full mb-4 ">
      <Card className="hover:bg-black hover:text-white m-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">$4,836.00</div>
        </CardContent>
      </Card>
      <Card className="hover:bg-black hover:text-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Incoma</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">$3,814.25</div>
        </CardContent>
      </Card>
      <Card className="hover:bg-black hover:text-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">$1,700.50</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Header;
