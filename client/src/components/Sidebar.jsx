import { FaHome, FaNewspaper, FaMusic } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="md:fixed top-[2.95rem] left-0 lg:w-48 h-screen bg-white border-r-[1px] border-black border-opacity-10 z-50 px-2">
      <nav className="flex flex-col mt-3 space-y-2">
        {navLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            to={href}
            className={`flex items-center px-4 py-2 font-medium text-sm rounded-md ${pathname === href || pathname.startsWith(`${href}/`) ? 'bg-slate-200 text-black' : 'hover:bg-slate-200'
              }`}
          >
            <Icon className="mr-3 size-4" />
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;


const navLinks = [
  { href: "/", icon: FaHome, label: "Dashboard" },
  { href: "/artist", icon: FaNewspaper, label: "Artist" },
  { href: "/music", icon: FaMusic, label: "Music" },
  { href: "/users", icon: FaUserGroup, label: "Users" },
];