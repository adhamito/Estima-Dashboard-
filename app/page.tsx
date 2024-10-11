"use client";

import Section from "./components/Section/Section";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";

export default function Home() {
  // Move the useState inside the Home component
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="h-full w-full">
      <div
        className="flex sm-container md-container flex-col
       md:flex-row sm:flex-col justify-between items-start w-full"
      >
        <div className={`w-${isMinimized ? "20" : "1/4"} h-full`}>
          <SideBar isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
        </div>
        <div className={`w-${isMinimized ? "full" : "full"}`}>
          <Section isMinimized={isMinimized} />
        </div>
      </div>
    </div>
  );
}
