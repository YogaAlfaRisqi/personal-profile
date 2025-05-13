import Home from "@/pages/home";
import SidebarLayout from "./sidebarLayout";

export default function mainLayout() {
  return (
     <>
       <div>
        <SidebarLayout/>
        <Home/>
       </div>
     </>
  );
}