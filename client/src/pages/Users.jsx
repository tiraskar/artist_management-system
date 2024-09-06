import { CreateUserForm, UserList } from "@/components";
import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Users = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold ">
          {/* Users - 10 */}
          Create User
        </h1>
        {/* <SearchUser /> */}
        <Button>
          {/* Create user */}
          View all users
        </Button>
      </div>
      {/* <UserList /> */}
      <CreateUserForm />
    </div>
  );
};

export default Users;

const loginSchema = yup.object({
  fullName: yup.string().required(),
}).required();

const SearchUser = () => {

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex items-center space-x-2"
    >
      <input
        {...register("fullName")}
        type="text"
        className="default-input"
      />
      <Button type="submit"
        className="bg-blue-500  h-9 w-9 p-1 text-xs hover:bg-blue-600">
        <Search size={20} />
      </Button>
    </form>
  );
};