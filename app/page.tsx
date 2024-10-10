import Section from "./components/Section";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="h-full w-full ">

        <div className="flex sm-container md-container  flex-col md:flex-row sm:flex-col  justify-between items-start w-full">
          <div className="w-1/4 h-full">
            <SideBar/>
          </div>
          <div className="w-3/4 ">
            <Section/>
          </div>
        </div>
   
    </div>
  );
}
