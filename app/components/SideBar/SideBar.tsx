import React from "react";
import { Constants } from "./Constants";
import Item from "./Item";
import { TbArrowBigLeftLines } from "react-icons/tb";

interface SideBarProps {
  isMinimized: boolean;
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>;
}



const SideBar: React.FC<SideBarProps> = ({ isMinimized, setIsMinimized }) => {
  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <aside
      className={`bg-[#201f24] min-h-screen py-16 px-4 rounded-e-2xl transition-all duration-300 ${
        isMinimized ? "w-20" : "w-full"
      }`}
    >
      <div>
        <h1
          className={`text-white font-bold text-2xl ml-16 ${
            isMinimized ? "hidden" : "block"
          }`}
        >
          Estima
        </h1>
      </div>
      <ul className={`mt-12 w-full items-start ml-3 ${isMinimized ? "text-center" : ""}`}>
        {Constants.map((item, index) => (
          <Item key={index} item={item} isMinimized={isMinimized} />
        ))}
        <p
          className="mt-28 flex items-center text-[#717075] cursor-pointer"
          onClick={toggleSidebar}
        >
          <TbArrowBigLeftLines
            size={30}
            className={`mr-4 ${isMinimized ? "rotate-180" : ""}`}
          />
          {!isMinimized && "minimize menu"}
        </p>
      </ul>
    </aside>
  );
};

export default SideBar;
