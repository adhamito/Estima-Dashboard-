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
      className={`bg-[#201f24] py-28 px-4 h-full  rounded-e-2xl transition-all duration-300 ${
        isMinimized ? "w-20" : "w-64"
      }`}
    >
      <div>
        <h1
          className={`text-white font-bold text-2xl ml-6 ${
            isMinimized ? "hidden" : "block"
          }`}
        >
          Estima
        </h1>
      </div>
      <ul
        className={`mt-12 w-full items-start ${
          isMinimized ? "text-center" : ""
        }`}
      >
        {Constants.map((item, index) => (
          <Item key={index} item={item} isMinimized={isMinimized} />
        ))}
      </ul>
      <footer
        className=" flex items-center justify-center text-[#717075] cursor-pointer mt-96"
        onClick={toggleSidebar}
      >
        <TbArrowBigLeftLines
          size={30}
          className={`transition-transform duration-300 ${
            isMinimized ? "rotate-180" : ""
          }`}
        />
        {!isMinimized && <span className="ml-2">minimize menu</span>}
      </footer>
    </aside>
  );
};

export default SideBar;
