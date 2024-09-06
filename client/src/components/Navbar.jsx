import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 w-full h-12 flex justify-between items-center bg-white border-b-[1px] border-black border-opacity-10 z-40 px-4">

      <Link href="/" className="text-xl font-bold">Dashboard</Link>
      <p className="text-lg tracking-tight font-semibold">Artist Management System</p>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-2 border-[1px] rounded-md px-4 py-1" >
          <span>Tribikram Sen</span>
          <UserCircle size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Change password</DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/login')} className="cursor-pointer">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
