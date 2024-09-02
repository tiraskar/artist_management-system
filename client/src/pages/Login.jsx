import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import CustomFormField from '../components/CustomFormField';
import { useNavigate } from 'react-router-dom';


const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()

}).required();


const LoginForm = () => {

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const handleSubmitForm = () => {
    console.log('form submitted');

  };

  return (
    <form action="" onSubmit={handleSubmit(handleSubmitForm)}
      className="min-w-full sm:min-w-[30rem] space-y-4  px-4 sm:px-10 py-10 rounded-2xl bg-white shadow-md border-t-2 border-slate-50"
    >

      <div className="text-4xl tracking-wider font-bold text-gray-800 ">Login</div>

      <CustomFormField
        name='email'
        label="Email"
        labelColor='black'
        type="email"
        control={register("password")}
        className=""
      />
      <CustomFormField
        name='password'
        label="Password"
        labelColor='black'
        type="password"
        control={register("password")}
        className=""
      />
      <div className="py-2">
        <a href="" className="text-blue-500">Forget password?</a>
      </div>
      <Button type="submit" className="bg-blue-500 w-full text-[1rem] hover:bg-blue-600">Login</Button>

      <p className="text-blue-600 text-center">Are you new to system?</p>
      <Button onClick={() => navigate('/signup')} type="button" className="bg-green-500 w-full text-[1rem] hover:bg-green-600">Create account</Button>

    </form>
  );
};


const Login = () => {
  return (
    <div id='auth' className='h-screen px-4'>
      <div className='flex flex-col max-w-[1120px] mx-auto '>
        <div className="text-2xl font-bold tracking-tight py-4">
          <h1 className='text-white'>Artist Management System</h1>
        </div>
        <div className='flex  justify-center items-center pt-10 md:pt-16 lg:pt-20 xl:pt-24'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;

