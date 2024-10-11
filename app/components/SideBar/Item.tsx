"use client";
import React from "react";
import { SideNavItem } from "../../types/Types";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarItemProps {
  item: SideNavItem;
  isMinimized: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, isMinimized }) => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <div className="flex flex-row items-center justify-start w-full">
      <div
        className={`flex items-center min-h-[40px] text-[#717075] w-full 
            rounded-e-2xl hover:text-slate-200 mb-5 
             ${
               isActive
                 ? "bg-slate-100  text-[#464241] border border-l-4 border-[#2d7e79]  "
                 : ""
             }`}
      >
        <div className="flex flex-row items-center">
          <div className={`${isActive ? "text-[#2d7e79]" : ""}`}>
            {item.icon}
          </div>

          {!isMinimized && <div className="ml-3">{item.title}</div>}
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
