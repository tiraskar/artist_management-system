import LoginForm from "@/components/form/LoginForm";


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
