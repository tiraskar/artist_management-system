import { Navbar, Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="relative ">
      <Navbar />
      <div className="flex flex-row pt-10 py-2">
        <Sidebar />
        <div className="flex-1 lg:ml-48 h-full rounded-lg bg-white p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
