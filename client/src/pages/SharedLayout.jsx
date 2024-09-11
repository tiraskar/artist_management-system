import { Navbar, Sidebar } from "@/components";
import Logout from "@/components/Logout";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {

  const { accessToken, isLoggedIn } = useSelector(state => state.auth);
  if (!accessToken || !isLoggedIn) {
    return <Logout />;
  }

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
