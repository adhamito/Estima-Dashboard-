"use client";

import Section from "./components/Section/Section";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";

export default function Home() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="h-full w-full flex">
      <div
        className={`transition-all duration-300 ${
          isMinimized ? "w-20" : "w-64"
        }`}
      >
        <SideBar isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
      </div>

      <div className="flex-1">
        <Section isMinimized={isMinimized} />
      </div>
    </div>
  );
}
