import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import CustomFormField from '../components/CustomFormField';


const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()

}).required();


const LoginForm = () => {

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const handleSubmitForm = () => {
    console.log('form submitted');

  };

  return (
    <form action="" onSubmit={handleSubmit(handleSubmitForm)}
      className="min-w-[30rem] space-y-4 border-2 px-10 py-10 rounded-2xl bg-slate-900 bg-opacity-20 "
    >

      <div className="text-4xl tracking-wider font-bold text-white ">Login</div>

      <CustomFormField
        label="Email"
        labelColor='white'
        type="email"
        control={register("password")}
        className=""
      />
      <CustomFormField
        label="Password"
        labelColor='white'
        type="password"
        control={register("password")}
        className=""
      />
      <div className="py-2">
        <a href="" className="text-blue-500">Forget password?</a>
      </div>
      <Button type="submit" className="bg-blue-500 w-full text-[1rem] hover:bg-blue-600">Login</Button>

      <p className="text-white text-center">Are you new to system?</p>
      <Button type="button" className="bg-green-500 w-full text-[1rem] hover:bg-green-600">Create account</Button>

    </form>
  );
};




const Login = () => {
  return (
    <div id="auth" className='flex flex-col gap-32 justify-center items-center min-h-screen'>
      <div className="absolute top-6 left-20 font-medium text-white text-xl tracking-tight">Artist Management System</div>
      <LoginForm />
    </div>
  );
};

export default Login;

