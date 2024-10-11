import { GrTransaction } from "react-icons/gr";
import { MdPieChart } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BiIdCard } from "react-icons/bi";
import { SideNavItem } from "../../types/Types";
import { IoMdHome } from "react-icons/io";

export const Constants: SideNavItem[] = [
  {
    title: "overview",
    path: "/",
    icon: <IoMdHome size={25} />,
  },
  {
    title: "Transaction",
    path: "/Transaction",
    icon: <GrTransaction size={25} className="rotate-90" />,
  },
  {
    title: "Budgets",
    path: "/Budgets",
    icon: <MdPieChart size={25} />,
  },
  {
    title: "Pots",
    path: "/Pots",
    icon: <RiMoneyDollarBoxLine size={25} />,
  },
  {
    title: "Recurrings biils",
    path: "/biils",
    icon: <BiIdCard size={25} />,
  },
];
