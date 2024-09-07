import { Search } from "lucide-react";
import { Button } from "../ui/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const artistSchema = yup.object({
  artistName: yup.string().required(),
}).required();


const SearchArtistForm = () => {

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(artistSchema),
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
        {...register("artistName")}
        type="text"
        className="min-w-[300px] py-1.5 outline-none border-[1px] border-slate-200  rounded-md px-2 text-sm "
      />
      <Button type="submit"
        className="bg-slate-500  h-8 w-10 p-2 text-xs hover:bg-blue-600">
        <Search size={20} />
      </Button>
    </form>
  );
};

export default SearchArtistForm;