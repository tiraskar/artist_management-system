import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CustomFormField from '../components/CustomFormField';
import { Button } from "../components/ui/button";
import { useNavigate } from 'react-router-dom';

const loginSchema = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required")
}).required();

const LoginForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched" // Trigger validation on touch
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full sm:max-w-[30rem] space-y-4 px-4 sm:px-10 py-10 rounded-2xl bg-white shadow-md border-t-2 border-slate-50"
    >
      <div className="text-4xl tracking-wider font-bold text-gray-800">Login</div>

      <CustomFormField
        {...register("email")}
        name="email"
        label="Email"
        type="email"
        errorMessage={errors?.email?.message}
      />
      <CustomFormField
        {...register("password")}
        name="password"
        label="Password"
        type="password"
        errorMessage={errors?.password?.message}
      />

      <div className="py-2">
        <a href="#" className="text-blue-500">Forget password?</a>
      </div>
      <Button type="submit" className="bg-blue-500 w-full text-[1rem] hover:bg-blue-600">Login</Button>

      <p className="text-blue-600 text-center">Are you new to the system?</p>
      <Button onClick={() => navigate('/signup')} type="button" className="bg-green-500 w-full text-[1rem] hover:bg-green-600">Create account</Button>
    </form>
  );
};

const Login = () => {
  return (
    <div id='auth' className='min-h-screen px-4 '>
      <div className='flex flex-col  md:mx-auto max-w-[1120px]'>
        <div className="text-2xl font-bold tracking-tight py-4">
          <h1 className='text-white'>Artist Management System</h1>
        </div>
        <div className='flex justify-center pt-10 sm:pt-20'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
